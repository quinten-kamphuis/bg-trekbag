import { create } from "zustand";
import { initialItems } from "../components/lib/constants";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemText) => {
        const newItem = {
          id: crypto.randomUUID(),
          name: newItemText,
          packed: false,
        };
        set((state) => ({ items: [...state.items, newItem] }));
      },
      deleteItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      toggleItem: (id) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
          ),
        }));
      },
      handleRemoveAllItems: () => set({ items: [] }),
      handleResetToInitial: () => set({ items: initialItems }),
      handleMarkAllAsComplete: () => {
        set((state) => ({
          items: state.items.map((item) => ({ ...item, packed: true })),
        }));
      },
      handleMarkAllAsIncomplete: () => {
        set((state) => ({
          items: state.items.map((item) => ({ ...item, packed: false })),
        }));
      },

      get numberOfItemsPacked() {
        return this.items.filter((item) => item.packed).length;
      },
      get totalNumberOfItems() {
        return this.items.length;
      },
    }),
    {
      name: "items",
    }
  )
);
