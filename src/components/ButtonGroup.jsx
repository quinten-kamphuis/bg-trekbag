import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const handleMarkAllAsComplete = useItemsStore(
    (state) => state.handleMarkAllAsComplete
  );
  const handleMarkAllAsIncomplete = useItemsStore(
    (state) => state.handleMarkAllAsIncomplete
  );
  const handleResetToInitial = useItemsStore(
    (state) => state.handleResetToInitial
  );
  const handleRemoveAllItems = useItemsStore(
    (state) => state.handleRemoveAllItems
  );

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          key={button.text + button.onClick.toString()}
          buttonType="secondary"
          onClick={button.onClick}
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
}
