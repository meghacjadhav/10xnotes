# Hash_Map/Hash_Table

## Why do we need Hash_Map/Hash_Table?

```text
If we use array data structure to store large amount of data, it turns out that arrays are not effective always.

Algorithm | Average | Worst case
:----     | :----:  | :----:
Space     | O(n)    | O(n)
Search    | O(n)    | O(n)
Insert    | O(n)    | O(n)
Delete    | O(n)    | O(n)
```

## What is Hash_Map/Hash_Table

```text
Hash_Map/Hash_Table is a data structure that allow you to create a list of paired values. You can then retrieve a certain value by using the key for that value, which you put into the table beforehand.

Think of this like a signature on a block of data that allows us to search in constant time. A hash table operates like a dictionary that we can map to get from the hash to the desired data.

Using a Hash_Map/Hash_Table does mean we are not going to use array data structure, developer needs to make a wise selection for data structure in order to solve problem at hand.
```

## How is Map/Hash_Table implemented?

```text
A Hash_Map/Hash_Table transforms a key (string) into an integer index using a hash function (hash algorithm), and the index will decide where to store the key/value pair in memory.

A hash function is a method or function that takes an item’s key as an input, assigns a specific index to that key and returns the index whenever the key is looked up. This operation usually returns the same hash for a given key. A good hash function should be efficient to compute and uniformly distribute keys.

Hash functions help to limit the range of the keys to the boundaries of the array, so we need a function that converts a large key into a smaller key. This is the job of the hash function.

A hash function is irreversible. It is a one-way algorithm. You shouldn’t be able to take the result of a hash function, feed it through another function and get the original data back.

A hash table is also deterministic. Feeding the key through the hash function repeatedly gives the same result.

JavaScript: Object and Map, i.e. both objects and maps are Hash_Map/Hash_Table in JavaScript.

Hash_Map/Hash_Table use arrays to store data or records. The numerical value from the hash function is used as an index to store data. Data is stored in buckets using numbers.
```

## Common hash functions

* Arithmetic Modular
* Truncation
* Folding

```text
A simple way to create the hash would be to sum the ASCII code of the characters in the key using the charCodeAt() method. To ensure that the hash value doesn't exceed the bucket size, you need to use the modulo operator.
```

```JS
const bucket = {
    length: 128
};

function hash(key) {
  let hash = 0;

  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }

  return hash % bucket.length;
}
```

## Hash table collisions

```text
Sometimes, a hash function can generate the same index for more than one key. This scenario is referred to as a hash collision. Collisions are a problem because every slot in a hash table is supposed to store a single element.
```

## Hash collisions are usually handled using four common strategies

* Linear probing
* Chaining
* Resizing the Array or List
* Double hashing

## Hash_Map/Hash_Table time complexity in Big O notation

Algorithm | Average | Worst case
:----     | :----:  | :----:
Space     | O(n)    | O(n)
Search    | O(1)    | O(n)
Insert    | O(1)    | O(n)
Delete    | O(1)    | O(n)

## The performance of a hash table depends on three essential components

* Hash function
* Size of a hash table
* Collision handling method

## Application of Hash_Map/Hash_Table

* Database indexing
* Program compilation for keyword identification
* Caching
* Associative arrays
* Unique data representation
