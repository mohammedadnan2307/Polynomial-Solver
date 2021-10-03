/* MathQuill */

var mathFieldSpan = document.getElementById('coefInput');
var latexFormat = "";

var MQ = MathQuill.getInterface(2); // for backcompat
var mathField = MQ.MathField(mathFieldSpan, {
    spaceBehavesLikeTab: true, // configurable
    handlers: {
        edit: function () { // useful event handlers
            latexFormat = mathField.latex(); // simple API
        }
    }
});

/* Math Field & Errors */

var userOption = "none", userChoice, coef;

function inputError(errMsg) {
    alert(errMsg);
}

function submitFunc() {
    if (userOption === "none") {
        alert("Choose an Option");
        return false;
    }
    if (userChoice == 3) {
        var userInput = latexFormat;
        userInput = userInput.trim();
        if (userInput.length === 0) {
            return false;
        }
        userInput = userInput.split(",");
        coef = [];
        for (let i = 0; i < userInput.length; i++) {
            if (Number.isNaN(Number(userInput[i])) === true) {
                inputError("Invalid Roots");
                return false;
            }
            else {
                coef.push(Number(userInput[i]));
            }
        }
        return true;
    }
    else {
        let term = "", terms = [];
        for (let i = 0; i < latexFormat.length; i++) {
            let asciiValue = latexFormat[i].charCodeAt(0);
            if ((asciiValue === 120) || (asciiValue === 43) || (asciiValue === 45) || (asciiValue === 88) || (asciiValue === 123) || (asciiValue === 125) || (asciiValue === 46) || (asciiValue === 94) || ((asciiValue >= 48) && (asciiValue <= 57))) {
                if ((asciiValue === 43) || (asciiValue === 45)) {
                    terms.push(term);
                    term = "";
                }
                if (i === latexFormat.length - 1) {
                    term += latexFormat[i];
                    terms.push(term);
                }
                term += latexFormat[i];
            }
            else {
                inputError("Invalid Equation");
                return false;
            }
        }
        
        let powers = [], coefArray = [];
        for(let i = 0; i < terms.length; i++) {
            let notConst = false;
            term = terms[i];
            for(let j = 0; j < term.length; j++) {
                if((term[j] == 'x') || (term[j] == 'X')) {
                    notConst = true;
                    if(j == term.length-1) {
                        powers.push(1);
                    }
                    else {
                        j += 2;
                        let num = "", curlyBraces = 0;
                        if(term[j] == '{') {
                            j++;
                            curlyBraces = -1;
                        }
                        while(j < term.length) {
                            if((term[j].charCodeAt(0) < 48) || (term[j].charCodeAt(0) > 57)) {
                                if(term[j].charCodeAt(0) == 125) {
                                    curlyBraces *= -1;
                                }
                                else {
                                    inputError("Invalid Exponent");
                                    return false;
                                }
                            }
                            num += term[j];
                            j++;
                        }
                        if ((Number.isNaN(Number(parseInt(num))) === true) || (curlyBraces === -1)) {
                            inputError("Invalid Exponent");
                            return false;
                        }
                        else {
                            powers.push(parseInt(num));
                        }
                    }
                    term = term.split("x");
                    let coefValue;
                    if (Number.isNaN(parseInt(term[0])) === true) {
                        coefValue = 1;
                        if(term[0] == '-') {
                            coefValue *= -1;
                        }
                    }
                    else {
                        coefValue = Number(term[0]);
                    }
                    coefArray.push(coefValue);
                }
            }
            if(notConst == false) {
                powers.push(0);
                coefArray.push(Number(term));
            }
        }
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
        if(findDuplicates(powers).length > 0) {
            inputError("Multilpe usage of an exponent");
            return false;
        }
        let maxDegree = Math.max(...powers);
        coef = new Array(maxDegree + 1).fill(0);
        for(let i = 0; i < powers.length; i++) {
            let pos = maxDegree - powers[i];
            coef[pos] = coefArray[i];
        }
        return true;
    }
}

/* Plot Graph */

document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "graph-btn") {

        /* generate equation in required format */
        var inputEquation = '', n = coefInput.length;
        for (let i = 0; i < n; i++) {
            if (coefInput[i] !== 0) {
                if (coefInput[i] > 0) {
                    inputEquation += '+';
                }
                inputEquation += coefInput[i];
                inputEquation += 'x^';
                inputEquation += (n - i - 1);
            }
        }
        document.getElementById("graph").style.display = "block";

        /* graph display size */
        let width = 650, height = 650;
        if (screen.width < 1024) {
            let contentsBounds = document.body.getBoundingClientRect();
            width = 800;
            height = 500;
            let ratio = contentsBounds.width / width;
            width *= ratio;
            height *= ratio;
        }

        /* calculate domain of x 
        let xLower = -50, xUpper = 50, nSamples = 5000;
        if (userChoice == 3) {
            coef.sort();
            xLower = coef[0];
            xLower -= 0.5 * Math.abs(xLower);
            xUpper = coef[coef.length - 1];
            xUpper += 0.5 * Math.abs(xUpper);
        }
        if (userChoice == 1) {
            result.sort();
            xLower = result[0];
            xLower -= 0.5 * Math.abs(xLower);
            xUpper = result[result.length - 1];
            xUpper += 0.5 * Math.abs(xUpper);
        }*/

        let roots = [];
        if (userChoice == 3) {
            for (let i = 0; i < coef.length; i++) {
                roots.push([coef[i], 0]);
            }
        }
        else if (userChoice == 1) {
            for (let i = 0; i < result.length; i++) {
                roots.push([result[i], 0]);
            }
        }

        functionPlot({
            target: '#graph',
            tip: {
                xLine: true,
                yLine: true
                },
            width,
            height,
            //xAxis: { domain: [xLower, xUpper] },
            grid: true,
            data: [
                {
                    fn: inputEquation,
                    color: 'black',
                    sampler: 'builtIn',
                    graphType: 'polyline'
                },
                {
                    points: roots,
                    fnType: 'points',
                    graphType: 'scatter',
                    color: '#000000'
                }
            ]
        })
    }
});