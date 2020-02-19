import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    paddingTop: '56.25%', // 16:9
  },
  content: {
    flexGrow: 1,
  },
}));
