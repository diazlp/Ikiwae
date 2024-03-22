import React, { ReactElement } from 'react'
import { IconType } from 'react-icons'

type FeaturedItemProps = {
  title: string
  description: string
  icon: ReactElement<IconType>
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({
  title,
  description,
  icon
}) => {
  return (
    <div className="col p-3 me-3 bg-light">
      <div className="row">
        <div className="col d-flex justify-content-center pt-4">{icon}</div>
        <div className="col">
          <div className="row">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedItem
