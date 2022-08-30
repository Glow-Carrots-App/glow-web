import countColors from "./countColors";

export default function hashDay(day) {
  const hashedDay =
    day.length === 0
      ? {}
      : countColors(day).reduce((acc, color) => {
          if (color.color === "Total") {
            return acc;
          }
          acc[color.fillHex] = color.percentage;
          return acc;
        }, {});

  return hashedDay;
}
