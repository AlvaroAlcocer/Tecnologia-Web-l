 // Ejercio 1

function Mul()
{
    var numero1 = parseFloat(document.getElementById('num1').value);
    var numero2 =parseFloat(document.getElementById('num2').value);
    var numero3 =parseFloat(document.getElementById('num3').value);
    
    var resultado = numero1*numero2*numero3;

    document.getElementById('res').value = resultado
};

 // Ejercio 2
 // Ejercio 3

 function Fac()
 {
    var numero1 = parseFloat(document.getElementById('num1').value);
    var res1 =1;
    for (var i=1; i<=numero1; i++)
    {
        res1= res1* i;
    }
    document.getElementById('res').value = res1
 };

 // Ejercio 4

 function Fec()
 {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    
    if (dd < 10) {
      dd = '0' + dd;
    }
    
    if (mm < 10) {
      mm = '0' + mm;
    }
    
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById('res').value = today
 };