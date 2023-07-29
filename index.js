"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const resultInput = document.querySelector(".result");
    const buttons = document.querySelectorAll("button");
    let currentExpression = "";
    const updateResult = () => {
        resultInput.value = currentExpression;
    };
    const calculate = () => {
        try {
            currentExpression = eval(currentExpression).toString();
        }
        catch (error) {
            currentExpression = "Error";
        }
        updateResult();
    };
    const handleClick = (button) => {
        // Handle different button types
        switch (button) {
            case "Enter":
                calculate();
                break;
            case "del":
                currentExpression = currentExpression.slice(0, -1);
                updateResult();
                break;
            case "clear":
                currentExpression = "";
                updateResult();
                break;
            case "√":
                currentExpression += "Math.sqrt(";
                updateResult();
                break;
            case "×":
                currentExpression += "*";
                updateResult();
                break;
            case "÷":
                currentExpression += "/";
                updateResult();
                break;
            case "±":
                currentExpression += "-1 * ";
                updateResult();
                break;
            default:
                currentExpression += button;
                updateResult();
                break;
        }
    };
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            if (!buttonText)
                return;
            handleClick(buttonText);
        });
    });
});
