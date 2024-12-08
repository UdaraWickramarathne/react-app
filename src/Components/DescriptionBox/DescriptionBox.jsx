import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descripton</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa
          eaque praesentium laudantium quas illum veniam, nemo fugit iste
          consequuntur, optio voluptatem neque officia. Impedit quod minima ad
          recusandae deleniti?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          illo quaerat culpa architecto minus deserunt consectetur atque nobis
          numquam laborum!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
