function printWithDelimiter(array,delimiter) {
    return array.join(delimiter);
}

//console.log(printWithDelimiter(['One','Two','Three','Four','Five'],'-'));

function everyNthElement(array,n) {
    let outputArray = new Array();
    for(let i = 0; i < array.length; i += n) {
        outputArray.push(array[i]);
    }
    return outputArray;
}

//console.log(everyNthElement(['5','20','31','4','20'],2));

function addOrRemoveElements(array) {
    let value = 1;
    let outputArray = new Array();
    array.forEach(element => {
        if (element === 'add') {
            outputArray.push(value);
        } else {
            outputArray.pop();
        }
        value++;
    });
    return outputArray.length ? outputArray.join('\n') : 'Empty';
}

//console.log(addOrRemoveElements(['remove','remove','remove']));

function rotateArray(array,rotations) {
    for(let i = 0; i < rotations; i++) {
        array.unshift(array.pop());
    }
    return array.join(' ');
}

//console.log(rotateArray(['Banana','Orange','Coconut','Apple'],15));