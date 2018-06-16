function findMatching(drivers, name) {
  return drivers.filter(function(driverNames) {
    return driverNames.toLowerCase() === name.toLowerCase();
  });
}


function fuzzyMath(drivers, letters) {
  const chars = name.length;
  return drivers.filter(function(driverNames) {
    return driverNames.slice(0, chars) === letters;
  });
}
