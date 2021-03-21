const display_formula = document.querySelector("#formula");
const display_output = document.querySelector("#output");

const btn_1 = document.querySelector("#button_1");
const btn_2 = document.querySelector("#button_2");
const btn_3 = document.querySelector("#button_3");
const btn_4 = document.querySelector("#button_4");
const btn_5 = document.querySelector("#button_5");
const btn_6 = document.querySelector("#button_6");
const btn_7 = document.querySelector("#button_7");
const btn_8 = document.querySelector("#button_8");
const btn_9 = document.querySelector("#button_9");
const btn_0 = document.querySelector("#button_0");
const btn_ans = document.querySelector("#button_ans");
const btn_dot = document.querySelector("#button_dot");
const btn_add = document.querySelector("#button_add");
const btn_minus = document.querySelector("#button_minus");
const btn_times = document.querySelector("#button_times");
const btn_div = document.querySelector("#button_div");
const btn_power = document.querySelector("#button_power");
const btn_eq = document.querySelector("#button_eq");
const btn_ac = document.querySelector("#button_ac");
const btn_del = document.querySelector("#button_del");
const btn_lp = document.querySelector("#button_leftpa");
const btn_rp = document.querySelector("#button_rightpa");
const btn_mod = document.querySelector("#button_mod");
const btn_inf = document.querySelector("#button_inf");
const btn_nan = document.querySelector("#button_nan");
const btn_switch = document.querySelector("#button_switchStyle")

let formula = "_";
let output = "";

// Helper functions
function setDisplay() {
    display_formula.textContent = formula;
    display_output.textContent = output;
}

function opAfterEq() {
    if(output != "") {
        output = "";
    }
}

function formulaAddElement(element) {
    if(formula === "_") {
        formula = element;
    } else {
        formula = formula+element;
    }
}

// monitor the buttons
btn_0.onclick = function() {
    opAfterEq();
    formulaAddElement("0");
    setDisplay();
}

btn_1.onclick = function() {
    opAfterEq();
    formulaAddElement("1");
    setDisplay();
}

btn_2.onclick = function() {
    opAfterEq();
    formulaAddElement("2");
    setDisplay();
}

btn_3.onclick = function() {
    opAfterEq();
    formulaAddElement("3");
    setDisplay();
}

btn_4.onclick = function() {
    opAfterEq();
    formulaAddElement("4");
    setDisplay();
}

btn_5.onclick = function() {
    opAfterEq();
    formulaAddElement("5");
    setDisplay();
}

btn_6.onclick = function() {
    opAfterEq();
    formulaAddElement("6");
    setDisplay();
}

btn_7.onclick = function() {
    opAfterEq();
    formulaAddElement("7");
    setDisplay();
}

btn_8.onclick = function() {
    opAfterEq();
    formulaAddElement("8");
    setDisplay();
}

btn_9.onclick = function() {
    opAfterEq();
    formulaAddElement("9");
    setDisplay();
}

btn_dot.onclick = function() {
    opAfterEq();
    formulaAddElement(".");
    setDisplay();
}

btn_add.onclick = function() {
    opAfterEq();
    formulaAddElement("+");
    setDisplay();
}

btn_minus.onclick = function() {
    opAfterEq();
    formulaAddElement("-");
    setDisplay();
}

btn_times.onclick = function() {
    opAfterEq();
    formulaAddElement("*");
    setDisplay();
}

btn_div.onclick = function() {
    opAfterEq();
    formulaAddElement("/");
    setDisplay();
}

btn_power.onclick = function() {
    opAfterEq();
    formulaAddElement("**");
    setDisplay();
}

btn_ans.onclick = function() {
    opAfterEq();
    ans = localStorage.getItem("ans");
    formulaAddElement(ans.toString());
    setDisplay();
}

btn_inf.onclick = function() {
    opAfterEq();
    formulaAddElement("Infinity");
    setDisplay();
}

btn_nan.onclick = function() {
    opAfterEq();
    formulaAddElement("NaN");
    setDisplay();
}

btn_mod.onclick = function() {
    opAfterEq();
    formulaAddElement("%");
    setDisplay();
}

btn_lp.onclick = function() {
    opAfterEq();
    formulaAddElement("(");
    setDisplay();
}

btn_rp.onclick = function() {
    opAfterEq();
    formulaAddElement(")");
    setDisplay();
}

btn_eq.onclick = function() {
    let err_occurred = false;
    try{
        output = eval(formula);
    } catch(err) {
        output = "An error occurred";
        err_occurred = true;
    } finally {
        formula = "_";
    }

    if(!err_occurred) {
        localStorage.setItem("ans", output);
    }

    setDisplay();
}

btn_ac.onclick = function() {
    formula = "_";
    output = "";

    setDisplay();
}

btn_del.onclick = function() {
    opAfterEq();

    formula = formula.substring(0, formula.length-1);
    if(formula.length === 0) {
        formula = "_";
    }

    setDisplay(); 
}

btn_switch.onclick = function() {
    current_text = btn_switch.textContent;
    link = document.querySelector("link")
    if(current_text === "Switch to Light Style") {
        link.href = "./css/light_style.css";
        btn_switch.textContent = "Switch to Dark Style"
    } else if (current_text === "Switch to Dark Style") {
        link.href = "./css/dark_style.css";
        btn_switch.textContent = "Switch to Eva Style"
    } else if(current_text === "Switch to Eva Style") {
        link.href = "./css/eva_style.css";
        btn_switch.textContent = "Switch to Light Style"
    }
}

// initializing
btn_switch.textContent = "Switch to Dark Style"
setDisplay()