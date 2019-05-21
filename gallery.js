function openBus2(bus){
	Swal.fire({
		html:`<img class="img-fluid" src="${bus.src}" alt="">`,
		showConfirmButton: false,
		customClass: {
			popup: "swal-wide",
			content: "swal-wide2"
		},
		showCloseButton: true
	})
}