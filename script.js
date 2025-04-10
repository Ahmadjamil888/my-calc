// Calculator state
const calculatorState = {
    normal: {
        currentInput: '0',
        history: ''
    },
    sci: {
        currentInput: '0',
        history: ''
    },
    isUrdu: false
};

// Urdu translations
const translations = {
    appTitle: {
        english: "MyCalc - Smart Calculator",
        urdu: "مائی کیلک - ذہین کیلکولیٹر"
    },
    tabs: {
        normal: {
            english: "Normal",
            urdu: "عام"
        },
        scientific: {
            english: "Scientific",
            urdu: "سائنسی"
        }
    },
    buttons: {
        normal: {
            AC: { english: "AC", urdu: "صاف" },
            "(": { english: "(", urdu: "(" },
            ")": { english: ")", urdu: ")" },
            "/": { english: "/", urdu: "/" },
            "7": { english: "7", urdu: "۷" },
            "8": { english: "8", urdu: "۸" },
            "9": { english: "9", urdu: "۹" },
            "*": { english: "×", urdu: "×" },
            "4": { english: "4", urdu: "۴" },
            "5": { english: "5", urdu: "۵" },
            "6": { english: "6", urdu: "۶" },
            "-": { english: "-", urdu: "-" },
            "1": { english: "1", urdu: "۱" },
            "2": { english: "2", urdu: "۲" },
            "3": { english: "3", urdu: "۳" },
            "+": { english: "+", urdu: "+" },
            "0": { english: "0", urdu: "۰" },
            ".": { english: ".", urdu: "." },
            backspace: { english: "⌫", urdu: "⌫" },
            "=": { english: "=", urdu: "=" }
        },
        scientific: {
            sin: { english: "sin", urdu: "جا" },
            cos: { english: "cos", urdu: "جتا" },
            tan: { english: "tan", urdu: "ظا" },
            log: { english: "log", urdu: "لاگ" },
            log10: { english: "log10", urdu: "لاگ۱۰" },
            asin: { english: "sin⁻¹", urdu: "جا⁻¹" },
            acos: { english: "cos⁻¹", urdu: "جتا⁻¹" },
            atan: { english: "tan⁻¹", urdu: "ظا⁻¹" },
            sqrt: { english: "√", urdu: "√" },
            pi: { english: "π", urdu: "π" },
            power: { english: "^", urdu: "^" },
            e: { english: "e", urdu: "e" },
            factorial: { english: "n!", urdu: "n!" },
            AC: { english: "AC", urdu: "صاف" },
            "(": { english: "(", urdu: "(" },
            ")": { english: ")", urdu: ")" },
            "/": { english: "/", urdu: "/" },
            "7": { english: "7", urdu: "۷" },
            "8": { english: "8", urdu: "۸" },
            "9": { english: "9", urdu: "۹" },
            "*": { english: "×", urdu: "×" },
            "4": { english: "4", urdu: "۴" },
            "5": { english: "5", urdu: "۵" },
            "6": { english: "6", urdu: "۶" },
            "-": { english: "-", urdu: "-" },
            "1": { english: "1", urdu: "۱" },
            "2": { english: "2", urdu: "۲" },
            "3": { english: "3", urdu: "۳" },
            "+": { english: "+", urdu: "+" },
            "0": { english: "0", urdu: "۰" },
            ".": { english: ".", urdu: "." },
            backspace: { english: "⌫", urdu: "⌫" },
            "=": { english: "=", urdu: "=" }
        }
    }
};

// Initialize the calculator
document.addEventListener('DOMContentLoaded', () => {
    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });

    // Language switch
    document.getElementById('languageSwitch').addEventListener('click', toggleLanguage);

    // Initialize UI
    updateUIForLanguage();
});

function toggleLanguage() {
    calculatorState.isUrdu = !calculatorState.isUrdu;
    document.getElementById('languageSwitch').textContent = calculatorState.isUrdu ? 'English' : 'اردو';
    
    // Update body direction
    document.body.classList.toggle('urdu', calculatorState.isUrdu);
    
    // Update all UI elements
    updateUIForLanguage();
}

function updateUIForLanguage() {
    const lang = calculatorState.isUrdu ? 'urdu' : 'english';
    
    // Update app title
    document.getElementById('appTitle').textContent = translations.appTitle[lang];
    
    // Update tab names
    document.getElementById('normalTab').textContent = translations.tabs.normal[lang];
    document.getElementById('sciTab').textContent = translations.tabs.scientific[lang];
    
    // Update normal calculator buttons
    document.getElementById('normalAC').textContent = translations.buttons.normal.AC[lang];
    document.getElementById('normalBackspace').textContent = translations.buttons.normal.backspace[lang];
    document.getElementById('normalEquals').textContent = translations.buttons.normal["="][lang];
    document.getElementById('normal0').textContent = translations.buttons.normal["0"][lang];
    document.getElementById('normal1').textContent = translations.buttons.normal["1"][lang];
    document.getElementById('normal2').textContent = translations.buttons.normal["2"][lang];
    document.getElementById('normal3').textContent = translations.buttons.normal["3"][lang];
    document.getElementById('normal4').textContent = translations.buttons.normal["4"][lang];
    document.getElementById('normal5').textContent = translations.buttons.normal["5"][lang];
    document.getElementById('normal6').textContent = translations.buttons.normal["6"][lang];
    document.getElementById('normal7').textContent = translations.buttons.normal["7"][lang];
    document.getElementById('normal8').textContent = translations.buttons.normal["8"][lang];
    document.getElementById('normal9').textContent = translations.buttons.normal["9"][lang];
    document.getElementById('normalAdd').textContent = translations.buttons.normal["+"][lang];
    document.getElementById('normalSubtract').textContent = translations.buttons.normal["-"][lang];
    document.getElementById('normalMultiply').textContent = translations.buttons.normal["*"][lang];
    document.getElementById('normalDivide').textContent = translations.buttons.normal["/"][lang];
    document.getElementById('normalOpenBracket').textContent = translations.buttons.normal["("][lang];
    document.getElementById('normalCloseBracket').textContent = translations.buttons.normal[")"][lang];
    document.getElementById('normalDecimal').textContent = translations.buttons.normal["."][lang];
    
    // Update scientific calculator buttons
    document.getElementById('sciAC').textContent = translations.buttons.scientific.AC[lang];
    document.getElementById('sciBackspace').textContent = translations.buttons.scientific.backspace[lang];
    document.getElementById('sciEquals').textContent = translations.buttons.scientific["="][lang];
    document.getElementById('sci0').textContent = translations.buttons.scientific["0"][lang];
    document.getElementById('sci1').textContent = translations.buttons.scientific["1"][lang];
    document.getElementById('sci2').textContent = translations.buttons.scientific["2"][lang];
    document.getElementById('sci3').textContent = translations.buttons.scientific["3"][lang];
    document.getElementById('sci4').textContent = translations.buttons.scientific["4"][lang];
    document.getElementById('sci5').textContent = translations.buttons.scientific["5"][lang];
    document.getElementById('sci6').textContent = translations.buttons.scientific["6"][lang];
    document.getElementById('sci7').textContent = translations.buttons.scientific["7"][lang];
    document.getElementById('sci8').textContent = translations.buttons.scientific["8"][lang];
    document.getElementById('sci9').textContent = translations.buttons.scientific["9"][lang];
    document.getElementById('sciAdd').textContent = translations.buttons.scientific["+"][lang];
    document.getElementById('sciSubtract').textContent = translations.buttons.scientific["-"][lang];
    document.getElementById('sciMultiply').textContent = translations.buttons.scientific["*"][lang];
    document.getElementById('sciDivide').textContent = translations.buttons.scientific["/"][lang];
    document.getElementById('sciOpenBracket').textContent = translations.buttons.scientific["("][lang];
    document.getElementById('sciCloseBracket').textContent = translations.buttons.scientific[")"][lang];
    document.getElementById('sciOpenBracket2').textContent = translations.buttons.scientific["("][lang];
    document.getElementById('sciCloseBracket2').textContent = translations.buttons.scientific[")"][lang];
    document.getElementById('sciDecimal').textContent = translations.buttons.scientific["."][lang];
    document.getElementById('sciSin').textContent = translations.buttons.scientific.sin[lang];
    document.getElementById('sciCos').textContent = translations.buttons.scientific.cos[lang];
    document.getElementById('sciTan').textContent = translations.buttons.scientific.tan[lang];
    document.getElementById('sciLog').textContent = translations.buttons.scientific.log[lang];
    document.getElementById('sciLog10').textContent = translations.buttons.scientific.log10[lang];
    document.getElementById('sciAsin').textContent = translations.buttons.scientific.asin[lang];
    document.getElementById('sciAcos').textContent = translations.buttons.scientific.acos[lang];
    document.getElementById('sciAtan').textContent = translations.buttons.scientific.atan[lang];
    document.getElementById('sciSqrt').textContent = translations.buttons.scientific.sqrt[lang];
    document.getElementById('sciPi').textContent = translations.buttons.scientific.pi[lang];
    document.getElementById('sciPower').textContent = translations.buttons.scientific.power[lang];
    document.getElementById('sciE').textContent = translations.buttons.scientific.e[lang];
    document.getElementById('sciFactorial').textContent = translations.buttons.scientific.factorial[lang];
}

// Calculator functions
function appendToDisplay(calcType, value) {
    if (calculatorState[calcType].currentInput === '0' && !isOperator(value)) {
        calculatorState[calcType].currentInput = value;
    } else {
        calculatorState[calcType].currentInput += value;
    }
    updateDisplay(calcType);
}

function clearDisplay(calcType) {
    calculatorState[calcType].currentInput = '0';
    calculatorState[calcType].history = '';
    updateDisplay(calcType);
}

function backspace(calcType) {
    if (calculatorState[calcType].currentInput.length === 1) {
        calculatorState[calcType].currentInput = '0';
    } else {
        calculatorState[calcType].currentInput = calculatorState[calcType].currentInput.slice(0, -1);
    }
    updateDisplay(calcType);
}

function calculate(calcType) {
    try {
        let expression = calculatorState[calcType].currentInput;
        
        // Replace special symbols for evaluation
        expression = expression.replace(/\^/g, '**');
        
        // Handle factorial
        expression = expression.replace(/(\d+)!/g, (match, num) => {
            return `factorial(${num})`;
        });
        
        // Save history
        calculatorState[calcType].history = calculatorState[calcType].currentInput + ' =';
        
        // Evaluate
        const result = eval(expression);
        
        calculatorState[calcType].currentInput = result.toString();
        updateDisplay(calcType);
    } catch (error) {
        calculatorState[calcType].currentInput = 'Error';
        updateDisplay(calcType);
    }
}

function updateDisplay(calcType) {
    document.getElementById(calcType + 'Input').textContent = calculatorState[calcType].currentInput;
    document.getElementById(calcType + 'History').textContent = calculatorState[calcType].history;
}

function isOperator(value) {
    return ['+', '-', '*', '/', '^', '(', ')'].includes(value);
}

// Factorial function for scientific calculator
function factorial(n) {
    if (n < 0) return NaN;
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
