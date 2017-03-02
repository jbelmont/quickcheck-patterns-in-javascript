const average = (numbers) => {
    if (numbers.length === 0) {
        return 0;
    } else {
        return numbers.reduce((prev, curr) => prev + curr, 0) / numbers.length;
    }
};

exports.average = average;