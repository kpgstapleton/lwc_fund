import { LightningElement, api } from 'lwc';

export default class P2cParentComponent extends LightningElement {
  // @api message
  // @api cardHeading
  percentage = 10;
  
  changeHandler(event){
    this.percentage = event.target.value;
  }

  carouselData=[
    {
      src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
      header:"First Card",
      description:"First card description.",
      "alternative-text": "text"
    },
    {
      src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
      header:"Second Card",
      description:"Second card description.",
      "alternative-text": "text"
    },
    {
      src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
      header:"Third Card",
      description:"Third card description.",
      "alternative-text": "text"
    }
  ]

  handleClick(){
    this.template.querySelector('c-p2c-slider-component').resetSlider();
  }
}