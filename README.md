rallydev-extension-bookmarklet
==============================

This is a bookmarklet which improves usability in RallyDev.

It overwrites calls to console.log and outputs them to its own console window.

Restrictions that made me to create this bookmarklet:
* Extensions are disabled in Chrome, so this couldn't be a browser extension loaded automatically.
* Developer Tools are disabled in Chrome, so the console and Inspect Element are not accessible.

Tested in and developed for Chrome.

Changelog
=========

2014-05-20 v0.4
* Fixed issue where underlying buttons were disabled after saving a task using "Save and New"
* Updated help on how to add the bookmarklet using $.getScript, so that the latest version of bookmarklet is always used

2014-05-19 v0.3
* Fixed issue where the popup doesn't reload the optimized view after "Save and New"

2014-05-18 v0.2
* Added optimized view for Create Task popup

2014-05-16 v0.1
* Initial version - an investigation how to override console.log and window.open functions