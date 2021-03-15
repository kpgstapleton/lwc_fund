import { LightningElement } from 'lwc';

export default class QuizzAppLWC extends LightningElement {
  
  selected={}//for storing answers
  correctAnswers = 0;
  isSubmitted = false;

  //stores questions for app
  myQuestions=[
    {
      id:"Question 1",
      question: "Which of the following is not a template loop?",
      answers:{
        a:"for:each",
        b:"iterator",
        c:"map loop"
      },
      correctAnswer:"c"
    },
    {
      id:"Question 2",
      question: "Which file is invalid in the LWC Component folder?",
      answers:{
        a:".svg",
        b:".apex",
        c:".js"
      },
      correctAnswer:"b"
    },
    {
      id:"Question 3",
      question: "Which of the following is not a directive?",
      answers:{
        a:"for:each",
        b:"if:true",
        c:"@track"
      },
      correctAnswer:"c"
    }
  ]

  //for disabling submit button
  get allNotSelected(){
    return !(Object.keys(this.selected).length === this.myQuestions.length);
  }

  //dynamic stylings for messasge
  get isScoredFull(){
    return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers? 'slds-text-color_success':'slds-text-color_error'}`;
  }

   //change handler for radio buttons
  changeHandler(event){
    console.log("name: ", event.target.name);
    console.log("value: ", event.target.value);
    const {name,value} = event.target;
    this.selected={...this.selected, [name]:value};
  }

   //form submit handler
  submitHandler(event){
    event.preventDefault();
    let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
    this.correctAnswers = correct.length;
    console.log("this.correctAnswers ", this.correctAnswers);
    this.isSubmitted = true;
  }

  //form reset handler
  resetHandler(){
    this.selected = {};
    this.correctAnswers = 0;
    this.isSubmitted = false; 
  }
}