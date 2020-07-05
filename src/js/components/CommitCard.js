export class CommitCard {

  createCommitCard (nameValue, emailValue, dataValue, messageValue, avatarUrlValue) {

      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');

      const data = document.createElement('p');
      data.classList.add('swiper__data');
      data.textContent = dataValue;

      const author = document.createElement('div');
      author.classList.add('swiper__author');

      const avatar = document.createElement('div');
      avatar.classList.add('swiper__avatar');
      avatar.style.backgroundImage = `url('${avatarUrlValue}')`;

      const info = document.createElement('div');
      info.classList.add('swiper__info');

      const name = document.createElement('h3');
      name.classList.add('swiper__name');
      name.textContent = nameValue;

      const email = document.createElement('p');
      email.classList.add('swiper__email');
      email.textContent = emailValue;

      const text = document.createElement('p');
      text.classList.add('swiper__text');
      text.textContent = messageValue;

      info.appendChild(name);
      info.appendChild(email);
      author.appendChild(avatar);
      author.appendChild(info);
      author.appendChild(text);
      slide.appendChild(data);
      slide.appendChild(author);

      return slide;
      
    }

}