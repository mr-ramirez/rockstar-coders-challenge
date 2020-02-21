import React from 'react';
import { Dialog } from '@material-ui/core';

import ActionButtons from './actions.jsx';
import Content from './content.jsx';
import Title from './title.jsx';

export default function DetailsView(props) {
  const { title, children, onClose, open } = props;

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="detail-view"
      open={open}
    >
      <Title title={title} onClose={onClose} />

      <Content>
        {children}
      </Content>

      <ActionButtons onClose={onClose} />
    </Dialog>
  );
}
