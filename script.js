let users = [
	{name: 'name1',  surname: 'surname1',  age: 30},
	{name: 'name2',  surname: 'surname2',  age: 30},
	{name: 'name3',  surname: 'surname3',  age: 30},
	{name: 'name4',  surname: 'surname4',  age: 30},
	{name: 'name5',  surname: 'surname5',  age: 30},
	{name: 'name6',  surname: 'surname6',  age: 30},
	{name: 'name7',  surname: 'surname7',  age: 30},
	{name: 'name8',  surname: 'surname8',  age: 30},
	{name: 'name9',  surname: 'surname9',  age: 30},
	{name: 'name10', surname: 'surname10', age: 30},
	{name: 'name11', surname: 'surname11', age: 30},
	{name: 'name12', surname: 'surname12', age: 30},
	{name: 'name13', surname: 'surname13', age: 30},
   {name: 'name14',  surname: 'surname14',  age: 30},
	{name: 'name15',  surname: 'surname15',  age: 30},
	{name: 'name16',  surname: 'surname16',  age: 30},
	{name: 'name17',  surname: 'surname17',  age: 30},
	{name: 'name18',  surname: 'surname18',  age: 30},
	{name: 'name19',  surname: 'surname19',  age: 30},
	{name: 'name20',  surname: 'surname20',  age: 30},
	{name: 'name21',  surname: 'surname21',  age: 30},
	{name: 'name22',  surname: 'surname22',  age: 30},
	{name: 'name23', surname: 'surname23', age: 30},
	{name: 'name24', surname: 'surname24', age: 30},
	{name: 'name25', surname: 'surname25', age: 30},
	{name: 'name26', surname: 'surname26', age: 30},
];

let table = document.querySelector('#table');
let pagination = document.querySelector('#pagination');

let notesOnPage = 3; // количество записей на странице
let countOfItems = Math.ceil(users.length / notesOnPage); // количество страниц
let maxCountOutputPagination = 3; // количество страниц, выводимое в pagination
let countListPagination = Math.ceil(countOfItems / maxCountOutputPagination); // количество списков страниц
let numberListPagination = 1; // счётчик списков страниц

let showPage = (function() {
	let active;
   function createCell(text, tr) {
   	let td = document.createElement('td');
   	td.innerHTML = text;
   	tr.appendChild(td);
   }

	return function(item) {
		if (active) {
			active.classList.remove('active');
		}
		active = item;

		item.classList.add('active');

		let pageNum = +item.innerHTML;

		let start = (pageNum - 1) * notesOnPage;
		let end = start + notesOnPage;

		let notes = users.slice(start, end);

		table.innerHTML = '';
		for (let note of notes) {
			let tr = document.createElement('tr');
			table.appendChild(tr);

			createCell(note.name, tr);
			createCell(note.surname, tr);
			createCell(note.age, tr);
		}
	};
}());

let items = []; // чтобы добавлять click
function showListPages() {
   pagination.innerHTML = "";
   let maxNumberOutputPage = (numberListPagination*maxCountOutputPagination<countOfItems)?numberListPagination*maxCountOutputPagination:countOfItems;
   for (let i = (numberListPagination-1)*maxCountOutputPagination+1; i <=maxNumberOutputPage; i++) {
   	let li = document.createElement('li');
   	li.innerHTML = i;
   	pagination.appendChild(li);
   	items.push(li);
   }
   for (let item of items) { // добавление клика по номеру станицы в pagination
   	item.addEventListener('click', function() {
   		showPage(this);
   	});
   }


}

let liUp = (function () {
   let element = document.createElement('li');
   element.innerHTML = ">";
   pagination.prepend(element);
   element.addEventListener('click', function() {
      numberListPagination++;
      showListPages()
      showButtons()
   });

   return element;
})()

let liDown = (function () {
   let element = document.createElement('li');
   element.innerHTML = "<";
   pagination.prepend(element);
   element.addEventListener('click', function() {
      numberListPagination--;
      showListPages()
      showButtons()
   });

   return element;
})()

function showButtons() {
   pagination.append(liUp);
   pagination.prepend(liDown);
   liUp.hidden = true;
   liDown.hidden = true;
   if (numberListPagination<countListPagination) {
      liUp.hidden = false;
   }
   if (numberListPagination>1) {

      liDown.hidden = false;
   }
}

showListPages();

showPage(items[0]);

showButtons()
