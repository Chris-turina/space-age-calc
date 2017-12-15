export class Years {
  constructor() {

  }

  ageInSeconds(date) {
    const currentDate = new Date();
    let birthDate = new Date(date)
    let currentDateSec = currentDate.getTime()/1000;
    let birthDateSec = birthDate.getTime()/1000;
    let ageSec = currentDateSec - birthDateSec;
    return ageSec;

  }

  ageCalc(date) {
    let age = Math.floor(this.ageInSeconds(date) / 31536000);
    return age;
  }

  averageLifeExpectancy(date){
    let age = this.ageCalc(date)
    const avgLifeExpextancy = 78;
    let yearsLeft = avgLifeExpextancy - age;
    if (yearsLeft < 0) {
      return(`You have lived longer then the average human!`)
    } else {
      return(`You have ${yearsLeft} years left to live!`)
    }
  }

  mercuryCalc(date) {
    return ((this.ageInSeconds(date) / .24) / 31536000).toFixed(2);
  }

  mercuryAvgExpectancy(date){
    let age = this.mercuryCalc(date);
    const avgLifeExpextancy = (78 * .24).toFixed(2) ;
    let yearsLeft = (avgLifeExpextancy - age);
    if (yearsLeft < 0) {
      return(`You have lived longer then the average human!`)
    } else {
      return(`You have ${yearsLeft} years left to live!`)
    }
  }


  venusCalc(date) {
    return ((this.ageInSeconds(date) / .62) / 31536000).toFixed(2);
  }

  venusAvgExpectancy(date){
    let age = this.venusCalc(date);
    const avgLifeExpextancy = 78 * .62 ;
    let yearsLeft = avgLifeExpextancy - age;
    if (yearsLeft < 0) {
      return(`You have lived longer then the average human!`)
    } else {
      return(`You have ${yearsLeft} years left to live!`)
    }
  }

  marsCalc(date) {
    return ((this.ageInSeconds(date) / 1.88) / 31536000).toFixed(2);
  }

  marsAvgExpectancy(date){
    let age = this.marsCalc(date);
    const avgLifeExpextancy = 78 / 1.88 ;
    let yearsLeft = avgLifeExpextancy - age;
    if (yearsLeft < 0) {
      return(`You have lived longer then the average human!`)
    } else {
      return(`You have ${yearsLeft} years left to live!`)
    }
  }

  jupiterCalc(date) {
    return ((this.ageInSeconds(date) / 11.86) / 31536000).toFixed(2);
  }

  jupiterAvgExpectancy(date){
    let age = this.jupiterCalc(date);
    const avgLifeExpextancy = 78 / 11.86 ;
    let yearsLeft = avgLifeExpextancy - age;
    if (yearsLeft < 0) {
      return(`You have lived longer then the average human!`)
    } else {
      return(`You have ${yearsLeft} years left to live!`)
    }
  }




}
