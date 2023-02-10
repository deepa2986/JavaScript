const list = [11,22,3,4,8,10]

console.log(list.filter (x => x > 4))

const evenList = list.filter(number => number % 2 == 0)
console.log(evenList)

const oddList = list.filter(number => number % 2 != 0)
console.log(oddList)

const students = [
{name : 'jack',grade : 89},
{name : 'john',grade : 90},
{name : 'ana',grade : 88}
]

const studentsGrade = students.filter(student => student.grade < 90)
console.log(studentsGrade)


