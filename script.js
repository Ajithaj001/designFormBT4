var nameError = document.getElementById('name-error');
var LnameError = document.getElementById('Lname-error');
var mailError = document.getElementById('Mail-error');
var passError = document.getElementById('password-error');
var RepassError = document.getElementById('re-password-error');
var submitError= document.getElementById('submitError');

// var buttonError = document.getElementById('button-error');
// var gen = document.forms["myforms"]["gender"];




function validateName(){
	var name = document.getElementById('contact-name').value;
	
	

	if(name.length == 0){
		nameError.innerHTML = 'Name is required';
		return false;
	}
	if(name.match(/^[0-9]*$/))
	{
		nameError.innerHTML = 'name should not contain digits';
		return false;
	}

	nameError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
	return true;
	

}

function validateLName(){
	var name = document.getElementById('Lcontact-name').value;
	
	

	if(name.length == 0){
		LnameError.innerHTML = 'Name is required';
		return false;
	}
	if(name.match(/^[0-9]*$/))
	{
		LnameError.innerHTML = 'name should not contain digits';
		return false;
	}

	LnameError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
	return true;
	

}


function validateMail(){
	var mail = document.getElementById('contact-mail').value;
	


	if(mail.length==0){
		mailError.innerHTML='Email required';
		return false;
	}
	if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
		mailError.innerHTML='email invalid';
		return false;
	}

	mailError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
	return true;



}


function  validatePassword(){
	var pass1 = document.getElementById('contact-password').value;
	var pass2= document.getElementById('contact-repass').value;

	if(pass1.length==0){
		passError.innerHTML='password required';
		return false;
	}


	if(pass1.length<8){
		passError.innerHTML='password shoud be >8 char';
		return false;

	}

	passError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
	return true;
		}




function validateRepass(){
	var pass1 = document.getElementById('contact-password').value;
	var pass2= document.getElementById('contact-repass').value;

	if (pass2.length==0){
		 RepassError.innerHTML='retype password'
		 return false;
	}

	if(pass1!=pass2){
		RepassError.innerHTML='password do not match';
		return false;
	}
	

	RepassError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
	return true;

}

function validateForm(){
	if(!validateName()|| ! validateLName()|| !validateMail()|| !validatePassword()|| !validateRepass())
	{
		submitError.style.display ='block';
		submitError.innerHTML='  please fix error';
		setTimeout(function(){submitError.style.display ='none';}, 5000);
		return false;
	}

    submitError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
	
	return true;

}



// function validateMail(){
// 	var mail = document.getElementById('contact-mail').value;
	


// 	if(mail.length==0){
// 		mailError.innerHTML='Email required';
// 		return false;
// 	}
// 	if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
// 		mailError.innerHTML='email invalid';
// 		return false;
// 	}

// 	mailError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
// 	return true;



// }
// function validateDob(){
// 	var dob = document.getElementById('contact-dob').value;
	
// 	var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
	
	    
//     if (dob == null || dob == "" || !pattern.test(dob)) {
//         dobError.innerHTML= "Invalid date of birth";
//         return false;
//     }

	
// 	dobError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
// 	return true;

// }




