function findMatching(drivers, name) {
  return drivers.filter(function(driverNames) {
    return driverNames.toLowerCase() === name.toLowerCase();
  });
}


function fuzzyMath(drivers, name) {
  let char = name.length;
  return drivers.filter(function(driverNames) {
    return driverNames.slice(0, char) === name;
  });
}
