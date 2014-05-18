/*!
 * RallyDev Extension Bookmarklet v0.1
 *
 * Copyright 2014 Miroslav Sommer
 * Released under the MIT license
 *
 * Date: 2014-05-16T21:57Z
 *
 * Wrap with the following code to use as a bookmarklet:
 * javascript:(function(){...})()
 */

console.log = function(doc, log, $) {
	var icon = $('<div id="_icon">RallyDev Extensions v0.1</div>');
	icon.appendTo('#footer');
	icon.css({
		position: 'absolute',
		bottom: '12px',
		right: '30px',
		padding: '2px',
		color: '#fff',
		border: '1px inset #aaa'
	});

	var logger = $('<div id="_logger"></div>');
	logger.appendTo('#footer');
	logger.css({
		position: 'absolute',
		bottom: '12px',
		right: '30px',
		padding: '4px',
		background: '#fff',
		border: '1px inset #aaa',
		width: '1000px',
		height: '100px',
		overflow: 'auto'
	});

	return function (message) {
		logger.append(message + '<br/>');
		log.call(console,message);
    };	
}(window.document, console.log, $);

console.log('Starting Miro\'s RallyDev Extension v0.2');