const letters = []; // This is our stack

const word ="whoIsTheManager";

const rword ="";

//put the letters of the word in the stack
for (let  i =0; i < word.length; i++){
    letters.push(word[i]);
}

//Pop off the stack in reverse order
for (let  i = 0; i < word.length; i++){
    rword += letters.pop();
}

if (rword === word){
    console.log('word is a palindrome');
} else{
    console.log('word is not palindrome');
}



