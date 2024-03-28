import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Utils } from '../../../lib/utils'

type ProductCardProps = {
  src: string
  title: string
  description: string
  price: number
}

const ProductCard: React.FC<ProductCardProps> = ({
  src,
  title,
  description,
  price
}) => {
  return (
    <div className="col-3 d-flex justify-content-between">
      <div className="card">
        <img src={src} alt={title} />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fs-3 fw-bold">{title}</h5>
          <p className="card-text">{description}</p>

          <div className="mt-auto d-flex gap-3 align-items-center">
            <button
              type="button"
              className="d-flex align-items-center gap-2 px-2 text-primary-emphasis btn btn-warning"
            >
              <FaShoppingCart />
              Checkout
            </button>
            <div className="fw-bold">{Utils.formatCurrency(price)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
