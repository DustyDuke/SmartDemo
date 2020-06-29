// Меню

function toggle() {
   let menu = document.getElementById("menu");
   let ul = document.querySelector('ul');
   function hide(){menu.style.display = 'none'};
  (menu.style.display == 'none' || menu.style.display ==  '' ) ? (menu.style.display = 'block', ul.style.animationName = 'appear') : (ul.style.animationName = 'disappear', setTimeout(hide, 2000));
  ul.style.animationDuration = '2s';

}

// Форма обратной связи

let sendform = Array.from(document.querySelectorAll('button[type="submit"]'))

sendform.map((el, i) => el.addEventListener('click', function(e) {
	e.preventDefault()

	let target = e.target
	let myForm = target.closest('form')
	 let formData = new FormData(myForm)
	 let name = myForm.querySelector('#contact_name')
	 let phone = myForm.querySelector('#contact_phone')
	 let mail = myForm.querySelector('#contact_email')
	 let textarea = myForm.querySelector('#commentsText')
	if(!name.value || !phone.value){
			alert('Заполните обязтельные поля')
		return false
	}else if(name.value.match(/[^A-zА-я]+/g)){
	name.value = '';
    alert('Поле должено содержать только буквы');
    return false;
    } else if(phone.value.match(/[^0-9]+/g) || (phone.value.length < 11)){
	phone.value = '';
    alert('Поле должено содержать 11 цифор');
    return false;
    } else if((mail.value.indexOf('@') == -1)  || (mail.value.indexOf('.') == -1)){
	mail.value = '';
    alert('Ошибка в адресе электронной почты');
    return false;
	} else {
	  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/contact-form.php");
  xhr.send(formData);
  let arrowFade = document.querySelector('.fa-arrow-right');	
	arrowFade.classList.add('arrowAnimate');
  let success = document.querySelector('form')
  setTimeout(() => success.innerHTML = `<form action="" class="feedback" id="feedback-form" method="post"><h3><span class="red">Сообщение</span> отправлено</h3>
<p>Наш специалист свяжется с Вами в ближайшее время</p>
</form>
  	`, 1000)
	}
	name.value = '',
	phone.value = '',
	mail.value = '',
	textarea.value = ''
}
))


// Вывод проектов


let works = [
{classid: 'one', link: "#"}, 
{classid: 'two', link: "#"}, 
{classid: 'three', link: "#"}, 
{classid: 'four', link: "#"}, 
{classid: 'five', link: "#"}, 
{classid: 'six', link: "#"}, 
{classid: 'seven', link: "#"},
{classid: 'eight', link: "#"},
{classid: 'nine', link: "#"}
]

const toProjects = project => `
<a href="${project.link}"><div class="project col-1 ${project.classid}"></div></a>
`
function render() {	
	const htmlWorks = works.map(project => toProjects(project)).join('')
	document.querySelector('.projects').innerHTML = htmlWorks
}
render()

//Модальные окна

let modalFind = document.querySelector('.processes')
modalFind.addEventListener('click', e => {
	let target = e.target;
		if(!target.classList.contains('more')) return
			let findClass = Array.from(target.closest('div').closest('.job').classList).splice(2,1).toString()

		let modal = Array.from(document.querySelectorAll('.wmodal')).map(el => {if(el.id == findClass){el.classList.add('open')}})
		let modalClose = document.querySelector('.open')
		
	modalClose.addEventListener('click', e => {
		console.log(e.target.dataset.close)
		if(e.target.dataset.close){
			console.log(e.target.closest('.wmodal'))
			e.target.closest('.wmodal').classList.remove('open')
			e.target.closest('.wmodal').classList.add('hide')
		setTimeout(() => e.target.closest('.wmodal').classList.remove('hide'), 1000)
		}
	})
})


// Carousel

    let list = carousel.querySelector('.my-carousel');
    let listElems = carousel.querySelectorAll('.carousel-item');
	let width = listElems[0].offsetWidth + 3;
    let position = 0; 
let count;
if (document.documentElement.clientWidth > 767) {
	count = 2
} else {
	count = 1
}
    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width * count;
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width;
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };


