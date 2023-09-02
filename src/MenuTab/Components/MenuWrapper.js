import React, { useState, useEffect } from "react";
import data from "../Data/Data";
import Categories from "./Categories";
import Menu from "./Menu";

const MenuWrapper = () => {
  const [menuItem, setMenuItem] = useState(
    data.sort((a, b) => (a.price > b.price ? -1 : 1))
  );

  const [allCategories] = useState([
    "all",
    ...new Set(data.map((d) => d.category)),
  ]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [selectValue, setSelectValue] = useState("HTOL");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const filtered = menuItem.filter((item) =>
      item.title.toLowerCase().includes(lowerCaseSearchText)
    );
    setFilteredItems(filtered);
  }, [menuItem, searchText]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(data);
    } else {
      const newItems = data
        .filter((item) => item.category === category)
        .sort((a, b) => (a.price > b.price ? -1 : 1));
      setMenuItem(newItems);
    }
    setActiveCategory(category);
    setSelectValue("HTOL");
  };

  const sortBy = (price = "HTOL") => {
    let newItems = [...menuItem];
    if (price === "HTOL") {
      newItems.sort((a, b) => (a.price > b.price ? -1 : 1));
    } else if (price === "LTOH") {
      newItems.sort((a, b) => (a.price < b.price ? -1 : 1));
    } else if (price === "LESS20") {
      newItems = newItems.filter((item) => item.price < 20);
    } else {
      newItems = newItems.filter((item) => item.price >= 20);
    }
    setSelectValue(price);
    setFilteredItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="action">
          <div>
            <label htmlFor="Menu">Sort by price</label>
            <select
              className="input"
              name="menu"
              id="menu"
              onChange={(e) => {
                sortBy(e.target.value);
              }}
              value={selectValue}
            >
              <option value="HTOL">High to low</option>
              <option value="LTOH">Low to high</option>
              <option value="LESS20">Less than 20</option>
              <option value="MORE20">More than 20</option>
            </select>
          </div>

          <div>
            <label htmlFor="Search">Search Favorite</label>
            <input
              className="input"
              type="text"
              name="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>

        <Categories
          categories={allCategories}
          filterItems={filterItems}
          activeCategory={activeCategory}
        />
        <Menu items={filteredItems.length > 0 ? filteredItems : menuItem} />
      </section>
    </main>
  );
};

export default MenuWrapper;
