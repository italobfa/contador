function contar(){

    var res = document.getElementById('res')
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('inter')

     if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados para contagem')
    }else{
        res.innerHTML = 'Contando: <br>'
        /*sempre lembrando que o dado que vem do formulario, vem em formato de texto. 
        Por isso a conversao para numero*/
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p<=0){
            window.alert('IMPOSSIVEL CONTAR! Passo recebá (1)')
            p = 1
        }

        if (i < f ){
            //O contador 'c' vai ser sempre usado nas tres etapas
            for(var c = i ; c <= f ; c += p){
                res.innerHTML += `${c} `
                res.innerHTML += `\u{1f449}` //utilizando unicodes no JS
             }
        }else{
            for(var c = i ; c >=f ; c -= p){
                res.innerHTML += `${c} `
                res.innerHTML += `\u{1f449} `
            }
        }
        res.innerHTML +=`\u{1f3c1}`
        }
}