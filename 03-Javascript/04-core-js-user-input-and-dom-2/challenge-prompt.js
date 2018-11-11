// Alerts, Prompts and Writing to DOM 2



// Using the `confirm` method, welcome the user to the Boba Shop and ask them if they would like a boba
var wantsBobs= confirm("Welcome! Do you Boba?"); 

// Store the user response in a variable `wantsBoba`


// Create an if statement checking whether the user wanted boba from the earlier `confirm` dialogue
if (wantsBoba === true) {


    // Declare a variable `drinkFlavor`
    var drinkFlavor= prompt("What flavor drink?");
    
    // Prompt the user for what flavor they would like for their drink

    // Store their response into the variable `drinkFlavor`

    
    
    // Write to the DOM a message to the user telling them that their drink will be ready soon.

    document.write("Your " + drinkFlavor + " will be ready soon!");
    // Use string concatenation in order to specify the flavor of their drink

    
// Else, write "Goodbye! Come back soon!" to the DOM
} else {
    document.write("Goodbye! Come back soon!");
}

