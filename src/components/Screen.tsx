import { useState } from "react";
import { IState } from '../types';
import { useMachine } from '../hooks';
import Background from '../components/Background';
import Dialog from '../components/Dialog';

const Screen = <T extends string>({ state: state$ }: {
  state: IState<T>;
}) => {
  
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
      <Dialog onClick={handleClick} character={character$} dialog={dialog$} color={dialogColor} />
    </Background>
  )
}

export default Screen;