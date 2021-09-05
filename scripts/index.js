let buttons = document.getElementsByClassName('button');
let input = document.getElementById('calcInput');
let del = document.getElementById('delete');
let reset = document.getElementById('reset');
let dot = document.getElementById('dot');
let equal = document.getElementById('eql');
let themes = document.getElementsByName('theme');
let themeLink = document.getElementById('themelink');

for (let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        if (buttons[i].id.toString() === 'eql' || 
            buttons[i].id.toString() === 'reset' ||
            buttons[i].id.toString() === 'dot' ||
            buttons[i].id.toString() === 'delete'
        ){
            console.log();
        } else if (
            buttons[i].id.toString() === 'add' || 
            buttons[i].id.toString() === 'sub' ||
            buttons[i].id.toString() === 'div' || 
            buttons[i].id.toString() === 'mul' 
        ) {
            switch (buttons[i].id.toString()){
                case 'add':
                    input.value += (input.value === '0' || input.value === '')?'':'+';
                    break;
                case 'sub':
                    input.value += (input.value === '0' || input.value === '')?'':'-';
                    break;
                case 'div':
                    input.value += (input.value === '0' || input.value === '')?'':'/';
                    break;
                case 'mul':
                    input.value += (input.value === '0' || input.value === '')?'':'x';
                    break;
                default:
                    break;
            }
        } else {
            if(input.value === '0'){
                input.value = buttons[i].id
            } else {
                input.value += buttons[i].id;
            }
        }
    })
}

reset.addEventListener('click', () => {
    input.value = null;
})

del.addEventListener('click', () => {
    input.value = (input.value.length === 1)?input.value = 0:input.value.slice(0, -1);
})

dot.addEventListener('click', () => {
    input.value += '.';
})

equal.addEventListener('click', () => {
    input.value = eval(input.value.replace('x', '*'));
})

themes.forEach((theme) => {
    theme.addEventListener('change', () => {
        themeLink.href = 'styles/'+theme.id.toString()+'/index.css';
        console.log(theme.id);
    })
})
