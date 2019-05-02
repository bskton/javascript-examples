/**
 * Let’s assume that we have a for loop that prints 0 to 10 at random intervals (0 to n seconds).
 * We need to modify it using promises to print sequentially 0 to 10.
 * For example, if 0 takes 6 seconds to print and 1 takes two seconds to print,
 * then 1 should wait for 0 to print and so on.
 */

const wait = (i, ms) => new Promise(resolve => setTimeout(() => resolve(i), ms));

// Implementation One (Using for-loop and Promise)
const printNumbers = () =>  new Promise(resolve => {
  let pr = Promise.resolve(0);
  for (let i = 1; i <= 10; i++) {
    pr = pr.then(val => {
      console.log(val);
      return wait(i, Math.random() * 1000);
    });
  }
  resolve(pr);
});

// Implementation Two (Using recursion and Promise)
const printNumbersRecursive = () => {
  return Promise.resolve(0).then(function processNextPromise(i) {
    if (i === 10) {
      return undefined;
    }

    return wait(i, Math.random() * 1000).then(val => {
      console.log(val);
      return processNextPromise(i + 1);
    })
  });
};

// Implementation Three (Using async/await)
async function printNumbersUsingAsync() {
  for (let i = 0; i < 10; i++) {
    await wait(i, Math.random() * 1000);
    console.log(i);
  }
}

async function printNumbersRecursiveUsingAsync() {
  (async function processNextPromise(i) {
    if (i === 10) {
      return undefined;
    }
    console.log(i);

    return processNextPromise(await wait(i + 1, Math.random() * 1000));
  })(await wait(0, Math.random() * 1000));
}

// printNumbers();
// printNumbersRecursive();
// printNumbersUsingAsync();
printNumbersRecursiveUsingAsync();
