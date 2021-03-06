const findBestEmployee = function (employees) {

    const checkKeys = Object.keys(employees);
    const checkValues = Object.values(employees);

    let theBiggestNumber = Math.max(...checkValues);

    let findIndex = checkValues.indexOf(theBiggestNumber);

    return checkKeys[findIndex]
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
