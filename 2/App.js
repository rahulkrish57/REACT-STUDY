// Function Components
// Function Should always start with Capital letter
// Function should always return something
// Return should be single element

import Message from "./message";
import Human from "./hummans";
import Alien from "./alien";
export default function App() {
  let myPlaces = [
    {
      name: "world",
      isHumman: true
    },
    {
      name: "mars",
      isHumman: false
    },
    {
      name: "jupiter",
      isHuman: false
    }
  ]
  
  return <div>
    {
      // Conditional Rendering
      // It should return one element
      myPlaces.map((obj) => {
        if(obj.isHumman){
          return <>
          <Message place = {obj.name}></Message>
          <Human></Human>
        </>
        } else {
          return <>
          <Message place = {obj.name}></Message>
          <Alien></Alien>
        </>
        }
      })
    }
  </div>
}