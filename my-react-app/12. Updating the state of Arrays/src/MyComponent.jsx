import React, {useState} from 'react';

function MyComponent() {

  const [menuItems, setMenuItems] = useState(["Oha", "Egusi", "Okro"]);

  function handleMenuItemAddition() {

    const elem = document.getElementById("menuItemInput");
    const newMenuItem = elem.value;
    elem.value = "";

    setMenuItems(prevMenuItems => ([...prevMenuItems, newMenuItem]))
  }

  function handleMenuItemRemoval(menuItemIndex) {
    setMenuItems(menuItems.filter((_, index) => index !== menuItemIndex ))
  }

  return(
    <div>
      <h2>List of Menu Items</h2>
      <ul>
        {menuItems.map((menuItem, menuItemIndex) => (
          <li key={menuItemIndex} onClick={() => handleMenuItemRemoval(menuItemIndex)}>
            {menuItem}
          </li>
        ))}
      </ul>
      <input type="text" id="menuItemInput" placeholder="Enter menu item"/>
      <button onClick={handleMenuItemAddition}>Add Menu Item</button>
    </div>
  );
}

export default MyComponent;
