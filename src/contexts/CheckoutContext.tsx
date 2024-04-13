import React, { createContext, useContext, useMemo, useState } from 'react'

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
  incrementQty: (product: CheckoutProduct) => void
  decrementQty: (product: CheckoutProduct) => void
  deleteProduct: (product: CheckoutProduct) => void
  calculateTotalPrice: number
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

  const incrementQty = (product: CheckoutProduct) => {
    const existingProductIndex = products.findIndex(
      (p) => p.product.title === product.title
    )

    if (existingProductIndex !== -1) {
      const updatedProducts = [...products]
      updatedProducts[existingProductIndex].quantity++
      setProducts(updatedProducts)

      // Increment total quantity
      setTotalQty((prevQty) => prevQty + 1)
    }
  }

  const decrementQty = (product: CheckoutProduct) => {
    const existingProductIndex = products.findIndex(
      (p) => p.product.title === product.title
    )

    if (existingProductIndex !== -1) {
      const updatedProducts = [...products]
      // Ensure quantity doesn't go below 1
      if (updatedProducts[existingProductIndex].quantity > 1) {
        updatedProducts[existingProductIndex].quantity--
        setProducts(updatedProducts)

        // Decrement total quantity
        setTotalQty((prevQty) => prevQty - 1)
      }
    }
  }

  const deleteProduct = (product: CheckoutProduct) => {
    const updatedProducts = products.filter(
      (p) => p.product.title !== product.title
    )
    const deletedProduct = products.find(
      (p) => p.product.title === product.title
    )
    if (deletedProduct) {
      setTotalQty((prevQty) => prevQty - deletedProduct.quantity)
      setProducts(updatedProducts)
    }
  }

  const calculateTotalPrice = useMemo(() => {
    let totalPrice = 0
    products.forEach(({ product, quantity }) => {
      totalPrice += product.price * quantity
    })
    return totalPrice
  }, [products])

  const contextValue: CheckoutContextType = {
    totalQty,
    products,
    addProduct,
    incrementQty,
    decrementQty,
    deleteProduct,
    calculateTotalPrice
  }

  return (
    <CheckoutContext.Provider value={contextValue}>
      {children}
    </CheckoutContext.Provider>
  )
}

export default CheckoutProvider
