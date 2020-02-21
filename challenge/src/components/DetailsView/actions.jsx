import React from 'react';
import { Button } from '@material-ui/core';
import MuiDialogActions from '@material-ui/core/DialogActions';

import { ActionButtonsStyles } from './styles';

export default function ActionButtons(props) {
  const { onClose } = props;

  return (
    <MuiDialogActions className={ActionButtonsStyles.root}>
      <Button autoFocus onClick={onClose} color="primary">
        Close
      </Button>
    </MuiDialogActions>
  )
}
