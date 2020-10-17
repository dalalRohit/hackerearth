import React from "react";
import Form from "./Form";
import Desc from "./Desc";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Slide,
} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal(props) {
  const { open, onclose, prod } = props;
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      onClose={onclose}
    >
      <div className="inner">
        <DialogTitle>Checkout Your {prod.name}</DialogTitle>

        <DialogContent>
          <Desc prod={prod} />
          <Form />
        </DialogContent>

        <DialogActions>
          <Button onClick={onclose} variant="contained" color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
