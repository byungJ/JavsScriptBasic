// Q1. make a string out of an array
{
    const box = ['apple', 'banana', 'orange'];
    const result = box.join(',,');
    console.log(result);
}

// Q2. make an array out of a string
{
    const box = 'apple, banana, orange';
    const result = box.split(',');
    console.log(result);
}

// Q3. make this array llok like this: [5, 4, 3, 2, 1]
{
    const array = [1,2,3,4,5,6];
    console.log(array.reverse());
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    const result = array.splice(0, 2);
    console.log(array);
    console.log(result);

    const array2 = [1,2,3,4,5];
    console.log(array2.slice(2, 5));
    console.log(array2);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 65),
    new Student('C', 30, true, 100),
    new Student('D', 40, false, 65),
    new Student('E', 17, true, 90),
];

// Q5. find a student with the score 90
{
    const result = students.find(function(student, index) {
        return student.score === 90;
    });
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter(student => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66 ,88]
{
    const result = students.map(student => student.score * 2);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    // 배열 중 에서 한개라도 만족
    const result = students.some(student => student.score < 50);
    console.log(result);

    // 배열 전체에서...
    const result2 = !students.every((student) => student.score >= 50)
    console.log(result2);
}

console.clear()
// Q9. compute students' average score
{
    // 누적 (reduceRight 뒤에서부터)
    const result = students.reduce((prev, curr) => {
        console.log('----------')
        console.log(prev);
        console.log(curr);

        // 여기서 return하는 값이 prev로 연결.
        return prev + curr.score;
    }, 0);
    console.log(result / students.length);
}
// Q10. make a string containing all the scores
// result should be: '45 ,80, 90, 66, 88'
{
    const result = students
    .map(student => student.score)
    .filter(score => score >= 50)
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45 ,80, 90, 66, 88'
{
    const result = students
    .map(student => student.score)
    .sort((a, b) => a - b);
    console.log(result);
}