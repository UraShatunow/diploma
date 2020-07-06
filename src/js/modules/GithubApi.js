export class GithubApi {
  constructor (options) {
    this.options = options;
  }

  getCommits() {
    return fetch('https://api.github.com/repos/UraShatunow/diploma/commits')
      .then((res) => {
          if (res.ok) {
          return res.json();
          }
          return Promise.reject(res.status);
      })
      .then((data) => {
          return data.slice(-20);
      })
      .catch((err) => {
          console.log('Ошибка загрузки карточек коммитов');
          return Promise.reject(err);
      })
    
  }
}