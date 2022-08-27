const filterFoodsForSearch = (alphabetizedFoods, selectedColor, searchInput) =>
  !selectedColor
    ? alphabetizedFoods.filter((food) =>
        food.productSearch.toLowerCase().includes(searchInput.toLowerCase())
      )
    : alphabetizedFoods.filter(
        (food) =>
          food.productSearch
            .toLowerCase()
            .includes(searchInput.toLowerCase()) && food.color === selectedColor
      );

export default filterFoodsForSearch;
