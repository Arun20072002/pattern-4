var a=parseInt(prompt("Enter the number"))

for(let i=1;i<=a;i++){

    for(let k=a;k>i;k--){
        document.write("&nbsp")
    }
    for(let l=a;l>i;l--){
        document.write("&nbsp;")
    }

    for(let j=1;j<=i;j++){
        document.write("*"+"&nbsp;"+"&nbsp;")
    }
    document.write("<br>")
}