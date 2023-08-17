// BUILT IN GENERIC TYPES (Array<datatype>returned>, Promise<datatype>returned)
const names: Array<string> = [];
// names[0].split(" ");

// Should describe what kind of type the promise is going to resolve with
// error will occur using undefined type method if unexpected type is returned
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 1000);
});

promise.then((data) => {
  data.split(" ");
});

// T and U are placeholders are the values passed in when calling the function
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// In this instance, we are passing {name: "Ellissa"} to T and { occupation: "Doctor", partner: "Leeyan" } to U. We are passing the types dynamically when called and TS will infer the result type
const mergedObj = merge(
  { name: "Ellissa" },
  { occupation: "Doctor", partner: "Leeyan" }
);

console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = `Got ${element.length} element `;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

// Works because strings have a length property based off interface Lengthy
console.log(countAndDescribe("Hi there!"));

// keyof constraint ensures that whatever is passed in to the generic function is a key within the variable object.
// In this instance parameter U must be a key within object T
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

extractAndConvert({ name: "Max", age: 5 }, "age");

// GENERIC CLASSES
class DataStorage<T extends string | boolean | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Ellissa");
textStorage.addItem("Leeyan");
textStorage.removeItem("Ellissa");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(5);
numberStorage.addItem(10);
numberStorage.removeItem(5);
console.log(numberStorage.getItems());

// Wont work properly as the class is designed for primitive types only, splice will not work the same on object as primitive
// Can use if checks within the removeItem function or better yet create another class for objects
// Hence why making the class only accept strings/numbers/booleans

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Ellissa" });
// objStorage.addItem({ name: "Leeyan" });
// objStorage.removeItem({ name: "Ellissa" });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// PARTIAL GENERIC FUNCTION
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // Using Partial<CourseGoal> allows the object be temporarily incomplete(does not contain all the properties of type CourseGoal)
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  // Here courseGoal type is set to Partial<CourseGoal> meaning that the type returned does not match what is described in the function, using Typecast to turn it back into CourseGoal after all properties are present
  return courseGoal as CourseGoal;
}

// Readonly makes it so that the value can't be changed afterwards (can't push or pop this array)
const namesList: Readonly<string[]> = ["Max", "Ellissa"];

// Not allowed because the array is set as a readonly array of string
// namesList.pop();
// namesList.push("Leeyan");

// GENERIC TYPES ARE GOOD TO USE WHEN YOU WANT IN A CERTAIN TYPE
// UNION TYPES ARE GOOD WHEN YOU WANT TO ALLOW CERTAIN TYPES MULTIPLE TIMES MORE FLEXIBLE
