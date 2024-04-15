/* Your Code Here */
/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass and it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(row) {
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeeRowData) {
    return employeeRowData.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    });

    return this;
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    });

    return this;
}

function hoursWorkedOnDate(soughtDate) {
    let inEvent = this.timeInEvents.find(e => e.date === soughtDate);
    let outEvent = this.timeOutEvents.find(e => e.date === soughtDate);

    return (outEvent.hour - inEvent.hour) / 100;
}

function wagesEarnedOnDate(dateSought) {
    let rawWage = hoursWorkedOnDate.call(this, dateSought) * this.payPerHour;
    return parseFloat(rawWage.toString());
}

function allWagesFor() {
    let payable = this.timeInEvents.reduce((totalWages, timeInEvent) => totalWages + wagesEarnedOnDate.call(this, timeInEvent.date), 0);
    return payable;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(rec => rec.firstName === firstName);
}

function calculatePayroll(arrayOfEmployeeRecords) {
    return arrayOfEmployeeRecords.reduce((totalPayroll, employeeRecord) => totalPayroll + allWagesFor.call(employeeRecord), 0);
}
