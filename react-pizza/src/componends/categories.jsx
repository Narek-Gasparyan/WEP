import React from "react";

function Categories({ items, onClickItom }) {
  const [activeItom, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  }

  return (
    <div className="categories">
      <ul>
        <li className={activeItom === null ? "active" : ""}  onClick={() => onSelectItem(null)}>
          Все
          </li>
        {items &&
        items.map((name, index) => (
          <li
            className={activeItom === index ? "active" : ""}
            onClick={() => onSelectItem(index)}
            key={`${name}_${index}`}>  
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
