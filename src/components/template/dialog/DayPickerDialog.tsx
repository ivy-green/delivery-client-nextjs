import { Dialog, List } from "@mui/material";
import { DayPicker } from "react-day-picker";

interface SimpleDialogProps {
  open: boolean;
  selectedValue: Date;
  onClose: (value: Date | undefined) => void;
}

export function DayPickerDialog({
  onClose,
  selectedValue,
  open,
}: SimpleDialogProps) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: Date | undefined) => {
    onClose(value);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DayPicker
          mode="single"
          selected={selectedValue}
          onSelect={handleListItemClick}
        />
      </Dialog>
    </>
  );
}
