
function max(num1, num2) {
    if (num1 > num2) {
        // console.log(num1 + " is greater than " + num2);
        return num1;
    }
    else {
        // console.log(num2 + " is greater than " + num1);
        return num2;
    }
}

function maxOfThree(num1, num2, num3) {
    // console.log("Max of " + num1 + " " + num2 + " " + num3 + " is: " + Math.max(num1, num2, num3));
    return Math.max(num1, num2, num3);
}

function isVowel(inputString) {
    switch (inputString[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            // console.log(inputString[0] + " is a Vowel");
            return "Is a Vowel";
        default:
            // console.log(inputString[0] + " is a consonent");
            return "Is not a Vowel";
    }
}

function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    // console.log("Sum of all the elements is :" + sum);
    return sum;
}

function sumAllArray(args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    // console.log("Sum of all the elements in array is :" + sum);
    return sum;
}

function multiplyAllArray(args) {
    let mult = 1;
    for (let arg of args) mult *= arg;
    return mult;
    // console.log("Multiplication of all elements in array is :" + mult)
}

function revString(args) {
    // console.log("Reverse of " + args + " is " + args.split('').reverse().join(''))
    return args.split('').reverse().join('');
}

function findLongestWord(args) {
    let maxlength = args[0].length;
    let maxWord = args[0];
    for (let arg of args) {
        if (arg.length > maxlength) {
            maxlength = arg.length;
            maxWord = arg;
        }
    }
    return maxWord;
    // console.log("Longest word in array is '" + maxWord + "' with length as :" + maxlength);
}

function filterLongWords(args, i) {
    var arr = [];
    for (let arg of args) {
        if (arg.length > i) {
            arr.push(arg);
        }
    }
    return "["+arr+"]";
    // console.log("All words whose length is greater than :" + i + " are [" + arr + "]");
}

function jsfiddle() {
    const a = [1, 3, 5, 3, 3];
    const b = a.map(function (elem, i, array) {
        return elem * 10;
    })
    console.log(b);
    const c = a.filter(function (elem, i, array) {
        return elem == 3;
    });
    console.log(c);
    const d = a.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    });
    console.log(d);

    const d2 = a.find(function (elem) { return elem > 1; }); //3
    const d3 = a.findIndex(function (elem) { return elem > 1; }); //1
    console.log(d2);
    console.log(d3);

}

function myFunctionTest(expected, fun) {
    if (expected === fun()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + fun();
    }
    ;
}