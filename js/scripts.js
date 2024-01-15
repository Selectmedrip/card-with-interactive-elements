// Получаем элементы HTML для имени держателя карты
var nameInput = document.getElementById("cardholdername");
var nameSpan = document.getElementById("card-holder-name");

// Создаем функцию для обновления текста в элементе span
function updateNameSpan() {
  // Получаем имя держателя карты из поля ввода
  var name = nameInput.value;

  // Проверяем длину имени и обрезаем его, если он превышает 30 символов
  if (name.length > 30) {
    name = name.substring(0, 30);
  }

  // Присваиваем имя держателя карты элементу span
  nameSpan.textContent = name;
}

// Добавляем обработчик события для поля ввода имени держателя карты, который вызывает функцию обновления текста в элементе span при каждом изменении значения
nameInput.addEventListener("input", updateNameSpan);

// Получаем элементы HTML для номера карты
var numberInput = document.getElementById("Cardnumber");
var numberSpan = document.getElementById("card-number");

// Создаем функцию для обновления текста в элементе span
function updateNumberSpan() {
    // Получаем номер карты из поля ввода
    var number = numberInput.value;
  
    // Проверяем длину номера и обрезаем его, если он превышает 16 символов
    if (number.length > 16) {
      number = number.substring(0, 16);
    }
  
    // Добавляем пробелы после каждых четырех цифр
    number = number.replace(/\d{4}(?=.)/g, '$& ');
  
    // Присваиваем номер карты элементу span
    numberSpan.textContent = number;
}
  

// Добавляем обработчик события для поля ввода номера карты, который вызывает функцию обновления текста в элементе span при каждом изменении значения
numberInput.addEventListener("input", updateNumberSpan);

// Получаем элементы HTML для CVC карты
var cvcInput = document.getElementById("CVC");
var cvcSpan = document.getElementById("card-cvc");

// Создаем функцию для обновления текста в элементе span
function updateCVCSpan() {
  // Получаем CVC из поля ввода
  var cvc = cvcInput.value;

  // Проверяем длину CVC и обрезаем его, если он превышает 3 символа
  if (cvc.length > 3) {
    cvc = cvc.substring(0, 3);
  }

  // Присваиваем CVC элементу span
  cvcSpan.textContent = cvc;
}

// Добавляем обработчик события для поля ввода CVC, который вызывает функцию обновления текста в элементе span при каждом изменении значения
cvcInput.addEventListener("input", updateCVCSpan);
// Создаем функцию для проверки валидности CVC
function validateCVC() {
    // Получаем элементы HTML для CVC и сообщения об ошибке
    var cvcInput = document.getElementById("CVC");
    var cvcErrorMsg = document.getElementById("cvc-error-msg");
  
    // Получаем значение CVC из поля ввода
    var cvc = cvcInput.value;
  
    // Создаем регулярное выражение для проверки того, что CVC состоит только из трех цифр
    var cvcRegex = /^\d{3}$/;
  
    // Проверяем, соответствует ли CVC регулярному выражению
    var isValid = cvcRegex.test(cvc);
  
    // Если CVC не соответствует регулярному выражению, показываем сообщение об ошибке
    if (!isValid) {
      cvcErrorMsg.style.display = "block";
    } else {
      // Иначе скрываем сообщение об ошибке
      cvcErrorMsg.style.display = "none";
    }
  }
  
  // Добавляем обработчик события для поля ввода CVC, который вызывает функцию проверки валидности CVC при каждом изменении значения
  cvcInput.addEventListener("input", validateCVC);

// Получаем элементы HTML для даты истечения срока действия карты
var monthInput = document.getElementById("Cardmonth");
var yearInput = document.getElementById("Cardyear");
var dateSpan = document.getElementById("card-date");

// Создаем функцию для обновления текста в элементе span
function updateDateSpan() {
  // Получаем месяц и год из полей ввода
  var month = monthInput.value;
  var year = yearInput.value;

  // Проверяем длину месяца и года и обрезаем их, если они превышают 2 символа
  if (month.length > 2) {
    month = month.substring(0, 2);
  }
  if (year.length > 2) {
    year = year.substring(0, 2);
  }

  // Присваиваем месяц и год элементу span
  dateSpan.textContent = month + "/" + year;
}

// Добавляем обработчики событий для полей ввода месяца и года, которые вызывают функцию обновления текста в элементе span при каждом изменении значения
monthInput.addEventListener("input", updateDateSpan);
yearInput.addEventListener("input", updateDateSpan);
