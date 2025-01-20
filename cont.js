function calculateInflation() {
    const initialAmount = document.getElementById('initialAmount').value;
    const rateOfInflation = document.getElementById('rateOfInflation').value;
    const years = document.getElementById('years').value;
    const futureValue = initialAmount * Math.pow((1 + rateOfInflation / 100), years);
    document.getElementById('inflationResult').textContent = `Future value: $${futureValue.toFixed(2)}`;
}

function calculateSIP() {
    const monthlyInvestment = document.getElementById('monthlyInvestment').value;
    const rateOfReturn = document.getElementById('sipRateOfReturn').value / 12 / 100;
    const years = document.getElementById('sipYears').value;
    const months = years * 12;
    const futureValue = monthlyInvestment * ((Math.pow((1 + rateOfReturn), months) - 1) / rateOfReturn) * (1 + rateOfReturn);
    document.getElementById('sipResult').textContent = `Future value: $${futureValue.toFixed(2)}`;
}

function calculateCompoundInterest() {
    const principal = document.getElementById('principal').value;
    const rateOfInterest = document.getElementById('compoundRateOfInterest').value;
    const years = document.getElementById('compoundYears').value;
    const compoundInterest = principal * Math.pow((1 + rateOfInterest / 100), years);
    document.getElementById('compoundResult').textContent = `Compound Interest: $${compoundInterest.toFixed(2)}`;
}
