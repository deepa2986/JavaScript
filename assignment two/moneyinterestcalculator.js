export let principal = 10000
export var time = 4
export const interestRate = 2.2

export function moneyInterestCalculate(){

     let interest = (principal * interestRate * time)/100
     console.log("Simple Interesr : " ,interest)

}

