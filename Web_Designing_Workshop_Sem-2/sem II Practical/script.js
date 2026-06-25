document.getElementById('calculateBtn').addEventListener('click', function() {
    // Fetching values from input fields
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    
    // Grab the elements to display results
    const resultBox = document.getElementById('resultBox');
    const interestResult = document.getElementById('interestResult');
    const totalResult = document.getElementById('totalResult');

    // Validation: Check if inputs are valid numbers and greater than zero
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        alert("Please enter valid positive numbers in all fields.");
        resultBox.style.display = "none";
        return;
    }

    // Calculating Simple Interest and Total Amount
    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    // Display results dynamically (formatted to 2 decimal places)
    interestResult.innerText = "$" + interest.toFixed(2);
    totalResult.innerText = "$" + totalAmount.toFixed(2);

    // Make the result container visible
    resultBox.style.display = "block";
});