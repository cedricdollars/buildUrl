import { ICalculateTimeStamp } from './ICalculateService';


export class CalculateService implements ICalculateTimeStamp {

    calculateDuration(arrayOfItem: Array<number>): number | null {
      if(CalculateService.newestValueGreatherThanOddestValue(arrayOfItem)) {
          return null;
      }   
      return arrayOfItem[arrayOfItem.length - 1] - arrayOfItem[0];
    }
    calculateMedian(array: Array<number>): number | null {
        const middleOfArray: Array<number> = [];
        if(CalculateService.isArrayLengthIsEven(array)) {
            CalculateService.findMiddleOfArray(middleOfArray, array)
            return Math.floor((middleOfArray[0] + middleOfArray[middleOfArray.length - 1]) / 2)
        }
        else if(CalculateService.isArrayLengthIsOdd(array)) {
             return array[array.length - 1] - (array[(array.length + 1) / 2]);  
        }
        return 0
    }
    static findMiddle(array: Array<number>) {
        return array.length % 2 === 0;
    }
    static newestValueGreatherThanOddestValue(arrayOfelements: Array<number>) {
        return arrayOfelements[0] > arrayOfelements[arrayOfelements.length - 1];
    }
    static isArrayLengthIsEven(arrayOfElements: Array<number>) {
        return arrayOfElements.length % 2 === 0
    }
    static isArrayLengthIsOdd(arrayOfElements: Array<number>) {
        return arrayOfElements.length % 2 === 1
    }
    static findMiddleOfArray(arrayMiddlesValues: Array<number>, array: Array<number>) {
        arrayMiddlesValues.push(arrayMiddlesValues[arrayMiddlesValues.length / 2], array[array.length / 2 + 1])
    }
}