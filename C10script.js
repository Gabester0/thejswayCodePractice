//Coding time!
//Older movies
//Improve the example movie program from above so that it shows the titles of movies released before year 2000, using //functional programming.

const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5
  }
];

// TODO: Make an array of the titles of movies released before 2000

const moviesBefore2000 = movieList.filter(k => k.year < 2000);

console.log(moviesBefore2000);
//Execution result:
/*Array(4)
0
:
{title: "Batman", year: 1989, director: "Tim Burton", imdbRating: 7.6}
1
:
{title: "Batman Returns", year: 1992, director: "Tim Burton", imdbRating: 7}
2
:
{title: "Batman Forever", year: 1995, director: "Joel Schumacher", imdbRating: 5.4}
3
:
{title: "Batman & Robin", year: 1997, director: "Joel Schumacher", imdbRating: 3.7}
length
:
4
__proto__
:
Array(0)*/



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Government forms
//Complete the following program to compute and show the names of political forms ending with "cy".

const governmentForms = [
  {
    name: "Plutocracy",
    definition: "Rule by the wealthy"
  },
  {
    name: "Oligarchy",
    definition: "Rule by a small number of people"
  },
  {
    name: "Kleptocracy",
    definition: "Rule by the thieves"
  },
  {
    name: "Theocracy",
    definition: "Rule by a religious elite"
  },
  {
    name: "Democracy",
    definition: "Rule by the people"
  },
  {
    name: "Autocracy",
    definition: "Rule by a single person"
  }
];

// TODO: compute the formsEndingWithCy array


const formsEndingWithCy = governmentForms.filter(x => x.name.endsWith("cy") );

console.log(formsEndingWithCy);

// Should show ["Plutocracy", "Kleptocracy", "Theocracy", "Democracy", "Autocracy"]
//console.log(formsEndingWithCy);
//Returns:
/*(5) [{…}, {…}, {…}, {…}, {…}]
0
:
{name: "Plutocracy", definition: "Rule by the wealthy"}
1
:
{name: "Kleptocracy", definition: "Rule by the thieves"}
2
:
{name: "Theocracy", definition: "Rule by a religious elite"}
3
:
{name: "Democracy", definition: "Rule by the people"}
4
:
{name: "Autocracy", definition: "Rule by a single person"}
length
:
5*/



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Arrays sum
//
//Complete the following program to compute and show the total sum of the values in each of the arrays.

const arrays = [[1, 4], [11], [3, 5, 7]];

let arraysSum = 0;

for(let k = 0; k <arrays.length; k ++){
  
    let sum = arrays[k].reduce((acc, value) => acc + value , 0);

  arraysSum += sum;
}
// TODO: compute the value of the arraysSum variable
console.log(arraysSum);
//\\//console.log(arraysSum); // Should show 31
//Returns 31


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Student results
//Here's a program that shows female students results (name and average grade).

const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];


// Compute female student results
const femaleStudentsResults = [];
for (const student of students) {
  if (student.sex === "f") {
    let gradesSum = 0;
    for (const grade of student.grades) {
      gradesSum += grade;
    }
    const averageGrade = gradesSum / student.grades.length;
    femaleStudentsResults.push({
      name: student.name,
      avgGrade: averageGrade
    });
  }
}

//
////Refactor it using functional programming. Execution result must stay the same.



////\\\\////\\\\////\\\\First Solution:
//
////get female students
//const fStudents = students.filter(x => x.sex === "f");
//
////calculate avg
//function calc(arr){
//let sum = arr.reduce((prev, cur, index)=> prev + cur, 0);
//  return sum/arr.length; }
//
////Return female students grades:
//function fStudentsResults(){
//  fStudents.forEach(st =>{
//    let avg = calc(st.grades);
//    console.log(`${st.name} has a GPA of ${avg}`);
//  });
//}
//fStudentsResults();

//Returns :  Anna has a GPA of 4; Martha has a GPA of 3.625





//////\\\\////\\\\////\\\\Second Solution: consolidated
//
////get female students
//const fStudents = students.filter(x => x.sex === "f");
//
////Return female students grades:
//function fStudentsResults(){
//  fStudents.forEach(st =>{
//    let avg = (st.grades.reduce((prev, cur, index)=> prev + cur, 0))/st.grades.length;
//    console.log(`${st.name} has a GPA of ${avg}`);
//  });
//}
//fStudentsResults();

//Returns :  Anna has a GPA of 4; Martha has a GPA of 3.625



////\\\\////\\\\////\\\\ Third Solution: consolidated

//Return female students grades:
fStudentsResults = (students.filter(x => x.sex === "f")).forEach(st =>{
    console.log(`${st.name} has a GPA of ${(st.grades.reduce((prev, cur)=> prev + cur))/st.grades.length}`);
});

//Returns :  Anna has a GPA of 4; Martha has a GPA of 3.625
