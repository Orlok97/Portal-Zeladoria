import { Navbar, Collapsible } from './components.js';

export function getPageContent(page) {
  fetch('/pages/'+page+'.html')
  .then(res => {
    if (res.status === 404) {
      renderPage(`<h2>Pagina "${page}" não encontrada</h2>`);
      throw new Error('pagina não encontrada');
    }
    return res.text()
  })
  .then(content => {
    renderPage(content);
  })
  .catch(error => {
    console.error(error);
  })
}
function pageEvents() {
  const cadastroForm = document.querySelector('#cadastro-form');
  cadastroForm ? cadastroForm.addEventListener('submit',
    (event)=> {
      event.preventDefault();
      alert('ok');
    }): null;

  const formLogin = document.querySelector('#form-login');
  formLogin ? formLogin.addEventListener('submit',
    (event)=> {
      event.preventDefault();
      console.log('ok')
    }): null;

  const btnHome = document.querySelector('#btn-tst');
  btnHome ? btnHome.addEventListener('click',
    ()=> {
      console.log('ok')
    }): null;
}
function renderComponents(){
  const nav=document.querySelector('#navbar');
  nav ? Navbar.render(nav) : null;
  
 const collapsible=document.querySelector('#collapsible');
  
  collapsible ? Collapsible.render(collapsible) : null;
}

function isAuthenticated(){
  const token = sessionStorage.getItem('token');
  if(!token){
    console.log('token required');
    //window.location='/';
  }
}

function renderPage(data) {
  app.innerHTML = data;
  const protectedPage=document.querySelector('#protected');
  protectedPage ? isAuthenticated() : null;
  renderComponents();
  M.AutoInit();
  pageEvents();
}