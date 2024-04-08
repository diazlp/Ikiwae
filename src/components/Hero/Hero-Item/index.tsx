import React from 'react'
import { Button } from 'react-bootstrap'
import { FaCartShopping, FaEye } from 'react-icons/fa6'
import { useCheckoutProduct } from '../../../contexts/CheckoutContext'
import { Utils } from '../../../lib/utils'

type HeroItemProps = {
  src: string
  title: string
  description: string
  price: number
}

const HeroItem: React.FC<HeroItemProps> = ({
  src,
  title,
  description,
  price
}) => {
  const { addProduct } = useCheckoutProduct()

  const handleAddProduct = () => {
    addProduct({
      src,
      title,
      description,
      price
    })
  }

  return (
    <div className="container bg-light hero">
      <div className="row">
        <div className="col img-hero py-2">
          <img src={src} alt={title} className="w-100" />
        </div>
        <div className="col align-self-center">
          <div className="row d-flex flex-column bd-highlight ">
            <div className="col txt-hero">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className="col prc-hero">
              <h2>{Utils.formatCurrency(price)}</h2>
            </div>
            <div className="row mt-3 gap-2 w-75">
              <Button
                variant={'primary'}
                className="col d-flex align-items-center gap-2 justify-content-center text-nowrap"
                onClick={handleAddProduct}
              >
                <FaCartShopping />
                Buy Now!
              </Button>
              <Button
                variant={'secondary'}
                className="col d-flex align-items-center gap-2 justify-content-center text-nowrap"
              >
                <FaEye />
                View Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroItem
