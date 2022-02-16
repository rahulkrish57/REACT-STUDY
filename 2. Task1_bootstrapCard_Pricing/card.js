export default function Card(props){
    return <>
    <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 class="card-price text-center">{props.data.currency}{props.data.price}<span class="period">/{props.data.period}</span></h6>
            <hr/>
            <ul class="fa-ul">
                {
                    props.data.offers.map((offer) =>{
                       return <li className = {offer.isChecked ? " " : "text-muted" }><span class="fa-li"><i class={`fas ${offer.isChecked ? 'fa-check' : 'fa-times'}`}></i></span>{offer.name}</li>
                    })
                }

             { /*<li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li> */ }
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
}