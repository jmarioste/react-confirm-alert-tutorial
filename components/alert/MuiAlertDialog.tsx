import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { AlertComponentProps } from "./AlertProvider";
const MuiAlertDialog = (props: AlertComponentProps) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>No</Button>
        <Button onClick={props.onConfirm} autoFocus>
          {props.confirming ? "Loading..." : "Yes"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default MuiAlertDialog;
