// 3. Создать программу, которая генерирует случайное слово из четырёх букв.
//     Шаги для выполнения задания:   
//     1. Создай переменную `alphabet`, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
//     2. Используя объект `Math`, создай четыре случайных индекса в диапазоне от 0 до длины вашей `alphabet`. 
//     3. Используя полученные случайные индексы, извлеки соответствующие символы из `alphabet` и объедини их в строку, чтобы сформировать случайное слово.
//     4. Выведи полученное случайное слово на экран, чтобы проверить результат.

const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

const randomIndex1 = Math.floor(Math.random() * alphabet.length);
const randomLetter1 = alphabet[randomIndex1];

const randomIndex2 = Math.floor(Math.random() * alphabet.length);
const randomLetter2 = alphabet[randomIndex2];

const randomIndex3 = Math.floor(Math.random() * alphabet.length);
const randomLetter3 = alphabet[randomIndex3];

const randomIndex4 = Math.floor(Math.random() * alphabet.length);
const randomLetter4 = alphabet[randomIndex4];

const result = randomLetter1 + randomLetter2 + randomLetter3 + randomLetter4;

console.log(result);