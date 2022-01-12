function evenPoisitionElement(array){
    let result = '';
    for(let i = 0; i < array.length; i += 2){
        result += array[i] + ' ';
    }
    return result;
}

//console.log(evenPoisitionElement(['20', '30', '40', '50', '60']));

function lastKNumbersSequence(n,k){
    const arr = [1];
    while(arr.length != n){
        let lastPos = arr.length - 1;
        let tempResult = 0;
        for(let i = lastPos; i >= 0; i--){
            tempResult += arr[i];
            if(lastPos - i == k-1){
                break;
            }
        }
        arr.push(tempResult);
    }
    return arr;
}

//console.log(lastKNumbersSequence(8,2));

function sumFirstLast(array){
    return Number(array.pop()) + Number(array.shift());
}

//console.log(sumFirstLast(['20', '30', '40']));

function negativePositiveNumbers(array){
    const outArray = [];
    array.forEach(element => {
        if(element < 0){
            outArray.unshift(element);
        } else {
            outArray.push(element);
        }
    });
    return outArray;
}

//console.log(negativePositiveNumbers([7, -2, 8, 9]).join('\n'));

function smallest2Numbers(array){
    array.sort((a,b) => a-b);
    return `${array[0]} ${array[1]}`;
}

//console.log(smallest2Numbers([30, 15, 50, 5]));

function biggerHalf(array) {
    array.sort((a,b) => a-b);
    let half = Math.floor(array.length / 2);
    return array.slice(half);
}

//console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

function processOddPosition(array) {
    return array.filter((a,i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join();
}

//console.log(processOddPosition([10, 15, 20, 25]));

function pieceOfPie(pieFlavors, target1, target2) {
    let startPos = pieFlavors.indexOf(target1);
    let endPos = pieFlavors.indexOf(target2)+1;
    return pieFlavors.splice(startPos,endPos);
}

/*console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));*/

function biggestElement(array) {
    let max;
    array.forEach(row => {
        row.forEach(element => {
            if(!max) {
                max = element;
            }
            if(element > max) {
                max = element;
            }
        });
    });
    return max;
}

//console.log(biggestElement([[20, 50, 10],[8, 33, 145]]));

function diagionalSums(array) {
    let firstDiagonalIndex = 0;
    let secondDiagonalIndex = array[0].length - 1;
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    array.forEach(arr => {
        firstDiagonalSum += arr[firstDiagonalIndex++];
        secondDiagonalSum += arr[secondDiagonalIndex--];
    });
    return firstDiagonalSum + ' ' + secondDiagonalSum;
}

//console.log(diagionalSums([[20, 40],[10, 60]]));

function equalNeighbors(input) {
    
}