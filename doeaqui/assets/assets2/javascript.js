function calculateEnergy() {
    const deviceName = parseFloat(document.getElementById('device').value);
    const power = parseFloat(document.getElementById('power').value);
    const hours = parseFloat(document.getElementById('hours').value);

    if (isNaN(power) || isNaN(hours)) {
        alert('Por favor, insira valores numéricos válidos para potência e horas de uso.');
        return;
    }

 var energyconsumtion = power *hours / 100; // consumo em kwh
 
 var resultelement = document.getElementById("result");
 resultelement.innerHTML`$(deviceName) consome aproximadamente $(energyconsumption.tofixed(2))kwh por dia; 
}