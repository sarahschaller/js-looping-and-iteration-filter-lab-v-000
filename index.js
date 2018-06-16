function findMatching(drivers, name) {
  return drivers.filter(function(driverNames) {
    return driverNames.toLowerCase() === name.toLowerCase();
  });
}


function fuzzyMatch(drivers, letters) {
  let chars = letters.length;
  return drivers.filter(function(driverNames) {
    return driverNames.slice(0, chars) === letters;
  });
}
