let chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToEndOfArray(array, element){
  let newArray = array
  return newArray.push(element)
}
function destructivelyAddElementToEndOfArray(array, element){
  return newArray.push(element)
}

function addElementToBeginningOfArray(array, element){
  let newArray = array
  return newArray.unshift(element)
}
function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}
