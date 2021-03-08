import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "John Smith";
    title = "aura";
    //method
    changeHandler(event){
        this.title = event.target.value;
    }

    @track address={
        city:'Cork',
        postcode:3123,
        country:'Australia'
    }

    trackHandler(event){
        this.address.city = event.target.value;
    }
}