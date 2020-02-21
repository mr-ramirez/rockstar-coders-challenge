import { makeStyles } from '@material-ui/core/styles';

export const TitleStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export const ContentStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export const ActionButtonsStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}));
