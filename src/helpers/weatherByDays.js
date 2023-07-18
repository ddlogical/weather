export function weatherByDays(data) {
  let currentDay = "";
  let results = {};
  for (let elem of data) {
    let [day] = elem.dt_txt.split(" ");
    if (currentDay !== day) {
      currentDay = day;
      results[currentDay] = [];
    }
    results[currentDay].push(elem);
  }
  return results;
}
