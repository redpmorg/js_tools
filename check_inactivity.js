/**
 * Logout if no activity is registered in 10 minutes
 *
 * @authors Leonard LEPADATU (lepadatu.leonard-ext@groupehn.com)
 * @date    2015-07-02 15:15:31
 *
 * Pure JS Vanilla version
 */

 //old browser support ?!
 var e = e ? e : window.event;

 var min = 0, initMin = 600;

// don't cache this because will loose dynamism of method
document.getElementById("counter").innerHTML = initMin;

(function incCounter() {
	var a = parseInt(document.getElementById("counter").innerHTML);
	document.getElementById("counter").innerHTML = a - 1;
	if (a-1 > min) {
		setTimeout(incCounter, 1000)
	} else {
		window.location.assign('/admin/logout/')
	}
})()

window.addEventListener('click', function(e) {
	document.getElementById("counter").innerHTML = initMin;
});
window.addEventListener('keyup', function(e) {
	document.getElementById("counter").innerHTML = initMin;
});
