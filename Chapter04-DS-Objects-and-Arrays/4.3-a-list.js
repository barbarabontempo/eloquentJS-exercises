/*
A list
Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
The resulting objects form a chain, like this:

A linked list
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      list = { value: arr[i], rest: list };
    }
    return list;
  }
  // console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  
  function listToArray(list) {
    let array = [];
    while (list != null) {
      array.push(list.value);
      list = list.rest;
    }
    return array;
  }
  // console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  
  function prepend(element, list) {
    return {
      value: element,
      rest: list,
    };
  }
  // console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  
  function nth(list, number) {
    return listToArray(list)[number];
  }
  // console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20
  
  function nthRecursive(list, number) {
    if (number === 0) {
      return list.value;
    } else if (list.rest === null) {
      return undefined;
    } else {
      return nthRecursive(list.rest, number - 1);
    }
  }
  // console.log(nthRecursive(arrayToList([10, 20, 30]), 1));



  /*

similar question from codesmith: ArrayBuilder
Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.
  */

 function arrayBuilder(obj) {
  // ADD CODE HERE
  //create an empty array to store the elements from the object 
  let arr = [];

  //iterate through the object 
  for (let key in obj){
    //now we have access to key, which is the keys of our object: "cats" and "dogs"
    //and we have access to obj[key], which is the value of our keys: 2 and 1
    let value = obj[key] //defined a variable value and made it = to value of our keys
    for(let i = 0; i < value; i++){ //now for each key we do a for loop, the number of times we loop = value of keys
      arr.push(key) //push the key to our array that we made
    }
  }
  return arr //return the arr
}

// Uncomment these to check your work!
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []