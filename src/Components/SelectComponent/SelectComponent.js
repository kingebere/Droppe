import React, { useState } from 'react';
import './SelectComponent.css';
export default function SelectComponent({ handleClick, query }) {
  const [checkdefault, setCheckDefault] = useState('');
  return (
    <div className='Select__wrapper'>
      <form>
        <label className='select__label' htmlFor='names'>
          Children
        </label>
        <select
          className='form-select'
          onChange={handleClick}
          value={query}
          title='check'
          checkdefault={checkdefault}
        >
          {!checkdefault && (
            <option data-testid='select-option' value=''>
              {' '}
              Choose from list
            </option>
          )}

          <option data-testid='select-option' value={1}>
            John Dike
          </option>
          <option data-testid='select-option' value={2}>
            Ben Dike
          </option>
          <option data-testid='select-option' value={3}>
            Harrison Dike
          </option>
          <option data-testid='select-option' value={4}>
            King Dike
          </option>
          <option data-testid='select-option' value={5}>
            Cathy Dike
          </option>
        </select>
      </form>
    </div>
  );
}
