import React from 'react'
import FeaturedItem from './Featured-Item'
import { FaTruckFast, FaCircleCheck, FaFaceGrinWink } from 'react-icons/fa6'

const FeaturedComponent: React.FC = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <FeaturedItem
          title="IKI Free Ongkir"
          description="Ga perlu khawatir biaya pengiriman, Dan pasti sampai!"
          icon={<FaTruckFast size={90} />}
        />
        <FeaturedItem
          title="IKI Asli"
          description="Dijamin orisinil, langsung dari produsennya"
          icon={<FaCircleCheck size={100} />}
        />
        <FeaturedItem
          title="IKI Garansi"
          description="Rusak? akan kami buat mirip seperti semula"
          icon={<FaFaceGrinWink size={100} />}
        />
      </div>
    </div>
  )
}

export default FeaturedComponent
