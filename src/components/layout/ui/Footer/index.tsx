import React from 'react'

import ikiwaeLogo from '/ikiwae-logo.png'

const Footer: React.FC = () => {
  return (
    <footer className="text-center user-select-none">
      <div className="container p-4 pb-1">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
            <h5 className="fw-bold">Motto</h5>
            <p>Membawa Kenyaman ke Rumah Anda</p>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
            <h5 className="fw-bold">Motivasi</h5>
            <p>
              Keberhasilan seorang pria adalah kemampuannya menghasilkan lebih
              banyak uang daripada yang dihabiskan istrinya setiap bulannya
            </p>
          </div>
        </div>

        <figure className="w-50" style={{ transform: 'translateX(50%)' }}>
          <img
            src={ikiwaeLogo}
            className="mt-4 mb-4 h-10 w-25"
            alt="ikiwae logo"
          />
        </figure>
      </div>

      <div className="text-center p-3 bg-secondary-subtle">
        Copyright &copy; {new Date().getFullYear()} <b>IKIWAE</b>. All Rights
        Reserved.
      </div>
    </footer>
  )
}

export default Footer
