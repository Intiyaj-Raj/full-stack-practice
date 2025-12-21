const post = {
  username: "int0234",
  content: "This is my #firstPost",
  likes: 145,
  reposts: 5,
  tags: ["@friend1", "@friend2"],
};

console.log(post);
// access element
console.log(post.username);

// update value
post.username = "raj234";

// add key and value
post.pass = "ra!@df3";
console.log(post);

const student = {
  name: "Intiyaj",
  age: 21,
  isEnrolled: true,
  // creating array inside object
  courses: ["Java", "JavaScript", "ReactJS"],

  // creating function inside object

  greet: function () {
    console.log(`Hello, My Name is ${this.name}`);
  },
};

//  accessing element
console.log(student);

// access one element
console.log(student.name);
console.log(student.isEnrolled);
console.log();

// access array element inside object
console.log(student.courses);
console.log(student.courses[2]);

// access function  inside object
student.greet();

console.log("Nested Object");
const classInfo = {
  John: {
    roll: 12,
  },
  Alax: {
    roll: 13,
  },
  Carry: {
    roll: 14,
  },
};

console.log(classInfo.John);
