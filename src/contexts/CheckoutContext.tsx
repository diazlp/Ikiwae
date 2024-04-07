import React, { createContext, useContext, useState } from 'react'

export interface CheckoutProduct {
  src: string
  title: string
  description: string
  price: number
}

interface CheckoutContextType {
  totalQty: number
  products: { product: CheckoutProduct; quantity: number }[]
  addProduct: (product: CheckoutProduct) => void
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
)

interface CheckoutProviderProps {
  children: React.ReactNode
}

export const useCheckoutProduct = (): CheckoutContextType => {
  const context = useContext(CheckoutContext)
  if (!context) {
    throw new Error('useCheckout must be used within a CheckoutProvider')
  }
  return context
}

const CheckoutProvider: React.FC<CheckoutProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<
    { product: CheckoutProduct; quantity: number }[]
  >([])
  const [totalQty, setTotalQty] = useState<number>(0)

  const addProduct = (product: CheckoutProduct) => {
    const existingProductIndex = products.findIndex(
      (p) => p.product?.title === product.title
    )
    if (existingProductIndex !== -1) {
      // Product already exists, increment quantity
      const updatedProducts = [...products]
      updatedProducts[existingProductIndex].quantity++
      setProducts(updatedProducts)
    } else {
      // Product doesn't exist, add it with quantity 1
      setProducts([...products, { product, quantity: 1 }])
    }

    // Increment total quantity
    setTotalQty((prevQty) => prevQty + 1)
  }

  const contextValue: CheckoutContextType = {
    totalQty,
    products,
    addProduct
  }

  return (
    <CheckoutContext.Provider value={contextValue}>
      {children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutProvider
