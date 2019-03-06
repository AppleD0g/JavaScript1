
function populate(s1,s2){
    
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
    if(s1.value == "France"){
        var optionArray =["|","paris|Pairs","nice|Nice","lyon|Lyon"];        
    }else if(s1.value == "China"){
        var optionArray =["|","beijing|Beijing","fujian|Fujian","shanghai|Shanghai"];        
    }else if(s1.value == "Ireland"){
        var optionArray =["|","dublin|Dublin","cork|Cork","donegal|Donegal"];        
    } 
    for(var option in optionArray){        
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML =pair[1];
        s2.options.add(newOption); 
    }
}



