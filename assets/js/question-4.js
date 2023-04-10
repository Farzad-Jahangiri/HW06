function aclean(arr) {
    let map = new Map();
    console.log(map);
    for (let word of arr) {
    console.log("word:",word);
      let letters = word.toLowerCase().split("").sort().join("");
      console.log("letters:",letters);
      map.set(letters, word);
      console.log("map:",map);
    }
    return Array.from(map.values());
  }
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert(aclean(arr)); 