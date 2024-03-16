import React from 'react'
import { Button } from 'react-bootstrap'
import { FaCartShopping, FaEye } from 'react-icons/fa6'

const HeroComponent: React.FC = () => {
  return (
    <div className="container bg-light hero">
      <div className="row">
        <div className="col img-hero py-2">
          <img src="/assets/hero-1.png" alt="Hero Image" className="w-100" />
        </div>
        <div className="col align-self-center">
          <div className="row d-flex flex-column bd-highlight ">
            <div className="col txt-hero">
              <h1>DRÖNJÖNS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
            </div>
            <div className="col prc-hero">
              <h2>IDR 230.000</h2>
            </div>
            <div className="row mt-3 gap-2 w-75">
              <Button
                variant={'primary'}
                className="col d-flex align-items-center gap-2 justify-content-center text-nowrap"
              >
                <FaCartShopping />
                Buy Now!
              </Button>
              <Button
                variant={'secondary'}
                className="col d-flex align-items-center gap-2 justify-content-center text-nowrap"
              >
                <FaEye />
                View Product
              </Button>
              {/* <a href="#" class="btn btn-hero buynow me-3" style="background-color: #003399; color: white"><i class="fa-solid fa-cart-shopping me-2"></i> Buy Now!</a>
                            <a href="#" class="btn btn-outline-dark btn-hero"><i class="fa-solid fa-eye me-2"></i>View Product</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
