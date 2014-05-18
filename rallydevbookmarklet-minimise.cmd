@ECHO OFF
ren AjaxMinifier.e AjaxMinifier.exe
AjaxMinifier.exe -js rallydevbookmarklet.js -out rallydevbookmarklet.min.js -clobber
ren AjaxMinifier.exe AjaxMinifier.e