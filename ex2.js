function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){

        window.alert('[ERRO] Tente novamente')
    } else {

        var sexo = document.getElementsByName('sexo')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //mesma coisa de eu ir no html e fazer <img id='foto'>
        if(sexo[0].checked){

            genero = 'Mulher'
            if(idade >= 0 && idade < 10){

                img.src = 'bbmenina.jpg'


            } else if(idade < 21){

                
                img.src = 'jovemmenina.jpg'

            } else if(idade < 50){

                img.src = 'adulta.jpg'

            } else {

                img.src = 'idosa.jpg'
             
            }
        
        }else if(sexo[1].checked) {

            genero = 'Homem'
            if(idade >= 0 && idade < 10){

                img.src = 'bbmenino.jpg'

            } else if(idade < 21){

                img.src = 'jovemmenino.jpg' 

            } else if(idade < 50){

                img.src = 'adulto.jpg'   

            } else {

                img.src = 'idoso.jpg'
            }
            }
    }
        
        res.style.textAlign = 'center' //centralizar a frase abaixo
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //pra add a foto
    }
    
