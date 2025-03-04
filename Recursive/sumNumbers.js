const sumNumbersRecursive = (numbers) => {
    if (numbers.length === 1) {
        return numbers[0]
    } else if (numbers.length === 0) {
        return 0
    }

    const updater = () => {
        numbers[1] = numbers[1] + numbers[0]
        numbers.shift()
        return numbers
    }
    return sumNumbersRecursive(updater())
}


sumNumbersRecursive([5, 2, 9, 10]); // -> 26
sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]); // -> 1
sumNumbersRecursive([]); // -> 0
sumNumbersRecursive([1000, 0, 0, 0, 0, 0, 1]); // -> 1001
sumNumbersRecursive([700, 70, 7]); // -> 777
sumNumbersRecursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1]); // -> -55
sumNumbersRecursive([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // -> 0
