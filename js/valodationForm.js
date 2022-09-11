const form = document.forms.my; // document - это все DOM-дерево
                                // document.forms - обращается ко всем формам на сайте и больше ни к чему не обращается
                                // document.forms.my - my имя поточной формы к которой мы обращаемся


const name = form.elements.name, // мы обращаемся к константе form и обращаемся к всем элементам тойсть inputs и обращаемся к одному из них по name в input
      phone = form.elements.phone,
      email = form.elements.email

const nat_name = document.body.querySelector('.validation_name'), // мы обращаемся к блоку в котором будет вставляться текст валидации
      nat_phone = document.body.querySelector('.validation_phone'),
      nat_email = document.body.querySelector('.validation_email')


const validationForm = async (e) => { //функция
    e.preventDefault() // берем состояние с аргумета и запрещаем перезагрузку сайта при нажатии кнопки

    if(!name.value) return nat_name.innerHTML = 'Введите имя'; // if - если 
                                                               //(!name.value) - внутри инпута с именем name нету текста или он пустой, то выводим текст
                                                               // return - прекращение функции(остановка выполнения)
    nat_name.innerHTML = '';
    if(!phone.value) return nat_phone.innerHTML = 'Введите номер телефона';
    nat_phone.innerHTML = '';
    if(!email.value) return nat_email.innerHTML = 'Введите E-mail';
    nat_email.innerHTML = '';

    const dataForm = {
        name: name.value,
        email: email.value,
        phone: phone.value
    }

    console.log(dataForm);

    await fetch('http://localhost:3000/mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(dataForm)
    })
        .then(r =>
            window.location = 'https://www.google.com.ua/'
        )
        .catch(e => console.log(e));

}

