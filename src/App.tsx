import { useState } from "react";
import './App.css';

type IRunLevels = "init" | "dragon" | "veryWell" | "no";

type IStateModule = {
  dialog: (count: number) => string;
  background: (count: number) => string;
  characters: (count: number) => string;
  dialogColor:  string[];
  maxCount: number;
  forward: IRunLevels;
}

type IState = {
  [key in IRunLevels]: IStateModule
}

type IMoods = "default" | "fun" | "sad" | "moody" | "happy";
type ICharacters = "pooz" | "mallen" | "joey" | "kairi" | "scott" | "dejinald";

type CharacterTypes = {
  [key in ICharacters]: { [key in IMoods]: string };
}

type BackgroundTypes = {
  [key in IMoods]: string;
}

enum colors {
  skyTeal = "rgba(0,177,188)",
  skyPink = "rgba(255,177,188)",
  purple = "rgba(139,0,247)",
  lightPurple = "rgba(183,183,247)",
  lightPink = "rgba(255,160,188)",
  superPink = "rgba(255,0,188)",
  superBanana = "rgba(255,255,188)",
  superTeal = "rgba(0,255,188)",
  black = "rgba(0,0,0)",
};

const Backgrounds: BackgroundTypes = {
  "default": `radial-gradient(${colors.skyTeal},${colors.superPink},${colors.black})`,
  "fun": `linear-gradient(${colors.skyTeal},${colors.skyTeal},${colors.skyPink})`,
  "sad": `linear-gradient(${colors.skyTeal},${colors.purple},${colors.skyPink})`,
  "moody": `radial-gradient(${colors.skyTeal},${colors.skyPink},${colors.superPink})`,
  "happy": `linear-gradient(${colors.skyTeal},${colors.skyPink},${colors.skyPink})`,
}

const Characters: CharacterTypes = {
  "pooz": {
    default: "images/pooz.png",
    happy: "images/pooz.png",
    moody: "images/pooz.png",
    sad: "images/pooz.png",
    fun: "images/pooz.png",
  },
  "joey": {
    default: "images/joey.png",
    happy: "images/pooz.png",
    moody: "images/pooz.png",
    sad: "images/pooz.png",
    fun: "images/pooz.png",
  },
  "dejinald": {
    default: "images/dejinald.png",
    happy: "images/pooz.png",
    moody: "images/pooz.png",
    sad: "images/pooz.png",
    fun: "images/pooz.png",
  },
  "mallen": {
    default: "images/mallen.png",
    happy: "images/mallen_happy.png",
    moody: "images/pooz.png",
    sad: "images/pooz.png",
    fun: "images/pooz.png",
  },
  "kairi": {
    default: "images/kairi.png",
    happy: "images/pooz.png",
    moody: "images/pooz.png",
    sad: "images/pooz.png",
    fun: "images/pooz.png",
  },
  "scott": {
    default: "images/scott.png",
    happy: "images/pooz.png",
    moody: "images/pooz.png",
    sad: "images/pooz.png",
    fun: "images/pooz.png",
  },
} 

const initState: IStateModule = { // Backgrounds.fun
  background: (count) => { if(count === 2){
      return Backgrounds.happy
    } else {
      return Backgrounds.fun
    }
  },
  dialog: (count) => { return [
    "Hey there, I didn't see you come in.",
    "I should put my dick away.",
    "My name is Pooz, and I need your assistance"][count]},
  dialogColor: [colors.lightPurple],
  characters: (_) => {
    return Characters.pooz.default;
  },
  maxCount: 2,
  forward: "dragon",
} 

const dragonState: IStateModule = {
  background: (_) => Backgrounds.sad,
  dialog: (count) => ([
    "Please don't make me assist.",
    "I'm just trying to finish Scott's game, please."][count]),
  dialogColor: [colors.lightPurple],
  characters: (_) => {
    return Characters.mallen.default;
  },
  maxCount: 1,
  forward: "veryWell"
} 

const veryWellState: IStateModule = { // Backgrounds.fun
  background: (count) => { if(count === 1 || count === 2){
      return Backgrounds.happy
    } else {
      return Backgrounds.fun
    }
  },
  dialog: (count) => { return [
    "Very well.",
    "I have a much better plan for you.",
    "Repeat after me:",
    "Dejuiui."][count]},
  dialogColor: [colors.lightPurple],
  characters: (_) => {
    return Characters.pooz.default;
  },
  maxCount: 3,
  forward: "no",
}

const noState: IStateModule = { // Backgrounds.fun
  background: (count) => { if(count === 2){
      return Backgrounds.moody
    } else if (count === 1) {
      return Backgrounds.default;
    } else  {
      return Backgrounds.sad
    }
  },
  dialog: (count) => { return [
    "NOOOO.",
    "NOOOOOOOOOOOO....",
    "NOOOOOOOOOOOOOOOOOOOOO!!!",
    "Dejuiui."][count]},
  dialogColor: [colors.lightPurple],
  characters: (count) => {
    if(count === 3){
      return Characters.mallen.happy;
    } else {
      return Characters.mallen.default;
    }
  },
  maxCount: 3,
  forward: "init",
} 

const state: IState = {
  "init": initState,
  "dragon": dragonState,
  "veryWell": veryWellState,
  "no": noState
}

// const state = (StateModule: IStateModule, index: string, prevState: IState, setRunlevel: React.Dispatch<React.SetStateAction<IRunLevels>>) => {

//   return {...prevState, [index]: StateModule}
// }

type ScreenProps = {
  count: number;
  runLevel: IRunLevels;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setRunLevel: React.Dispatch<React.SetStateAction<IRunLevels>>;
}

const Screen = ({runLevel, setRunLevel, count, setCount}: ScreenProps) => {

  const _state = state[runLevel];
  const { dialogColor, maxCount, forward } = _state;
  let _dialog = _state.dialog(count);
  let _character = _state.characters(count);

  const handleClick = () => {
    setCount(c => c + 1);
    if(count===maxCount){
      setCount(0);
      setRunLevel(forward);
    }
  }

  return (
    <div className="viewport" onClick={handleClick} >
      <img className="avatar" src={_character} alt="char" />
      <div className="dialog" style={{color: `${dialogColor}`}}>{_dialog || null}</div>
    </div>
  )
}

function App() {
  
  const [runLevel, setRunLevel] = useState<IRunLevels>("init");
  const [count, setCount] = useState<number>(0);
  const _state = state[runLevel];

  const _background = _state.background(count);

  return (
    <div className="background" style={{flex: 1, backgroundImage: `${_background}`}}>
      <Screen runLevel={runLevel} setRunLevel={setRunLevel} count={count} setCount={setCount} />
    </div>
  );
}

export default App;
