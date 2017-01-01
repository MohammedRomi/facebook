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
/*			function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}*/
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
						$('#userTable').append('<tr id="row'+i+'"><td><a>'+name+'</a></td><td>'+email+'</td><td>'+gender+'</td><td>'+address+'</td><td style="width: 5%;"><a href="#" id="edit" class="glyphicon glyphicon-pencil"></a><a href="" id="remove" class="glyphicon glyphicon-trash"></a></td></tr>');
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
	
	$('#remove').click( function() {
			var id = $(this).closest('tr').attr("id");
			$.ajax({
				url : '',
				type : 'DELETE',
				data:{id: id},
				success : function(data) {
					$(this).closest('tr').remove();
				},
				error : function(err) {
					console.log(err);
				}
			});
			i--;
	});

			
});


