const nums = document.querySelectorAll('.digits button');
const opers = document.querySelectorAll('.opers button');
let display = document.querySelector('.display');
const equal = document.querySelector('.equal');
const dot = document.querySelector('.dot');
const clear = document.querySelector('.clear');

nums.forEach(num => num.addEventListener('click', digitPressed));

function digitPressed (ev) {
       display.value += ev.target.innerText;
}

opers.forEach(oper => oper.addEventListener('click', operPressed));

function operPressed (ev) {
    const oper = ev.target.innerText;
        if(!display.value.includes('-') && !display.value.includes('+') && !display.value.includes('/') && !display.value.includes('*')){
            display.value += oper;
        }else if(display.value.charAt(display.value.length - 1) === '-' || display.value.charAt(display.value.length - 1) === '+' || display.value.charAt(display.value.length - 1) === '*' || display.value.charAt(display.value.length - 1) === '/' ){
           let text = display.value.split('');
           text.pop();
           text.push(oper);
           display.value = text.join('');
        }
}

 equal.addEventListener('click', quantify);

 function quantify() {
     const text = eval(display.value);
      if(!(text === Number.POSITIVE_INFINITY)){
         display.value = text;
      }else{
          display.value = 'Error';
      }
 }

dot.addEventListener('click', dotPressed);

function dotPressed (ev) {
    if(!display.value.includes(ev.target.innerText)){
       display.value += ev.target.innerText;
    }
}