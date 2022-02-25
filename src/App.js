import "./App.css";
import React, { useState } from "react";
import { Menu } from "./component/Menu.js";
import { Categories } from "./component/Categories.js";
import { items } from "./items";

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>our menu</h1>
                <div className="underline"></div>
            </header>
            <Categories categories={categories} filterItems={filterItems} />
            <Menu items={menuItems} />
        </div>
    );
}

export default App;
