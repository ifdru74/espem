// HTTP-pages related stuff goes here

const char PROGMEM PGver[] = PMeterESP_VER;

// content types
const char PROGMEM PGmimetxt[]  = "text/plain";
const char PROGMEM PGmimehtml[] = "text/html";
const char PROGMEM PGmimejson[] = "application/json";

// HTTP responce messages
const char PROGMEM PGsmpld[] = "Sampling disabled";
const char PROGMEM PGdre[] = "Data read error";
const char PROGMEM PGacao[] = "Access-Control-Allow-Origin";
const char PROGMEM PGota[] = "OTA update in progress...";

// sprintf template for json config data
const char PROGMEM PGcfgjson[] = "{\"wH\":\"%s\",\"wM\":%u,\"wS\":\"%s\",\"pf\":[\"%u\"],\"pM\":[\"%u\"],\"pP\":%u,\"uU\":\"%s\"}";

// sprintf template for json version data
const char PROGMEM PGverjson[] = "{\"ChipID\":\"%x\",\"FlashSize\":%u,\"Core\":\"%s\",\"SDK\":\"%s\",\"espem\":\"%s\",\"CPUclk\":%u,\"Heap\":%u,\"Uptime\":%i,}";


// Index page with config form
// (this is a minimized version)
const char PGindex[] PROGMEM = R"===(
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>ESP - PZEM PowerMeter</title><style>html,body{font-family:Arial,Helvetica,sans-serif;font-size:14px;color:white;margin:auto;background:#000}.bd{width:95%;position:relative;margin:auto}h4{text-align:center;margin:-2px 0 1em 0;background:#326}.page{width:100%}.sect{float:left;padding:5px;border:1px solid #6363dd;width:300px}.itm{clear:both;text-align:right;line-height:25px}label{float:left;padding-right:5px}</style></head>
<body><div class="bd"><h3>ESP Peacefair PowerMeter</h3><div class="page" style="position:relative;display:flex;"> <div id="info" class="sect"> <h4>ESP PZEM info</h4> Sometext here </div><div id="cfg" class="sect"> <h4>WiFi config</h4> <form id="fcfg"><div class="itm"><label for="wH">ESP Hostname</label><input type="text" name="wH" maxlength="15"></div><div class="itm"><label for="wM">WiFi Mode</label><select name="wM"><option value="0">Client/Auto</option><option value="1">Access Point</option></select></div><div class="itm"><label for="wS">SSID</label><input type="text" name="wS" maxlength="15"></div><div class="itm"><label for="wP">Password</label><input type="password" name="wP" maxlength="15"></div><div class="itm"><label for="wA">Apply WiFi config</label><input type="checkbox" name="wA" value="1"></div><hr> <h4>PZEM config</h4> <div class="itm"><label for="pf">Power Factor fix</label><input type="checkbox" name="pf" value="1"></div><div class="itm"><label for="pM">Enable Poll Mode</label><input type="checkbox" name="pM" value="1"></div><div class="itm"><label for="pP">Poll period</label><input name="pP" type="number" min="5" max="240" step="1" style="width: 50px;"/></div><hr><h4>OTA FW update</h4><div class="itm"><label for="uU">OTA update URL</label><input type="text" name="uU" maxlength="80"></div><div class="itm"><label for="uA">Update now</label><input type="checkbox" name="uA" value="1"></div><div class="itm"><button class="btn" type="submit">Save</button></div></form></div></div></div>
<script type="text/javascript">var formurl="cfg",formid="fcfg";const handleFormSubmit=a=>{a.preventDefault();const b=formToJSON(form.elements);ajax_request(formurl,"POST",b,function(a){process_resp(a)});alert("Saving config. Autoreboot in 20 sec...")},formToJSON=a=>[].reduce.call(a,(a,b)=>{isValidElement(b)&&isValidValue(b)&&(isCheckbox(b)?a[b.name]=(a[b.name]||[]).concat(b.value):isMultiSelect(b)?a[b.name]=getSelectValues(b):a[b.name]=b.value);return a},{}),isValidElement=a=>a.name&&a.value,isValidValue=a=>!["checkbox","radio"].includes(a.type)||a.checked,isCheckbox=a=>"checkbox"===a.type,isMultiSelect=a=>a.options&&a.multiple,getSelectValues=a=>[].reduce.call(a,(a,b)=>b.selected?a.concat(b.value):a,[]),ajax_request=(a,b,c,d)=>{xhr=new XMLHttpRequest;"GET"==b&&(a=a+"?data="+encodeURIComponent(JSON.stringify(c)));xhr.open(b,a,!0);xhr.setRequestHeader("Content-type","application/json");xhr.onreadystatechange=function(){4==xhr.readyState&&200==xhr.status&&d(JSON.parse(xhr.responseText))};"GET"==b?xhr.send():xhr.send(JSON.stringify(c))},tickbox=(a,b)=>{if(isCheckbox(a)&&a.value===b)return a.checked=!0,!0;return!1},process_resp=a=>{var b=document.getElementById(formid);b.reset();for(var c in a)if("[object Array]"===Object.prototype.toString.call(a[c]))for(var d in a[c])if(b.elements[c].length)for(var e in b.elements[c])tickbox(b.elements[c][e],a[c][d]);else tickbox(b.elements[c],a[c][d]);else b.elements[c].value=a[c]},form=document.getElementById(formid);form.addEventListener("submit",handleFormSubmit),window.onload=function(){ajax_request(formurl,"GET","",function(a){process_resp(a)})};</script></body></html>
)===";
