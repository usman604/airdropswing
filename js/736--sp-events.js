!function(e){"use strict";function t(e){let t=new Proxy(new URLSearchParams(window.location.search),{get:(e,t)=>e.get(t)});return t[e]}function n(){return Date.now().toString(36)+Math.floor(1e12+9*Math.random()*1e12).toString(36)}var i,o,a,r,s,c=e("#swipe-pages-page").val(),u=e("#swipe-pages-funnel").val(),p=localStorage.getItem(u+"-view"),m=localStorage.getItem(c+"-view"),f=!1;localStorage.getItem(u+"-view")||(p=n(),localStorage.setItem(u+"-view",p)),localStorage.getItem(c+"-view")||(m=n(),localStorage.setItem(c+"-view",m),f=!0);var g={pageId:c,variantId:e("#swipe-pages-variant").val(),funnelId:e("#swipe-pages-funnel").val()||"",accountId:e("#swipe-pages-account").val(),subaccountId:e("#swipe-pages-subaccount").val(),domain:window.location.hostname,browser:function e(){var t=window.navigator.userAgent;if(t.match(/chrome|chromium|crios/i))return"Chrome";if(t.match(/firefox|fxios/i))return"Firefox";if(t.match(/safari/i))return"Safari";if(t.match(/opr\//i))return"Opera";if(t.match(/edg/i))return"Edge";else return"Other"}(),referrer:o=(o=(o=(i=document.referrer).indexOf("://")>-1?i.split("/")[2]:i.split("/")[0]).split(":")[0]).replace("www.",""),screen:window.outerHeight+"x"+window.outerWidth,device:(a=window.navigator.userAgent,r=window.navigator.platform,s=null,-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(r)?s="Mac OS":-1!==["iPhone","iPad","iPod"].indexOf(r)?s="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(r)?s="Windows":/Android/.test(a)?s="Android":!s&&/Linux/.test(r)&&(s="Linux"),s),utm_source:t("utm_source"),utm_medium:t("utm_medium"),utm_campaign:t("utm_campaign"),utm_content:t("utm_content"),utm_term:t("utm_term"),clientId:p,sessionId:m,visit_time:Date.now(),timezone:new Date().getTimezoneOffset(),isUniqueVisit:f},d=window.spAnalyticsConfig&&window.spAnalyticsConfig.apiEndPoint?window.spAnalyticsConfig.apiEndPoint:"https://events.swipepages.com/api/events";window.spAnalytics={track:function t(n,i){if(!0===(i=i||{}).conversion){var o=[];if(localStorage.getItem("spConversion")){try{o=JSON.parse(localStorage.getItem("spConversion"))}catch(a){console.log(a)}-1!==o.indexOf(g.pageId)?i.conversion=!1:o.push(g.pageId)}else o.push(g.pageId);localStorage.setItem("spConversion",JSON.stringify(o))}var r={};Object.keys(g).forEach(function(e){r[e]=g[e]}),i&&"object"==typeof i&&Object.keys(i).forEach(function(e){r[e]=i[e]}),localStorage.spWebhook&&(r.webhook=localStorage.spWebhook);var s=new Date;r.timestamp=Math.floor(s.getTime()/1e3);var c={event:n,properties:r};i.contact&&(c.user={id:i.contact}),navigator.sendBeacon?navigator.sendBeacon(d,JSON.stringify(c)):e.ajax(d,{method:"POST",dataType:"json",data:c,success:function(e){},error:function(e,t,n){console.log("Analytics error:",n)}})}}}(jQuery);