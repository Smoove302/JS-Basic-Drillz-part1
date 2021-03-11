class StrangerStrings {

    getHelloWorld(){
        let str = `Hello World`;
        return str;
    }

    concatenation(firstSegment, secondSegment){
        let str = firstSegment + secondSegment;
        return str;
    }

    getPrefix(input){
       return input[0] + input[1] + input[2];
    }

    getSuffix(input){
        return input[3] + input[4] + input[5];
    }

    getMiddleCharacter(input){

        return input[4];
    }

    getFirstWord(inputValue){
      let firstWord = inputValue.split(' ');
        return firstWord[0];
    }
    
    getSecondWord(inputValue){
        let secondWord = inputValue.split(' ');
        return secondWord[1];
    }
    
    reverse(inputValue){
        return inputValue.split('').reverse('').join('');
    }
}

module.exports = StrangerStrings;