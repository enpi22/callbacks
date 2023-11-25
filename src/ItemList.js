import React, { useState, useCallback } from 'react';

const ItemList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = useCallback((item) => {
    console.log(item.name)
    setSelectedItem(item);
  }, [selectedItem]);

  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item)}
            style={{ fontWeight: selectedItem === item ? 'bold' : 'normal' }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
