class Calc {

    constructor(){
        this._operation = [];
        this._input = document.getElementById('input');
        this.initializeButtons();
    }

    addOperation(value){
        
        
        if(isNaN(this.getLastNumber()) && this.getLastNumber() != undefined){

            if(this.isOperator(value)){
                this.setLastNumber(value);
            }else{
                this._operation.push(value);
            }

        }else{

           if(this.isOperator(value)){
              
              this._operation.push(value);

            }else{
                
                this._operation.push(value);
            }
        }

        this._input.value = this._operation.join('');
      
    }

    getLastNumber(){
        return this._operation[this._operation.length - 1];
    }

    isOperator(value){
        return (['*','/','-','+'].indexOf(value) > -1);
    }

    setLastNumber(value){
        this._operation[this._operation.length - 1] = value;
    }

    deleteLastNumber(){
        this._operation.pop();
        this._input.value = this._operation.join('');
    }

    executeBtn(value){
        switch(value){

            case 'ce':
                this._operation = [];
                this._input.value = '';
                break;

            case 'c':
                this.deleteLastNumber();
                break;

            case '=':
                this.calc();
                break;

            case '.':
            case '*':
            case '-':
            case '+':
            case '/':
                this.addOperation(value);
            break;               
            
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            this.addOperation(parseInt(value));
            break;  
        }
    }
    calc(){
        let last = this._operation.join('');
        this._operation = [];
        this._operation.push(eval(last));
        this._input.value = this._operation;
    }

    initializeButtons(){

        let buttons = document.querySelectorAll('.teclado  button');

        buttons.forEach((btn) =>{
            btn.addEventListener('click', e=> {
                this.executeBtn(btn.value);
                
            });    
        });  
    }
}
