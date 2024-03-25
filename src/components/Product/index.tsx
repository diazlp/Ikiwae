import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { mejaProduct } from '../../lib/constant'
import { Utils } from '../../lib/utils'

const ProductComponent: React.FC = () => {
  return (
    <section className="mt-5 mb-5">
      <h4 className="text-start display-4 prod-section">Meja</h4>

      <div className="row">
        {mejaProduct.map((meja, index) => (
          <div className="col-3 d-flex justify-content-between">
            <div className="card">
              <img src={meja.src} alt={meja.title} />

              <div className="card-body" key={index}>
                <h5 className="card-title fs-3 fw-bold">{meja.title}</h5>
                <p className="card-text">{meja.description}</p>

                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="d-flex align-items-center gap-2 px-2 text-primary-emphasis btn btn-warning"
                  >
                    <FaShoppingCart />
                    Checkout
                  </button>
                  <div>{Utils.formatCurrency(meja.price)}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductComponent
