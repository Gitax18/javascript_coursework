const person = {
    firstName: 'Gitanshu',
    lastName: 'Sankhla',
    age: 18,
    friends: ['Ashwin', 'Tejas', 'Yash', 'Raghav', 'Rakesh']
}

console.log(`${person.firstName} has ${person['friends'].length} friends and his best friend is ${person.friends[0]}`)