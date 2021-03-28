import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
  constructor(){
    super()
    console.log('child constructor called')
  }

  connectedCallback(){

    console.log('child connected callback called')
    throw new Error('loading of child component failed')
  }

  renderedCallback(){
    console.log('child rendered callback called')
  }

  disconnectedCallback(){
    alert('I am going away');
  }
}