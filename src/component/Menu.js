import React from "react";

export const Menu = ({ items }) => {
    return (
        <div className="item-container">
            {items.map((item, key) => {
                return (
                    <div className="item" key={key}>
                        <img className="item-img" src={item.src} />
                        <div className="item-textbox">
                            <div className="textbox-header">
                                <h2 className="item-title">{item.name}</h2>
                                <h3 className="item-price">{item.price}</h3>
                            </div>
                            <div className="item-underline"></div>
                            <p className="item-desc">{item.desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
