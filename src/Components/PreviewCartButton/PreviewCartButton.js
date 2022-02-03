import React from 'react';
import './PreviewCartButton.css';
export default function PreviewCartButton({
  add,
  remove,

  openPreview,
}) {
  return (
    <div>
      <button
        className={`product__button   mr-41 ${
          remove.length + add.length < 9
            ? 'product__button--disabled'
            : 'product__button--happy'
        }`}
        disabled={remove && remove.length + add.length < 9}
        title='check'
        onClick={() => openPreview(8)}
      >
        {remove.length + add.length < 9
          ? 'select all products to view cart to activate me'
          : 'View Selections'}
      </button>
    </div>
  );
}
