import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { CheckoutProduct } from '../../contexts/CheckoutContext'

type CheckoutModalProps = {
  visible: boolean
  handleCloseModal: any
  checkoutProducts: { product: CheckoutProduct; quantity: number }[]
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  visible,
  handleCloseModal,
  checkoutProducts
}) => {
  if (visible) {
    return (
      <Modal show={true} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title as="h2">Order Summary</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex align-items-center justify-content-center h3">
          {checkoutProducts.length ? (
            <div className="my-5">
              {checkoutProducts.map(({ product }) => (
                <div
                  className="d-flex align-items-center"
                  style={{ border: '1px solid red' }}
                >
                  <div
                    className="row co-prod pb-3 mt-2 d-flex border align-items-center px-2"
                    key={product.title}
                  >
                    <div className="col-2 img-co-prod pt-3">
                      <img src={product.src} alt={product.title} />
                    </div>
                    <div className="col-3 nameprod-co-prod d-flex flex-column bd-highlight">
                      <h2 className="bd-highlight">{product.title}</h2>
                    </div>
                    <div className="col-3 harga-co-prod d-flex justify-content-center">
                      <h2>IDR {product.price}</h2>
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
            <span>IDR 0</span>
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
