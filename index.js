function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()
let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi(){
  let element = document.createElement('li');
  element.innerHTML=retrieveEmployeeInformation();
  let list=document.querySelector('.employee-list')
  list.appendChild(element);
}


function addNewLiOnClick(){
  document.querySelector('input[type="submit"]').addEventListener('click', function(event){
    addNewElementAsLi()
    resetInput()
  })
}






