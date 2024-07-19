import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sortBy === "packed") {
        return a.packed === b.packed ? 0 : a.packed ? -1 : 1;
      }

      if (sortBy === "unpacked") {
        return a.packed === b.packed ? 0 : a.packed ? 1 : -1;
      }

      return 0;
    });
  }, [items, sortBy]);

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}

      {sortedItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  return (
    <li className="item">
      <label onChange={() => toggleItem(item.id)}>
        <input type="checkbox" checked={item.packed} />
        {item.name}
      </label>

      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
