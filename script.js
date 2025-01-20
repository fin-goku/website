// SIP Calculator
function calculateSIP() {
    let sipAmount = parseFloat(document.getElementById("sipAmount").value);
    let rateOfReturn = parseFloat(document.getElementById("rateOfReturn").value) / 100 / 12;
    let duration = parseInt(document.getElementById("duration").value) * 12;
    let futureValue = sipAmount * (((Math.pow(1 + rateOfReturn, duration) - 1) / rateOfReturn) * (1 + rateOfReturn));
    document.getElementById("sipResult").innerText = `Future Value: ₹${futureValue.toFixed(2)}`;
  }
  
  // Inflation Calculator
  function calculateInflation() {
    let initialAmount = parseFloat(document.getElementById("initialAmount").value);
    let inflationRate = parseFloat(document.getElementById("inflationRate").value) / 100;
    let years = parseInt(document.getElementById("yearsInflation").value);
    let futureValue = initialAmount * Math.pow((1 + inflationRate), years);
    document.getElementById("inflationResult").innerText = `Future Value after Inflation: ₹${futureValue.toFixed(2)}`;
  }
  
  // Compound Interest Calculator
  function calculateCompoundInterest() {
    let principal = parseFloat(document.getElementById("principalAmount").value);
    let rate = parseFloat(document.getElementById("interestRate").value) / 100;
    let time = parseInt(document.getElementById("timePeriod").value);
    let amount = principal * Math.pow((1 + rate), time);
    let interest = amount - principal;
    document.getElementById("compoundInterestResult").innerText = `Compound Interest: ₹${interest.toFixed(2)}`;
  }
  
  // CAGR Calculator
  function calculateCAGR() {
    let initialInvestment = parseFloat(document.getElementById("initialInvestment").value);
    let finalValue = parseFloat(document.getElementById("finalValue").value);
    let years = parseInt(document.getElementById("yearsCAGR").value);
    let cagr = Math.pow(finalValue / initialInvestment, 1 / years) - 1;
    document.getElementById("cagrResult").innerText = `CAGR: ${(cagr * 100).toFixed(2)}%`;
  }
  
  // Lump Sum Calculator
  function calculateLumpSum() {
    let amount = parseFloat(document.getElementById("lumpSumAmount").value);
    let rate = parseFloat(document.getElementById("lumpSumRate").value) / 100;
    let years = parseInt(document.getElementById("lumpSumYears").value);
    let futureValue = amount * Math.pow((1 + rate), years);
    document.getElementById("lumpSumResult").innerText = `Future Value: ₹${futureValue.toFixed(2)}`;
  }
  
  // EMI Calculator
  function calculateEMI() {
    let principal = parseFloat(document.getElementById("loanAmount").value);
    let rate = parseFloat(document.getElementById("loanRate").value) / 100 / 12;
    let time = parseInt(document.getElementById("loanTerm").value) * 12;
    let emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    document.getElementById("emiResult").innerText = `Monthly EMI: ₹${emi.toFixed(2)}`;
  }
  
  // XIRR Calculator (Not Implemented)
  function calculateXIRR() {
    let values = document.getElementById("xirrValues").value.split(',').map(Number);
    let dates = document.getElementById("xirrDates").value.split(',');
    // XIRR calculation logic goes here (For simplicity, it's not implemented)
    document.getElementById("xirrResult").innerText = `XIRR Calculation: Needs to be implemented.`;
  }
  
  // SWP Calculator
  function calculateSWP() {
    let amount = parseFloat(document.getElementById("swpAmount").value);
    let rate = parseFloat(document.getElementById("swpRate").value) / 100;
    let years = parseInt(document.getElementById("swpYears").value);
    let annualWithdrawal = amount * rate;
    document.getElementById("swpResult").innerText = `Annual SWP Amount: ₹${annualWithdrawal.toFixed(2)}`;
  }
  