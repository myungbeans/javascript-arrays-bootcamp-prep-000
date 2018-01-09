let chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToEndOfArray(array, element){
  let newArray = [array, ...element]
  return newArray
}
function destructivelyAddElementToEndOfArray(array, element){
  return [array, ...element]
}

function addElementToBeginningOfArray(array, element){
  let newArray = [element, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element){
  return [...element, array]
}
