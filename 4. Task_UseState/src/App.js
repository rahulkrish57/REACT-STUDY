// Function Components
// Function Should always start with Capital letter
// Function should always return something
// Return should be single element

import Card from "./card.js"
import  { useState } from "react";

export default function App() {
  let products = [{
    id: 1,
    name: "Product 1",
    price: 15
  },
  {
    id: 2,
    name: "Product 2",
    price: 24
  },
  {
    id: 3,
    name: "Product 3",
    price: 19
  },
  {
    id: 4,
    name: "Product 4",
    price: 49
  },
  {
    id: 5,
    name: "Product 5",
    price: 26
  },
  {
    id: 6,
    name: "Product 6",
    price: 37
  }]

  const [cart,setCart] = useState([])
  const [total, setTotal] = useState(0);
  let addCart = (product) => {
    setCart([...cart, product])
    setTotal(total + product.price)
  }

  let removeCart = (item) => {
    
   setCart(cart.filter(obj => obj.id !== item.id))
    setTotal(total - item.price)
  }

  return (<>
  {/*<!-- Section-->*/}
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row">
                  <div className="col-md-3">
                    <h3>Cart Details</h3>
                    {
                      cart.map((item) => {
                       return <div>
                         <h6>{item.name} - ${item.price}</h6> <button className= "btn btn-danger" onClick = {() => {
                           removeCart(item);
                         }}>X</button>
                         </div>
                      })
                    }
                    <h3>Total - ${total}</h3> 
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      {
                        products.map((product) => {
                          return <Card productData={product} handleCart={addCart}/>
                        })
                      }
                    </div>
                  </div>
                
                </div> 
            </div>
          </section>
          
  </>)
}