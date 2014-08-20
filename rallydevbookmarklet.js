/*!
 * RallyDev Extension Bookmarklet v0.5
 *
 * Copyright 2014 Miroslav Sommer
 * Released under the MIT license
 *
 * Date: 2014-06-11T23:00Z
 *
 * Add this bookmarklet to your browser bookmarks:
 *
 * javascript:$.getScript('https://rawgit.com/mirogta/rallydev-extension-bookmarklet/master/rallydevbookmarklet.min.js');
 *
 */

/*
Urls:
https://rally1.rallydev.com
https://rally1.rallydev.com/slm/webservice/v2.0/HierarchicalRequirement?query=((Project.Name%20%3D%20BUD)%20AND(Release.ObjectID%20%3D%2018855759752))&fetch=Name,FormattedID,ObjectID,Tasks&pagesize=1&order=Name%20desc
https://rally1.rallydev.com/slm/webservice/v2.0/HierarchicalRequirement?query=((Project.Name%20%3D%20BUD)%20AND(Release.ObjectID%20%3D%2018855759752))&shallowFetch=Name,FormattedID,ObjectID,Task,Release&pagesize=50&order=Name%20desc
https://rally1.rallydev.com/slm/webservice/v2.0/HierarchicalRequirement/19570286926/Tasks
*/
 
console.log = function(doc, log, $) {
	var icon = $('<div id="_icon">RallyDev Extensions v0.5</div>');
	icon.appendTo('#footer');
	icon.css({
		position: 'fixed',
		bottom: '12px',
		right: '30px',
		padding: '2px',
		background: '#000',
		color: '#fff',
		border: '1px inset #aaa'
	});

	var logger = $('<div id="_logger"></div>');
	logger.appendTo('#footer');
	logger.css({
		position: 'fixed',
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

console.log('Starting Miro\'s RallyDev Extension v0.5');

(function(Rally) {

	var CSS_URL = "https://rawgit.com/mirogta/rallydev-extension-bookmarklet/master/rallydevbookmarklet.css";

	var scope = Rally.getScope();

	function init() {

		console.log('- Adding custom styles');
		loadStyle();
		
		console.log('- Add extensions menu');
		
		var extensionsMenuItem = $('<li class="nav-tab" id="_extensionMenuItem"><a href="#/extensions">Extensions</a></li>');
		$('.nav-bar li').parent().append(extensionsMenuItem);
		
		extensionsMenuItem.on('click', function(e) {
			e.preventDefault();
			$('.nav-bar li').removeClass('nav-tab-active');
			//$(this).addClass('nav-tab-active');
			showExtensionsContent();
			return false;
		});
	}
	
	function loadStyle() {
		$('head').append('<link rel="stylesheet" type="text/css" href="'+CSS_URL+'">');
	}
	
	function showExtensionsContent() {
		console.log('- Display extensions content');
		
		var projectUrl = 'https://rally1.rallydev.com/slm/webservice/v2.0/project/'+scope.project.ObjectID;
		
		var html = '<div class="portlet">';
		html += '<div class="titlebar"><span>RallyDev Extensions</span></div><br/>';
		html += '<div>Current Project: <a href="'+projectUrl+'">'+scope.project.Name+'</a></div>';
		html += '<div>Releases: <select id="_releases"></select></div>';
		html += '<hr/><div id="_stories"></div>';
		html += '</div>';
		
		setTimeout(loadReleases,0);
		$('#content .portlet').parent().html(html);
		$('#_releases').on('change', onSelectRelease);
	}
	
	function onSelectRelease() {
		var selectedRelease = $(this).val();
		var baseUrl = 'https://rally1.rallydev.com/slm/webservice/v2.0/HierarchicalRequirement';
		var query = '?query=((Project.Name%20%3D%20BUD)%20AND(Release.ObjectID%20%3D%20'+selectedRelease+'))&shallowFetch=Name,FormattedID,ObjectID,Tasks&pagesize=50&order=Name%20desc';
		$.getJSON(baseUrl+query, function(data) {
			var items = [];
			var list = data.QueryResult.Results;
			$.each( list, function( key, val ) {
				var itemUrl = 'https://rally1.rallydev.com/#/'+scope.project.ObjectID+'ud/detail/userstory/'+val.ObjectID;
				var storyKey = val.FormattedID;
				items.push('<li id="_'+storyKey+'"><a href="'+itemUrl+'">'+storyKey+'</a> '+val.Name+'</option>');
				if(val.Tasks && val.Tasks.Count > 0) {
					setTimeout(function() {
						loadTasks(storyKey, val.ObjectID);
					}, 100);
				}
			});
			$('#_stories').html(items.join(""));
		});
	}
	
	function loadReleases() {
		var baseUrl = 'https://rally1.rallydev.com/slm/webservice/v2.0/project/'+scope.project.ObjectID+'/Releases';
		var query = '?shallowFetch=Name,ObjectID&pagesize=50&order=Date%20desc';
		$.getJSON(baseUrl+query, function(data) {
			var items = [];
			var list = data.QueryResult.Results;
			items.push('<option>Please select...</option>');
			$.each( list, function( key, val ) {
				items.push('<option value="'+val.ObjectID+'">'+val.Name+'</option>');
			});
			$('#_releases').html(items.join(""));
		});
	}
	
	function loadTasks(storyKey, storyId) {
		
		var url = 'https://rally1.rallydev.com/slm/webservice/v2.0/HierarchicalRequirement/'+storyId+'/Tasks';
		$.getJSON(url, function(data) {
			var items = [];
			var list = data.QueryResult.Results;
			items.push('<ul>');
			$.each( list, function( key, val ) {
				items.push('<li>'+val.Name+'</li>');
			});
			items.push('</ul>');
			$('#_'+storyKey).append(items.join(""));
		});
	}
	
	function reset() {
		$('#_extensionMenuItem').remove();
	}
	
	init();
	
	window.extensions = {
		init: init,
		reset: reset,
		loadReleases: loadReleases
	};

})(Rally);
