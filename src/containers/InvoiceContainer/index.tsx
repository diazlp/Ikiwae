import React, { Fragment } from 'react'
import Header from '../../components/layout/ui/Header'
import { useCheckoutProduct } from '../../contexts/CheckoutContext'
import { Utils } from '../../lib/utils'

const InvoiceContainer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const { products, calculateTotalPrice } = useCheckoutProduct()

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

            <div className="row my-2 co-prod pb-3 d-flex border align-items-center">
              {products.map(({ product, quantity }) => (
                <Fragment>
                  <div className="col-2 pt-3">
                    <img
                      src={product.src}
                      alt={product.title}
                      className="w-100"
                    />
                  </div>
                  <div className="col-4">
                    <h4 className="bd-highlight">{product.title}</h4>
                  </div>
                  <div className="col-4">
                    <h4>{Utils.formatCurrency(product.price)}</h4>
                  </div>
                  <div className="col-1">
                    <h4>{quantity}</h4>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="col bg-light flex-column mt-2 bd-highlight footer-inv bd-highlight">
            <div className="row mt-5">
              <div className="row">
                <div className="col-6 offset-1">
                  <h2>Sub Total</h2>
                </div>
                <div className="col d-flex justify-content-end total-payment">
                  IDR {calculateTotalPrice}
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-6 offset-1">
                  <h2 className="fs-4">Discount</h2>
                </div>
                <div className="col d-flex justify-content-end discount-number text-warning">
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

            <div className="row total-number my-5 bg-primary text-white">
              <div className="row my-3 align-items-center">
                <div className="col-6 offset-1">
                  <h2>Total</h2>
                </div>
                <div className="col d-flex justify-content-end total-payment fs-2">
                  IDR {calculateTotalPrice}
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
