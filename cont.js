function calculateSIP() {
    const monthlyInvestment = document.getElementById('monthlyInvestment').value;
    const rateOfReturn = document.getElementById('rateOfReturn').value / 100 / 12;
    const years = document.getElementById('years').value;
    const months = years * 12;

    const futureValue = monthlyInvestment * ((Math.pow((1 + rateOfReturn), months) - 1) / rateOfReturn) * (1 + rateOfReturn);

    document.getElementById('result').textContent = `Estimated Value: ₹${futureValue.toFixed(2)}`;
}
