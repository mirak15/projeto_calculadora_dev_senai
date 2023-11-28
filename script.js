class Calculator{
    constructor(){
        // aqui é a propriedade que recebe os valores digitados pelo usuário
        this.displayVelue = ""
    }

    //* este metodo adiciona valores a propriedade displayValue
    //* e, em seguida chama o metodo updateDisplay para atualizar o visor (input)
    appendToDisplay(value){
        this.displayVelue += value;
        this.updateDisplay();
    }
    //* este metodo atualiza o visor (input) com os valores
    //* que o usuário digitou

    updateDisplay(){
        document.getElementById("displayContent").value = this.displayVelue;
    }
    //* este metodo limpa os valores do displayValue (input) e
    //* chama o metodo updateDisplay para atualizar o visor (input)

    clearDisplay(){
        this.displayValue = "";
        this.updateDisplay();
    }
    calculate(){
        try{
            const result = eval(this.displayValue);
            this.displayValue = result
            this.updateDisplay();
        }   catch (error) {
            this.displayValue = "Error";
            this.updateDisplay();
        }
    }
}

// instanciando o objeto
const calc = new Calculator();