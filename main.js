//로컬스토리지 사용해서 다시해보자...

const inputEl = document.querySelector('input')
const ulEl = document.querySelector('.items')
const btn = document.querySelector('.btn')

//input 요소에 입력한 내용 콘솔로 출력
let inputText = ''
inputEl.addEventListener('input',function(){
  inputText = inputEl.value
})


//버튼 클릭시 inputText의 내용을 li에 달아서 하단에 보여주기
btn.addEventListener('click',function(){
  if(inputText){
    const list = document.createElement('li');
    list.innerHTML = 
    `${inputText}
    <div>
      <span class="material-symbols-outlined edit">
        edit_square
      </span>
      <span class="material-symbols-outlined delete">
        delete
      </span>
    </div>
    `;
    ulEl.appendChild(list);
    inputEl.value="";
    inputText='';
  }
})

//엔터를 누를 시 inputText의 내용을 li에 달아서 하단에 보여주기
inputEl.addEventListener('keydown',function(event){
  if(event.key === 'Enter' && inputText){
    const list = document.createElement('li')
    list.innerHTML = 
    `${inputText}
    <div>
      <span class="material-symbols-outlined edit">
        edit_square
      </span>
      <span class="material-symbols-outlined delete">
        delete
      </span>
    </div>
    `;
    ulEl.appendChild(list);
    inputEl.value="";
    inputText='';
  }
})

//clear items 선택시 li 전부 삭제
const btnClear = document.querySelector('.clear')

btnClear.addEventListener('click',function(){
  ulEl.innerHTML="";
})


//delete 버튼 선택시 해당 li 삭제
const btnDelete = document.querySelector('.delete')

btnDelete.addEventListener('click',function(){
  
})

