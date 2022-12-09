/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

//  describe("createEmployeeRecord", function () {
//     it("populates a firstName field from the 0th element", function () {
//       let testEmployee = createEmployeeRecord(["Gray", "Worm", "Security", 1])
//       expect(testEmployee.firstName).to.eq("Gray")
//     })

function createEmployeeRecord(employeeArray) {
  const newEmployee = {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return newEmployee;
}

function createEmployeeRecords(employeeArray){
  const newEmployee = employeeArray.map(createEmployeeRecord)
  return newEmployee
}

function createTimeInEvent(dateStamp) {

  const newTimeInEvent = {
    type: "TimeIn",
    hour: parseInt(dateStamp.split(" ")[1]),
    date:(dateStamp).split(" ")[0],
  }
  this.timeInEvents.push(newTimeInEvent)
  return this
}

function createTimeOutEvent(dateStamp) {
  const newTimeOutEvent = {
    type: "TimeOut",
    hour: parseInt(dateStamp.split(" ")[1]),
    date:(dateStamp).split(" ")[0],
  }
  this.timeOutEvents.push(newTimeOutEvent)
return this
}

const hoursWorkedOnDate = function (dateForm) {

  const timeIn = this.timeInEvents.filter((event) => {
    return event.date === dateForm;
  });
  const timeOut = this.timeOutEvents.filter((event) => {
    return event.date === dateForm;
  });
  return (timeOut[0].hour - timeIn[0].hour) / 100;
};
  
function wagesEarnedOnDate(dateForm)  {
  const totalPay = hoursWorkedOnDate.call(this, dateForm) * this.payPerHour;
  return totalPay
};


const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });
  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!
  return payable;
};

function findEmployeeByFirstName(array, name) {
  const findEmployee = array.find(employee => employee.firstName === name)
    return findEmployee
}

function calculatePayroll(employeeArray) {
  const totalPayroll = employeeArray.reduce((accumulator, employee) => {
    return allWagesFor.call(employee) + accumulator;
  }, 0);
  return totalPayroll;
};