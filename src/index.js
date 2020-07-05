import "./styles/pages/index.css";
import {NewsCard} from "./js/components/NewsCard.js";
import {NewsCardlist} from "./js/components/NewsCardlist.js";
import {SearchInput} from "./js/components/SearchInput.js";
import {NewsApi} from "./js/modules/NewsApi.js";
import {GetDate} from "./js/utils/GetDate.js";

import {CARDS_LIST} from "./js/constants/constants.js";
import {SEARCH_BUTTON} from "./js/constants/constants.js";
import {SEARCH_INPUT} from "./js/constants/constants.js";
import {SHOW_MORE_BUTTON} from "./js/constants/constants.js";
import {PRELOADER} from "./js/constants/constants.js";

window.onload = function () {
    PRELOADER.style.display = 'none';
}

const newCard = new NewsCard();
const newCardList = new NewsCardlist(CARDS_LIST, newCard);

const newFromDate = new GetDate();
const fullFromDate = newFromDate.getFromDate();

const newsApi = new NewsApi({
    baseUrl: 'https://praktikum.tk/news/v2/',
    headers: {
        KEY: '47c530c3ee604c6da90a153e019432c6'
        }
    }, fullFromDate
); 

const newSearchInput = new SearchInput(newsApi, SEARCH_INPUT, newCardList, CARDS_LIST);
    
SEARCH_BUTTON.addEventListener('click', () => { newSearchInput.setSearchInput() });
SHOW_MORE_BUTTON.addEventListener ('click', () => { newSearchInput.showMore() });

