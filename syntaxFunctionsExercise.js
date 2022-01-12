function fruit(fruitType,weightGr,pricePerKg){
    let weightKg = weightGr / 1000;

    function fixedNum(num){
        return num.toFixed(2);
    }

    return `I need $${fixedNum(weightKg * pricePerKg)} to buy ${fixedNum(weightKg)} kilograms ${fruitType}.`;
}

function greatestCommonDiviser(num1, num2){
    while(num2){
        var t = num2;
        num2 = num1 % num2;
        num1 = t;
    }
    return num1;
}

function sameNumbers(number){
    let numberString = String(number);
    let sum = 0;
    let areEqual = true;
    for(let i = 0; i < numberString.length; i++){
        sum += Number(numberString.charAt(i));
    }
    for(let i = 0; i < numberString.length - 1; i++){
        if(numberString.charAt(i) != numberString.charAt(i+1))
        {
            areEqual = false;
            break;
        }
    }
    return `${areEqual}\n${sum}`;
}

function previousDay(year,month,day){
    let date = new Date(year,month-1,day);
    date.setDate(date.getDate()-1);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}
//console.log(previousDay(2020,3,10));

function timeToWalk(steps,footprintLength,speed){
    const restDuration = 60;
    let metersTotal = steps * footprintLength;
    let restsCount = Math.floor(metersTotal / 500);
    let kilometersTotal = metersTotal / 1000;
    let timeInSeconds = (kilometersTotal / speed * 3600) + (restsCount * restDuration);
    let timeInHours = Math.floor(timeInSeconds / 3600);
    timeInSeconds %= 3600;
    let timeInMinutes = Math.floor(timeInSeconds / 60);
    timeInSeconds = Math.round(timeInSeconds % 60);
    let result = '';
    result += timeInHours < 10 ? '0' + timeInHours : timeInHours;
    result += ':';
    result += timeInMinutes < 10 ? '0' + timeInMinutes : timeInMinutes;
    result += ':';
    result += timeInSeconds < 10 ? '0' + timeInSeconds : timeInSeconds;
    return result;
}

function roadRadar(speed,area){
    const areaLimit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    let currentLimit = areaLimit[area];
    if(currentLimit >= speed){
        return `Driving ${speed} km/h in a ${currentLimit} zone`;
    }

    let status = '';
    let overspeeding = speed - currentLimit;
    if(overspeeding <= 20){
        status = 'speeding';
    }
    else if(overspeeding <= 40){
        status = 'excessive speeding';
    }
    else{
        status = 'reckless driving';
    }

    return `The speed is ${overspeeding} km/h faster than the allowed speed of ${currentLimit} - ${status}`;
}

//console.log(roadRadar(40,'city'));
//console.log(roadRadar(120,'interstate'));
//console.log(roadRadar(200,'motorway'));

function cookingByNumbers(num,op1,op2,op3,op4,op5){
    let number = Number(num);
    let operationsArray = [op1,op2,op3,op4,op5];
    operationsArray.forEach(element => {
        switch(element){
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number++; break;
            case 'bake': number *= 3; break;
            case 'fillet': number -= number * 0.2; break;
        }
        console.log(number);
    });
}

function validityChecker(x1,y1,x2,y2){
    const message = {
        true: `is valid`,
        false: `is invalid`
    }

    function isDistanceValid(n1,m1,n2,m2){
        return Number.isInteger(Math.sqrt(Math.pow(n2-n1,2)+Math.pow(m2-m1,2)));
    }

    function getResultString(n1,m1,n2,m2){
         return `{${n1}, ${m1}} to {${n2}, ${m2}} ${message[isDistanceValid(n1,m1,n2,m2)]}`;
    }

    console.log(getResultString(x1,y1,0,0));
    console.log(getResultString(x2,y2,0,0));
    console.log(getResultString(x1,y1,x2,y2));
}

function wordsUppercase(input){
    let wordsArray = [];
    let tempWord = '';

    function isLetter(c){
        return c.toLowerCase() != c.toUpperCase() || !isNaN(c);
    }
    while(input){
        let tempLetter = input.charAt(0);
        if(isLetter(tempLetter)) {
            tempWord += tempLetter;
        } else{
            if(tempWord){
                wordsArray.push(tempWord.toUpperCase());
            }
            tempWord = '';
        }
        input = input.substring(1);        
    }
    if(tempWord){
        wordsArray.push(tempWord.toUpperCase());
    }
    return wordsArray.join(', ');
}

console.log(wordsUppercase('i am here2'));