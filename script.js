function evaluateCreditScore() {
    const income = parseFloat(document.getElementById('income').value);
    const creditHistory = document.getElementById('creditHistory').value;
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);

    // Perform basic validation
    if (isNaN(income) || isNaN(loanAmount)) {
        document.getElementById('result').innerHTML = '<p>Please enter valid numbers.</p>';
        return;
    }

    // Simulate credit scoring logic (replace with actual ML model in Python)
    let creditScore = 'Poor';
    if (income > 50000 && creditHistory === 'good' && loanAmount <= 5000) {
        creditScore = 'Good';
    } else if (income > 30000 && creditHistory === 'fair' && loanAmount <= 10000) {
        creditScore = 'Fair';
    }

    // Display result
    document.getElementById('result').innerHTML = `<p>Credit Score: ${creditScore}</p>`;
}
