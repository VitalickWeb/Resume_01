'use strict';

//КАКИЕ БЫВАЮТ ТИПЫ СОБЫТИЙ В JS
//####################################################
    'change',
    'click',
    'dblclick',
    'mouseout',
    'mouseover',
    'focus',
    'blur',
    'input';
//####################################################

// let parent = document.querySelector('#parent');
// let links = parent.querySelectorAll('.link');// get Links

// for (let i = 0; i < links.length; i++) { //itarate links
	
// 	links[i].addEventListener('click', pushButton); //push on the button of links

// 	function pushButton(event) { 
// 		let oldTab = parent.querySelector('.tab.active'); // получаем ссылку на активный таб

// 		if (oldTab) { // проверяем есть ли здесь tab
// 			oldTab.classList.remove('active'); //то убираем с таба активацию при нажатии на ссылку 
// 		}
		
// 		let tab = this.parentElement; //ищем родителя ссылки кликнув по ней

// 		if (tab !== oldTab) { // Если нажатая ссылка с табом не равна tab если там null то вешаем на tab ative
// 			tab.classList.add('active');
// 		}
		
// 		event.preventDefault();
// 	}
// }


//###############################################
// ИГРА В ГОРОДА
//###############################################
//1) игрок вводит в инпут город
//2) отправить с помощью клавиши enter название города в память браузера
//3) Браузер должен запомнить отправленные города и не принимать их повторно

// let field = document.querySelector('#field');
// let message = document.querySelector('#message');

// let prevCities;//предыдущий город
// let arrCities = [];//записываем города из инпута

// field.addEventListener('keydown', function (evt) {
//   if (evt.key === 'Enter') {

//     let newCities = field.value;//новый город записываем в переменную с инпута
//     field.value = "";//обнуляем инпут

//     let boolFalse = arrCities.includes(newCities);//проверяем есть ли в массиве город
//       console.log(arrCities, boolFalse);
   
//     if (boolFalse === false) {//если не правда то пушим город в массив, иначе выводим модальное окно, город был назван
//       arrCities.push(newCities);
     
//       if (newCities[newCities.length -1] == 'ь') {//если в названии города в конце мягкий знак, то вырезаем его
//         let cutWord = newCities.slice(0, newCities.length -1);
//         newCities = cutWord;
//         arrCities.push(newCities);//записываем город в массив без мягкого знака
//         message.innerHTML = newCities;
//         console.log(cutWord, 'мягкий знак был вырезан');
//         console.log(newCities[newCities.length -1]);
//         console.log(prevCities, newCities);
//       }
//     } else {
//       alert('Город был назван!');
//     }

//     if (prevCities !== undefined) {//если перменная не пустая то переходим в другой иф иначе выводим первый игрок ввел название города
     
//       if (prevCities[prevCities.length -1] == newCities[0]) {//если последняя буква первого города равна первой букве следующего города
//         alert('Следующий игрок называет город');
//       } else if (prevCities[prevCities.length -1] != newCities[0]) {	
//         arrCities.pop(newCities);
//         alert('Несовпадают первая и последняя буквы!'); 
//       } 

//     } else {
//       alert('Первый игрок ввел название города.');
//     }

//     if (arrCities.length != 0) {//если массив не равен нулю
//       prevCities = arrCities[arrCities.length - 1];//из массива берем и записываем в переменную предыдущее слово
//     }
//   }
// });
//###############################################

//###############################################
// ЧЕКЛИСТ
//###############################################
// let input = document.querySelector('.input');
// let ul = document.querySelector('.list');

// input.addEventListener('keydown', function (evt) {
//   if (evt.key == 'Enter') {
//     let li = document.createElement('li');

//     let task = document.createElement('span');
//     task.classList.add('task');
//     task.innerHTML = this.value;
//     task.addEventListener('dblclick', function() {
//       // здесь код, реализующий редактирование
//       let input = document.createElement('input');
//       input.value = this.innerHTML;
//       this.innerHTML = '';
//       input.value = '';

//       input.addEventListener('keydown', function (evt) {
//         if (evt.key == 'Enter') {
//           task.innerHTML = this.value;
//           this.remove();
//         }
//       });
//       this.append(input);
//     });
//     li.appendChild(task);

//     let remove = document.createElement('span');
//     remove.classList.add('remove');
//     remove.innerHTML = 'удалить';
//     remove.addEventListener('click', function () {
//       // здесь код для удаления тега li из списка ul
//       li.remove();
//     });
//     li.appendChild(remove);

//     let mark = document.createElement('span');
//     mark.classList.add('mark');
//     mark.innerHTML = 'сделано';
//     mark.addEventListener('click', function () {
//       // здесь код для отметки дела сделанным
//       task.classList.add('active');
//     });
//     li.appendChild(mark);

//     input.value = '';
//     ul.append(li);

//   }
// });
//################################################################

//###############################################
// ЗАПИСНАЯ КНИЖКА
//###############################################
