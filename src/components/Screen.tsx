import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import { IState } from '../types';
import { useMachine } from '../hooks';
import Background from '../components/Background';

const Screen = <T extends string>({ state: state$ }: {
  state: IState<T>;
}) => {

  const styles = useStyles();
  const [count, setCount] = useState<number>(0);
  const [state, setRunLevel] = useMachine(state$);
  
  const { dialogColor, maxCount, forward } = state;
  const background$ = state.background(count);
  let dialog$ = state.dialog(count);
  let character$ = state.characters(count);

  const handleClick = () => {
    setCount(c => c + 1);
    if(count === maxCount){
      setCount(0);
      setRunLevel(forward);
    }
  }

  return (
    <Background background={background$}>
      <div className={styles.viewport} onClick={handleClick} >
        <img className="avatar" src={character$} alt="char" />
        <div className="dialog" style={{color: `${dialogColor}`}}>{dialog$ || null}</div>
      </div>
    </Background>
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
  dialog: {
    fontSize: 'x-large',
    padding: '32px',
  }
});

export default Screen;