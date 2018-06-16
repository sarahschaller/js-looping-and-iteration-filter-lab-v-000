function findMatching(drivers, name) {
  return drivers.filter(function(driverNames) {
    return driverNames.toLowerCase() === name.toLowerCase();
  });
}
