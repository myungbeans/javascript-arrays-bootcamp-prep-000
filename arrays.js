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

function removeElementFromEndOfArray(array){
  let newArray = array.slice(0, array.length - 1)
  return newArray
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

function removeElementFromBeginningOfArray(array){
  let newArray = array.slice(1)
  return newArray
}
function destructivelyRemoveElementFromBeginningOfArray

function accessElementInArray(array, index){
  return array[index]
}
