const organizeInstructors = function(instructors) {
  
  let courseName = {};

  for (const instructor of instructors) {

    if (courseName[instructor.course]) {
     courseName[instructor.course].push(instructor.name);
    } 

    else {
      courseName[instructor.course] = [instructor.name];
    }
  }
  return courseName;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));