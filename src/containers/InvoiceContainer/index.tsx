import React, { Fragment } from 'react'
import Header from '../../components/layout/ui/Header'

const InvoiceContainer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Fragment>
      <Header isLogoCentered />

      <div className="container my-5 h1">
        <div className="row">
          <div className="col d-flex justify-content-start">
            <h1>Your Invoice</h1>
          </div>
          <div className="col d-flex justify-content-end align-self-center text-secondary">
            <h4>Invoice Number: MDL1507AAP/1/{currentYear}</h4>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col me-3">
            <div className="row mt-2 header-inv d-flex align-items-center bg-light">
              <div className="col-2 d-flex justify-content-center">
                <h4>Image</h4>
              </div>
              <div className="col-3 d-flex justify-content-center">
                <h4>Product</h4>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <h4>Price</h4>
              </div>
              <div className="col-1 offset-1 d-flex justify-content-center">
                <h4>Item(s)</h4>
              </div>
            </div>

            <div
              className="row mt-2 co-prod pb-3 d-flex border align-items-center px-2"
              id="invoice-item"
            ></div>
          </div>

          <div className="col bg-light flex-column mt-2 bd-highlight footer-inv bd-highlight">
            <div className="row mt-5">
              <div className="row">
                <div className="col-6 offset-1">
                  <h2>Sub Total</h2>
                </div>
                <div className="col d-flex justify-content-end total-payment">
                  IDR X
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-6 offset-1">
                  <h2 className="fs-4">Discount</h2>
                </div>
                <div className="col d-flex justify-content-end discount-number">
                  <h2 className="fs-4">- IDR 0</h2>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-6 offset-1">
                  <h2 className="fs-4">Total Tax</h2>
                </div>
                <div className="col d-flex justify-content-end discount-number">
                  <h2 className="fs-4">- IDR 0</h2>
                </div>
              </div>
            </div>

            <div className="row total-number mt-5 bg-primary text-white">
              <div className="row my-3 align-items-center">
                <div className="col-6 offset-1">
                  <h2>Total</h2>
                </div>
                <div className="col d-flex justify-content-end total-payment fs-2">
                  IDR 0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default InvoiceContainer
