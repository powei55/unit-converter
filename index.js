/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// to get elements from HTML
    const lenght = document.querySelector("#convert-1")
    const volume = document.querySelector("#convert-2")
    const mass = document.querySelector("#convert-3")
    const convertBtn = document.querySelector("#btn")
    
    


    function convertlenght(inputNum) {
        let lenghtRatio = 3.281
        const feet = inputNum * lenghtRatio
        const meter = inputNum / lenghtRatio
        
        lenght.textContent = `${inputNum} meter =
         ${feet.toFixed(2)} feet | ${inputNum} feet = 
         ${meter.toFixed(2)} meter `    
    }
   
    
    function convertvolume(inputNum) {
        let lenghtRatio = 0.264
        const litres =  inputNum * lenghtRatio
        const gallons = inputNum / lenghtRatio  
            
        volume.textContent = ` ${inputNum} gallons = 
        ${gallons.toFixed(2)} litres | ${inputNum} litres  =
        ${litres.toFixed(2)} gallons`
        
          }
    
    
    function convertMass(inputNum) {
        let lenghtRatio = 2.204
        const pound = inputNum * lenghtRatio
        const kilogram = inputNum / lenghtRatio
        
        mass.textContent = ` ${inputNum} kilograms  =
         ${pound.toFixed(2)} pound | ${inputNum} pounds  = 
         ${kilogram.toFixed(2)} kilograms` 
    }
    
    
    convertBtn.addEventListener("click", function() {
        const inputNum = document.querySelector("#number").value
         convertlenght(inputNum)
         convertMass(inputNum)
         convertvolume(inputNum)
    })
    
    
    
    
    
