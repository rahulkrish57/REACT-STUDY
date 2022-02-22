export default function Card(props) {
  return <>
  <div class="col-md-4">
                        <div class="card h-100">
                           
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           
                            <div class="card-body p-4">
                                <div class="text-center">
                                   
                                    <h5 class="fw-bolder">{props.productData.name}</h5>
                                   
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill">★</div>
                                        <div class="bi-star-fill">★</div>
                                        <div class="bi-star-fill">★</div>
                                        <div class="bi-star-fill">★</div>
                                        <div class="bi-star-fill">★</div>
                                    </div>
                                    ${props.productData.price}
                                </div>
                            </div>
                           
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button type="button" class="btn btn-outline-dark mt-auto" onClick={()=>{
                                  props.handleCart(props.productData)
                                }}>Add Cart</button></div>
                            </div>
                        </div>
                </div></>
}