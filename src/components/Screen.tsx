import { useMachine } from '@xstate/react';
import Background from '../components/Background';
// import {Dejuiui} from "../features/"

const Screen = ({ machine }: { machine: any }) => {
  
  const [state, send] = useMachine(machine);
  const { meta, context } = state;
  
  const key = `${machine.id}.${Object.keys(state.value)[0]}.${Object.values(state.value)[0]}`;

  console.log(context, state);
  if (!meta[key]) {
    return null;
  }
  const { dialog } = meta[key](send);
  return (
    
    // @ts-ignore
    <Background background={context.background}>
      {dialog}
    </Background>
  )
}

export default Screen;
