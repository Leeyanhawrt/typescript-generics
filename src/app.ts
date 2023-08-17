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

function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergedObj = merge(
  { name: "Ellissa" },
  { occupation: "Doctor", partner: "Leeyan" }
);

console.log(mergedObj.name);
