import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
  userNames = ['asd', '2sds', 'cvxzfd','cdcd'];

  fetchDetailHandler(){
    const elem = this.template.querySelector('h1');
    const userElements = this.template.querySelectorAll('.name'); //get the usernames listed in the class 'name'
    console.log(elem.innerText);
    Array.from(userElements).forEach(item=>{console.log(item.innerText)}); //userElements is a node so convert that to a proper array and then console.log that
  }

}