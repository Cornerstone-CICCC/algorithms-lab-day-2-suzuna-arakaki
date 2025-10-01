// Exercise 18: Given an array of people objects with `fullName` and `isStudent`,
// 1. Filter only students (isStudent === true)
// 2. Reformat fullName to "LastName, FirstName(s)"
// 3. Sort alphabetically by last name

//
const studentsArray = function (array){
  const studentFilter = array.filter((item) => {
    if(item.isStudent === true){
      return item;
    }
  })
  const studentMap = studentFilter.map((person) => {
    const splitFullName = person.fullName.split(" ");
    const lastName = splitFullName.pop();
    const firstNames = splitFullName.join(" ");
    const personsFullName = `${lastName}, ${firstNames}`
    return personsFullName;
  })
  return studentMap.sort();
}

console.log(studentsArray([
  { fullName: "John Smith", isStudent: true },
  { fullName: "Jane B. Doe", isStudent: false },
  { fullName: "Charlie Miguel Chaplin", isStudent: true },
  { fullName: "Zara Ali", isStudent: true }
]))

// const people = [
//   { fullName: "John Smith", isStudent: true },
//   { fullName: "Jane B. Doe", isStudent: false },
//   { fullName: "Charlie Miguel Chaplin", isStudent: true },
//   { fullName: "Zara Ali", isStudent: true }
// ]

// console.log(
//   people
// )

// Expected output: (array of strings)
// ["Ali, Zara", "Chaplin, Charlie Miguel", "Smith, John"]
