const letters = new Set(['a', 'b', 'c', 'd', 'd']);
console.log(letters)

console.log(letters.has('a'))
console.log(letters.has('e'))

console.log(letters.size)

console.log(letters.values())
console.log(letters.keys())

// A Set has no keys.
// entries() returns [value,value] pairs instead of [key,value] pairs.
// This makes Sets compatible with Maps:

console.log(letters.entries())

console.log(letters.delete('a'))
console.log(letters)

// letters.clear()
// console.log(letters)