function f_onload() {
   if(input_nameRepository.value === '') input_nameRepository.value = window.sessionStorage.getItem(input_nameRepository.id); // загрузка некоторых данных из предыдущей сессии
}

function f_unload() {
   window.sessionStorage.setItem(input_nameRepository.id, input_nameRepository.value); // сохранение некоторых данных из текущей сессии
}
