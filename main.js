function getRandomArray(length, min, max) {
    let randomArray = [];
    if (Number.isInteger(length, max, min) && min < max) {
        for (let i = 0; i < length; i++) {
            randomArray[i] = Math.floor(Math.random() * (max - min) + min);
        }
        return randomArray
    } else {
        console.log('incorect data');
    }
}

console.log(getRandomArray(20, 1, 15));

function getModa(...nums) {
    let array = nums.filter(num => num % 1 == 0)
    const map = [];
    let max = -Infinity;
    array.forEach((item, index, currentAray) => {
        if (map[item] == null) {
            map[item] = 1
        } else {
            map[item] = map[item] + 1;
        }
        if (map[item] > max)
            max = map[item];
    });
    const mode = map.reduce((total, item, index) => {
        if (item === max)
            total.push(index);
        return total;
    }, []);

    return mode.length > 1 ? mode : mode[0];
}

console.log(getModa(3.3, 5, 4, 4, 4, 1, 3.3, 3));


function getAvarage(...nums) {
    let numbers = nums.filter(num => num % 1 == 0);
    const avar = numbers.reduce((total, item) => (total + item), 0) / numbers.length;
    return +avar.toFixed(2);
}
console.log(getAvarage(1, 2, 3.3, 4));

function getMedian(...nums) {
    let numbers = nums.filter(num => num % 1 == 0).sort((a, b) => { return a - b });
    let numbersHalf = Math.floor(numbers.length / 2);
    return numbers.length % 2 == 0 ? (numbers[numbersHalf] + numbers[numbersHalf - 1]) / 2 : numbers[numbersHalf - 1];

}
console.log(getMedian(1, 2, 3, 4));

function filterEvenNumbers(...numbers) {
    return numbers.filter(num => num % 2 != 0)
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5));

function countPositiveNumbers(...numbers) {
    return numbers.reduce((total, item) => {
        return item > 0 ? total + 1 : total
    }, 0)
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

function getDividedByFive(...numbers) {
    return numbers.filter(num => num % 5 == 0)
}

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

function replaceBadWords(string) {
    return string.split(/fuck|shit|javascript/).join('***')

}
console.log(replaceBadWords("Are you fucking kidding? bulshit, dude its javascript"));

function divideByThree(word) {
    return word.split('').reduce((acc, val) => {
        (acc[acc.length - 1] && acc[acc.length - 1].length < 3) ? acc[acc.length - 1] += val: acc.push(val);
        return acc;
    }, []);
}

console.log(divideByThree("Commander"));

function generateCombinations(word) {
    let arr = word.split('');
    return (arr.length === 1) ? arr :
        arr.reduce((acc, cv, index) => {
            let remaining = [...arr];
            remaining.splice(index, 1);
            return acc.concat(generateCombinations(remaining).map(a => [].concat(cv, a)));
        }, []);


}

console.log(generateCombinations('abcd'));