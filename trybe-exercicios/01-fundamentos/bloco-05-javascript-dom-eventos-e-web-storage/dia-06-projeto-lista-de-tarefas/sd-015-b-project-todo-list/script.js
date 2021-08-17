const listaTarefas = 'lista-tarefas';
const textoTarefa = 'texto-tarefa';

// Requisitos 7 e 8 - Clicar em um item da lista altera sua cor de fundo. Apenas um item pode ser selecionado.
function handleListBackgroundColor(event) {
  const listItem = document.getElementsByTagName('li');
  const targetEvent = event.target;

  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].style.backgroundColor = '';
    listItem[i].id = '';
  }
  targetEvent.style.backgroundColor = 'gray';
  targetEvent.id = 'selected';
}

// Requisito 9 - Clicar duas vezes em um item da lista deixa ele tachado. Clicar outras duas vezes remove o tachado.
function handleListItemDbClick(event) {
  const targetEvent = event;

  targetEvent.target.classList.toggle('completed');
}

// Cria função que adiciona todos os eventos aos items da lista.
function addItemListEvents(itemList) {
  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].addEventListener('click', handleListBackgroundColor);
    itemList[i].addEventListener('dblclick', handleListItemDbClick);
  }
}

// Cria Lista Ordenada pelo DOM e Restaura o Local Storage.
function restoreLocalStorage() {
  const value = JSON.parse(localStorage.getItem('taskList'));

  const newOl = document.createElement('ol');

  newOl.id = listaTarefas;
  newOl.innerHTML = value;
  const getOlParent = document.getElementById('list-container');

  getOlParent.appendChild(newOl);
  addItemListEvents(newOl.childNodes);
}

// Requisitos 5 e 6 - Cria um novo item ao final da lista e apaga o valor do input.
function handleNewTask() {
  const newTask = document.createElement('li');

  if (!document.getElementById(textoTarefa).value) {
    return alert('Preencha o campo antes de adicionar uma tarefa!');
  }

  newTask.innerText = document.getElementById(textoTarefa).value;

  const orderedList = document.getElementById(listaTarefas);
  orderedList.appendChild(newTask);

  // Apaga o input digitado.
  document.getElementById(textoTarefa).value = '';

  // Adiciona Event Listener a Lista.
  addItemListEvents(orderedList.childNodes);
}

function addNewTaskButtonEvent() {
  const buttonCreateTask = document.getElementById('criar-tarefa');
  buttonCreateTask.addEventListener('click', handleNewTask);
}

// Requisito 10 - Criar botão que apaga todos os elementos da lista.
function handleClearListButton() {
  const itemList = document.querySelectorAll('li');

  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].remove();
  }
  localStorage.clear();
}

function addClearListButtonEvent() {
  const clearListButton = document.getElementById('apaga-tudo');
  clearListButton.addEventListener('click', handleClearListButton);
}

// Requisito 11 - Criar botão que apaga somente os items finalizados.
function handleCompletedClearButton() {
  const completedTasks = document.querySelectorAll('.completed');

  for (let i = 0; i < completedTasks.length; i += 1) {
    completedTasks[i].remove();
  }
}

function addCompletedClearButtonEvent() {
  const clearCompletedButton = document.getElementById('remover-finalizados');
  clearCompletedButton.addEventListener('click', handleCompletedClearButton);
}

// Requisito 12 - Cria função que salva lista no Local Storage.
function storageTasks() {
  const orderedList = document.getElementById(listaTarefas);

  if (!orderedList.innerHTML) {
    return alert('Adiciona uma tarefa antes de salvar!');
  }

  localStorage.setItem('taskList', JSON.stringify(orderedList.innerHTML));
  return alert('Tarefas Salvas!');
}

function addStorageTasksButtonEvent() {
  const getSaveButton = document.getElementById('salvar-tarefas');

  getSaveButton.addEventListener('click', storageTasks);
}

// Requisito 14 - Cria botão que apaga somente o elemento selecionado.
function deleteSelectedTaskItem() {
  const selectedTask = document.getElementById('selected');
  selectedTask.remove();
}

function addDeleteSelectedTaskItemButton() {
  const deleteTaskButton = document.getElementById('remover-selecionado');

  deleteTaskButton.addEventListener('click', deleteSelectedTaskItem);
}

// Requisito 13 - Criar botão de mover tarefa para cima e outro botão para mover para baixo.
// Verifica se é possível mover a tarefa para cima ou para baixo.
function taskItemMovingUpError(taskItems, i) {
  const indexPosition = i - 1 < 0;
  if (taskItems[i].id === 'selected' && indexPosition) {
    return true;
  }

  return false;
}

// Move o item da lista para cima
function handleMoveTaskUp() {
  const taskItems = document.querySelectorAll('li');
  for (let i = 0; i < taskItems.length; i += 1) {
    if (taskItemMovingUpError(taskItems, i)) {
      return alert('Não é possível mover esta tarefa para cima!');
    }

    if (taskItems[i].id === 'selected') {
      const orderedList = document.getElementById(listaTarefas);

      orderedList.insertBefore(taskItems[i], taskItems[i].previousElementSibling);
    }
  }
}

function addMoveTaskUpButtonEvent() {
  const buttonUp = document.getElementById('mover-cima');

  buttonUp.addEventListener('click', handleMoveTaskUp);
}

function taskItemMovingDownError(taskItems, i) {
  const indexPosition = i + 1 >= taskItems.length;
  if (taskItems[i].id === 'selected' && indexPosition) {
    return true;
  }

  return false;
}
// Move o item da lista para baixo
function handleMoveTaskDown() {
  const taskItems = document.querySelectorAll('li');
  for (let i = 0; i < taskItems.length; i += 1) {
    if (taskItemMovingDownError(taskItems, i)) {
      return alert('Não é possível mover esta tarefa para baixo!');
    }

    if (taskItems[i].id === 'selected') {
      const orderedList = document.getElementById(listaTarefas);

      orderedList.insertBefore(taskItems[i].nextElementSibling, taskItems[i]);
    }
  }
}

function addMoveTaskDownButtonEvent() {
  const buttonDown = document.getElementById('mover-baixo');

  buttonDown.addEventListener('click', handleMoveTaskDown);
}

function loadAllPageFunctions() {
  restoreLocalStorage();
  addNewTaskButtonEvent();
  addClearListButtonEvent();
  addCompletedClearButtonEvent();
  addStorageTasksButtonEvent();
  addDeleteSelectedTaskItemButton();
  addMoveTaskUpButtonEvent();
  addMoveTaskDownButtonEvent();
}

window.onload = function () {
  loadAllPageFunctions();
};
