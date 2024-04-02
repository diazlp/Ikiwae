import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { useCheckoutProduct } from '../../../../contexts/CheckoutContext'

import ikiwaeLogo from '/ikiwae-logo.png'

const Header: React.FC = () => {
  const { totalQty } = useCheckoutProduct()

  return (
    <div
      className="container border-bottom sticky-top"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="row" id="header-default">
        <figure className="col-10 d-flex ">
          <a href="http://localhost:5173/">
            <img
              src={ikiwaeLogo}
              className="mt-4 mb-4 w-25 img-fluid"
              alt="ikiwae logo"
            />
          </a>
        </figure>

        <div className="col d-flex align-items-start mt-5">
          <button type="button" className="btn" data-bs-toggle="modal">
            {/* <!-- data-bs-toggle="modal" href="#exampleModalToggle" role="button" --> */}
            <div className="row d-flex align-items-center p-3 border gap-2 justify-items-between">
              <div className="col">
                <FaCartShopping color={'#003399'} size={'30px'} />
              </div>
              <div className="col fw-bold text-white bg-warning">
                {totalQty}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
