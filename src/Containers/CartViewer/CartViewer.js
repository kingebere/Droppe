import React from 'react';
import Approved from '../../Components/ApprovedCart/Approved';
import RejectedCart from '../../Components/RejectedCart/RejectedCart';
import './CartViewer.css';

export default function CartViewer({ add, remove }) {
  //sum of selected products for all items without discount
  const Total = (add) =>
    add.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.price;
    }, 0);

  //Discount for similar products
  const acceptedTotal = (add) =>
    add.reduce((ac, next) => ac + next.quantity * next.price, 0);

  //sum of prices for disgarded products
  const disgardedTotal = (remove) =>
    remove.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.price;
    }, 0);

  return (
    <div className='Cartview__header'>
      <div className='approved__section'>
        <div className='approved__text'>Approved Products</div>
        <div className='product'>
          {add.map((produc) => {
            return (
              <div key={produc.random}>
                <Approved produc={produc} />{' '}
              </div>
            );
          })}
        </div>
      </div>
      <div className='disgarded__section'>
        <div className='disgarded__text'>Disgarded Products</div>

        <div className='product'>
          {remove.map((produc) => {
            return (
              <div key={produc.random}>
                <RejectedCart produc={produc} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className='Cartviewer__prices'>
          <div>
            <div className='bold'>ACCEPTED PRICES WITHOUT DISCOUNT </div> $
            {Total(add).toFixed(2)}{' '}
          </div>
          <div>
            <div className='bold'>TOTAL DISGARDED PRICES </div>$
            {disgardedTotal(remove).toFixed(2)}
          </div>
          <div>
            <div className='bold'>ACCEPTED PRICES WITH DISCOUNT </div>$
            {acceptedTotal(add).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
