export class SetTableDays {

  constructor (day1, day2, day3, day4, day5, day6, day7) {
    this.day1 = day1;
    this.day2 = day2;
    this.day3 = day3;
    this.day4 = day4;
    this.day5 = day5;
    this.day6 = day6;
    this.day7 = day7;
  }

  setTableDays() {

    const weekDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const date = new Date();
    const dayOne = date.getDate();
    const weekDayOne = weekDays[date.getDay()];
    const yearOne = date.getFullYear();
    const monthOne = date.getMonth();

    const dateTwo = new Date(yearOne, monthOne, dayOne - 1);
    const dayTwo = dateTwo.getDate();
    const weekDayTwo = weekDays[dateTwo.getDay()];

    const dateThree = new Date(yearOne, monthOne, dayOne - 2);
    const dayThree = dateThree.getDate();
    const weekDayThree = weekDays[dateThree.getDay()];

    const dateFour = new Date(yearOne, monthOne, dayOne - 3);
    const dayFour = dateFour.getDate();
    const weekDayFour = weekDays[dateFour.getDay()];

    const dateFive = new Date(yearOne, monthOne, dayOne - 4);
    const dayFive = dateFive.getDate();
    const weekDayFive = weekDays[dateFive.getDay()];

    const dateSix = new Date(yearOne, monthOne, dayOne - 5);
    const daySix = dateSix.getDate();
    const weekDaySix = weekDays[dateSix.getDay()];

    const dateSeven = new Date(yearOne, monthOne, dayOne - 6);
    const daySeven = dateSeven.getDate();
    const weekDaySeven = weekDays[dateSeven.getDay()];

    localStorage.setItem('weekDay1', JSON.stringify(date.getDay()));
    localStorage.setItem('weekDay2', JSON.stringify(dateTwo.getDay()));
    localStorage.setItem('weekDay3', JSON.stringify(dateThree.getDay()));
    localStorage.setItem('weekDay4', JSON.stringify(dateFour.getDay()));
    localStorage.setItem('weekDay5', JSON.stringify(dateFive.getDay()));
    localStorage.setItem('weekDay6', JSON.stringify(dateSix.getDay()));
    localStorage.setItem('weekDay7', JSON.stringify(dateSeven.getDay()));

    this.day1.textContent = `${dayOne}, ${weekDayOne}`;
    this.day2.textContent = `${dayTwo}, ${weekDayTwo}`;
    this.day3.textContent = `${dayThree}, ${weekDayThree}`;
    this.day4.textContent = `${dayFour}, ${weekDayFour}`;
    this.day5.textContent = `${dayFive}, ${weekDayFive}`;
    this.day6.textContent = `${daySix}, ${weekDaySix}`;
    this.day7.textContent = `${daySeven}, ${weekDaySeven}`;

  }

}