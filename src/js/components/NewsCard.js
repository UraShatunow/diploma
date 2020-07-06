export class NewsCard {

    createCard (sourceValue, titleValue, dataValue, descriptionValue, imageValue, urlValue) {
      const card = document.createElement('a');
      card.classList.add('card');
      card.setAttribute('href', urlValue);
      card.setAttribute('target', '_blank');

      const image = document.createElement('div');
      image.classList.add('card__pic');
      image.style.backgroundImage = `url('${imageValue}')`;

      const inner = document.createElement('div');
      inner.classList.add('card__inner');

      const data = document.createElement('p');
      data.classList.add('card__data');

      const date = new Date(dataValue);
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();

      let fMonth = 0;

      switch (month) {
          
      case 0: fMonth = 'января'; break;
      case 1: fMonth = 'февраля'; break;
      case 2: fMonth = 'марта'; break;
      case 3: fMonth = 'апреля'; break;
      case 4: fMonth = 'мая'; break;
      case 5: fMonth = 'июня'; break;
      case 6: fMonth = 'июля'; break;
      case 7: fMonth = 'августа'; break;
      case 8: fMonth = 'сентября'; break;
      case 9: fMonth = 'октября'; break;
      case 10: fMonth = 'ноября'; break;
      case 11: fMonth = 'декабря'; break;

      }

      data.textContent = `${day} ${fMonth}, ${year}`;

      const title = document.createElement('h3');
      title.classList.add('card__title');
      title.textContent = titleValue;

      const description = document.createElement('p');
      description.classList.add('card__text');
      description.textContent = descriptionValue;

      const source = document.createElement('p');
      source.classList.add('card__source');
      source.textContent = sourceValue;

      inner.appendChild(data);
      inner.appendChild(title);
      inner.appendChild(description);
      inner.appendChild(source);
      card.appendChild(image);
      card.appendChild(inner);

      return card;
  }

}