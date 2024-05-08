function calculateMaturityAmout(){  
    // Get input values from the form element  
    const principal = parseFloat(document.getElementById('principal').value);  
    const interest = parseFloat(document.getElementById('Interest Rate').value);  
    const tenure = parseFloat(document.getElementById('Tenure').value);  
    //logic  
    const MaturityAmout= principal* (principal*interest*tenure)/100;  
    //display  
    document.getElementById('result').innerText = 'Maturity Amount: ${maturityAmount.toFixed(2)}';  
}.   
// attach the event  
document.getElementById('calculateBTN').addEventListener('click',calculateMaturityAmout);