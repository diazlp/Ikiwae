import React from 'react'
import { mejaProduct, sofaProduct } from '../../lib/constant'
import ProductCard from './Product-Card'

const ProductComponent: React.FC = () => {
  return (
    <section className="mt-5 mb-5">
      <h4 className="text-start display-4">Meja</h4>

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

      <h4 className="text-start display-4 mt-5">Sofa</h4>

      <div className="row">
        {sofaProduct.map((sofa, index) => (
          <ProductCard
            key={index}
            src={sofa.src}
            title={sofa.title}
            description={sofa.description}
            price={sofa.price}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductComponent