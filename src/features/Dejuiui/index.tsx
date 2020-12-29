import {useState, useEffect} from "react";
import Tileboard from "../../components/Tileboard"

const Dejuiui = () => {

  const tiles = ["images/dejuiui_tile.png"];
  const bunny = "images/bunny_ninja.png";

  const [matrix, setMatrix] = useState([
    [].length = 4,
    [].length = 4,
    [].length = 4,
    [].length = 4
  ]);
  const [pc, setPc] = useState({x:0,y:0})
  console.log(pc)

  const handleEvent = (e: any, setPc: React.Dispatch<React.SetStateAction<{x: number, y: number, last?: string}>>) => {
    const key = e.key;
    
    switch(key){
      case "w":
        if(pc.y > 0){
          const newPc = {...pc, y: pc.y - 1}
          return setPc(newPc)
        } else return;
        
      case "s":
        if(pc.y < 3){
          const newPc = {...pc, y: pc.y + 1}
          return setPc(newPc)
        } else return;
        
      case "a":
        if(pc.x > 0){
          const newPc = {...pc, x: pc.x - 1, last: "left"}
          return setPc(newPc)
        } else return;
      
      case "d":
        if(pc.x < 3){
          const newPc = {...pc, x: pc.x + 1, last: "right"}
          return setPc(newPc)
        } else return;

    }
    return setPc(pc)
  }
  useEffect(() => {
    const eventDecorator = (e: Event) => handleEvent(e, setPc);
    window.addEventListener("keydown", eventDecorator);

    return () => window.removeEventListener("keydown", eventDecorator)
  },[pc])

  return (
    <Tileboard matrix={matrix} tiles={tiles} player={bunny} coords={pc} />
  )
}

export default Dejuiui;