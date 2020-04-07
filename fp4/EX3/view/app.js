
document.getElementById('submit').addEventListener("click", function () {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var key = JSON.parse(xhttp.response);
            alert(key);
        }
    }

	
	xhttp.open("GET", '/submission', true);
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send();
})
