function showHideDiv(elem){

        var db = document.getElementById("cAreaBase");
        var dl = document.getElementById("cAreaLateral");
        var da = document.getElementById("cÁreaTotal");
        var dv = document.getElementById("cVolume");
        if (elem.value == "db"){
          db.style.display = "block";
          dl.style.display = "none";
          da.style.display = "none";
          dv.style.display = "none";          
        } else if (elem.value == "dl"){
          db.style.display = "none";
          dl.style.display = "block";
          da.style.display = "none";      
          dv.style.display = "none";      
        }else if (elem.value == "da"){
          db.style.display = "none";
          dl.style.display = "none";      
          da.style.display = "block";
          dv.style.display = "none";      
        }else if (elem.value == "dv"){
          db.style.display = "none";
          dl.style.display = "none";
          da.style.display = "none";      
          dv.style.display = "block";         
        }
        
      } 
      
      function calcular(tipo, var1, var2){
        var resultado = document.getElementById('result');
        var r;
        if (tipo == 2){
          r = 2 * Math.PI * var1.value * var2.value;
          resultado.innerHTML =  "Fórmula =  π * r * h "+ "<br> 3,14 * " + var1.value + "*" + var2.value + "<br>" + "Área Lateral = " + r + " m²";
        } else if (tipo == 3){
          r = 2 * Math.PI * var1.value * (parseInt(var2.value) + parseInt(var1.value));
          resultado.innerHTML =  "Fórmula =  π * r * (h + r)  "+ "<br> 3,14 * " + var1.value + "* (" + var2.value + "+" + var1.value + ") <br>" + "Área Total = " + r + " m²";
        } else if (tipo == 4){
          r = Math.PI * (Math.sqrt(var1.value,2)) * var2.value;
          resultado.innerHTML =  "Fórmula =  π * r² * h  "+ "<br> 3,14 * " + var1.value + "² * " + var2.value + "<br>" + "Volume = " + r + " L ";
        } 
      }
      function calcularBase(var1){
        var resultado = document.getElementById('result');
        var r;        
          r = Math.PI * (Math.pow(var1.value,2));
          resultado.innerHTML =  "Formula =  π * r² "+ "<br> 3,14 * " + var1.value + "²" + "<br>" + "Área Base = " + r + " m²";
      }

      function limpar(var1, var2){
        var1.value="";
        var2.value="";
        document.getElementById('result').innerHTML ="";
      }
      function limparBase(var1){
        var1.value="";
        document.getElementById('result').innerHTML ="";
      }     
      