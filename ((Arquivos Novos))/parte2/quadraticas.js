function eqValue(a,b,c){	return (b*b)-(4*a*c)}  //((b*b)-(4*a*c))
function Calc()
{
  var dec = numericVal(document.mainform.dec.value);	
  var a = (document.mainform.a.value);
  var b  = (document.mainform.b.value);
  var c   = (document.mainform.c.value);
  var msg = "";
  var d = (Math.pow(b, 2))-4*a*c;
  var k =d;
  var d1 = Math.pow(((b*b)-(4*(a)*(c))),(1/2));
  var x1 = (-b+d1)/(2*(a));
  var x2 =  (-b-d1)/(2*(a));
  if (dec!= parseInt(dec)||dec=="")
{dec = 2;
}
  
  
  if(a=="" && b==""&& c=="")
	{document.mainform.msg.value= " Insira dados";
	document.mainform.d.value = "";
	document.mainform.x1.value = "";
	document.mainform.x2.value = "";
	return;	
	}
if(a==0 | a=="")
	{document.mainform.msg.value=  "Equacao nao quadratica";
	document.mainform.d.value = "";
	document.mainform.x1.value = "";
	document.mainform.x2.value = "";
	return;	
 }	
	if(k>0)
	{document.mainform.msg.value ="Solucoes reais";
	 document.mainform.dec.value =  dec;
	 document.mainform.x1.value = preFormat((x1),dec);
	 document.mainform.x2.value = preFormat((x2),dec);
	 document.mainform.d.value = " maior que zero";
	}
	else if(k<0)
	{document.mainform.msg.value= "Sem solucoes reais";
	k=k*-1;
		var ima=(Math.sqrt(k)/(2*a));
		x1= preFormat((-1*b/(2*a)),dec) +'+'+ preFormat(ima,dec)+  ' i ';
		x2= preFormat((-1*b/(2*a)),dec) +'-'+ preFormat(ima,dec)+  ' i ';
	    document.mainform.d.value =  "menor que zero";	
	    document.mainform.dec.value =  dec;
	    document.mainform.x1.value = (x1);
	    document.mainform.x2.value =(x2);
	}
	else if(k==0)
	{document.mainform.msg.value=  "Solucoes em dobro";
	document.mainform.dec.value =  dec;
	document.mainform.x1.value = preFormat((x1),dec);
	document.mainform.x2.value = preFormat((x2),dec);
	document.mainform.d.value =  "igual a zero";
	}
}