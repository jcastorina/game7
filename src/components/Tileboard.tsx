const Tileboard = ({matrix, tiles, player, coords}: {matrix: any, tiles: string[], player: string, coords: {x: number, y: number, last?: string}}) => {

  const dir = () => {

    if(coords.last === "left"){
      return true;
    } else {
      return false;
    }
  }

  const size = 128;
  const bunny = <div style={{position: "absolute"}}><img src={player} alt="p1" style={{
    position: "absolute",
    top: size * coords.y - 20,
    left: size * coords.x,
   // boxSizing: "border-box",
    height: size,
    transform: dir()?"scaleX(-1)":""
    
  }}/></div>

  return (
    <div style={{height: (size * matrix.length), width: (size * matrix.length) + 2}}>
      {bunny}
      {matrix.map(() => {
        const arr = [];
        for(let i = 0; i < matrix.length; i++){
          arr.push(<img key={i} alt="tile" src={tiles[0]} style={{ boxSizing: "border-box"}}/>)
        }
        
        return <div key={Math.random()} style={{boxSizing: "border-box", margin: "0px 0px -4px 0px"}} >{arr}</div>;
      })}
    </div>
  )
}

export default Tileboard;