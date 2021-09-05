import React, {useeffect} from "react";
import MoreButton from "./MoreButton";



useEffect(() => {
  fetch("http://localhost:3001/sushis")
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])


function SushiContainer(props) {
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
