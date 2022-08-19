import { useState } from "react";
import Image from "next/image";

import SmallLinkedButton from "../SmallLinkedButton";
import eatImg from "../../public/eatBackground/eatBackground.png";
import SearchFoodsList from "../SearchFoodsList";

import styles from "./styles.module.css";

const DUMMY_LIFETIME = [
  { product: "apple", color: "red", textHex: "#f94d4d" },
  { product: "strawberry", color: "red", textHex: "#f94d4d" },
  { product: "orange", color: "orange", textHex: "#fd8f52" },
  { product: "lettuce", color: "green", textHex: "#479d45" },
  { product: "lettuce", color: "green", textHex: "#479d45" },
  { product: "lettuce", color: "green", textHex: "#479d45" },
  { product: "onion", color: "white", textHex: "#97906e" },
  { product: "banana", color: "yellow", textHex: "#ffbb1c" },
];

const SearchFoodsForm = () => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredFood = DUMMY_LIFETIME.filter(
    (food) => search === food.product.substring(0, search.length)
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search food"
        onChange={onChange}
        value={search}
      />
      {search !== "" && <SearchFoodsList data={filteredFood} />}
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
