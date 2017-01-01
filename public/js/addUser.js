$(document).ready(function(){
	var table = $('#myData').DataTable();
	var i = table.data().count()/5;
	console.log(i);
	$('#myModal #addUser').click(function () {
		
		var name= $('#name').val();
        var email= $('#email').val();
        var gender= $('#gender').val();
        var address= $('#address').val();
		
		if(name!="" && email!="" && gender!="" && address!=""){
			
			var checkEmail= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if(checkEmail.test(email)){
				$.ajax({
					url : '',
					type : 'GET',
					data: { name: name,
						email:email,
						gender: gender,
						address: address
						},
					success : function(data) {
						$('#userTable').append('<tr id="row'+i+'"><td><a>'+name+'</a></td><td>'+email+'</td><td>'+gender+'</td><td>'+address+'</td><td style="width: 5%;"><button class="glyphicon glyphicon-pencil updateItem"></button><button class="glyphicon glyphicon-trash removeItem"></button></td></tr>');
						alert("User added");
					},
					error : function(err) {
						console.log(err);
					}
				});
				$('#name').val("");
				$('#email').val("");
				$('#gender').val("");
				$('#address').val("");
				$('#myModal').modal('hide');
				
			}else{
				alert("Please Enter valid Email")
			}
		}else{
			alert('Please fill all records');
		}
		
		
	});
	
	$('.updateItem').click( function() {
		
			alert('i am didnt implemented yet');
			/*var id = $(this).closest('tr').attr("id");
			var currentName=$('#'+id).children('td').children('a').html();

			var iconId=$('#'+id).children('td').slice(4).children('button').attr("id");
			var updateItem=document.getElementById(iconId);
			var name;
			var email;
			var gender;
			var address;
			$('#myModal2 #updateUser').click(function(){
				alert('im not working modal for edit');
				name=$("#name2").val();
				email=$("#email2").val();
				gender=$("#gender2").val();
				address=$("#address2").val();
				
				if(updateItem){
				console.log(updateItem);
				}else{console.log('error');}
				console.log(name);
				console.log(email);
				console.log(gender);
				console.log(address);
				console.log(currentName);
				$('#myModal2').modal('hide');
			})
			updateItem.addEventListener('click', function () {
				  // Send PUT Request here
					//console.log(currentName);
					fetch('users', {
					method: 'put',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						'name': name,
						'email':email,
						'gender': gender,
						'address': address,
						'currentEmail': currentName
					  })
					})
			})*/
			
	});
	$('.removeItem').click( function() {
		alert('i am didnt implemented yet');
			
	})
	function deleteItem(name){
		fetch('users', {
		method: 'delete',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({
		  'name': name
		})
		})
		.then(function(res){
			if (res.ok) return res.json()
		})
		.then(function(data){
			console.log(data)
			window.location.reload(true)
		})
	}
	
});


