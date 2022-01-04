module.exports = function toReadable(number) {
    const units = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    };
    const tenTwelve = {
        0: "ten",
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen"
    };

    const tens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    };

    const hundred = " hundred";

    if (number == 0)
        return 'zero';

    const acc = [];
    number
        .toString()
        .split("") 
        .reverse() 
        .forEach((el, index, arr) => {
            if (index == 0) {
                acc.push(units[el]);
            }
            if (index == 1 && el == 1) {
                acc.push(tenTwelve[arr[index - 1]]);
                acc.shift();
            } else if (index == 1) {
                acc.push(tens[el]);
            }
            if (index == 2) {
                acc.push(units[el] + hundred);
            }
        });

    return acc.filter(e => !!e).reverse().join(" ").trim();
}
