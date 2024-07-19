import { useItemsStore } from "../stores/itemsStore";

export default function Counter() {
  const numberOfItemsPacked = useItemsStore(
    (state) => state.numberOfItemsPacked
  );
  const totalNumberOfItems = useItemsStore((state) => state.totalNumberOfItems);

  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
