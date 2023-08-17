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
function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

// In this instance, we are passing {name: "Ellissa"} to T and { occupation: "Doctor", partner: "Leeyan" } to U. We are passing the types dynamically when called and TS will infer the result type
const mergedObj = merge(
  { name: "Ellissa" },
  { occupation: "Doctor", partner: "Leeyan" }
);

console.log(mergedObj.name);
