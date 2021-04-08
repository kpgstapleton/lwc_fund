import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubB extends LightningElement {
  message
    connectedCallback(){
        this.callSubscriber()
    }
    callSubscriber(){
        pubsub.subscribe('componentA', (message)=>{
            this.message = message
        })
    }
}