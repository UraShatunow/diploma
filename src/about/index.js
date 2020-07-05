import "../styles/pages/index.css";
import "../../node_modules/swiper/css/swiper.min.css";
import {CommitCard} from "../js/components/CommitCard.js";
import {CommitCardlist} from "../js/components/CommitCardlist.js";
import {GithubApi} from "../js/modules/GithubApi.js";
import Swiper from "swiper";

import {PRELOADER} from "../js/constants/constants.js";
import {SWIPER_CONTAINER} from "../js/constants/constants.js";


window.onload = function () {
    PRELOADER.style.display = 'none';
}

const newCard = new CommitCard();
const newGithubApi = new GithubApi();
const newCardlist = new CommitCardlist(SWIPER_CONTAINER, newCard, newGithubApi);

newGithubApi.getCommits();
newCardlist.render(Swiper);










