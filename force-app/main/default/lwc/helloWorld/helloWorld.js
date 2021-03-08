import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "John Smith";
    title = "aura";
    //method
    changeHandler(event){
        this.title = event.target.value;
    }
}