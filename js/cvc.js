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
  