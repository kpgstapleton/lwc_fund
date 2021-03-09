import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "John Smith";
    title = "aura";
    //method
    changeHandler(event){
        this.title = event.target.value;
    }

    address={
        city:'Cork',
        postcode:3123,
        country:'Australia'
    }

    trackHandler(event){
        this.address = {...this.address, "city":event.target.value}
    }

    users = ["john", "smith", "kevin"]
    num1 = 10;
    num2 = 12;

    get firstUser(){
        return this.users[0];
    }

    get multiply(){
        return this.num1*this.num2
    }
}