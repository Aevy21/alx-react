import $ from 'jquery';
import '../header/header.css';

console.log('Init header');

// Adding logo and H1 title to header
const logo = $('<div id="logo"></div>');
$('header').append(logo);

const title = $('<h1>Holberton Dashboard</h1>');
$('header').append(title);i
