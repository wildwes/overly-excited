// Create an array that contains the words in the sentence
let sentence1 = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

//
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
let wordCount1 = 1;

function addExcitement1 (theWordArray, punctuation) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    
    for (let i =0; i < theWordArray.length; i++) {
        // conctenate the new word onto buildMeUp
        if(
            wordCount1 % 3 === 0
            ){
                buildMeUp += `${theWordArray[i]}${punctuation} `;
                wordCount1++;
                
            }
            else{
                buildMeUp += `${theWordArray[i]} `;
                // putting a space between words⬆
                wordCount1++;
        }
        // print buildMeUp to the console
        console.log(buildMeUp)
        
    }
   
}

// Invoke the function and pass in the array
addExcitement1(sentence1, "$")

