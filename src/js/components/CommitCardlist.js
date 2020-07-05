export class CommitCardlist {

  constructor (container, newCard, newGithubApi) {
    this.container = container;
    this.newCard = newCard;
    this.newGithubApi = newGithubApi;
  }
    
  addCommitCard (cardArr) {
    cardArr.forEach((item) => {
      const commitCard = this.newCard.createCommitCard(item.commit.committer.name, 
                                                       item.commit.committer.email, 
                                                       item.commit.committer.date, 
                                                       item.commit.message, 
                                                       item.author.avatar_url);                                             
      this.container.appendChild(commitCard);
    });
  }
 
  render (Swiper) {
    this.newGithubApi.getCommits()
        .then((data) => {
          this.addCommitCard(data);
          const swiper = new Swiper('.swiper-container', {
            breakpoints: {
              1: {
                loop: false,
                slidesPerView: 1
              },
              426: {
                slidesPerView: 2
              },
              767: {
                loop: true,
                slidesPerView: 3
              },
              769: {
                slidesPerView: 3
              },
              1440: {
                slidesPerView: 4
              },
              1920: {
                slidesPerView: 5
              },
              2560: {
                slidesPerView: 6
              }
            },
            loop: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });
        })
        .catch((err) => {
          console.log(err)
        })
  }

}