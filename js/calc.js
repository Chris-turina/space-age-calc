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
};

ageCalc(date) {
  let age = Math.floor(this.ageInSeconds(date) / 31536000);
  return age;
};

mercuryCalc(date) {
  return ((this.ageInSeconds(date) / .24) / 31536000).toFixed(2);
};

venusCalc(date) {
  return ((this.ageInSeconds(date) / .62) / 31536000).toFixed(2);
};

marsCalc(date) {
  return ((this.ageInSeconds(date) / 1.88) / 31536000).toFixed(2);
};

jupiterCalc(date) {
  return ((this.ageInSeconds(date) / 11.86) / 31536000).toFixed(2);
};

};
