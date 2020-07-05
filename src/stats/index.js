import "../styles/pages/index.css";
import {SetTableDays} from "../js/utils/SetTableDays.js";
import {Statistics} from "../js/components/Statistics.js";


import {PRELOADER} from "../js/constants/constants.js";

import {SEARCH_TOPIC} from "../js/constants/constants.js";
import {NEWS_WEEK_COUNT} from "../js/constants/constants.js";
import {TITLE_INCLUDES_COUNTER} from "../js/constants/constants.js";

import {TABLE_DATA_1} from "../js/constants/constants.js";
import {TABLE_DATA_2} from "../js/constants/constants.js";
import {TABLE_DATA_3} from "../js/constants/constants.js";
import {TABLE_DATA_4} from "../js/constants/constants.js";
import {TABLE_DATA_5} from "../js/constants/constants.js";
import {TABLE_DATA_6} from "../js/constants/constants.js";
import {TABLE_DATA_7} from "../js/constants/constants.js";

import {TABLE_BLUE_1} from "../js/constants/constants.js";
import {TABLE_BLUE_2} from "../js/constants/constants.js";
import {TABLE_BLUE_3} from "../js/constants/constants.js";
import {TABLE_BLUE_4} from "../js/constants/constants.js";
import {TABLE_BLUE_5} from "../js/constants/constants.js";
import {TABLE_BLUE_6} from "../js/constants/constants.js";
import {TABLE_BLUE_7} from "../js/constants/constants.js";

window.onload = function () {
  PRELOADER.style.display = 'none';
}

const newSetTableDays = new SetTableDays (TABLE_DATA_1,
                                          TABLE_DATA_2,
                                          TABLE_DATA_3,
                                          TABLE_DATA_4,
                                          TABLE_DATA_5,
                                          TABLE_DATA_6,
                                          TABLE_DATA_7);
newSetTableDays.setTableDays();

const newStatistics = new Statistics (TABLE_BLUE_1,
                                      TABLE_BLUE_2,
                                      TABLE_BLUE_3,
                                      TABLE_BLUE_4,
                                      TABLE_BLUE_5,
                                      TABLE_BLUE_6,
                                      TABLE_BLUE_7);
newStatistics.getResCountArr();
newStatistics.renderStatsTable();
newStatistics.renderTableDays(SEARCH_TOPIC, NEWS_WEEK_COUNT, TITLE_INCLUDES_COUNTER);





