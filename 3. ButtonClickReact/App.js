// Function Components
// Function Should always start with Capital letter
// Function should always return something
// Return should be single element

import Card from "./card.js"

export default function App() {

  let priceData = [
    {
      plan : "FREE",
      currency : "$",
      price : 0,
      period: "month",
      offers : [
        {
          name: "Single User",
          isChecked: true
        },
        {
          name: "5GB Storage",
          isChecked: true
        },
        {
          name: "Unlimited Public Projects",
          isChecked: true
        },
        {
          name: "Community Access",
          isChecked: true
        },
        {
          name: "Unlimited Private Projects",
          isChecked: false
        },
        {
          name: "Dedicated Phone Support",
          isChecked: false
        },
        {
          name: "Free Subdomain",
          isChecked: false
        },
        {
          name: "Monthly Status Reports",
          isChecked: false
        }
      ]
    },
    {
      plan : "PLUS",
      currency : "$",
      price : 9,
      period: "month",
      offers : [
        {
          name: "5 User",
          isChecked: true
        },
        {
          name: "50GB Storage",
          isChecked: true
        },
        {
          name: "Unlimited Public Projects",
          isChecked: true
        },
        {
          name: "Community Access",
          isChecked: true
        },
        {
          name: "Unlimited Private Projects",
          isChecked: true
        },
        {
          name: "Dedicated Phone Support",
          isChecked: true
        },
        {
          name: "Free Subdomain",
          isChecked: true
        },
        {
          name: "Monthly Status Reports",
          isChecked: false
        }
      ]
    },
    {
      plan : "PRO",
      currency : "$",
      price : 49,
      period: "month",
      offers : [
        {
          name: "Unlimited User",
          isChecked: true
        },
        {
          name: "150GB Storage",
          isChecked: true
        },
        {
          name: "Unlimited Public Projects",
          isChecked: true
        },
        {
          name: "Community Access",
          isChecked: true
        },
        {
          name: "Unlimited Private Projects",
          isChecked: true
        },
        {
          name: "Dedicated Phone Support",
          isChecked: true
        },
        {
          name: "Free Subdomain",
          isChecked: true
        },
        {
          name: "Monthly Status Reports",
          isChecked: true
        }
      ]
    }
  ]

  let buttonClick = () =>{
    alert("Button Clicked");
  }
    
  return <>
  <section class="pricing py-5">
  <div class="container">
    <div class="row">
      {
        priceData.map((obj) => {
          return <Card data = {obj} handleButtonClick = {buttonClick} />
        })
      }
    </div>
  </div>
  </section>
  </>
}