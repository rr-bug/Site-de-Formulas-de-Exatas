var base=0;
var r=0;
var ln=2.71828182845904523536;
var L=10;
function calc()
{
var dec = numericVal(document.calcform.dec.value);  // decimal place
	if (dec!= parseInt(dec)||dec=="")
   {dec = 2;
    } 		
var number = numericVal(document.calcform.number.value);
var ob  = (document.calcform.ob.value);
base = L;
if (L==0){base= (document.calcform.ob.value)
};
 r= preFormat((Math.log(number)/ Math.log(base)),dec);
//r=r.toExponential(10);
// if (r>.001 && r<1000)

if((isNaN(r)) || number <=0  )
{
	{ alert("Logarithm : \n Incomplete data or is needed a new base. \n Datos incompletos o que se necesita una nueva base\n Dados imcompletos ou outra base necessita."); 
    document.calcform.r.value = "";
    document.calcform.ob.value = "";
    return;
	 }
 r =   preFormat((r*1),dec);
 }
document.calcform.dec.value= dec;	 
document.calcform.r.value=" "+r;
}