'use strict';
var t   = setInterval(runFunction, 1500);
var url = chrome.extension.getURL('styles/cusiframe.css');
function runFunction() {
	var iframe = document.getElementsByTagName('iframe')[1];
	if (iframe !== undefined) {
		var cssLink  = document.createElement("link");
		cssLink.href = url;
		cssLink.rel  = "stylesheet";
		cssLink.type = "text/css";
		iframe.contentWindow.document.body.appendChild(cssLink);
		clearInterval(t);
	}
}
/*
 $(document).ajaxStop(function () {
 console.log('ajaxStop');
 });

 $(document).ajaxComplete(function () {
 console.log('ajaxComplete');
 });
 */

if (window.location.host === 'www.youtube.com') {
	addStyles();

	var comments = setInterval(commentsShow, 100);
}

function commentsShow() {
	var allComments = $('.all-comments');
	if (allComments.length >= 1) {
		addStyles();
		clearInterval(comments);
	}
}

function addStyles() {
	var youtubeUrl      = chrome.extension.getURL('styles/youtube.css');
	var youtubeCssLink  = document.createElement("link");
	youtubeCssLink.href = youtubeUrl;
	youtubeCssLink.rel  = "stylesheet";
	youtubeCssLink.type = "text/css";
	document.body.appendChild(youtubeCssLink);
}