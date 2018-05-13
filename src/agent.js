import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_RECIPE = 'https://assignment.yemek.com/list-page-';
const API_DETAILS = 'https://assignment.yemek.com/detail.json'; 

const responseBody = res => res.body;

const requests = {
  get: url =>
    superagent.get(`${API_RECIPE}${url}`).then(responseBody),
  getDetail: url =>
    superagent.get(API_DETAILS).then(responseBody),
};

const Recipes = {
  all: page =>
    requests.get(`${page = page + 1}.json`),
  getDetail: slug =>
    requests.getDetail(`${slug}`),
};

export default {
  Recipes,
};
