const checkButton = document.getElementById("check-btn");
const paragraphResult = document.getElementById("result");



function checkInput() {
    const textInput = document.getElementById("text-input").value;
    //Checks if input is empty and sends an alert if true.
    if (!textInput) {
        alert('Please input a value');
        return;
    }
    //Saves original string input to originalText variable.
    const originalText = textInput;
    /*Removes all non alphanumeric characters from inText and replaces them with empty string, t
    he it changes all characters to lower case. Finally saves them to alphaOnlyText variable.*/
    const alphaOnlyText = textInput.split('').filter(char => /[a-zA-Z0-9]/.test(char)).join('').toLowerCase();
    //Splits alphaOnlyText in to an array, then it reverses the order and finally joins and saves in reversedText variable.
    const reversedText = alphaOnlyText.split("").reverse().join("");

    //checks if original string and reversed string are the same. Then returns if it is a palindrome or not.
    if(alphaOnlyText === reversedText){
        paragraphResult.innerText = `${originalText} is a palindrome`;
    }else {
        paragraphResult.innerText = `${originalText} is not a palindrome`;
    }
}

checkButton.onclick = checkInput;