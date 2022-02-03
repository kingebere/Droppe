import React from 'react';
import './Products.css';

export default function Products({
  prices,
  value,
  handleAdd,
  handleRemove,
  disabledd,
}) {
  return (
    <div className='product'>
      {prices.map((produc) => {
        return (
          <div className='product__wrapper' key={produc.data.random}>
            <div className='product__image-container'>
              <img src={produc.data.image} alt='produc.title' />
            </div>
            <div className='product__details'>
              <div className='product__info'>
                <div className='product__title'> {produc.data.title}</div>
                <div>${produc.data.price.toFixed(2)}</div>
              </div>
              <button
                disabled={value.includes(produc.data.random)}
                type='button'
                onClick={() => handleAdd(produc.data)}
                className={`product__button  ${
                  disabledd.find((id) => id === produc.data.random) ===
                  produc.data.random
                    ? 'product__button--disabled'
                    : 'product__button--success'
                }`}
              >
                {disabledd.find((id) => id === produc.data.random) ===
                produc.data.random
                  ? 'Choice Selected'
                  : 'add'}
              </button>
              <button
                disabled={value.includes(produc.data.random)}
                type='button'
                onClick={() => handleRemove(produc.data)}
                className={`product__button  ${
                  disabledd.find((id) => id === produc.data.random) ===
                  produc.data.random
                    ? 'product__button--disabled'
                    : 'product__button--danger'
                }`}
              >
                {disabledd.find((id) => id === produc.data.random) ===
                produc.data.random
                  ? 'Choice Selected'
                  : 'remove'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
