/**
 Let’s assume that we have a for loop that prints 0 to 10 at random intervals (0 to n seconds).
 We need to modify it using promises to print sequentially 0 to 10.
 For example, if 0 takes 6 seconds to print and 1 takes two seconds to print,
 then 1 should wait for 0 to print and so on.
 */

const wait = (i, ms) => new Promise(resolve => setTimeout(() => resolve(i), ms));

async function printNumbersUsingAsync() {
  for (let i = 0; i < 10; i++) {
    await wait(i, Math.random() * 1000);
    console.log(i);
  }
}

printNumbersUsingAsync();
