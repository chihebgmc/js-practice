// Find the Smallest and Biggest Numbers
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// Ageing the Population...
function afterNYears(names, n) {
  for (const key in names) {
    names[key] += Math.abs(n);
  }
  return names;
}

// Get Sum of People's Budget
function getBudgets(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element.budget;
  }
  return sum;
}

// Printer Levels
function inkLevels(inks) {
  return Math.min(...Object.values(inks));
}

// International Greetings
const GUEST_LIST = {
  Randy: 'Germany',
  Karla: 'France',
  Wendy: 'Japan',
  Norman: 'England',
  Sam: 'Argentina',
};

function greeting(name) {
  if (Object.keys(GUEST_LIST).indexOf(name) > -1) {
    return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
  } else {
    return "Hi! I'm a guest.";
  }
}

// Convert Key, Values in an Object to Array
function objectToArray(obj) {
  return Object.entries(obj);
}

// Absolute Sum
function getAbsSum(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += Math.abs(element);
  }
  return sum;
}

// Filter out Strings from an Array
function filterArray(arr) {
  const newArr = [];
  for (const element of arr) {
    if (typeof element === 'number') {
      newArr.push(element);
    }
  }
  return newArr;
}

// How Much is True?
function countTrue(arr) {
  let count = 0;
  for (const element of arr) {
    if (element === true) {
      count++;
    }
  }
  return count;
}
