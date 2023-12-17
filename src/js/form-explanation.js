// ПОЯСНЕННЯ , ПРИМІТКИ
const form = document.querySelector('.feedback-form');
const INPUT_KEY = 'feedback-form-state';


form.addEventListener('input', onInputData);
form.addEventListener('submit', onFormSubmit);

shouData();

const onFormData = {};
function onInputData(evt) {
    onFormData[evt.target.name] = evt.target.value;
    // Обновление объекта onFormData:
    // Свойство name- ключ объекта  onFormData, а свойство value значение значение ключа
    localStorage.setItem(INPUT_KEY, JSON.stringify(onFormData));
}


// function shouData()  извлекает данные из локального хранилища, проверяет, существуют ли данные,
//  и если да, заполняет определенные поля формы сохраненными данными. 
function shouData() {
    let dataForm = JSON.parse(localStorage.getItem(INPUT_KEY));
    // 1)метод getItem() интерфейса Storage вернёт значение, лежащее в хранилище по указанному ключу. (Возвращает  JSON формате (строка))
    // 2) помощью JSON.parse() (Парсимо щоб отримати наш об'єкт з формату JSON(строка))
    if (dataForm) {
    //  Если данные найдены в локальном хранилище (т. е. dataForm не имеет значения null или undefine) то...
    const {elements: { email, message },} = form;
        // глибока деструктуризація 
        // в form есть elements- объект, содержащий элементы формы email и message)
    email.value = dataForm.email;
        message.value = dataForm.message;
        // заполняем поля формы ранее сохраненными данными.
  }
}


function onFormSubmit(evt) {
    // Запретить отправку формы по умолчанию( например для предотвращения перезагрузки страницы или перехода к новому URL-адресу при отправке формы.)
  evt.preventDefault();
    const {
    // (деструктизація елементів форми)
    elements: { email, message },
    } = evt.currentTarget;
// Проверяем, заполненение полей (после удаления начальных и конечных пробелов с помощью метода.trim()). 
  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Заповніть всі поля');
  }

  console.log({ email: email.value.trim(), message: message.value.trim() });

// Сбросить форму и удалить данные локального хранилища:
  evt.currentTarget.reset();
  localStorage.removeItem(INPUT_KEY);
}







//  <!-- "build": "vite build --base=/vanilla-app-template/", В файлі package.json змінила це значення -->
//   <!-- <load="partials /header.html" /> -->


// try pull 2