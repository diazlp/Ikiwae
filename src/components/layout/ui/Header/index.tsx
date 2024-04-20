import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'
import { useCheckoutProduct } from '../../../../contexts/CheckoutContext'
import CheckoutModal from '../../../CheckoutModal'

import ikiwaeLogo from '/ikiwae-logo.png'
import SuccessModal from '../../../SuccessModal'

type HeaderProps = {
  isLogoCentered: boolean
}

const Header: React.FC<HeaderProps> = ({ isLogoCentered }) => {
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false)
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)

  const navigate = useNavigate()
  const {
    incrementQty,
    decrementQty,
    deleteProduct,
    totalQty,
    products,
    calculateTotalPrice
  } = useCheckoutProduct()

  return (
    <Fragment>
      <div
        className="container border-bottom sticky-top"
        style={{ backdropFilter: 'blur(10px)' }}
      >
        {isLogoCentered ? (
          <div className="row justify-content-center" id="header-default">
            <figure
              className="col-10 d-flex justify-content-center "
              onClick={() => navigate('/')}
              style={{
                width: '180px'
              }}
            >
              <img
                src={ikiwaeLogo}
                className="mt-4 mb-4 img-fluid"
                alt="ikiwae logo"
              />
            </figure>
          </div>
        ) : (
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
              <button
                type="button"
                className="btn"
                onClick={() => setShowCheckoutModal(true)}
              >
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
        )}
      </div>

      <CheckoutModal
        visible={showCheckoutModal}
        handleCloseModal={() => setShowCheckoutModal(false)}
        handleIncrementQty={incrementQty}
        handleDecrementQty={decrementQty}
        handleDeleteProduct={deleteProduct}
        handlePaymentClick={() => setShowSuccessModal(true)}
        checkoutProducts={products}
        totalPrice={calculateTotalPrice}
      />

      <SuccessModal
        visible={showSuccessModal}
        handleCloseModal={() => setShowSuccessModal(false)}
      />
    </Fragment>
  )
}

export default Header
