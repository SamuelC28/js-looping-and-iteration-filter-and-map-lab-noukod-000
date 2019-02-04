// // Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return parseInt(driver.revenue) > parseInt(revenue)
  });
}


function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
  return driver.revenue > parseInt(revenue)}).map(function(driver) {return driver.name});
}


function driverNamesWithRevenueOver(drivers, revenue){
    return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

// function exactMatch(drivers, revenue) {
//   return drivers.filter(driver => driver, )
// }


//
// function exactMatch(drivers, {key: value}) {
//   return drivers.filter(function(driver){
//   return drivers.filter(attributeFilter);
// }


function exactMatch(drivers, revebue) {
  if drivers.filter(function (driver)) {
    return driver.hasOwnProperty(Object.keys(objectSpec)[0] == Object.values(objectSpec)[0];
  }
}






//
// function exactMatch(drivers, objectSpec){
//     return drivers.filter(function (driver) {
//         return driver[Object.keys(objectSpec)[0]] == Object.values(objectSpec)[0];
//     });
// }
//
// function exactMatchToList(drivers, objectSpec){
//     return exactMatch(drivers,objectSpec).map(driver => driver.name);
// }
