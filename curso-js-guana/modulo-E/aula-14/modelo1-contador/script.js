var count = document.querySelector('input#count')
count.addEventListener('click', contar)

function contar() {
  let ini = document.getElementById('txti')    
  let fim = document.querySelector('input#txtf')    
  let passo = document.getElementById('txtp')
  let res = document.querySelector('div#result')    
    if (ini.value.length==0 || fim.value.length==0 || passo.value.length==0) {
        res.innerHTML += `Impossível contar, faltam dados`
        //window.alert('Erro, faltam dados')
        
    }else{
        res.innerHTML= "Contando..."
        let i= Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0) {
            alert("passo invalido, considerando paso 1")
            p =1
            
        }
        if (i < f) {
            for (let c = i; c <= f; c +=p) {
                res.innerHTML += `${c}\u{1F449}` 
            } 
           
        }else{
            for (let c = i; c >= f; c -= p) {
               res.innerHTML += `${c} \u{1F449}`
                
            }
        }
        res.innerHTML += `\u{1F3C1}` 
    }

}