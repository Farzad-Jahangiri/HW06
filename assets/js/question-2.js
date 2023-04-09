function sortDesc(...arrays) {
    const mergedArray = arrays.flat();
    mergedArray.sort((a, b) => b - a);
    return mergedArray;
  }



  console.log(sortDesc([5,6,2],[3,7,1]));
  console.log(sortDesc([5,6,2],[3,7,1],[2,4,8]));