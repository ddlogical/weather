export function chartData(data, fiveDays = false) {
  if (!fiveDays) {
    return data.map((elem) => Math.round(elem.main.temp)).splice(0, 6);
  } else {
    const result = [];
    const dataKeys = Object.keys(data);
    const extraKey = dataKeys.length > 5 ? dataKeys[5] : "";
    for (const [key, day] of Object.entries(data)) {
      if (key !== extraKey) {
        const totalTemp = day.reduce((acc, elem) => acc + elem.main.temp, 0);
        const averageTemp = Math.round(totalTemp / day.length);
        result.push(averageTemp);
      }
    }
    return result;
  }
}
