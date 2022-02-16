// Function Components
// Function Should always start with Capital letter
// Function should always return something
// Return should be single element

import Message from "./message";
export default function App() {
  let myPlaces = [
    {
      name: "world",
    },
    {
      name: "mars",
    },
    {
      name: "jupiter",
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
