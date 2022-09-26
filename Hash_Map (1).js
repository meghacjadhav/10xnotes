const bucket = {
    length: 10
};

function hash(key) {
  let hash = 0;

  for (let i = 0; i < key.length; i++) {
    console.log(`Key char at index ${i} - ${key[i]} and char code - ${key.charCodeAt(i)}`)  
    hash += key.charCodeAt(i);
    console.log(`Hash value till char at ${i} - ${hash}`);
  }

  console.log(`Hash value mod - ${hash % bucket.length}`);

  return hash % bucket.length;
}

// console.log(hash('a'));
// console.log(hash('k'));
// console.log(hash('abc'));
console.log(hash('hbdskvdsabl'));

