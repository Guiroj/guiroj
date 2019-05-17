

function imprimir() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var messageweb = document.getElementById("message").value;
	console.log("Hello world!");
	alert("Esto es lo que se recibió "+name+" ,"+email+" ,"+messageweb+".");
}



/*Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'aurora.alarcon97@gmail.com',
    From : "you@isp.com",
    Subject : "Alguien quiere contactarse contigo ARGIROC INFO",
    Body : messageweb
}).then(
  message => alert(message)
);*/