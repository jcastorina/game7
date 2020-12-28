import { useState } from "react";
import { useMachine } from '@xstate/react';
import Background from '../components/Background';
import Dialog from '../components/Dialog';

const Screen = ({ machine }: { machine: any }) => {
  
  const [count, setCount] = useState<number>(0);
  const [state, send] = useMachine(machine);
  const { meta } = state;
  
  const key = `${machine.id}.${state.value}`;
  const { dialogColor, maxCount, background, dialog, characters } = meta[key];

  const handleClick = () => {
    setCount(c => c + 1);
    if(count === maxCount){
      setCount(0);
      send({type: 'NEXT'});
    }
  }

  return (
    <Background background={background(count)}>
      <Dialog onClick={handleClick} character={characters(count)} dialog={dialog(count)} color={dialogColor} />
    </Background>
  )
}

export default Screen;