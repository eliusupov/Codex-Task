import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.min';
import 'jquery-ui-dist/jquery-ui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './index.html';
import './fontawesome.min.css';
import './styles/style.css';
import { fetchTime, fetchIP, fetchLang } from './helper';

$(() => {
	// Jquery ui datepicker
	$('.datepicker').datepicker({
		showOn: 'button',
		buttonImageOnly: false,
		buttonText: '<i class="fas fa-calendar-alt"></i>',
	});
	// Fetches the time
	fetchTime();
	// Updates the time every second
	setInterval(() => {
		fetchTime();
	}, 1000);
	// Fetches the ip from JSON
	fetchIP();
	// Fetches the language from JSON
	fetchLang();
});
