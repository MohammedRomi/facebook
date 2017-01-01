function update(){
var name=document.getElementById('newName').value;
var email=document.getElementById('newEmail').value;
var gender=document.getElementById('newGender').value;
var address=document.getElementById('newAddress').value;
var currentEmail=document.getElementById('currentEmail').value;
var updateItem=document.getElementById('update');
console.log(name);
console.log(email);
console.log(gender);
console.log(address);
console.log(currentEmail);

updateItem.addEventListener('click', function () {
	fetch('users', {
	method: 'put',
	headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
		'name': name,
		'email':email,
		'gender': gender,
		'address': address,
		'currentEmail': currentEmail
		})
	})
})

}