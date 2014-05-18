/*!
 * RallyDev Extension Bookmarklet v0.2
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
	var icon = $('<div id="_icon">RallyDev Extensions v0.2</div>');
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
	
	var KEY_ESC = 27;
	logger.hide();
	$(doc).on('keyup', function(e) {
		if(e.keyCode !== KEY_ESC) {
			return;
		}
		logger.toggle();
	});
	
	return function (message) {
		var now = new Date();
		logger.append('<small>' + now.toISOString() +  '</small>:' + message + '<br/>');
		log.call(console,message);
		logger[0].scrollTop = logger[0].scrollHeight;
    };	
}(window.document, console.log, $);

console.log('Starting Miro\'s RallyDev Extension v0.2');

window.open = function (open, $) {

	var popup = null;

	function attachPopupLoadedEvent() {
		console.log('- attachPopupLoadedEvent');
		console.log('- popup document: '+popup.document);
		$(popup.document).ready(function() {
			console.log('- popup loaded');
			setTimeout(checkDocumentLoaded,0);
		});
	}
	
	function checkDocumentLoaded() {
		if(popup.document.readyState !== "complete") {
			console.log('- document not ready, retry');
			setTimeout(checkDocumentLoaded,100);
			return;
		}
		onPopupLoaded(popup.jQuery);
	}
	
	function onPopupLoaded($) {
		if(typeof($) === "undefined" || $ === null || $('#itemForm').length === 0) {
			console.log('- jQuery not ready, retry');
			setTimeout(checkDocumentLoaded,100);
			return;
		}

		console.log('- running enhancemenets');
		var editorType = $('input[name="editorType"]').val();
		var editorMode = $('input[name="editorMode"]').val();
		console.log('- editorType:'+editorType+', editorMode:'+editorMode);
		if(editorMode === 'create' && editorType === 'task') {
			onCreateTask($);
		}
	}
	
	function onCreateTask($) {
		console.log('- Create Task detected');
		var form = $('#itemForm');
		console.log('- form:'+form);
		var html = '';
		html += '<div class="_container">';
		html += '<style type="text/css">';
		html += '._container {padding:10px;}';
		html += '._container * {font-size:medium; padding:4px; margin: 4px;}';
		html += '._container label {width:100px; display:inline-block;}';
		html += '._container input {width:20px; display:inline-block;}';
		html += '._container button {width:160px; display:inline-block;}';
		html += '._container ._title {font-weight:bold; border-bottom: 1px solid #000;}';
		html += '._container ._names {text-align:center;}';
		html += '._container ._actions {text-align:center; border-top: 1px solid #000;}';
		html += '._container ._name {width:500px;}';
		html += '._container ._help {margin-top:20px; color: #33AA33;}';
		html += '</style>';
		html += '<div class="_title">Create Task</div>';
		html += '<div><label>Name:</label><input type="text" class="_name"/></div>';
		html += '<div><label>Hours:</label><input type="text" class="_hours"/></div>';
		html += '<div><label>Ready:</label>&#10004;</div>';
		html += '<div><label>Skill:</label><span class="_skill"></span></div>';
		html += '<div class="_actions">';
		html += '<button data-target="save_and_close_btn">Save and Close</button>';
		html += '<button data-target="save_and_new_btn">Save and New</button>';
		html += '<button data-target="save_btn">Save</button>';
		html += '<button data-target="cancel_btn">Cancel</button>';
		html += '</div>';
		html += '</div>';
		console.log('- adding new form');
		$(html).insertBefore(form);

		var container = $('._container');

		toggleView(container, form);
		
		console.log('- focus on name');
		$('input._name', container).focus();
		
		console.log('- update name');
		$('input._name', container).on('keyup', function() {
			var text = $(this).val();
			$('input[name="name"]').val(text);
		});
		
		console.log('- update estimate and time remaining');
		$('._hours', container).on('keyup', function() {
			var text = $(this).val();
			$('input[name="estimate"],input[name="remaining"]').val(text);
		});

		console.log('- add action buttons');
		$('div._actions button', container).on('click', function() {
			var target = $(this).data('target');
			$('#'+target).click();
		});
	}
	
	function toggleView(container, form) {
		console.log('- show/hide container and original on ESC key');
		var KEY_ESC = 27;
		form.hide();
		container.show();
		$(popup.document).on('keyup', function(e) {
			if(e.keyCode !== KEY_ESC) {
				return;
			}
			container.toggle();
			form.toggle();
		});
	}
	
    return function (url, name, features) {
		console.log('- Intercepted window.open('+url+','+name+','+features+')');
        popup = open.call(window, url, name, features);
		attachPopupLoadedEvent();
		return popup;
    };
}(window.open, $);
