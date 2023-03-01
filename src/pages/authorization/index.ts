import template from './authorization.hbs';
import Block from '../../utils/Block';
import { Button } from '../../components/button';
import { Link } from '../../components/link';
import { renderDOM } from '../../utils/renderDOM';
import { printValues, validate } from '../../utils/formUtils';
import { FormField } from '../../components/formField';

export class Authorization extends Block {
  constructor() {
    super('form');
    this.setProps({       
      events: {
         submit: (event: Event) => {event.preventDefault(); 
          validate(this.children);         
          printValues(this.children);}
       },     
     })
  }  
 

  init() {
    this.element?.classList.add('container');      
    this.children.login = new FormField({label: 'Логин',          
      name: 'login',
      value: 'ivanivanov',
      type: 'text', 
      errorText: "",
  validationType: "login"})   
    this.children.password = new FormField({ label: 'Пароль',
      name: 'password',
      value: '******',
      type: 'password', 
      errorText: 'Некорректная длина символов',
      validationType: "password"});    
    this.children.button = new Button({
      title: 'Войти'    
    });
    this.children.link = new Link({
      title: 'Нет аккаунта?',
      events: {
        click: () => renderDOM('registration'),
      },
    });
  }

  render() {    
    return this.compile(template, this.props);
  }
}