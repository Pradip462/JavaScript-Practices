//here use the submit button evevnt to submit the form
const form  = document.querySelector('form');
//if we select the form outside the event listener, it will not work properly
//because the form will not be available at the time of selection
//because if we refresh the page,the empty value at the input field will be selected whoch we don't want
//so we will select the form inside the event listener

//this usecase will give you empty


form.addEventListener('submit',(event)=>{
    event.preventDefault(); // Prevent the default form submission behavior
    //select the input field like height and weight here don't use outside of the event listener
    //because there is a difference between selection here and outside the event listener

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML="Please enter valid height values.";
    }

    else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML="Please enter valid weight values.";
    }

    else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        // Under Weight = Less than 18.6
        
        // Normal Range = 18.6 and 24.9
        
        // Overweight = Greater than 24.9
            if(bmi < 18.6){
                result.innerHTML = `<span>Your BMI is ${bmi}. You are underweight.</span>`;
            }
            else if(bmi >= 18.6 && bmi <= 24.9){
                result.innerHTML = `<span>Your BMI is ${bmi}. You are in the normal range.</span>`;
            }
            else if(bmi > 24.9){
                result.innerHTML = `<span>Your BMI is ${bmi}. You are overweight.</span>`;
            }
                // result.innerHTML = `<span>Your BMI is ${bmi}.</span>`;
    }


});