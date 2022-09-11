const modalForms = document.forms.modal;  // document - это все DOM-дерево
                                    // document.forms - обращается ко всем формам на сайте и больше ни к чему не обращается
                                    // document.forms.my - my имя поточной формы к которой мы обращаемся


const name_modal = modalForms.elements.name, // мы обращаемся к константе form и обращаемся к всем элементам тойсть inputs и обращаемся к одному из них по name в input
      phone_modal = modalForms.elements.phone,
      email_modal = modalForms.elements.email

const nat_name_modal = document.body.querySelector('.validation_name__modal'), // мы обращаемся к блоку в котором будет вставляться текст валидации
      nat_phone_modal = document.body.querySelector('.validation_phone__modal'),
      nat_email_modal = document.body.querySelector('.validation_email__modal')


const validationFormModal = (e) => { //функция
    e.preventDefault() // берем состояние с аргумета и запрещаем перезагрузку сайта при нажатии кнопки

    if(!name_modal.value) return nat_name_modal.innerHTML = 'Введите имя'; // if - если 
                                                               //(!name.value) - внутри инпута с именем name нету текста или он пустой, то выводим текст
                                                               // return - прекращение функции(остановка выполнения)
    nat_name_modal.innerHTML = '';

    if(!phone_modal.value) return nat_phone_modal.innerHTML = 'Введите номер телефона';
    nat_phone_modal.innerHTML = '';

    if(!email_modal.value) return nat_email_modal.innerHTML = 'Введите E-mail';
    nat_email_modal.innerHTML = '';

    const dataForm = {
        name: name_modal.value,
        phone: phone_modal.value,
        email: email_modal.value
    }

    console.log(dataForm);

}