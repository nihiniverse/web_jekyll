var convertButton = document.getElementById("convertbutton");
var inputValueInput = document.getElementById("inputvalue");
var inputBaseSelect = document.getElementById("inputbase");
var outputBaseSelect = document.getElementById("outputbase");
var resultDiv = document.getElementById("result");
convertButton.addEventListener("click", function() {
    var inputValue = inputValueInput.value.toUpperCase();
    var inputBase = Number(inputBaseSelect.value);
    var outputBase = Number(outputBaseSelect.value);
    var decimalValue = parseInt(inputValue, inputBase);
    if (!isNaN(decimalValue)) {
        var outputValue = decimalValue.toString(outputBase);
        document.getElementById('textoutput').value = outputValue;
    } else {
        alert("Please enter a valid number in the selected input base.");
    }
});
function copyNumber() {
    var number = document.getElementById('textoutput');
    number.select();
    document.execCommand('copy');
}