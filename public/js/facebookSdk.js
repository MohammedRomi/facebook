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
		    	document.getElementById('status').innerHTML = 'We are connected.';
				document.getElementById('login').style.visibility = 'hidden';
				
		    } else if (response.status === 'not_authorized') {
		    	document.getElementById('status').innerHTML = 'We are not authorized.'
		    }else {
				console.log(response);
		    	document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
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
		    	document.getElementById('status').innerHTML = 'We are connected.';
				
		    } else if (response.status === 'not_authorized') {
		    	document.getElementById('status').innerHTML = 'We are not authorized.'
		    }else {
		    	document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
		    }
		}, {scope: 'email'});
	}
	var access_token="EAAB0RfIpn9wBAPHoWWh9Fx82jZAnZBXV1PcC97y678xhon6cjEVob4PrSVDZA5gw1V8fkJxRMZAyv9c6ATgW93TCs9ktRjmagzZAAtQAGW7bNboTG0GSJfSioyLMJcZBwfm7KlokwneYc3Xc9PCJxYAfHVHvF6ZBTsZD";
	// getting basic user info
	function getInfo() {
		FB.api('/1433074020037186?access_token='+access_token, 'GET',
			{fields: 'id,picture.width(300).height(300),name,location,email,birthday,gender,work,education'}, function(response) {
				console.log(response);
				document.getElementById('status').innerHTML = "<img src='"+response.picture.data.url+"'>";
			//document.getElementById('name').innerHTML = response.education[1].school.name;
			//document.getElementById('email').innerHTML = response.email;
			//document.getElementById('status').innerHTML = response.gender;
		});
	}