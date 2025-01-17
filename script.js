document.addEventListener('DOMContentLoaded',(event) =>{
let string = "";
let buttons = document.querySelectorAll('.para1');
Array.from(buttons).forEach((para1)=>{
  para1.addEventListener('click', (e)=>{
    if(e.target.innerHTML === '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  });
});
});