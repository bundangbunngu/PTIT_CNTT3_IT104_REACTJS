enum weekDays {
  Monday = "Thứ Hai",
  Tuesday = "Thứ Ba",
  Wednesday = "Thứ Tư",
  Thursday = "Thứ Năm",
  Friday = "Thứ Sáu",
  Saturday = "Thứ Bảy",
  Sunday = "Chủ Nhật",
}

let days: weekDays[] = [
  weekDays.Monday,
  weekDays.Tuesday,
  weekDays.Wednesday,
  weekDays.Thursday,
  weekDays.Friday,
  weekDays.Saturday,
  weekDays.Sunday,
];

for (let day of days) {
  console.log(day);
}
