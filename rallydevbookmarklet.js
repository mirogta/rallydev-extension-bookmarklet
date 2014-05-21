/*!
 * RallyDev Extension Bookmarklet v0.4
 *
 * Copyright 2014 Miroslav Sommer
 * Released under the MIT license
 *
 * Date: 2014-05-19T23:00Z
 *
 * Add this bookmarklet to your browser bookmarks:
 *
 * javascript:$.getScript('https://raw.githubusercontent.com/mirogta/rallydev-extension-bookmarklet/master/rallydevbookmarklet.min.js');
 *
 */

console.log = function(doc, log, $) {
	var icon = $('<div id="_icon">RallyDev Extensions v0.4</div>');
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

console.log('Starting Miro\'s RallyDev Extension v0.4');

window.open = function (open, $) {

	var popup = null,
		isReady = false;
	
	function attachPopupLoadedEvent() {
		console.log('- attachPopupLoadedEvent');
		console.log('- popup document: '+popup.document);
		setTimeout(checkDocumentLoaded,100);
	}
	
	function checkDocumentLoaded() {
		if(popup.document.readyState !== "complete") {
			isReady = false;
			console.log('- document readyState not complete, retry');
			setTimeout(checkDocumentLoaded,100);
			return;
		}
		
		if(isReady === false) {
			console.log('- document ready');
			isReady = true;
			onPopupLoaded(popup.jQuery);
		}

		if(popup.window) {
			console.log('- popup active, check document readyState');
			enableButtons(popup.jQuery);
			setTimeout(checkDocumentLoaded,1000);
		}
	}
	
	function enableButtons($) {
		console.log('- enabling underlying buttons');
		// NOTE: there are also global functions provided by RallyDev: enableButtons() and disableButtons()
		if($('.ed-btns button').is(':disabled')) {
			$('.ed-btns button').prop('disabled', false);
		}	
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
		html += '<div class="_names">';
		html += '<button data-skill="Development" data-name="DEV: ">DEV</button>';
		html += '<button data-skill="Development" data-name="DEV: code review" data-next="true">DEV: code review</button>';
		html += '<button data-skill="Test" data-name="QA: ">QA</button>';
		html += '<button data-skill="Test" data-name="QA: test review" data-next="true">QA: test review</button>';
		html += '</div>';
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
		html += '<div class="_help">Press Esc key to toggle between the original and optimised view.</div>';
		html += '</div>';
		console.log('- adding new form');
		$(html).insertBefore(form);

		var container = $('._container');

		toggleView(container, form);
		
		console.log('- name buttons');
		$('._names button', container).on('click', function() {
			var skill = $(this).data('skill');
			var name = $(this).data('name');
			var next = $(this).data('next');
			$('select option[value="'+skill+'"]').parent().val(skill);
			$('input._name', container).val(name).trigger('keyup').focus();
			$('span._skill', container).text(skill);
			if(next) {
				$('._hours', container).focus();
			}
		});

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
			// NOTE: $('#'+target).click(); didn't work reliably, because sometimes underlying buttons were disabled
			// so the safest way is to execute the function attached to their click events
			// which is done in an obstructive way in HTML so simply...			
			$('#'+target)[0].onclick();
		});
		
		console.log('- check Ready');
		$('input[name="ready"]').prop('checked',true);
		console.log('- hide Owner row');
		$('select[name="owner"]').parents('tr').hide();
		console.log('- pre-select Development skill');
		$('select option[value="Development"]').parent().val('Development');
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
		console.log('- intercepted window.open('+url+','+name+','+features+')');
        popup = open.call(window, url, name, features);
		attachPopupLoadedEvent();
		//window._popup = popup;
		return popup;
    };
}(window.open, $);
