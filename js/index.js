const nums = document.querySelectorAll('.digits button');
const opers = document.querySelectorAll('.opers button');
const display = document.querySelector('.display');
const equal = document.querySelector('.equal');

nums.forEach(num => num.addEventListener('click', digitPressed));

function digitPressed (ev) {
       display.value += ev.target.innerText;
}

opers.forEach(oper => oper.addEventListener('click', operPressed));

function operPressed (ev) {
    const oper = ev.target.innerText;

        if(!display.value.includes('-') && !display.value.includes('+') && !display.value.includes('/') && !display.value.includes('*')){
            display.value += oper;
        }

}
 equal.addEventListener('click', quantify);

 function quantify() {
     const text = eval(display.value);
      if(!(text === Number.POSITIVE_INFINITY)){
         display.value = text;
      }
 }