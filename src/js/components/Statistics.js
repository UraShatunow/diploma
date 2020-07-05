export class Statistics {

  constructor (row1, row2, row3, row4, row5, row6, row7) {
    this.row1 = row1;
    this.row2 = row2;
    this.row3 = row3;
    this.row4 = row4;
    this.row5 = row5;
    this.row6 = row6;
    this.row7 = row7;
  }

  getResCountArr () {

    const searchKeyword = JSON.parse(localStorage.getItem('searchKeyword'));
    const searchKeywordLow = searchKeyword.toLowerCase();
    const newsArr =  JSON.parse(localStorage.getItem('resArr'));

    const weekDay1 = JSON.parse(localStorage.getItem('weekDay1'));
    const weekDay2 = JSON.parse(localStorage.getItem('weekDay2'));
    const weekDay3 = JSON.parse(localStorage.getItem('weekDay3'));
    const weekDay4 = JSON.parse(localStorage.getItem('weekDay4'));
    const weekDay5 = JSON.parse(localStorage.getItem('weekDay5'));
    const weekDay6 = JSON.parse(localStorage.getItem('weekDay6'));
    const weekDay7 = JSON.parse(localStorage.getItem('weekDay7'));

    let dayCounter1 = 0;
    let dayCounter2 = 0;
    let dayCounter3 = 0;
    let dayCounter4 = 0;
    let dayCounter5 = 0;
    let dayCounter6 = 0;
    let dayCounter7 = 0;
    

    newsArr.forEach((item) => {
      
      let itemDate = new Date(item.publishedAt);
      let itemWeekDay = itemDate.getDay();

      if (item.title !== null && item.description !== null && item.title.toLowerCase().includes(searchKeywordLow) || item.description.toLowerCase().includes(searchKeywordLow)) {

        if (itemWeekDay == weekDay1) {
          dayCounter1++;
        }

        if (itemWeekDay == weekDay2) {
          dayCounter2++;
        }

        if (itemWeekDay == weekDay3) {
          dayCounter3++;
        }

        if (itemWeekDay == weekDay4) {
          dayCounter4++;
        }

        if (itemWeekDay == weekDay5) {
          dayCounter5++;
        }

        if (itemWeekDay == weekDay6) {
          dayCounter6++;
        }

        if (itemWeekDay == weekDay7) {
          dayCounter7++;
        }

      }

      let resCountArr = [dayCounter1, dayCounter2, dayCounter3, dayCounter4, dayCounter5, dayCounter6, dayCounter7];
      localStorage.setItem('resCountArr', JSON.stringify(resCountArr));

    });

  }

  renderStatsTable () {

    const resCountArr = JSON.parse(localStorage.getItem('resCountArr'));
    const sum = resCountArr.reduce((a, b) => {return a + b}, 0);

    const res1 = Math.round((resCountArr[0] / sum) * 100);
    const res2 = Math.round((resCountArr[1] / sum) * 100);
    const res3 = Math.round((resCountArr[2] / sum) * 100);
    const res4 = Math.round((resCountArr[3] / sum) * 100);
    const res5 = Math.round((resCountArr[4] / sum) * 100);
    const res6 = Math.round((resCountArr[5] / sum) * 100);
    const res7 = Math.round((resCountArr[6] / sum) * 100);

    this.row1.textContent = resCountArr[0];
    this.row1.style.width = `${res1}%`;

    this.row2.textContent = resCountArr[1];
    this.row2.style.width = `${res2}%`;

    this.row3.textContent = resCountArr[2];
    this.row3.style.width = `${res3}%`;

    this.row4.textContent = resCountArr[3];
    this.row4.style.width = `${res4}%`;

    this.row5.textContent = resCountArr[4];
    this.row5.style.width = `${res5}%`;

    this.row6.textContent = resCountArr[5];
    this.row6.style.width = `${res6}%`;

    this.row7.textContent = resCountArr[6];
    this.row7.style.width = `${res7}%`;

  }

  renderTableDays (searchTopic, newsWeekCount, titleIncludesCount) {

    const countRes = JSON.parse(localStorage.getItem('fullResArr'));
    const searchKeyword = JSON.parse(localStorage.getItem('searchKeyword'));

    const newsArr =  JSON.parse(localStorage.getItem('resArr'));
    const arrLength =  JSON.parse(localStorage.getItem('arrLength'));

    let keywordInTitleCounter = 0;

    newsArr.forEach((item) => {
      if (item.title !== null && item.title.toLowerCase().includes(searchKeyword.toLowerCase())) {
        keywordInTitleCounter++;
      }
      titleIncludesCount.textContent = keywordInTitleCounter;
    });

    newsWeekCount.textContent = countRes.totalResults;
    searchTopic.textContent = searchKeyword;

  }

}