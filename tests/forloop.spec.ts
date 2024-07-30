import { test, expect } from '@playwright/test';

const cityName = ['Rourkela','Bhubaneswar','Bangalore','Delhi','Mumbai']
import {EHttpStatusCode} from '../src/enum/direction.enum'

let a;
let b;

function addition (a:Number,b:Number){
   return (Number(a) + Number(b))
}

test('For Loop Examples', async({page}) =>{

    await page.goto('https://www.globalsqa.com/angularJs-protractor/WebTable/')
    await page.waitForTimeout(2000)


    // TypeScript - for Loops -- TypeScript supports the following for loops:

    // console.log('-----------------   for loop ----------------------')

    // for (let i=0;i<cityName.length;i++){
    // console.log ('City > ' + i +' Name >>> ' + cityName[i] )
    // }

    // console.log('-----------------   for.in loop ----------------------')

    // for (var index in cityName) {
    //     console.log ('City > ' + index +' Name >>> ' + cityName[index] )
    // }

    // console.log('-----------------   for.of loop ----------------------')

    // for (var values in cityName) {

    //    console.log ('City > Name >>> ' + cityName[values] )
    // }


    //Enum File

    console.log (EHttpStatusCode.BadRequest);


    //Interface File
      
    console.log (addition (56,3453))

    interface SumValue {
      a: number;
      b: number;
      }
      let myObj = { a: 10, b: 500 };
      
      function printSum(SumObj: SumValue) {
      console.log(Number(SumObj.a) + Number(SumObj.b));
      }

      printSum(myObj)

})