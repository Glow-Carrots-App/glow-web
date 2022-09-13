import filterFoodsForSearch from "../filterFoodsForSearch";

const ALPHABETIZED_FOOD_LIST = [
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

const TEST_SEARCH_INPUTS = "che";
const TEST_SEARCH_INPUTS_2 = "";
const TEST_COLOR_FILTER = null;
const TEST_COLOR_FILTER_2 = "Red";

describe("filterFoodsForSearch", () => {
  it("returns an array", () => {
    const testSearch = filterFoodsForSearch(
      ALPHABETIZED_FOOD_LIST,
      TEST_COLOR_FILTER,
      TEST_SEARCH_INPUTS
    );
    expect(Array.isArray(testSearch)).toBe(true);
  });

  it("returns an array that matches TEST_SEARCH_INPUTS condition", () => {
    const testSearch = filterFoodsForSearch(
      ALPHABETIZED_FOOD_LIST,
      TEST_COLOR_FILTER,
      TEST_SEARCH_INPUTS
    );
    testSearch.forEach((food) => expect(food).toMatchObject(INPUT_CONDITION));
  });

  it("returns an array that matches TEST_COLOR_FILTER condition", () => {
    const testSearch = filterFoodsForSearch(
      ALPHABETIZED_FOOD_LIST,
      TEST_COLOR_FILTER_2,
      TEST_SEARCH_INPUTS_2
    );
    testSearch.forEach((food) => expect(food).toMatchObject(COLOR_CONDITION));
  });
});
