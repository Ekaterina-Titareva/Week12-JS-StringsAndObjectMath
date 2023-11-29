// ***** Задание под звездочкой**

// Создадим сервис комментариев. В нём будет три поля ввода:

// - поле для ввода имени. Сделайте интерфейс преобразования имени, который учтёт, все нюансы — лишние пробелы, отсутствие больших букв в имени и прочее. 
// Например, было введено пользователем : `иВаН` .
// Стало: `Иван` .
// - поле для ввода ссылки на аватар;
// - поле ввода сообщения. Необходимо реализовать отображение и добавление сообщений, а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***` ;
// - функция должна быть нечувствительна к регистру:

// const comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
// const comment2 = checkSpam('free xxx'); //результат free ***
// const comment3 = checkSpam("innocent rabbit") ; //результат innocent rabbit



function checkSpam (str) {
    const a = str.replace(/viagra|ххх|xxx/gi, '***');
    return a;
}

const comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
console.log(comment1);
const comment2 = checkSpam('free xxx'); //результат free ***
console.log(comment2);
const comment3 = checkSpam("innocent rabbit") ; //результат innocent rabbit
console.log(comment3);

const button = document.getElementById('button');
const name = document.getElementById('name');
const nameResult = document.getElementById('nameResult');
const link = document.getElementById('link');
const img = document.getElementById('linkResult');
const comment = document.getElementById('comment');
const commentResult = document.getElementById('commentResult');

button.addEventListener('click', function () {
    const nameText = name.value;
    const nameCheckLetter = nameText.toUpperCase().slice(0, 1) + nameText.toLowerCase().slice(1);
    const nameDelBlank = nameCheckLetter.replace(/ |[0-9!@#$%^&*()_+=?\.,/<>|`~"№;:]/g, '');
    nameResult.textContent = nameDelBlank;
    // console.log(nameDelBlank);
    const linkText = link.value;
    // console.log(linkText);
    const linkDelBlank = linkText.replace(/ |[!@#$^*()+\,<>`~"]/g, '');
    img.src = linkDelBlank;
    // console.log(linkDelBlank);
    img.classList.remove('display-none');
    commentResult.textContent = checkSpam(comment.value);
})
