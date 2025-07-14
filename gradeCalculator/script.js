function show(){
    let marks = parseInt(document.getElementById("marks").value);
    
    if(marks >= 80 && marks <= 100){
        document.getElementById("ans").innerHTML = "A";
    }
    else if(marks >= 70 && marks <=89){
        document.getElementById("ans").innerHTML = "B";
    }
    else if(marks >= 60 && marks <= 69){
        document.getElementById("ans").innerHTML = "C";
    }
    else if(marks >= 50 && marks <= 59){
        document.getElementById("ans").innerHTML = "D";
    }
    else if(marks >= 0 && marks <= 49){
        document.getElementById("ans").innerHTML = "F";
    }
    else{
        document.getElementById("ans").innerHTML = "Please Enter Only Valid Input, Otherwise Your System Will Be Blast";
    }
}