// Здесь будет ваш код, написанный при выполнении практической работы.
// Создаем объект Scanner для получения пользовательского ввода
var scanner = new Scanner();

// Создаем функцию для автозаполнения имени держателя карты
function autofillName() {
  // Получаем элементы HTML для имени держателя карты
  var nameInput = document.getElementById("cardholdername");
  var nameSpan = document.getElementById("card-holder-name");

  // Получаем имя держателя карты от пользователя
  var name = scanner.nextLine();

  // Проверяем длину имени и обрезаем его, если он превышает 30 символов
  if (name.length > 30) {
    name = name.substring(0, 30);
  }

  // Присваиваем имя держателя карты элементам HTML
  nameInput.value = name;
  nameSpan.textContent = name;
}

// Создаем функцию для автозаполнения номера карты
function autofillNumber() {
  // Получаем элементы HTML для номера карты
  var numberInput = document.getElementById("Cardnumber");
  var numberSpan = document.getElementById("card-number");

  // Получаем номер карты от пользователя
  var number = scanner.nextLine();

  // Проверяем длину номера и обрезаем его, если он превышает 16 символов
  if (number.length > 16) {
    number = number.substring(0, 16);
  }

  // Присваиваем номер карты элементам HTML
  numberInput.value = number;
  numberSpan.textContent = number;
}

// Создаем функцию для автозаполнения даты истечения срока действия карты
function autofillDate() {
  // Получаем элементы HTML для даты истечения срока действия карты
  var monthInput = document.getElementById("Cardmonth");
  var yearInput = document.getElementById("Cardyear");
  var dateSpan = document.getElementById("card-date");

  // Получаем месяц и год от пользователя
  var month = scanner.nextLine();
  var year = scanner.nextLine();

  // Проверяем длину месяца и года и обрезаем их, если они превышают 2 символа
  if (month.length > 2) {
    month = month.substring(0, 2);
  }
  if (year.length > 2) {
    year = year.substring(0, 2);
  }

  // Присваиваем месяц и год элементам HTML
  monthInput.value = month;
  yearInput.value = year;
  dateSpan.textContent = month + "/" + year;
}

// Создаем функцию для автозаполнения CVC карты
function autofillCVC() {
  // Получаем элементы HTML для CVC карты
  var cvcInput = document.getElementById("CVC");
  var cvcSpan = document.getElementById("card-cvc");

  // Получаем CVC от пользователя
  var cvc = scanner.nextLine();

  // Проверяем длину CVC и обрезаем его, если он превышает 3 символа
  if (cvc.length > 3) {
    cvc = cvc.substring(0, 3);
  }

  // Присваиваем CVC элементам HTML
  cvcInput.value = cvc;
  cvcSpan.textContent = cvc;
}
