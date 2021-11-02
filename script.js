function convert() {
    let field = parseFloat(document.getElementById("field").value).toFixed(2);
    let radioButtons = document.getElementsByName("currencies");

    if (radioButtons[0].checked) {
        convertToDollar(field);
        document.getElementById("field").value = "";
    } else if (radioButtons[1].checked) {
        convertToEuro(field);
        document.getElementById("field").value = "";
    } else if (radioButtons[2].checked) {
        convertToPound(field);
        document.getElementById("field").value = "";
    } else {
        alert("Selecione uma opção!");
    }
}
var result = document.getElementById("result");

function convertToDollar(field) {
    let dollarAmount = (field / 5.3).toFixed(2);

    if (!isNaN(dollarAmount)) {
        result.innerHTML = "$" + dollarAmount;
    } else {
        result.innerHTML = "Insira um valor";
    }
}

function convertToEuro(field) {
    let euroAmount = (field / 6.2).toFixed(2);

    if (!isNaN(euroAmount)) {
        result.innerHTML = "€" + euroAmount;
    } else {
        result.innerHTML = "Insira um valor";
    }
}

function convertToPound(field) {
    let poundAmount = (field / 7.27).toFixed(2);
    if (!isNaN(poundAmount)) {
        result.innerHTML = "£" + poundAmount;
    } else {
        result.innerHTML = "Insira um valor";
    }
}