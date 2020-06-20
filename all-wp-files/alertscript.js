alert('script is working');

var msg = 'heres a message';

async function myfn() {
	await fetch('https://localhost:5001/api/cipo/gettermsbystring/cinema')
	.then(res => {
		console.log(res);
		return res.json();
	})
	.then(data => {
		console.log(data);
		console.log(data.terms[0].termName);
		msg2 = data.terms[0].termName;
		document.getElementById('react-div').innerHTML = msg2;
	});
}

myfn();