/*-------------------- External Dependencies-----------------------------------*/

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import './styles.css';

/*-------------------- Utilities-----------------------------------*/

import { GetProduct } from './Utils/GetProduct';

/*-------------------- Components-----------------------------------*/
const CartViewer = React.lazy(() =>
  import('./Containers/CartViewer/CartViewer')
);
const SelectComponent = React.lazy(() =>
  import('./Components/SelectComponent/SelectComponent')
);
const Products = React.lazy(() => import('./Components/Products/Products'));
const PreviewCartButton = React.lazy(() =>
  import('./Components/PreviewCartButton/PreviewCartButton')
);

export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();

  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState([]);

  const [remove, setRemove] = useState([]);
  const [add, setAdd] = useState([]);
  const [value, setValue] = useState([]);
  const [preview, setPreview] = useState([]);

  const [disabledd, setDisabledd] = React.useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/carts/${query}`).then((resp) => {
      setData((prev) => {
        return [...prev, resp.data.id];
      });
      setProducts(resp.data.products.map((ask) => ask.productId));
    });
  }, [query]);

  //Get individual product
  useEffect(() => {
    if (products) {
      GetProduct(products).then((result) => {
        return result.map((item) => {
          setPrices((prev) => {
            //add unique values to array
            item.data['random'] = Math.floor(Math.random() * 11889);
            return [...prev, { ...item }];
          });
        });
      });
    } else {
      return null;
    }
  }, [products]);

  //sum of All products
  const sumTotal = () =>
    prices.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.data.price;
    }, 0);

  //Select field onclick method wrapped in usecallback to prevent re-render
  const handleClick = useCallback((e) => {
    return setQuery(e.target.value);
  }, []);

  //Function for removing product from cart and disabling the button on click
  const handleRemove = (idx) => {
    setRemove((prev) => {
      return [...prev, { ...idx }];
    });

    setValue((prev) => {
      return [...prev, idx.random];
    });
    setDisabledd((prev) => {
      return [...prev, idx.random];
    });
  };

  //Handling the display of the preview cart
  const openPreview = (id) => {
    setPreview(id);
  };

  // Function for adding product from cart and disabling the button on click
  const handleAdd = (idx) => {
    setAdd((prev) => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === idx.id);

      //Create Discount Logic
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === idx.id
            ? { ...item, quantity: item.quantity + 0.1 }
            : { ...item, quantity: 1 }
        );
      }
      //2. First time the item is added
      return [...prev, { ...idx, quantity: 0.1, clicked: 0.1 }];
    });

    //Logic for disabling multiple button Clicks
    setValue((prev) => {
      return [...prev, idx.random];
    });

    //logic for switching the button inner.HTML to alert users of a valid selection
    setDisabledd((prev) => {
      return [...prev, idx.random];
    });
  };

  return (
    <div className='app'>
      <React.Suspense fallback={'...loading'}>
        <Products
          prices={prices}
          value={value}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          disabledd={disabledd}
        />
        <PreviewCartButton
          add={add}
          remove={remove}
          openPreview={openPreview}
        />{' '}
        <h1 className='App__price'>
          TOTAL PRICES &nbsp; &nbsp; &nbsp; ${sumTotal(add).toFixed(2)}
        </h1>
        <SelectComponent handleClick={handleClick} query={query} />
        {preview === 8 && <CartViewer add={add} remove={remove} />}
      </React.Suspense>
    </div>
  );
}
