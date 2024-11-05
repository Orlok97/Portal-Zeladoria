import { getPageContent } from './modules/pages.js';

function navigate() {
  let indexPage = 'login';
  let url = new URLSearchParams(window.location.search);
  let page = url.get('page');
  if (window.location.search === ''){
    getPageContent(indexPage);
    console.log('index page');
  }
  if(page){
    getPageContent(page);
  }
}

document.addEventListener('DOMContentLoaded', ()=> {
  const app = document.querySelector('#app');
  navigate();
});