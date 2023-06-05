
'use strict'

  const getLi = ()=>{
    const li = document.createElement('li');
    li.classList.add('list__item');
    return li;
  };

  const getBtn = ()=>{
    const button = document.createElement('button');
    button.classList.add('list__button');
    return button;
  };
  
  const getCheckbox = ()=>{
    const checkbox = document.createElement('input');
    checkbox.classList.add('list__input');
    checkbox.setAttribute('type', 'checkbox');
    return checkbox;
  };

  const changeTask = (event)=>{
   
    const text= prompt('введите новую задачу');
    
    if(text){
        event.target.innerHTML=text;
    };
    console.log(text);
  };

 const btnDeleteTask = ()=>{
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('list__buttom_delete');
    btnDelete.innerText = 'delete';

    return btnDelete;
 };


  const addListItem = (event)=>{
    event.preventDefault();

    const listItem = getLi();

    const check = getCheckbox();
    listItem.append(check);

    const btn = getBtn();
    listItem.append(btn); 

    const btnDelete = btnDeleteTask();
    listItem.append(btnDelete); 

    
    check.addEventListener('click', () => btn.classList.toggle('list__button_active'));
    btn.addEventListener('click', changeTask);
    btnDelete.addEventListener('click', ()=>listItem.remove());



    const input = document.querySelector('.task1');
    btn.innerHTML = input.value;
    input.value = '';
   
    
  
    return listItem;
  };
 

document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('.form');
    const lists = document.querySelector('.deal');
    const del = document.querySelector('.delete');
    

    form.addEventListener('submit', (event)=>{
        lists.append(addListItem(event));
    });

    del.addEventListener('click', ()=>lists.innerHTML='');

});

  
  

    

