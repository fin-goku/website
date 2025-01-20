// SIP Calculator
function calculateSIP() {
    let sipAmount = parseFloat(document.getElementById("sipAmount").value);
    let rateOfReturn = parseFloat(document.getElementById("sipRateOfReturn").value) / 100 / 12;
    let duration = parseInt(document.getElementById("sipDuration").value) * 12;
    let futureValue = sipAmount * (((Math.pow(1 + rateOfReturn, duration) - 1) / rateOfReturn) * (1 + rateOfReturn));
    document.getElementById("sipResult").innerText = `Future Value: ₹${futureValue.toFixed(2)}`;
  }
  
  // Inflation Calculator
  function calculateInflation() {
    let amount = parseFloat(document.getElementById("inflationAmount").value);
    let rate = parseFloat(document.getElementById("inflationRate").value) / 100;
    let duration = parseInt(document.getElementById("inflationDuration").value);
    let futureValue = amount * Math.pow(1 + rate, duration);
    document.getElementById("inflationResult").innerText = `Future Value (Inflated): ₹${futureValue.toFixed(2)}`;
  }
  
  // Compound Interest Calculator
  function calculateCompoundInterest() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("compoundRate").value) / 100;
    let time = parseInt(document.getElementById("compoundDuration").value);
    let amount = principal * Math.pow(1 + rate, time);
    let interest = amount - principal;
    document.getElementById("compoundResult").innerText = `Compound Interest: ₹${interest.toFixed(2)}`;
  }
  
  // CAGR Calculator
  function calculateCAGR() {
    let initialValue = parseFloat(document.getElementById("initialValue").value);
    let finalValue = parseFloat(document.getElementById("finalValue").value);
    let years = parseInt(document.getElementById("years").value);
    let cagr = Math.pow(finalValue / initialValue, 1 / years) - 1;
    document.getElementById("cagrResult").innerText = `CAGR: ${(cagr * 100).toFixed(2)}%`;
  }
  
  // Lump Sum Calculator
  function calculateLumpSum() {
    let amount = parseFloat(document.getElementById("lumpSumAmount").value);
    let rate = parseFloat(document.getElementById("lumpSumRate").value) / 100;
    let years = parseInt(document.getElementById("lumpSumYears").value);
    let futureValue = amount * Math.pow(1 + rate, years);
    document.getElementById("lumpSumResult").innerText = `Future Value: ₹${futureValue.toFixed(2)}`;
  }
  
  // EMI Calculator
  function calculateEMI() {
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);
    let rate = parseFloat(document.getElementById("loanInterest").value) / 100 / 12;
    let months = parseInt(document.getElementById("loanDuration").value);
    let emi = loanAmount * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
    document.getElementById("emiResult").innerText = `EMI: ₹${emi.toFixed(2)}`;
  }
  
  // XIRR Calculator
  function calculateXIRR() {
    // Placeholder for XIRR calculation (requires more complex logic)
    document.getElementById("xirrResult").innerText = `XIRR: Functionality to be added.`;
  }
  
  // SWP Calculator
  function calculateSWP() {
    let amount = parseFloat(document.getElementById("swpAmount").value);
    let rate = parseFloat(document.getElementById("swpRate").value) / 100 / 12;
    let duration = parseInt(document.getElementById("swpDuration").value);
    let monthlyWithdrawal = (amount * rate) / (1 - Math.pow(1 + rate, -duration));
    document.getElementById("swpResult").innerText = `Monthly SWP: ₹${monthlyWithdrawal.toFixed(2)}`;
  }
  