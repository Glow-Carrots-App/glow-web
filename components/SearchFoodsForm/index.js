import { useState } from "react";
import Image from "next/image";

import SmallLinkedButton from "../SmallLinkedButton";
import eatImg from "../../public/eatBackground/eatBackground.png";
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
];

const SearchFoodsForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSelectedColor = (color) => {
    color === selectedColor ? setSelectedColor(null) : setSelectedColor(color);
    console.log(selectedColor);
  };

  const filteredFood = DUMMY_LIFETIME.filter((food) =>
    food.productSearch.toLowerCase().includes(searchInput.toLowerCase())
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
      />
      {searchInput !== "" && <SearchFoodsList data={filteredFood} />}
      <div className={styles.backgroundImage}>
        <Image src={eatImg} width="185px" height="185px" />
      </div>
      <div className={styles.buttons}>
        <SmallLinkedButton href="/today">Cancel</SmallLinkedButton>
        <SmallLinkedButton href="/today">Save</SmallLinkedButton>
      </div>
    </div>
  );
};
export default SearchFoodsForm;
