import React from 'react';

import {
  IconButton,
  Typography,
} from '@material-ui/core';

import MuiDialogTitle from '@material-ui/core/DialogTitle';

import CloseIcon from '@material-ui/icons/Close';

import { TitleStyles } from './styles';

export default function ViewTitle(props) {
  const { title, onClose, ...other } = props;
  const styles = TitleStyles();

  return (
    <MuiDialogTitle
      disableTypography
      className={styles.root}
      {...other}
    >
      <Typography variant="h6">{title}</Typography>
      {
        onClose ? (
          <IconButton
            aria-label="close"
            className={styles.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null
      }
    </MuiDialogTitle>
  );
}
