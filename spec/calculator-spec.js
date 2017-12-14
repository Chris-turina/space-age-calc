import { Years } from './../js/calc.js';

describe('Years', function() {
  const testAge = new Years();
  const testDate = new Date(2016,11,14);
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
});
