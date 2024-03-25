import React from 'react'
import { mejaProduct } from '../../lib/constant'
import ProductCard from './Product-Card'

const ProductComponent: React.FC = () => {
  return (
    <section className="mt-5 mb-5">
      <h4 className="text-start display-4 prod-section">Meja</h4>

      <div className="row">
        {mejaProduct.map((meja, index) => (
          <ProductCard
            key={index}
            src={meja.src}
            title={meja.title}
            description={meja.description}
            price={meja.price}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductComponent
