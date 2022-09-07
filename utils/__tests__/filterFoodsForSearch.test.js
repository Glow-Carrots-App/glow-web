import filterFoodsForSearch from "../filterFoodsForSearch";

const alphebetizedFoodList = [
  {
    product: "Cherry",
    productSearch: "Cherry",
    color: "Red",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: null,
  },
  {
    product: "Cabbage",
    productSearch: "Cabbage (Green)",
    color: "Green",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: null,
  },
  {
    product: "Lettuce",
    productSearch: "Lettuce (Green)",
    color: "Red",
    textHex: "#479D45",
    fillHex: "#6AAB9C",
    date: null,
  },
];

const INPUT_CONDITION = {
  productSearch: "Cherry",
};

const COLOR_CONDITION = {
  color: "Red",
};

const testSearchInput = "che";
const testSearchInput2 = "";
const testColorFilter = null;
const testColorFilter2 = "Red";

describe("filterFoodsForSearch", () => {
  it("returns an array", () => {
    const testSearch = filterFoodsForSearch(
      alphebetizedFoodList,
      testColorFilter,
      testSearchInput
    );
    expect(Array.isArray(testSearch)).toBe(true);
  });

  it("returns an array that matches testSearchInput condition", () => {
    const testSearch = filterFoodsForSearch(
      alphebetizedFoodList,
      testColorFilter,
      testSearchInput
    );
    testSearch.forEach((food) => expect(food).toMatchObject(INPUT_CONDITION));
  });

  it("returns an array that matches testColorFilter condition", () => {
    const testSearch = filterFoodsForSearch(
      alphebetizedFoodList,
      testColorFilter2,
      testSearchInput2
    );
    testSearch.forEach((food) => expect(food).toMatchObject(COLOR_CONDITION));
  });
});
