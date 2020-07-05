export class NewsApi {
  constructor (options, fromDate) {
    this.options = options;
    this.fromDate = fromDate;
  }

  getNews(keyword) {
    return fetch(`${this.options.baseUrl}/everything?language=ru&from=${this.fromDate}&pageSize=100&sortBy=popularity&q=${keyword}&apiKey=${this.options.headers.KEY}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return  Promise.reject(res.status);
        })
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log('Ошибка загрузки новостей')
          return Promise.reject(err);
        });
  }
}