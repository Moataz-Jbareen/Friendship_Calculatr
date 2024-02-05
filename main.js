function calculator(){
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    
    if(name1 ==="" || name2 ===""){
        alert("Please enter both names");
    }
    else{
        const ftiendPerc= Math.floor(Math.random() *101);

        const result = document.getElementById("result");
        result.innerHTML = `${name1} and ${name2} Friendship Percentage: ${ftiendPerc}`;

        if(ftiendPerc < 50){
            result.style.color = "red";
            result.innerHTML+="<br> Not a Great Match"
        }
        else if(ftiendPerc >= 50 && ftiendPerc < 75){
            result.style.color = "orange";
            result.innerHTML+="<br> Good Match"
        }
        else{
            result.style.color = "green";
            result.innerHTML+="<br> Great Match"
        }

    }
}