const maincoinInput = document.getElementById('maincoin');
const coinInput = document.getElementById('coin');
const formulario = document.getElementById('formulario');
const errorInput = document.getElementById('error');
const coinvalue1Input = document.getElementById('coinvalue1');
const coinvalue2Input = document.getElementById('coinvalue2');
const coinvalue3Input = document.getElementById('coinvalue3');
const coin1Input = document.getElementById('coin1');
const coin2Input = document.getElementById('coin2');
const coin3Input = document.getElementById('coin3');
const cointext1Input = document.getElementById('cointext1');
const cointext2Input = document.getElementById('cointext2');
const cointext3Input = document.getElementById('cointext3');

function comprobarForm(event) {
    if (maincoinInput.value == 0 || 
        maincoinInput.value.length == 0 || 
        maincoinInput.value.match(/(?<!\$)[A-Za-z]/)){

        error.innerText = 'El campo sólo permite numeros enteros o decimales separados por un punto'
        console.log('Error');
        maincoinInput.focus();
        event.preventDefault();
        coinvalue1Input.value = '0';
        coinvalue2Input.value = '0';
        coinvalue3Input.value = '0';
        return false

    } else if (coinInput.value == 0){

        console.log('Segundo error');
        coinInput.focus();
        event.preventDefault();
        error.innerText = 'Por favor escoge un tipo de moneda';
        coinvalue1Input.value = '0';
        coinvalue2Input.value = '0';
        coinvalue3Input.value = '0';
        return false

    } else if (maincoinInput.value.match(/^\d+(\.\d+)?$/)) {

        console.log('Pasado el primer punto')
        event.preventDefault();
        error.innerText = "";
        let valueCoin = parseFloat(maincoinInput.value);
        if (coinInput.value == 1){
            // Convertir desde dolares
            coinvalue1Input.value = (valueCoin * 0.83034053).toFixed(2);
            coin1Input.value = '£'
            cointext1Input.innerText = 'Libras esterlinas'

            coinvalue2Input.value = (valueCoin * 0.93735453).toFixed(2);
            coin2Input.value = '€'
            cointext2Input.innerText = 'Euros'
            
            coinvalue3Input.value = (valueCoin * 3.8341029).toFixed(2);
            coin3Input.value = 'S/'
            cointext3Input.innerText = 'Soles'
        } else if (coinInput.value == 2) {
            // Convertir desde euros
            coinvalue1Input.value = (valueCoin * 0.88554552).toFixed(2);
            coin1Input.value = '£'
            cointext1Input.innerText = 'Libras esterlinas'

            coinvalue2Input.value = (valueCoin * 1.0659172).toFixed(2);
            coin2Input.value = '$'
            cointext2Input.innerText = 'Dólares'
            
            coinvalue3Input.value = (valueCoin * 4.0880747).toFixed(2);
            coin3Input.value = 'S/'
            cointext3Input.innerText = 'Soles'
        } else if (coinInput.value == 3) {
            // Convertir desde soles
            coinvalue1Input.value = (valueCoin * 0.21659103).toFixed(2);
            coin1Input.value = '£'
            cointext1Input.innerText = 'Libras esterlinas'

            coinvalue2Input.value = (valueCoin * 0.26065504).toFixed(2);
            coin2Input.value = '$'
            cointext2Input.innerText = 'Dólares'
            
            coinvalue3Input.value = (valueCoin * 0.24449394).toFixed(2);
            coin3Input.value = '€'
            cointext3Input.innerText = 'Euros'
        } else if (coinInput.value == 4) {
            // Convertir desde libras esterlinas
            coinvalue1Input.value = (valueCoin * 4.618977).toFixed(2);
            coin1Input.value = 'S/'
            cointext1Input.innerText = 'Soles'

            coinvalue2Input.value = (valueCoin * 1.2039014).toFixed(2);
            coin2Input.value = '$'
            cointext2Input.innerText = 'Dólares'
            
            coinvalue3Input.value = (valueCoin * 1.1293249).toFixed(2);
            coin3Input.value = '€'
            cointext3Input.innerText = 'Euros'
        }   
    }
}

formulario.addEventListener('submit', comprobarForm);