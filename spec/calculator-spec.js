import { Years } from './../js/calc.js';

describe('Years', function() {
  const testAge = new Years();
  const testDate = new Date(2016,11,14);
  const expiredDate = new Date(1901,11,14);
  let testAgeYears = testAge.ageInSeconds(testDate);

  it('should return a persons age', function() {
    expect(Math.round(testAge.ageInSeconds(testDate)/31536000)).toEqual(1);
  });

  it('should return a persons age in seconds', function() {
    expect(Math.round(testAge.ageInSeconds(testDate))).toEqual(Math.round(testAgeYears * 1));
  });

  it('should return a persons age in mars years', function() {
    expect(Math.round(testAge.mercuryCalc(testDate))).toEqual(Math.round((testAgeYears / .24)/31536000));
  });

  it('should return a persons age in venus years', function() {
    expect(Math.round(testAge.venusCalc(testDate))).toEqual(Math.round((testAgeYears / .62)/31536000));
  });

  it('should return a persons age in mars years', function() {
    expect(Math.round(testAge.marsCalc(testDate))).toEqual(Math.round((testAgeYears / 1.88)/31536000));
  });

  it('should return a persons age in jupiter years', function() {
    expect(Math.round(testAge.jupiterCalc(testDate))).toEqual(Math.round((testAgeYears / 11.86)/31536000));
  });
//
//
//
//

  it('should return how many years a person has left on mercury', function() {
    expect(testAge.mercuryAvgExpectancy(testDate)).toEqual(`You have ${((78 * .24) - testAge.mercuryCalc(testDate)).toFixed(2)} years left to live!`);
  });

  it('should return a message stating that they have surpassed the average life expectancy on mercury', function() {
    expect(testAge.mercuryAvgExpectancy(expiredDate)).toEqual("You have lived longer then the average human!");
  });

  it('should return how many years a person has left on venus', function() {
    expect(testAge.venusAvgExpectancy(testDate)).toEqual(`You have ${(78 * .62) - testAge.venusCalc(testDate)} years left to live!`);
  });

  it('should return a message stating that they have surpassed the average life expectancy on venus', function() {
    expect(testAge.venusAvgExpectancy(expiredDate)).toEqual("You have lived longer then the average human!");
  });

  it('should return how many years a person has left on mars', function() {
    expect(testAge.marsAvgExpectancy(testDate)).toEqual(`You have ${(78 / 1.88) - testAge.marsCalc(testDate)} years left to live!`);
  });

  it('should return a message stating that they have surpassed the average life expectancy on mars', function() {
    expect(testAge.marsAvgExpectancy(expiredDate)).toEqual("You have lived longer then the average human!");
  });

  it('should return how many years a person has left on jupiter', function() {
    expect(testAge.jupiterAvgExpectancy(testDate)).toEqual(`You have ${(78 / 11.86) - testAge.jupiterCalc(testDate)} years left to live!`);
  });

  it('should return a message stating that they have surpassed the average life expectancy on jupiter', function() {
    expect(testAge.jupiterAvgExpectancy(expiredDate)).toEqual("You have lived longer then the average human!");
  });
});
