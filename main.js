/*
 Створіть функцію `getRandomInt`, яка приймає два цілих числа: `min` та `max`. Ця функція повинна генерувати випадкове ціле число в діапазоні від `min` до `max` (включно).

 Використовуйте `Math.random()` для генерації випадкового числа від 0 до 1, а потім масштабуйте та зсувайте це число, щоб воно відповідало вашому діапазону. Використовуйте `Math.floor()` для округлення результату вниз до найближчого цілого числа.

 Після створення функції, використайте її для генерації випадкових чисел в різних діапазонах. Наприклад, виведіть випадкове число від 1 до 10, від 40 до 50, та від 1 до 100. Кожне викликане число повинно бути виведено в консоль.

 Ось приклад використання цієї функції:
 
 Зверніть увагу, що кожен виклик `getRandomInt` може повертати різні числа, оскільки вони випадкові. Завдання полягає в написанні цієї функції та її використанні для генерації випадкових чисел.
 */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10));
console.log(getRandomInt(40, 50));
console.log(getRandomInt(1, 100));
document.write("Рандомне число від 1-10 - " + getRandomInt(1, 10));

/*
   Використовуйте `Math.floor`, а не `Math.round` для забезпечення рівномірного розподілення випадкових чисел.
  
   Якщо ви використовуєте `Math.round`, крайні значення (`min` та `max`) матимуть лише половину ймовірності з'явлення, порівняно з іншими числами. Це відбувається тому, що `Math.random()` ніколи не повертає 1, і тому максимальне значення з'являється лише тоді, коли `Math.random()` повертає значення, яке, будучи округленим, дорівнює `max`. Аналогічно, `min` з'являється лише тоді, коли `Math.random()` повертає 0.
  
   Тому використовуйте `Math.floor` для забезпечення рівномірного розподілення. Це гарантує, що кожне число в діапазоні має однакову ймовірність з'явлення.
  */

/*
 Ваше завдання - створити функцію greet в JavaScript. Ця функція повинна приймати два аргументи:

 msg: Рядок, який представляє привітання, наприклад “Hi”, “Hey” або “Hello”.
 name: Рядок, який представляє ім’я особи, наприклад “John”, “Bob” або “Mary”.

 Функція greet повинна повертати новий рядок, який поєднує msg та name з комою та пробілом між ними. Наприклад, якщо msg це “Hi” і name це “John”, то функція повинна повернути рядок “Hi, John”.

 Ось приклад використання цієї функції:

 */

function greetByName(msg, name) {
  return msg + ", " + name;
}

console.log(greetByName("Hi", "John"));
console.log(greetByName("Hey", "Bob"));
console.log(greetByName("Hello", "Mary"));

document.write("<br>" + "Привіт, Джон - " + greetByName("Hi", "John"));

/*
 Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
 Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

 */

function sumBigIntegers(numStr1, numStr2) {
  const BigInt1 = BigInt(numStr1);
  const BigInt2 = BigInt(numStr2);
  return BigInt1 + BigInt2;
}

console.log(sumBigIntegers("9007199254740991", "9007199254740991"));
document.write(
  "<br>" +
    "Сума великих чисел - " +
    sumBigIntegers("9007199254740991", "9007199254740991")
);
