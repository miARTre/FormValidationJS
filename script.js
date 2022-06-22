let inputs = document.querySelectorAll('input');
// console.log(inputs);

let errors = {
    "name_surname" : [],
    "user_name" : [],
    "email" : [],
    "password" : [],
    "repeat_password" : []
};

// console.log(errors);

inputs.forEach((element) => {

    // console.log(element);

    element.addEventListener('change', e => {

        let currentInput = e.target;

        let inputValue = currentInput.value;
        let inputName = currentInput.getAttribute('name');

        // console.log(currentInput);
        // console.log(inputName);

        if (inputValue.length > 4) {

            errors[inputName] = [];

            // console.log("Top");

            switch(inputName) {
                case 'name_surname' : 
                    // let validation = inputValue;
                    let validation = inputValue.trim();
                    // let validation = inputValue.split(" ");
                    validation = validation.split(" ");
                    if(validation.length < 2) {
                        // console.log("Is not okay");
                        errors[inputName].push('You need to enter both first and last name!');
                    }
                    // console.log(validation);

                break;

                case 'email' : 
                    if(!validateEmail(inputValue)) {
                        // console.log('Okay');
                        errors[inputName].push('Not a valid email address');
                    } // else {
                    //     // console.log("Not okay");
                    // }

                break;

                case 'repeat_password' : 
                    let password = document.querySelector('input[name="password"]').value;
                    if(inputValue !== password) {
                        errors[inputName].push('Passwords do not match');
                    }

                break;
            }

        } 
        else {
            // console.log("Is not okay");

            errors[inputName] = ['The field cannot be less than 5 characters!'];

        }

        // let lista = document.querySelector('ul');
        // console.log(lista);
        
        // document.querySelector('div').innerHTML = `<ul>${errors[inputName][0]}</ul>`;

        // populateErrors(errors);
        populateErrors();

    });

});

const populateErrors = () => {

    for(let elem of document.querySelectorAll('ul')) {
        elem.remove();
    }

    // console.log(Object.keys(errors));

    for (let key of Object.keys(errors)) {

        let input = document.querySelector(`input[name="${key}"]`);
        let parentElement = input.parentElement;
        let errorsElement = document.createElement('ul'); 
        parentElement.appendChild(errorsElement);

        errors[key].forEach(error => {

            let li = document.createElement('li');
            li.innerText = error;

            errorsElement.appendChild(li);

        });
        
        // console.log(parentElement);
        // console.log(input);

    }

    // console.log(errors);

}


const validateEmail = email => {
    
    if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        return(true);
    }
    
    return false;
}
