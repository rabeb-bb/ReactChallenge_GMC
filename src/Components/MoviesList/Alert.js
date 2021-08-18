import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
  
const DialogBox = ({name, handleClickOpen, handleClose, open}) => {
  return (
    <div>
      <Button variant="outlined" 
              color="primary" onClick={handleClickOpen}>
        Open My Custom Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
           {name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Watch is on Netflix now!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Close
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
           Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
  
export default DialogBox;