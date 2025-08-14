function getAverage (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

function analyzeArray(arr) {
    let res = {
        average: null,
        min: null,
        max: null,
        length: null
    };
    arr.sort();
    res.average = getAverage(arr);
    res.min = arr[0];
    res.max = arr[arr.length-1];
    res.length = arr.length;
    return res;
}

module.exports = analyzeArray;