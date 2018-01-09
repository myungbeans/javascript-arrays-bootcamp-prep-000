var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToEndOfArray(array, element){
  let newArray = [array, ...element]
  return newArray
}
function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element)
}

function addElementToBeginningOfArray(array, element){
  let newArray = [element, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

function accessElementInArray(array, index){
  return array[index]
}
