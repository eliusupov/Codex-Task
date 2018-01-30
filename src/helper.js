import $ from "jquery";

const fetchTime = () => {
	fetch('http://time.jsontest.com/')
	.then(res => res.json())
	.then((data) => {
		$('#time').html(data.time);
	});
};
const fetchIP = () => {
	fetch('http://ip.jsontest.com')
	.then(res => res.json())
	.then((data) => {
		$('#ip').html(data.ip);
	});
};
const fetchLang = () => {
	fetch('http://headers.jsontest.com/')
	.then(res => res.json())
	.then((data) => {
		$('#lang').html(Array.from(data['Accept-Language'].split(','))[0]);
	});
};

export { fetchTime, fetchIP, fetchLang };
