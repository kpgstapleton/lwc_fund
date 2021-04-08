import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubA extends LightningElement {
  message 
  inputHandler(message){
    this.message = event.target.value;
  }
  publishHandler(){
    pubsub.publish('componentA', this.message);
  }
}