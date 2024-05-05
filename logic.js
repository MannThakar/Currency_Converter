const input = document.getElementById('input');
const output = document.getElementById('output');
const selectDropdown1 = document.querySelector('#DropDown1');
const selectDropdown2 = document.querySelector('#DropDown2');



var val1;
var val2;




selectDropdown1.addEventListener('change', convert);


selectDropdown2.addEventListener('change', convert)


function convert() {
    val1 = selectDropdown1.options[selectDropdown1.selectedIndex].value;
    val2 = selectDropdown1.options[selectDropdown2.selectedIndex].value;
    const input = document.getElementById('input');
    const data1 = input.value;

    if (val1 == "INR" && val2 == "USD") {
        INRTOUSD(data1)
    }
    if (val1 == "INR" && val2 == "GBP") {
        INRTOGBP(data1);
    }
    if (val1 == "INR" && val2 == "GBP") {
        INRTOGBP(data1);
    }
    if (val1 == "USD" && val2 == "INR") {
        USDTOINR(data1)
    }
    if (val1 == "GBP" && val2 == "INR") {
        USDTOINR(data1)
    }
    if (val1 == "GBP" && val2 == "USD") {
        GBPTOUSD(data1)
    }
    if (val1 == "USD" && val2 == "GBP") {
        USDTOGBP(data1)
    }



    if (val1 == val2) {
        output.innerHTML = "";
    }

};


function INRTOUSD(data1) {
    const res = (data1 * 0.014);
    output.innerHTML = `$${res}`;

}

function INRTOGBP(data1) {
    const res = (data1 * 0.0095);
    output.innerHTML = `£${res}`;
}


function USDTOINR(data1) {
    const res = (data1) * 82.74;
    output.innerHTML = `₹${res}`;
}

function GBPTOUSD(data1) {
    const res = (data1) * 1.37;
    output.innerHTML = `$${res}`
}

function USDTOGBP(data1) {
    const res = (data1 * 0.73);
    output.innerHTML = `£${res}`
}


input.addEventListener('input', function () {
    if (input.value == "") {
        selectDropdown1.disabled = true;
        selectDropdown2.disabled = true;
    } else {
        selectDropdown1.disabled = false;
        selectDropdown2.disabled = false;
        convert()

    }

});
