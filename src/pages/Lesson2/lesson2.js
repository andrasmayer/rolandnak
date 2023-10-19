//childs
import { Button } from 'react-bootstrap';
import React, { useState } from "react";

const Page2 = () =>{
  /*
  const [clickedValue,setClickedValue]  = useState(0);
  const [color,setColor]  = useState("black");
  const myObject = {name:"Béla",age:72,gender:"male"}

  const clickHandler = () =>{
    let tempValue = clickedValue + 1;
    let tempColor = "black;"
    if(tempValue %2 === 0){ tempColor="red";}
    else{ tempColor = "black";  }
    setColor(tempColor)
    setClickedValue(tempValue);
  }
*/
  return (
    <div className="container">
      <h1>Page 2</h1>

      <Button as="a" variant="primary">
    Button as link
  </Button>

    </div>
  );
}

export default Page2;