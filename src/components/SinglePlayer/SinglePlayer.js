import React from 'react';
import './SinglePlayer.css';
const SinglePlayer = ({player}) => {
    const { name, price, image, phone, company } = player;
    return (
      <div>
        <div className="card w-full h-[36rem] bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">Details</div>
            </h2>
            <p>Price: {price}</p>
            <p>Phone: {phone}</p>
            <p>Company: {company}</p>
            <div className="card-actions justify-between">
              <div className="btn btn-outline btn-primary btn-sm">Fashion</div>
              <div className="btn btn-outline btn-secondary btn-sm">Products</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SinglePlayer;