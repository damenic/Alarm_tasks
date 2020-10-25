
//Shefrator  jarayoni
 module.exports.shifr = function cryptoMessage(message) {
    let lengthSecondArray = 7;
    let messageLength = message.length;
    let secondArrayCound = messageLength / lengthSecondArray;
    let messageInArray = [];
    let cursor = messageLength;

    for (let i = 0; i < secondArrayCound; i++) {
        let secondArray = [];

        for (let j = 0; j < lengthSecondArray; j++) {
             secondArray.push(message[--cursor]);


        }

        messageInArray.push(secondArray);
    }

    return messageInArray;

}


//Deshifrlash jarayoni
module.exports.deshifr = function callBackCryptMessage(result) {
    let firstStringAllArray = "";
    let secondStringRightWords = "";
    for (let i=0; i<result.length; i++) {
        result[i].forEach(myFunction);

        function myFunction(index) {
            firstStringAllArray += index;

        }
    }

    for (let k=firstStringAllArray.length; k>=0; k--) {
        secondStringRightWords += firstStringAllArray.charAt(k);
    }
    return secondStringRightWords;


}



