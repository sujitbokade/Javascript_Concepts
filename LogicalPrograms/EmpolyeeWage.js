var employeePresentFullTime = 1
var employeePresentPartTime = 2
var wagePerHr = 20
var fullDayHr = 8
var partTimeHr = 4
var totalWorkingDays = 20
var totalWorkingHrs = 100
var dailyWage = 0
var day = 1
var totalWage = 0
var workingHr = 0

while (day <= totalWorkingDays && workingHr < totalWorkingHrs) {
     var random = Math.floor(Math.random() * 3) ;
  
  if (random == employeePresentFullTime) {
    console.log("Employee is Present Full Time")
     dailyWage = fullDayHr * wagePerHr
     workingHr += fullDayHr
  } else if (random == employeePresentPartTime) {
    console.log("Employee is Present Part Time");
    dailyWage = partTimeHr * wagePerHr
    workingHr += partTimeHr
  } else {
    console.log("Employee is Absent");
    dailyWage = 0
  }
  console.log("Daily wage for day " + day +" is " + dailyWage + " /- Rupees")
  totalWage += dailyWage
  day += 1
}
console.log("--------------------------")
console.log("Total Working Hrs "+ workingHr)
console.log("TotalWage is "+ totalWage)
