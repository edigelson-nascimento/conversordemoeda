// Setar ID //
       var converter = document.getElementById("valor")
       var valorBtc = document.getElementById("caixamsg")
       
   // Função de Converter //
     function Converter() {
       var valor = valorBtc.value;
       var valorEmBtc = parseFloat(valor);
       
       var valorEmBtc = valor * 102033.41
       
       var valor = valorEmBtc
       converter.value = "R$ " + valor.toLocaleString('pt-BR')
     }
  
     // Função Limpar //
    function Limpar() {
      limparCampo=valor
      limparCampo.select()
      document.execCommand("Delete")
      limparCampo=caixamsg
      limparCampo.select()
      document.execCommand("Delete")
    }
