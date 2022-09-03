
const enviar = document.querySelector("#send")

enviar.addEventListener('click', function (event) {
  event.preventDefault();

});

function envio() {
  const form = document.querySelector("#form")
  const ano = form.anos.value
  const sexos = form.sexo.value
  const data =new Date()
  const datasAno = data.getFullYear()
  
  const calculoAno = (ano-datasAno)*-1
  console.log(calculoAno)

  if (sexos == "Masculino") {
    if (calculoAno >=1 && calculoAno <=5){
      document.querySelector("#titulo").innerHTML = `você nasceu em  ${ano} e sua idade é ${calculoAno}`;
      document.getElementById("myImageId").src="IMAGENS/bebeMasculino.jpg"
      document.getElementById("myImageId").style.display = "block"
      
    }

    else if(calculoAno >=6 && calculoAno <=13){
      document.querySelector("#titulo").innerHTML = `você nasceu em  ${ano} e sua idade é ${calculoAno}`
      document.getElementById("myImageId").src="IMAGENS/criançaMasculino.jpg"
      document.getElementById("myImageId").style.display = "block"
    }

    else if(calculoAno >=14 && calculoAno <=17){
      document.querySelector("#titulo").innerHTML = `você nasceu em  ${ano} e sua idade é ${calculoAno}`
      document.getElementById("myImageId").src="IMAGENS/adolescenteMasculino.jpg"
      document.getElementById("myImageId").style.display = "block"
    }
    else if(calculoAno >=18 && calculoAno <=55){
      document.querySelector("#titulo").innerHTML = `você nasceu em  ${ano} e sua idade é ${calculoAno}`
      document.getElementById("myImageId").src="IMAGENS/homem.jpg"
      document.getElementById("myImageId").style.display = "block"
      
    }
    else if(calculoAno >=56 && calculoAno <=110){
      document.querySelector("#titulo").innerHTML = ` você nasceu em ${ano} e sua idade é ${calculoAno}`
      document.getElementById("myImageId").src="IMAGENS/velhoMasculino.png"
      document.getElementById("myImageId").style.display = "block"
    }
    else if(calculoAno >110){
      document.querySelector("#titulo").innerHTML = `Você provavelmente está morto e sua idade é ${calculoAno}`
      document.getElementById("myImageId").src="IMAGENS/morto.jpg"
      document.getElementById("myImageId").style.display = "block"

    }
  }
 
  else if (sexos == "Feminino") {
    if (calculoAno >=1 && calculoAno <=5){
      document.querySelector("#titulo").innerHTML = `você nasceu em  ${ano} e sua idade é ${calculoAno}`;
      document.getElementById("myImageId").src="IMAGENS/bebeFeminina.jpg"
      document.getElementById("myImageId").style.display = "block"
    }

    else if(calculoAno >=6 && calculoAno <=13){
      document.querySelector("#titulo").innerHTML = `você nasceu em  ${ano} e sua idade é ${calculoAno}`
      document.getElementById("myImageId").src="IMAGENS/criançaFeminino.jpg"
      document.getElementById("myImageId").style.display = "block"
    }

    else if(calculoAno >=14 && calculoAno <=17){
      document.querySelector("#titulo").innerHTML = `você nasceu em  ${ano} e sua idade é ${calculoAno}`
      document.getElementById("myImageId").src="IMAGENS/adolescenteFeminina.jpg"
      document.getElementById("myImageId").style.display = "block"
    }
    else if(calculoAno >=18 && calculoAno <=55){
      document.querySelector("#titulo").innerHTML = `você nasceu em  ${ano} e sua idade é ${calculoAno}`
      document.getElementById("myImageId").src="IMAGENS/mulherFeminina.jpg"
      document.getElementById("myImageId").style.display = "block"
    }
    else if(calculoAno >=56 && calculoAno <=110){
      document.querySelector("#titulo").innerHTML = `você nasceu em ${ano} e sua idade é ${calculoAno}`
      document.getElementById("myImageId").src="IMAGENS/idosaFeminina.jpg"
      document.getElementById("myImageId").style.display = "block"
    }
    else if(calculoAno >110){
      document.querySelector("#titulo").innerHTML = `Você provavelmente está morto e sua idade é ${calculoAno}`
      document.getElementById("myImageId").src="IMAGENS/morto.jpg"
      document.getElementById("myImageId").style.display = "block"

    }

  }
}
