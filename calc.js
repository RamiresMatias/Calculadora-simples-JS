let input = document.getElementById('input');
var increment = 0;

function operation(value){
    switch(value){
        case 'ce':
            input.value = '';
            break;
        case 'c':
            deleteLastNumber();
            break;
        case '=':
            input.value = eval(input.value);
            break;
        default:
        input.value += value;  
    }
}


function deleteLastNumber(){  
    let inputText = input.value;
    input.value = inputText.substring(0,inputText.length-1);
    input.value.substring(0,input.length - 1);
}

