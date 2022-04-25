timeend= new Date(2022,4,-4,1,40,0);
d = document.querySelector('body');
function time( param ) {
	today = new Date();
	today = Math.floor((timeend-today)/1000);
	tsec=today%60; today=Math.floor(today/60);
	tmin=today%60; today=Math.floor(today/60);
	thour=today%24; today=Math.floor(today/24);
	if(today  <= 0 & thour  <= 0  & tmin <= 0  & tsec <= 0 ){
		 window.location.href = 'main.html';
	} 
	else {
		if (param=2) {
			// время не пришло
			if(today<10) {timestra= '0'} else {timestra=''};
			timestra = timestra + today + "<br>" + "дней";
			if(thour<10) {timestrb= '0'} else {timestrb=''};
			timestrb = timestrb + thour + "<br>" + "часов";
			if(tmin<10) {timestrc= '0'} else {timestrc=''};
			timestrc = timestrc + tmin + "<br>" + "минут";
			if(tsec<10) {timestrd= '0'} else {timestrd=''};
			timestrd = timestrd + tsec + "<br>" + "секунд";
			document.getElementById('a').innerHTML=timestra;
			document.getElementById('b').innerHTML=timestrb;
			document.getElementById('c').innerHTML=timestrc;
			document.getElementById('d').innerHTML=timestrd;
			timer = setInterval(time, 1000);
		}
	}
}
