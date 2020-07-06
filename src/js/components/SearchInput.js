export class SearchInput {

  constructor (newsApi, searchInput, newCardList, cardsList) {
    this.newsApi = newsApi;
    this.searchInput = searchInput;
    this.newCardList = newCardList;
    this.cardsList = cardsList;
  }

  setSearchInput() {

    if (this.searchInput.validity.valueMissing) {
      this.searchInput.classList.add('intro__input_empty');
      this.searchInput.placeholder = 'Нужно ввести ключевое слово';
      return false;
    } else

    this.searchInput.classList.remove('intro__input_empty');
    this.searchInput.placeholder = 'Введите тему новости';
    document.querySelector('.notfound').style.display = 'none';
    document.querySelector('.loading').style.display = 'flex';

    this.newsApi.getNews(this.searchInput.value, this.millis, this.week)
        .then((data) => {

          if (data.articles.length == 0) {
            this.cardsList.innerHTML = '';
            document.querySelector('.notfound__title').textContent = 'Ничего не найдено';
            document.querySelector('.notfound__text').textContent = 'К сожалению по вашему запросу ничего не найдено.';
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.notfound').style.display = 'flex';
            document.querySelector('.cards').style.display = 'none';
            return false;
          }

          if (document.querySelector('.card') !== null) {
            this.cardsList.innerHTML = '';
          }

          localStorage.setItem('searchKeyword', JSON.stringify(this.searchInput.value));
          localStorage.setItem('fullResArr', JSON.stringify(data));
          localStorage.setItem('resArr', JSON.stringify(data.articles));
          localStorage.setItem('arrLength', JSON.stringify(data.articles.length));
          localStorage.setItem('start', 3);
          localStorage.setItem('end', 6);
          document.querySelector('.cards__button').style.display = 'block'; 
          document.querySelector('.loading').style.display = 'none'; 
          document.querySelector('.notfound').style.display = 'none'; 
          const newArr = data.articles.slice(0, 3);
          this.newCardList.addCard(newArr);
          document.querySelector('.cards').style.display = 'flex'; 

        })
        .catch((err) => {
          console.log(err);
          this.cardsList.innerHTML = '';
          document.querySelector('.notfound__title').textContent = 'Произошла ошибка';
          document.querySelector('.notfound__text').textContent = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
          document.querySelector('.loading').style.display = 'none'; 
          document.querySelector('.notfound').style.display = 'flex'; 
          document.querySelector('.cards').style.display = 'none'; 
        })
    }

    showMore () {

      const searchResObj = JSON.parse(localStorage.getItem('resArr'));
      const startValue = localStorage.getItem('start');
      const endValue = localStorage.getItem('end');

      if (endValue >= searchResObj.length) {
        document.querySelector('.cards__button').style.display = 'none';
      }

      const newSearchResObj = searchResObj.slice(startValue, endValue);

      this.newCardList.addCard(newSearchResObj);

      localStorage.setItem('start', JSON.parse(localStorage.getItem('start')) + 3);
      localStorage.setItem('end', JSON.parse(localStorage.getItem('end')) + 3);

    }

}
    
  