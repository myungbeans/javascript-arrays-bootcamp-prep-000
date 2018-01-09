let chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToEndOfArray(array, element){
  let newArray = [array, ...element]
  return newArray
}
function destructivelyAddElementToEndOfArray(array, element){
  return [array, ...element]
}

function addElementToBeginningOfArray(array, element){
  let newArray = array
  return newArray.unshift(element)
}
function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}
