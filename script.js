// Copyright 2021 ibrahem Mouhamad
//

/*
 * Convert ASCII string to hexadecimal
 * inputString: the string to be converted
 * inline: true to return resulted value for every character seprated by a space
 *         false to return resulted value for every character seprated by a new line
*/
function ASCIItoHex(inputString = "", inline = true) {
    let hex = "";
    // check if input is valid, contains valid letters, numbers and punctuation marks
    if (inputString.length > 0 && /^[a-zA-Z0-9.,;:!? ]*$/.test(inputString)) {
        // for every character
        inputString.split('').map( i => {
            // add its hex value to result
            hex = hex + i.charCodeAt(0).toString(16)
            // add a space
            if (inline)
                hex = hex + " ";
            // or add a newline
            else
                hex = hex + "\n";
        });
        // remove last space/newline
        hex = hex.trim();
        return hex;
    } else {
        // show an alert
        alert("Invalid string, It should only contains valid letters, numbers and punctuation marks.");
        return false;
    }
}

// get input from user
var userInput = window.prompt("Enter a string to get its hexadecimal value, each value for a character in a line");
// get hex value
var output = ASCIItoHex(userInput, false);
// check the result
if (output)
    console.log("hexadecimal value for \"" +  userInput + "\"\n" + output);
    // get input from user
userInput = window.prompt("Enter a string to get its hexadecimal value inline");
// get hex value
var output = ASCIItoHex(userInput);
// check the result
if (output)
    console.log("hexadecimal value for \"" +  userInput + "\"\n" + output);