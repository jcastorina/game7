import { FC } from "react";
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  dialog: string;
  color: string[];
}
const Dialog: FC<Props> = ({dialog, color}) => {
  const styles = useStyles();
  return <div className={styles.dialog} style={{color: `${color}`}}>{dialog || null}</div>
}

const useStyles = makeStyles({
  dialog: {
    fontSize: 'x-large',
    padding: '32px',
  }
});

export default Dialog;