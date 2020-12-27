import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import { IState } from '../types';
import { useMachine } from '../hooks';
import Avatar from '../components/Avatar';
import Background from '../components/Background';
import Dialog from '../components/Dialog';

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
        <Avatar character={character$} />
        <Dialog dialog={dialog$} color={dialogColor} />
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
});

export default Screen;