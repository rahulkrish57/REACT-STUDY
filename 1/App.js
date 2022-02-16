// Function Components
// Function Should always start with Capital letter
// Function should always return something
// Return should be single element

import Message from "./message";
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
      // javascript
      myPlaces.map((obj) => {
        return <Message place={obj.name}></Message>
      }
      )
    }
  </div>
}