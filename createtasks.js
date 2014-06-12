/*
TRACK -> RELEASE STATUS 
-----------------------
var prms=[new HttpParam('workProduct','19558752731')];releasestatusTps.quickAdd('Task','19558752771', prms);return false;


--------------------------------------------------------------------------------
CREATE TASK POPUP:

Remote Address:2.16.115.53:443
Request URL:https://rally1.rallydev.com/slm/tk/edit/create.sp?cpoid=18623853272&projectScopeUp=true&projectScopeDown=true&oid=19600101409
Request Method:POST
Status Code:200 OK

Request Headers
:host:rally1.rallydev.com
:method:POST
:path:/slm/tk/edit/create.sp?cpoid=18623853272&projectScopeUp=true&projectScopeDown=true&oid=19600101409
:scheme:https
:version:HTTP/1.1
accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,* /*;q=0.8
accept-encoding:gzip,deflate,sdch
accept-language:cs,en-GB;q=0.8,en;q=0.6
cache-control:max-age=0
content-length:443
content-type:application/x-www-form-urlencoded
cookie:__unam=28c997a-14533e6706e-6fa07815-1; NSC_vt1.sbmmzefw.dpn!-!IUUQT=ffffffff09091c0d45525d5f4f58455e445a4a42378b; __utma=243971078.1130282370.1396735111.1398887897.1401780104.3; __utmc=243971078; __utmz=243971078.1401780104.3.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmv=243971078.|1=company_name=(Non-company%20Visitor)=1^2=country=(Non-company%20Visitor)=1^3=watch_list_type=(Non-company%20Visitor)=1^4=industry=(Non-company%20Visitor)=1^5=revenue_range=(Non-company%20Visitor)=1; JSESSIONID=qd-app-05afy7vs889yhf1d3zn3erwpy26.qd-app-05; ys-backlog-temp=%7B%22add-artifact%22%3A%7B%22typeSelected%22%3A%22HierarchicalRequirement%22%2C%22componentExpanded%22%3Afalse%7D%2C%22grid%22%3A%7B%22project%22%3A%7B%2218623853272%22%3A%7B%22page%22%3A%7B%22start%22%3A1%7D%2C%22query%22%3A%22%22%7D%7D%7D%7D; RALLY-Detail-treeCollapsed=false; ZSESSIONID=CILuMAoRymW0tiOf6wZfeZUbRj3Zkk0q9mj3RVHX18; SUBBUCKETID=588
dnt:1
origin:https://rally1.rallydev.com
referer:https://rally1.rallydev.com/slm/tk/new.sp?cpoid=18623853272&projectScopeUp=true&projectScopeDown=true&workProduct=19558752731&itemIndex=0
user-agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36
Query String Parametersview sourceview URL encoded
cpoid:18623853272
projectScopeUp:true
projectScopeDown:true
oid:19600101409

Form Dataview sourceview URL encoded
name:DEV: test
allTags:
description:
editorType:task
fileName:
owner:NULL_CRITERIA
state:Defined
_blocked:
_ready:
ready:on
blockedReason:
estimate:1
actual:
remaining:1
workProduct:19558752731
customAttributes[0].value:
customAttributes[2].value:
notes:
oid:19600101409
version:0
editorMode:create
pid:
creationContext:cpoid=18623853272&projectScopeUp=true&projectScopeDown=true&workProduct=19558752731&itemIndex=0

Response Headers
cache-control:private,max-age=0,must-revalidate
connection:keep-alive
content-encoding:gzip
content-language:cs
content-length:8975
content-type:text/html;charset=UTF-8
date:Sat, 07 Jun 2014 22:09:44 GMT
expires:Thu, 01 Jan 1970 00:00:00 GMT
p3p:CP="NON DSP COR CURa PSAa PSDa OUR NOR BUS PUR COM NAV STA"
rallyrequestid:qd-app-05afy7vs889yhf1d3zn3erwpy26.qd-app-054112591
set-cookie:SUBBUCKETID=588;Path=/;Domain=rally1.rallydev.com;Secure;HttpOnly
set-cookie:ZSESSIONID=CILuMAoRymW0tiOf6wZfeZUbRj3Zkk0q9mj3RVHX18;Path=/;Domain=rally1.rallydev.com;Secure;HttpOnly
status:200 OK
vary:Accept-Encoding
version:HTTP/1.1

--------------------------------------------------------------------------------
INLINE CREATE TASK:

Remote Address:23.194.213.53:443
Request URL:https://rally1.rallydev.com/slm/rs/tps/rowedit/create.sp
Request Method:POST
Status Code:200 OK

Request Headers
:host:rally1.rallydev.com
:method:POST
:path:/slm/rs/tps/rowedit/create.sp
:scheme:https
:version:HTTP/1.1
accept:* /*
accept-encoding:gzip,deflate,sdch
accept-language:cs,en-GB;q=0.8,en;q=0.6
content-length:153
content-type:application/x-www-form-urlencoded
cookie:__unam=28c997a-14533e6706e-6fa07815-1; NSC_vt1.sbmmzefw.dpn!-!IUUQT=ffffffff09091c0d45525d5f4f58455e445a4a42378b; __utma=243971078.1130282370.1396735111.1398887897.1401780104.3; __utmc=243971078; __utmz=243971078.1401780104.3.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmv=243971078.|1=company_name=(Non-company%20Visitor)=1^2=country=(Non-company%20Visitor)=1^3=watch_list_type=(Non-company%20Visitor)=1^4=industry=(Non-company%20Visitor)=1^5=revenue_range=(Non-company%20Visitor)=1; JSESSIONID=qd-app-05afy7vs889yhf1d3zn3erwpy26.qd-app-05; ys-backlog-temp=%7B%22add-artifact%22%3A%7B%22typeSelected%22%3A%22HierarchicalRequirement%22%2C%22componentExpanded%22%3Afalse%7D%2C%22grid%22%3A%7B%22project%22%3A%7B%2218623853272%22%3A%7B%22page%22%3A%7B%22start%22%3A1%7D%2C%22query%22%3A%22%22%7D%7D%7D%7D; RALLY-Detail-treeCollapsed=false; ZSESSIONID=CILuMAoRymW0tiOf6wZfeZUbRj3Zkk0q9mj3RVHX18; SUBBUCKETID=588
dnt:1
includeresponsetime:true
origin:https://rally1.rallydev.com
referer:https://rally1.rallydev.com/
user-agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36

Form Dataview sourceview URL encoded
workProduct:19558752731
tpsId:releasestatus
tdef:Task
eGrp:19558752771
_slug:/releasestatus
cpoid:18623853272
projectScopeUp:true
projectScopeDown:true

Response Headers
cache-control:private,max-age=0,must-revalidate
connection:keep-alive
content-encoding:gzip
content-language:cs
content-length:20716
content-type:text/html;charset=UTF-8
date:Sat, 07 Jun 2014 22:26:06 GMT
expires:Thu, 01 Jan 1970 00:00:00 GMT
p3p:CP="NON DSP COR CURa PSAa PSDa OUR NOR BUS PUR COM NAV STA"
rallyrequestid:qd-app-05afy7vs889yhf1d3zn3erwpy26.qd-app-054147234
set-cookie:SUBBUCKETID=588;Path=/;Domain=rally1.rallydev.com;Secure;HttpOnly
set-cookie:ZSESSIONID=CILuMAoRymW0tiOf6wZfeZUbRj3Zkk0q9mj3RVHX18;Path=/;Domain=rally1.rallydev.com;Secure;HttpOnly
status:200 OK
vary:Accept-Encoding
version:HTTP/1.1

--------------------------------------------------------------------------------
INLINE SAVE TASK:

Remote Address:23.194.213.53:443
Request URL:https://rally1.rallydev.com/slm/rs/tps/rowedit/save.sp
Request Method:POST
Status Code:200 OK

Request Headers
:host:rally1.rallydev.com
:method:POST
:path:/slm/rs/tps/rowedit/save.sp
:scheme:https
:version:HTTP/1.1
accept:* /*
accept-encoding:gzip,deflate,sdch
accept-language:cs,en-GB;q=0.8,en;q=0.6
content-length:422
content-type:application/x-www-form-urlencoded
cookie:__unam=28c997a-14533e6706e-6fa07815-1; NSC_vt1.sbmmzefw.dpn!-!IUUQT=ffffffff09091c0d45525d5f4f58455e445a4a42378b; __utma=243971078.1130282370.1396735111.1398887897.1401780104.3; __utmc=243971078; __utmz=243971078.1401780104.3.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmv=243971078.|1=company_name=(Non-company%20Visitor)=1^2=country=(Non-company%20Visitor)=1^3=watch_list_type=(Non-company%20Visitor)=1^4=industry=(Non-company%20Visitor)=1^5=revenue_range=(Non-company%20Visitor)=1; JSESSIONID=qd-app-05afy7vs889yhf1d3zn3erwpy26.qd-app-05; ys-backlog-temp=%7B%22add-artifact%22%3A%7B%22typeSelected%22%3A%22HierarchicalRequirement%22%2C%22componentExpanded%22%3Afalse%7D%2C%22grid%22%3A%7B%22project%22%3A%7B%2218623853272%22%3A%7B%22page%22%3A%7B%22start%22%3A1%7D%2C%22query%22%3A%22%22%7D%7D%7D%7D; RALLY-Detail-treeCollapsed=false; ZSESSIONID=CILuMAoRymW0tiOf6wZfeZUbRj3Zkk0q9mj3RVHX18; SUBBUCKETID=588
dnt:1
includeresponsetime:true
origin:https://rally1.rallydev.com
referer:https://rally1.rallydev.com/
user-agent:Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36

Form Dataview sourceview URL encoded
list[0].owner:NULL_CRITERIA
[0]oid:19600151135
[0]version:0
[0]type:2154831299
isCreating:true
list[0].name:DEV
workProduct:19558752731
list[0].state:Defined
list[0].blocked:false
list[0].blockedReason:
list[0].estimate:1
list[0].remaining:1
tpsId:releasestatus
tdef:Task
eGrp:19558752771
scroll:300
_slug:/releasestatus
cpoid:18623853272
projectScopeUp:true
projectScopeDown:true

Response Headers
cache-control:private,max-age=0,must-revalidate
connection:keep-alive
content-encoding:gzip
content-language:cs
content-length:19602
content-type:text/html;charset=UTF-8
date:Sat, 07 Jun 2014 22:28:29 GMT
expires:Thu, 01 Jan 1970 00:00:00 GMT
p3p:CP="NON DSP COR CURa PSAa PSDa OUR NOR BUS PUR COM NAV STA"
rallyrequestid:qd-app-05afy7vs889yhf1d3zn3erwpy26.qd-app-054152222
set-cookie:SUBBUCKETID=588;Path=/;Domain=rally1.rallydev.com;Secure;HttpOnly
set-cookie:ZSESSIONID=CILuMAoRymW0tiOf6wZfeZUbRj3Zkk0q9mj3RVHX18;Path=/;Domain=rally1.rallydev.com;Secure;HttpOnly
status:200 OK
vary:Accept-Encoding
version:HTTP/1.1

--------------------------------------------------------------------------------
*/