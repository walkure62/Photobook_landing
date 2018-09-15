'use strict';

class Component {
    constructor(element) {
        this._element = element;
    }

    hide() {
        this._element.hidden = true;
    }
}


class Menu extends Component {
    constructor(element, options) {
        super(element);

        this._options = options;

        this._render();

        element.addEventListener('click', (event) => {
            let titleElement = event.target.closest('.menu__title');

            if (!titleElement) {
                return;
            }

            element.classList.toggle('menu--closed');
        });

        document.addEventListener('click', (event) => {
            if (!element.contains(event.target)) {
                this.close();
            }
        });
    }

    close() {
        this._element.classList.add('menu--closed');
    }

    hide() {
        super.hide();
    }

    _render() {
        this._element.innerHTML = `
     <span class="menu__title"><img src="images/menu.png" alt="menu"></span>
    
    <ul class="menu__list">
      ${ this._options.map(option => `

        <li class="menu__item">${ option }</li>
        
      `).join('') }
    </ul>
  `;
    }
}

let menu1 = new Menu(
    document.querySelector('#menu1'),
    ['Главная', 'Создать фотокнигу', 'Доставка и оплата', 'Контакты']
);


menu1.close();


class Component2 {
    constructor(element) {
        this._element = element;
    }
}


class Entrance extends Component2 {
    constructor( element, title, options, placeholder) {
        super(element);
        this._title = title;
        this._options = options;

        this._render();

        element.addEventListener('click', (event) => {
            let titleElement = event.target.closest('.input__img');

            if (!titleElement) {
                return;
            }

            document.querySelector('#login').classList.toggle('login--closed');
        });

        document.addEventListener('click', (event) => {
            if (!element.contains(event.target)) {
                this.close();
            }
        });
    }

    close() {
        document.querySelector('#login').classList.add('login--closed');
    }

    _render() {
        this._element.innerHTML = `
     <img class="input__img" src="images/in.png">
     <div class="login login--closed" id="login">
     <span class="input__title"> ${ this._title}</span>
     ${ this._options.map(option => `
        <input value="" type=${option} autofocus placeholder=""/>
      `).join('') }
     <button class="send_login" type="submit">Войти</button>
     </div>
     `;
    }
}

let input1 = new Entrance(
    document.querySelector('#logIn'), 'Личный кабинет',
    ['text', 'password']
);

input1.close();