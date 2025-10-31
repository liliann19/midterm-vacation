document.getElementById('vacation-form').onsubmit = () => {

    clearErrors();

    let isValid = true;

    // validate 'Number of Travelers'
    let numTravelers = Number(document.getElementById('travelers').value);
    if (isNaN(numTravelers) || numTravelers <= 0) {
        document.getElementById('err-numTravelers').style.display = "block";
        isValid = false;
    }

    // validate 'Destination'
    let destination = document.getElementById('destination').value;
    if (destination == "none") {
        document.getElementById("err-destination").style.display = "block";
        isValid = false;
    }


    return isValid;
}


// Clear errors 
function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}