//Trigo_en.js
function Calc()
{
	var nbr = numericVal(document.calcform.number.value); //number
	var k = 0;
	var sx = document.calcform.sx.value; //sex
	var obs =0;
	var sen =0;
	var cosen= 0;
	var dec = numericVal(document.calcform.dec.value);  // decimal place
	if (dec!= parseInt(dec)||dec=="")
    {dec = 2;
    }
		var nbr1 = 3.141592;
 	if(document.calcform.sx[0].selected) //Math.sin(30*Math.PI/180)
	{  
	var k = (Math.PI/180);
	var obs =  preFormat((nbr*k),dec) + " Radianos";
	var sen = preFormat(Math.sin(nbr*k),dec);
	var cosen = preFormat(Math.cos(nbr*k),dec);
	var tg = preFormat(Math.tan(nbr*k),dec);
	var ctg =preFormat(1/Math.tan(nbr*k),dec);
	var sec = preFormat(1/Math.cos(nbr*k),dec);
	var csec = preFormat(1/Math.sin(nbr*k),dec);
	
    } 
	else 
	{  
	var k = 1;
	var obs = preFormat((180/Math.PI*nbr),dec) + " Graus";
	var sen = preFormat(Math.sin(nbr*k),dec);
	var cosen = preFormat(Math.cos(nbr*k),dec);
	var tg = preFormat(Math.tan(nbr*k),dec);
	var ctg =preFormat(1/Math.tan(nbr*k),dec);
	var sec = preFormat(1/Math.cos(nbr*k),dec);
	var csec = preFormat(1/Math.sin(nbr*k),dec);
	}
	
	if( cosen == 6.5e-7 ||cosen==0.001||cosen== 0.002 ||cosen== 0)
   {
	cosen = 0;   
	tg = "indefinida"  
	sec = "indefinida" 
	cotg=0;	
  	} 
   else
   {
	tg= preFormat((Math.tan(nbr*k)),dec);
	sec=  preFormat((1/Math.cos(nbr*k)),dec);
	}
	if (sen == 6.5e-7 ||sen==0.001||sen== 0.002 ||sen== 0)
   {
	sen = 0; 
	tg = "0"   
	ctg = "indefinida" 
	csec = "indefinida" 	
  	} 
   else
   {
	ctg  = preFormat((1/Math.tan(nbr*k)),dec);
	csec = preFormat((1/Math.sin(nbr*k)),dec);
	}
   document.calcform.obs.value = obs;
   document.calcform.dec.value = (dec);
   document.calcform.xsin.value = (sen);
   document.calcform.xcosin.value = (cosen);
   document.calcform.xtang.value = tg;
   document.calcform.xcotang.value = ctg;
   document.calcform.xsec.value = (sec);
   document.calcform.xcosec.value = (csec);

}