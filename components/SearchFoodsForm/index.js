import { useState } from "react";

import SmallLinkedButton from "../SmallLinkedButton";
import SearchFoodsList from "../SearchFoodsList";
import ColorFilter from "../ColorFilter";

import styles from "./styles.module.css";

const DUMMY_LIFETIME = [
  {
    product: "apple",
    productSearch: "Apple (Red)",
    color: "red",
    textHex: "#f94d4d",
  },
  {
    product: "apple",
    productSearch: "Apple (Green)",
    color: "green",
    textHex: "#479d45",
  },
  {
    product: "strawberry",
    productSearch: "Strawberry",
    color: "red",
    textHex: "#f94d4d",
  },
  {
    product: "orange",
    productSearch: "Orange",
    color: "orange",
    textHex: "#fd8f52",
  },
  {
    product: "lettuce",
    productSearch: "Lettuce (Green)",
    color: "green",
    textHex: "#479d45",
  },
  {
    product: "lettuce",
    productSearch: "Lettuce (Purple)",
    color: "purple",
    textHex: "#7471e7",
  },
  {
    product: "onion",
    productSearch: "Onion (White)",
    color: "white",
    textHex: "#97906e",
  },
  {
    product: "onion",
    productSearch: "Onion (Yellow)",
    color: "yellow",
    textHex: "#ffbb1c",
  },
  {
    product: "banana",
    productSearch: "Banana",
    color: "yellow",
    textHex: "#ffbb1c",
  },
  {
    product: "banana",
    productSearch: "Banana",
    color: "yellow",
    textHex: "#ffbb1c",
  },
  {
    product: "banana",
    productSearch: "Banana",
    color: "yellow",
    textHex: "#ffbb1c",
  },
  {
    product: "banana",
    productSearch: "Banana",
    color: "yellow",
    textHex: "#ffbb1c",
  },
  {
    product: "banana",
    productSearch: "Banana",
    color: "yellow",
    textHex: "#ffbb1c",
  },
  {
    product: "banana",
    productSearch: "Banana",
    color: "yellow",
    textHex: "#ffbb1c",
  },
  {
    product: "banana",
    productSearch: "Banana",
    color: "yellow",
    textHex: "#ffbb1c",
  },
  {
    product: "banana",
    productSearch: "Banana",
    color: "yellow",
    textHex: "#ffbb1c",
  },
];

const SearchFoodsForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [focused, setFocused] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSelectedColor = (color) => {
    color === selectedColor ? setSelectedColor(null) : setSelectedColor(color);
  };

  const filteredFood = !selectedColor
    ? DUMMY_LIFETIME.filter((food) =>
        food.productSearch.toLowerCase().includes(searchInput.toLowerCase())
      )
    : DUMMY_LIFETIME.filter(
        (food) =>
          food.productSearch
            .toLowerCase()
            .includes(searchInput.toLowerCase()) && food.color === selectedColor
      );

  return (
    <div className={styles.container}>
      <ColorFilter
        selectedColor={selectedColor}
        handleSelectedColor={handleSelectedColor}
      />
      <input
        type="text"
        placeholder="Search food"
        onChange={onChange}
        value={searchInput}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {focused && (
        <SearchFoodsList
          setSelectedFood={setSelectedFood}
          onBlur={onBlur}
          data={filteredFood}
          setSearchInput={setSearchInput}
        />
      )}
      <div className={styles.backgroundImage}>
        <img src="/eatBackground/eatBackground.png" />
      </div>
      <div className={styles.buttons}>
        <SmallLinkedButton href="/today">Cancel</SmallLinkedButton>
        <SmallLinkedButton href="/today">Save</SmallLinkedButton>
      </div>
    </div>
  );
};
export default SearchFoodsForm;
