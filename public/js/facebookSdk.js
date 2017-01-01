	//initialize and setup facebook js sdk
	
	window.fbAsyncInit = function() {
		FB.init({
			appId      : '127843764379612',
			xfbml      : true,
			cookie     : true,
			version    : 'v2.8'
		});
	
		FB.getLoginStatus(function(response) {
		    if (response.status === 'connected') {
				//console.log(response);
					//document.getElementById('status').innerHTML = 'We are connected.';
					//document.getElementById('login').style.visibility = 'hidden';
				
		    } else if (response.status === 'not_authorized') {
		    	//document.getElementById('status').innerHTML = 'We are not authorized.'
		    }else {
				//console.log(response);
		    	//document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
		    }
			
		});
	};

	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	//response.authResponse.accessToken===a && 
	// login with facebook with extra permissions
	function login() {
		FB.login(function(response) {
			if (response.status === 'connected') {
		    	//document.getElementById('status').innerHTML = 'We are connected.';
				
		    } else if (response.status === 'not_authorized') {
		    	//document.getElementById('status').innerHTML = 'We are not authorized.'
		    }else {
		    	//document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
		    }
		}, {scope: 'email'});
	}
	var access_token="EAAB0RfIpn9wBAPHoWWh9Fx82jZAnZBXV1PcC97y678xhon6cjEVob4PrSVDZA5gw1V8fkJxRMZAyv9c6ATgW93TCs9ktRjmagzZAAtQAGW7bNboTG0GSJfSioyLMJcZBwfm7KlokwneYc3Xc9PCJxYAfHVHvF6ZBTsZD";
	// getting basic user info
	
	function getInfo() {
		FB.api('/1433074020037186?access_token='+access_token, 'GET',{fields: 'id,picture.width(300).height(300),name,location,email,birthday,gender,work,education'}, function(response) {
				console.log(response);
				//console.log(birthday);
				document.getElementById('profileImage').src = response.picture.data.url;
				document.getElementById('userName').innerHTML = response.name;
				document.getElementById('location').innerHTML = "<span class='glyphicon glyphicon-map-marker'></span>"+response.location.name;
				document.getElementById('email').innerHTML = '<span class="glyphicon glyphicon-envelope"></span>'+response.email;
				document.getElementById('birthday').innerHTML = '<span class="glyphicon glyphicon-heart-empty"></span>'+response.birthday;
				document.getElementById('gender').innerHTML = '<span class="glyphicon glyphicon-user"></span>'+response.gender;
				
				for(i=0;i<response.work.length;i++){
					$('#workHistory').after('<div class="row" ><div class="col-xs-6"><h4 class="pro-title"><a id="">'+response.work[i].position.name+'</a></h4></div><div class="col-xs-6" style="padding-top:25px;"><span class="label label-default" id="">'+response.work[i].location.name+'</span><span class="label label-primary" id="">'+ response.work[i].employer.name+'</span></div></div>')
				}
				
				for(i=0;i<response.education.length;i++){
					$('#educationHistory').after('<div class="row" ><div class="col-xs-6"><h4 class="pro-title"><a id="">'+response.education[i].school.name+'</a></h4></div><div class="col-xs-6" style="padding-top:25px;"><span class="label label-default" id="">'+response.education[i].year.name+'</span></div></div>')
				}
		});
	}
	