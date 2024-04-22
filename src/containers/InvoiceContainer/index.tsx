import React, { Fragment } from 'react'
import Header from '../../components/layout/ui/Header'

const InvoiceContainer: React.FC = () => {
  return (
    <Fragment>
      <Header isLogoCentered />

      <div className="container header-page my-5 h1">
        <div className="row">
          <div className="col d-flex justify-content-start">
            <h1>Your Invoice</h1>
          </div>
          <div className="col d-flex justify-content-end align-self-center text-secondary">
            <h4>Invoice Number: N109283FBG/1/20022</h4>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default InvoiceContainer
