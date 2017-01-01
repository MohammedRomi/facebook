

function update() {
    fetch('quotes', {
		method: 'put',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			'name': 'Darth Vader',
			'quote': 'I find your lack of faith disturbing.'
		})
	})
	.then(res => {
		if (res.ok) return res.json()
	})
	.then(data => {
		console.log(data)
		window.location.reload(true)
	})
}

function deleteItem(){
	fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'aaa'
    })
	})
	.then(function(res){
		if (res.ok) return res.json()
	})
	.then(function(data){
		console.log("hey");
		console.log(data)
		window.location.reload(true)
	})
}