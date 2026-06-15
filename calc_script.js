const display = document.getElementById('display');

        function appendValue(input) {
            if(display.value==="Error   "){
                display.value="";
            }
            display.value += input;
        }

        function clearDisplay() {
            display.value = '';
        }

        function deleteLast() {
            display.value = display.value.slice(0, -1);
        }

        function calculateResult() {
            try {
                if (display.value) {
                    display.value = Function(`"use strict"; return (${display.value})`)();
                }
            } catch (error) {
                display.value = "Error   ";
            }
        }