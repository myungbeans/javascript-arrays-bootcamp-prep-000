var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToEndOfArray(array, element){
  let newArray = array.push(element)
  return newArray
}
function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element)
}

function addElementToBeginningOfArray(array, element){
  let newArray = array
  return newArray.unshift(element)
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
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function accessElementInArray(array, index){
  return array[index]
}
