


document.addEventListener("DOMContentLoaded", function () {
    let inputBox = document.getElementById("inputBox");
    let buttons = document.querySelectorAll("button");

    // Show a friendly greeting when the page loads
    alert("Welcome to your Scientific Calculator! 😊\nLet's solve some equations.");

    // Function to play button click sound
    function playClickSound() {
        let audio = new Audio("click.mp3"); // Ensure you have a 'click.mp3' file in your project
        audio.play();
    }

    // Function to evaluate mathematical expressions
    function evaluateExpression(expression) {
        try {
            let result = Function(`return ${expression}`)();
            return isNaN(result) ? "Oops! Invalid input 😢" : result;
        } catch (error) {
            return "Oops! Invalid input 😢";
        }
    }

    // Function to handle button clicks
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            playClickSound(); // Play sound on button click
            button.classList.add("clicked"); // Add animation effect

            setTimeout(() => {
                button.classList.remove("clicked"); // Remove animation effect after click
            }, 200);

            let buttonText = button.innerText;

            if (buttonText === "C") {
                inputBox.value = ""; // Clear input
            } else if (buttonText === "Del") {
                inputBox.value = inputBox.value.slice(0, -1); // Delete last character
            } else if (buttonText === "=") {
                inputBox.value = evaluateExpression(inputBox.value); // Evaluate expression
            } else if (buttonText === "sin(") {
                inputBox.value += "Math.sin("; // Append sin function
            } else if (buttonText === "cos(") {
                inputBox.value += "Math.cos("; // Append cos function
            } else if (buttonText === "tan(") {
                inputBox.value += "Math.tan("; // Append tan function
            } else if (buttonText === "log") {
                inputBox.value += "Math.log10("; // Append log function
            } else if (buttonText === "ln") {
                inputBox.value += "Math.log("; // Append natural log function
            } else if (buttonText === "π") {
                inputBox.value += "Math.PI"; // Append Pi value
            } else if (buttonText === "exp(") {
                inputBox.value += "Math.exp("; // Append exponential function
            } else if (buttonText === "x²") {
                inputBox.value += "**2"; // Square function
            } else if (buttonText === "x⁻¹") {
                inputBox.value += "**-1"; // Reciprocal function
            } else if (buttonText === "√") {
                inputBox.value += "Math.sqrt("; // Square root function
            } else if (buttonText === "^") {
                inputBox.value += "**"; // Power function
            } else if (buttonText === "!") {
                inputBox.value = factorial(parseInt(inputBox.value)); // Factorial function
            } else {
                inputBox.value += buttonText; // Append button text to input
            }
        });
    });

    // Function to calculate factorial
    function factorial(n) {
        if (n < 0) return "Factorial not defined for negative numbers 😢";
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
});