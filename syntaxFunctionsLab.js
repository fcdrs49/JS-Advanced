function firstTask(messsage){
    console.log(messsage.length);
    console.log(messsage);
}

function secondTaks(p1,p2,p3){
    let totalLength = p1.length + p2.length + p3.length;
    let avgLength = Math.floor(totalLength / 3);
    console.log(totalLength);
    console.log(avgLength);
}

function thirdTask(n1,n2,n3){
    console.log(`The largest number is ${Math.max(n1,n2,n3)}.`);
}

function circleArea(input){
    if(typeof(input) == 'number'){
        let result = Math.pow(input,2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else
    {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    }
}

function mathOperations(num1, num2, operator){
    let result;
    switch(operator){
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result);
}

function sumOfNumbersNtoM(n,m){
    let sum = 0;
    let num1 = Number(n);
    let num2 = Number(m);
    for(let i = num1; i <= num2; i++){
        sum += i;
    }
    console.log(sum);
}

function dayOfWeek(day){
    switch(day){
        case 'Monday': return 1;
        case 'Tuesday': return 2;
        case 'Wednesday': return 3;
        case 'Thursday': return 4;
        case 'Friday': return 5;
        case 'Saturday': return 6;
        case 'Sunday': return 7;
        default: return 'error';
    }
}

function daysInAMonth(month,year){
    return new Date(year,month,0).getDate();
}

function squareOfStars(count = 5){
    let result = '';
    for(let row = 0; row < count; row++){
        for(let col = 0; col < count; col++){
            result += '* ';
        }
        result += '\n';
    }
    return result;
}

function aggregateElements(elements){
    let sum = 0;
    let inverseSum = 0;
    let concat = '';

    for(let i = 0; i < elements.length; i++){
        sum += elements[i];
        inverseSum += 1 / elements[i];
        concat += elements[i];
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}
aggregateElements([1,2,3]);