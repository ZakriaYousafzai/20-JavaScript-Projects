let weight = document.getElementById("weight");
let height = document.getElementById("height"); 
let btn = document.querySelector("button");
let result = document.getElementById("result");

btn.addEventListener("click", ()=>{
    let h = height.value;
    let w = weight.value;

    // Convert height from inches to meters.
    h = h * 0.0254;

    // Calculate the BMI by dividing weight by height squared.
    let bmi = w / (h * h);
    
    // Round the BMI to two decimal places.
    bmi = bmi.toFixed(2);

    // Determine the category of BMI and display the result.
    if(bmi < 18.5){
        result.textContent = "Underweight: " + bmi;
    }else if(bmi >= 18.5 && bmi <= 24.9){
        result.textContent = "Normal: " + bmi;
    }else if(bmi >= 25 && bmi <= 29.9){
        result.textContent = "Overweight: " + bmi;
    }else{
        result.textContent = "Obese: " + bmi;
    }

});

