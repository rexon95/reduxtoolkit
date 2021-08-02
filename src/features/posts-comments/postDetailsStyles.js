import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    color : {
        color : grey
    }
  });

  
 export const useStylesAccordian = makeStyles((theme) => ({
    root: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  }));