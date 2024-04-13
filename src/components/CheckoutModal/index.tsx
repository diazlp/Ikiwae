import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { CheckoutProduct } from '../../contexts/CheckoutContext'
import { Utils } from '../../lib/utils'
import { CiCircleMinus } from 'react-icons/ci'

type CheckoutModalProps = {
  visible: boolean
  handleCloseModal: any
  handleIncrementQty: (product: CheckoutProduct) => void
  handleDecrementQty: (product: CheckoutProduct) => void
  handleDeleteProduct: (product: CheckoutProduct) => void
  checkoutProducts: { product: CheckoutProduct; quantity: number }[]
  totalPrice: number
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  visible,
  handleCloseModal,
  handleIncrementQty,
  handleDecrementQty,
  handleDeleteProduct,
  checkoutProducts,
  totalPrice
}) => {
  if (visible) {
    return (
      <Modal show={true} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title as="h2">Order Summary</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex align-items-center justify-content-center h3">
          {checkoutProducts.length ? (
            <div className="my-1">
              {checkoutProducts.map(({ product, quantity }, index) => (
                <div className="d-flex align-items-center" key={index}>
                  <div
                    className="row pb-3 mt-2 d-flex border align-items-center px-2"
                    key={product.title}
                  >
                    <div className="col-2 pt-3">
                      <img
                        src={product.src}
                        alt={product.title}
                        className="w-100"
                      />
                    </div>
                    <div className="col-3 mt-3">
                      <h2 className="bd-highlight">{product.title}</h2>
                    </div>
                    <div className="col-4 mt-3">
                      <h2>{Utils.formatCurrency(product.price)}</h2>
                    </div>
                    <div className="col-2 counter-co-prod d-flex justify-content-center">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <button
                          type="button"
                          className="btn btn-outline-dark rounded-0 increment-button"
                          onClick={() => handleIncrementQty(product)}
                        >
                          +
                        </button>
                        <div className="form-control form-control-sm border-0 px-3">
                          <span
                            style={{ fontSize: '20px' }}
                            className="total-container"
                          >
                            {quantity}
                          </span>
                        </div>
                        <button
                          type="button"
                          className="btn btn-outline-dark rounded-0 decrement-button"
                          onClick={() => handleDecrementQty(product)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="col-1 justify-self-end">
                      <button
                        type="button"
                        className="btn btn-danger rounded-0"
                        onClick={() => handleDeleteProduct(product)}
                      >
                        <CiCircleMinus size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="my-5">Belanjaan kamu kosong</p>
          )}
        </Modal.Body>

        <Modal.Footer className="d-flex align-items-center justify-content-between fw-bold bg-primary text-white">
          <p className="h4">Total</p>

          <div className="d-flex align-items-center h4">
            <span>{Utils.formatCurrency(totalPrice)}</span>
            <div className="mx-2"></div>
            <Button
              variant="ghost"
              onClick={handleCloseModal}
              className="text-primary bg-white  h4"
            >
              Payment
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default CheckoutModal
