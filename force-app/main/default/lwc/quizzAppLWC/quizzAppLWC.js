import { LightningElement } from 'lwc';

export default class QuizzAppLWC extends LightningElement {
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
}