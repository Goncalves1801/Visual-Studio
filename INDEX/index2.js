alert("Digite zero para sair")
do{
    num= Number(prompt("Infome um numero"))
    if(isNaN(num)){
        alert("Valor digitado não é numero")
        continue}
        
        if(num==0 || isNaN(num))
            break
    num%2==0?alert("Numero par " + num):
    alert("Numero impar " + num)}

     while(true)