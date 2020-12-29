import { FC, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Button from '../components/Button';

type Choice = {
  text: string;
  action: () => void;
}

type Props = {
  avatar?: string;
  text: string[];
  color: string[];
  onDone?: () => void;
  choices?: Choice[]
}
const Dialog: FC<Props> = ({text, avatar, color, onDone, choices }) => {
  const styles = useStyles();
  const [count, setCount] = useState(0);
  const isLast = count === text.length - 1;

  const handleClick = () => {
    if (isLast && onDone) {
      setCount(0);
      onDone();
    } else if (!isLast) {
      setCount((x) => x + 1);
    }
  }

  return (
    <div className={styles.viewport} onClick={handleClick} >
      {Boolean(avatar) && (<img className={styles.avatar} src={avatar} alt="char" />)}
      <div className={styles.text} style={{color: `${color}`}}>{text[count]}</div>
      {isLast && (
        <div className={styles.buttons}>{choices?.map(x => {
          return <Button key={x.text} className={styles.button} title={x.text} onClick={() => { setCount(0); x.action(); }} />
        })}
        </div>
      )}
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
  buttons: {
    display: 'flex',
    marginBottom: '32px',
  },
  button: {
    margin: 10,
  }
});

export default Dialog;