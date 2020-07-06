export class NewsCardlist {

  constructor (container, newCard) {
    this.container = container;
    this.newCard = newCard;
  }
    
  addCard (cardArr) {
    cardArr.forEach((item) => {
        const newsCard = this.newCard.createCard(item.source.name, item.title, item.publishedAt, item.description, item.urlToImage, item.url);
        
        this.container.appendChild(newsCard);
    });
  }

}