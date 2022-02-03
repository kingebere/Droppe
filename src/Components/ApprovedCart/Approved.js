import React from 'react';

export default function ApprovedCart({ produc }) {
  return (
    <div>
      <div className='product__wrapper'>
        <div className='approved__title'>Approved Products</div>
        <div className='product__image-container'>
          <img src={produc.image} alt='produc.title' />
        </div>
        <div className='product__details'>
          <div className='product__info'>
            <div className='product__title'> {produc.title}</div>
            <div>${produc.price.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
