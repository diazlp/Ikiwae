import React, { useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'

import ikiwaeLogo from '/ikiwae-logo.png'

const Header: React.FC = () => {
  const [count] = useState<number>(0)

  return (
    <div
      className="container border-bottom fixed-top h-25"
      style={{ backdropFilter: 'blur(2px)' }}
    >
      <div className="row" id="header-default">
        <figure className="col-10 logo d-flex justify-content-start">
          <a href="http://localhost:5173/">
            <img
              src={ikiwaeLogo}
              className="mt-4 mb-4 h-25 img-fluid"
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
              <div className="col fw-bold text-white bg-warning">{count}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
