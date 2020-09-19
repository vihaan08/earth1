const climate = document.getElementById("climate")
const cunsumption = document.getElementById("cunsumption")
const resources = document.getElementById("resources")
const poverty = document.getElementById("poverty")

climate.onclick=()=>{
    //button color
    climate.style.backgroundColor = "#2F80ED"
    cunsumption.style.backgroundColor = "transparent"
    resources.style.backgroundColor = "transparent"
    poverty.style.backgroundColor = "transparent"
    //background
    document.body.style.backgroundImage = "url('http://i1.faceprep.in/prograd-junior/climate-change-bg.png')"
    document.body.style.backgroundSize ="100% 100%"
    //content
    document.getElementById("amount").innerHTML = "2,911,343,321"
document.getElementById("cause").innerHTML = "Tons of CO2 emitted into the atmosphere"
}

//change the value 
cunsumption.onclick=()=>{
    //button color
    climate.style.backgroundColor = "transparent"
    cunsumption.style.backgroundColor = "#27AE60"
    resources.style.backgroundColor = "transparent"
    poverty.style.backgroundColor = "transparent"
    //background
    document.body.style.backgroundImage = "url('http://i1.faceprep.in/prograd-junior/food-wastage-bg.png')"
    document.body.style.backgroundSize ="100% 100%"
    //content
    document.getElementById("amount").innerHTML = "872,262,909"
    document.getElementById("cause").innerHTML = "Tons of food wasted or lose"
}

resources.onclick=()=>{
    //button color
    climate.style.backgroundColor = "transparent"
    cunsumption.style.backgroundColor = "transparent"
    resources.style.backgroundColor = "#F2994A"
    poverty.style.backgroundColor = "transparent"
    //background
    document.body.style.backgroundImage = "url('http://i1.faceprep.in/prograd-junior/natural-resources-bg.png')"
    document.body.style.backgroundSize ="100% 100%"
    //content
    document.getElementById("amount").innerHTML = "6,080,888"
    document.getElementById("cause").innerHTML = "people who died of hunger"
}

poverty.onclick=()=>{
    //button color
    climate.style.backgroundColor = "transparent"
    cunsumption.style.backgroundColor = "transparent"
    resources.style.backgroundColor = "transparent"
    poverty.style.backgroundColor = "#EB5757"
    //background
    document.body.style.backgroundImage = "url('http://i1.faceprep.in/prograd-junior/poverty-bg.png')"
    document.body.style.backgroundSize ="100% 100%"
    //content
    document.getElementById("amount").innerHTML = "6,080,888"
    document.getElementById("cause").innerHTML = "people who died of hunger"
}