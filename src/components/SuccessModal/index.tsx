import React from 'react'
import { Modal } from 'react-bootstrap'
import { FaFileInvoiceDollar, FaShoppingBag } from 'react-icons/fa'

type SuccessModalProps = {
  visible: boolean
  handleCloseModal: () => void
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  handleCloseModal
}) => {
  if (visible) {
    return (
      <Modal show={true} onHide={handleCloseModal}>
        <Modal.Body className="d-flex flex-column align-items-center justify-content-center h3">
          <div className="col d-flex justify-content-center">
            <img src="/success.gif" alt="Success GIF" className="w-75 h-10" />
          </div>

          <p className="h1 fw-bold">Payment Success!</p>

          <div className="row my-5">
            <div className="col d-flex justify-content-end">
              <button
                type="button"
                className="d-flex align-items-center gap-2 px-2 text-white btn btn-primary text-nowrap fs-5"
                // onClick={handleAddProduct}
              >
                <FaFileInvoiceDollar />
                Go to Invoice
              </button>
            </div>
            <div className="col d-flex justify-content-start">
              <button
                type="button"
                className="d-flex align-items-center gap-2 px-2 text-white btn btn-warning fs-5"
                // onClick={handleAddProduct}
              >
                <FaShoppingBag />
                Back to Shop
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}

export default SuccessModal
