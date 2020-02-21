import React from 'react';

import MuiDialogContent from '@material-ui/core/DialogContent';

import { ContentStyles } from './styles';

export default function ViewContent(props) {
  const { children } = props;
  const styles = ContentStyles();

  return (
    <MuiDialogContent className={styles.root} dividers>
      {children}
    </MuiDialogContent>
  )
}
