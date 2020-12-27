import { FC } from "react";
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  character: string;
  dialog: string;
  color: string[];
  onClick: () => void;
}
const Dialog: FC<Props> = ({dialog, character, color, onClick}) => {
  const styles = useStyles();
  return (
    <div className={styles.viewport} onClick={onClick} >
      <img className={styles.avatar} src={character} alt="char" />
      <div className={styles.text} style={{color: `${color}`}}>{dialog}</div>
    </div>
  )
}

const useStyles = makeStyles({
  viewport: {
    border: '1px solid silver',
    backgroundColor: 'rgba(0, 0, 0, 0.66)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80vw',
    overflow: 'hidden',
    // -moz-user-select: none;
    // -webkit-user-select: none;
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    }
  },
  avatar: {
    height: '40vh',
    // -moz-user-select: none;
    // -webkit-user-select: none;
  },
  text: {
    fontSize: 'x-large',
    padding: '32px',
  },
});

export default Dialog;