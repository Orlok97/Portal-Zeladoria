export const Navbar = {
  getUserInfo: function(nav) {
    fetch('https://orlok.pythonanywhere.com/api/v1', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      document.querySelector('#nome').innerText = data.name;
      document.querySelector('#email').innerText = data.version;
    })
    .catch(err => console.log(err));
  },
  render: function(nav) {
    nav.innerHTML = `
    <nav>
      <div class="nav-wrapper blue darken-2">
      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class=" material-icons">menu</i></a>
      
      </div>
      
    </nav>
    
    <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
    <div class="background">
    <img src="assets/bg.jpeg">
    </div>
    <a href="#user"><img class="circle" src="assets/avatar.jpeg"></a>
    <a href="#name" ><span id="nome" class="white-text name"></span></a>
    <a href="#email"><span id="email" class="white-text email"></span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>

    `
    this.getUserInfo()
  }
};

const services = [
  {
    nome: 'Cata-Treco',
    desc: 'remover os trecos da cidade'
  },
  {
    nome: 'Tapa-Buraco',
    desc: 'tapar os buraco e páh'
  },
  {
    nome:'Poda',
    desc:'podar as arvore e tals'
  }
  ]

export const Collapsible = {
  render: function(cont) {
    let comp = [];
    let activeItem='';
    for (let i = 0; i < services.length; i++) {
      if(i===0){
        activeItem='active';
      }
      else{
        activeItem='';
      }
      comp.push(
        `<li class=${activeItem}>
        <div class="collapsible-header"><i class="material-icons">whatshot</i>${services[i].nome}</div>
        <div class="collapsible-body">
        <span class="center-align">${services[i].desc}</span>
        <div class="flex justify-center my-4">
        <button class="btn">solicitar</button>
        </div>

        </div>
        </li>
        `)
    }
    cont.innerHTML = comp.join('');
  }
}