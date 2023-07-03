// Code your solution here

function findMatching(driverArray, string) {
    return driverArray.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(driverArray, string) {
    return driverArray.filter(function(driver) {
        return driver.toLowerCase().startsWith(string.toLowerCase())
    })
}

function matchName (objArray, string) {
    return objArray.filter(function(driver) {
        return driver.name === string;
    })
}