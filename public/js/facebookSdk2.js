	//initialize and setup facebook js sdk
	
	window.fbAsyncInit = function() {
		FB.init({
			appId      : '127843764379612',
			xfbml      : true,
			cookie     : true,
			version    : 'v2.8'
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
				getInfo();
				
		    } else if (response.status === 'not_authorized') {
		    	//document.getElementById('status').innerHTML = 'We are not authorized.'
		    }else {
		    	//document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
				getInfo();
		    }
		}, {scope: 'email'});
	}
	
	function getInfo() {
		
		FB.api('/me', 'GET',{fields: 'id,picture.width(300).height(300),name,location,email,birthday,gender,work,education'}, function(response) {
				
		});
	}
	