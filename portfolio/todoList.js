function calculate() {
    var bill;
    var tip;
    var tipAmount;
    var tipAmountPerPerson;
    var split;
    var result;

    bill = document.getElementById('amountValue').value;
    bill = parseInt(bill);

    tip = document.getElementById('tipValue').value;
    tip = parseInt(tip);

    split = document.getElementById('splitValue').value;
    split = parseInt(split);

    tipAmount = bill / (100 * tip);
    tipAmountPerPerson = tipAmount / split;
    result = bill + tipAmount;

    document.getElementById('outResult').innerHTML = result;

}
