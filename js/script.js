let monthlyRate
let months
let futureValue
let monthlyInterest
let investment
let rate
let years
let calculate
let output

//Helper function to return DOM element
const $ = (id) => document.getElementById(id)

//Get the DOM elements
investment = $('investment')
rate = $('rate')
years = $("years")
calculate = $('calculate')
output = $('output')

function calculateInvestment(investment,rate,years){
    monthlyRate = rate/12/100
    months = years * 12
    for(let i=0;i< months; i++){
        monthlyInterest = investment * monthlyRate
        investment += monthlyInterest
    }
    return investment
}

calculate.addEventListener('click',()=>{
    futureValue = calculateInvestment(parseFloat(investment.value),parseFloat(rate.value),parseFloat(years.value))
    output.innerHTML = `Future value on investment: $${futureValue.toFixed(2)}`
})

