var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element){
  let newArray = array.slice()
  return newArray.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

function addElementToEndOfArray(array, element){
  let newArray = array.slice()
  return newArray.push(element)
}
function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element)
}

function removeElementFromEndOfArray(array){
  let newArray = array.slice(0, array.length - 1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  let array = array.pop()
  return array
}

function removeElementFromBeginningOfArray(array){
  let newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  let array = array.shift()
  return array
}

function accessElementInArray(array, index){
  return array[index]
}
