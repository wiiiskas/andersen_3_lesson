function concatStrings(firstString, separator='') {

    let resultString = firstString;
    let isStringBuilding = true;
    let validSeparator = typeof (separator) === "string" ? separator : '';

    function f(nextString) {
        if(typeof nextString === 'string' && isStringBuilding) { resultString += validSeparator + nextString }
        else isStringBuilding = false;
        return f;
    }

    f[Symbol.toPrimitive] = function() {
        return resultString;
    };

    return f;
}

module.exports = concatStrings;