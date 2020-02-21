import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  grid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  movieDescription: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },
}));