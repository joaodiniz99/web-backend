var arrayUtils = {
  isEmpty: function(array) {// a)
    // if(array.length == 0) 
    //   return true;
    // return false;
    if(array != undefined && array != null) {
      return array.length == 0;
    } else {
      return "Array is undefined";
    }
  },
  max: function(array) {// b)
    if(this.isEmpty(array)) {
      return "Array is empty";
    } else {
      var max = array[0];
      for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i];
        }
      }
      return max;
    }
  },
  min: function(array) {// c)
    if(this.isEmpty(array)) {
      return "Array is empty";
    } else {
      var min = array[0];
      for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
          min = array[i];
        }
      }
      return min;
    }
  },
  average: function(array) {// d)
    if(this.isEmpty(array)) {
      return "Array is empty";
    } else {
      var avg = 0;
      for (let i = 0; i < array.length; i++) {
        avg += array[i];
      }
      return avg / array.length;
    }
  },
  indexOf: function(array, value) {// e)
    if(this.isEmpty(array)) {
      return "Array is empty";
    } else {
      for (let i = 0; i < array.length; i++) {
        if(value == array[i]) {
          return i;
        }
      }
      return -1;
    }
  },
  subArray: function(array, startIndex, endIndex) {// f)
    if(this.isEmpty(array)) {
      return "Array is empty";
    } else {
      var newArray = [];
      for (let i = startIndex; i <= endIndex; i++) {
        newArray.push(array[i]);
      }
      return newArray;
    }
  },
  isSameLength: function(a1, a2) {// g)
    return a1.length == a2.length;
  },
  reverse: function(array) {// h)
    if(this.isEmpty(array)) {
      return "Array is empty";
    } else {
      var newArray = [];
      for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
      }
      return newArray;
    }
  },
  swap: function(array, index1, index2) {// i)
    if(this.isEmpty(array)) {
      return "Array is empty";
    } else {
      var aux = array[index1];
      array[index1] = array[index2];
      array[index2] = aux;
      return array;
    }
  },
  contains: function(array, value) {// j)
    
    // for (let i = 0; i < array.length; i++) {
    //   if(value == array[i]) {
    //     return true;
    //   }
    // }
    // return false;

    return this.indexOf(array, value) != -1;
    
  },
  concat: function(array, otherArray) {
    var concatArray = array;
    for (let i = 0; i < otherArray.length; i++) {
      concatArray.push(otherArray[i]);
    }
    return concatArray;
  }
}

module.exports = arrayUtils;