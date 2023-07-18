export function chartLabels(data, fiveDays = false) {
  if (!fiveDays) {
    return data
      .map((elem) => {
        const [, time] = elem.dt_txt.split(" ");
        return time.slice(0, -3);
      })
      .splice(0, 6);
  } else {
    const dataKeys = Object.keys(data).splice(0, 5);
    return dataKeys.map((elem) => {
      const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const day = new Date(elem).getDay();
      return daysInWeek[day];
    });
  }
}
