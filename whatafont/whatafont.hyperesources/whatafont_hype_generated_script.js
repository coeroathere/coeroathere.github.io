//	HYPE.documents["whatafont"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="whatafont.hyperesources",c="whatafont",e="whatafont_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/whatafont_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"typeText",source:"function(hypeDocument, element, event) {\n\tvar timelineName = event.timelineName;\n\t\n\nwindow.text1CharArray = [\"To outline a range of strategies to help learners with SLCN\".split(''),88];\nwindow.text2CharArray = [\"To relate these strategies to the identified needs of individual learners\".split(''),68];\nwindow.text3CharArray = [\"To provide a basis for an intervention strategy\".split(''),108];\n\t\n\t\nvar textElement = hypeDocument.getElementById(timelineName);\n\tvar counter;\n\tvar i=0;\nvar charArray  = window[timelineName + \"CharArray\"];\n\t \n   var thisFire =   setInterval(function(){\n\t\n\t\n\n\t\n\t if (i == charArray[0].length){\n\t clearInterval( thisFire);\n\t  return;\n\t }\n     var charItem = charArray[0][i];\n \n\t textElement.innerHTML =  textElement.innerHTML + charItem;\n \n  \t\ti++;\n\t\n\t }, charArray[1]);\n  \n\t\n}",identifier:"93"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,["<link href='https://fonts.googleapis.com/css?family=Roboto:100&subset=latin,cyrillic,cyrillic-ext' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Play&subset=latin,cyrillic,cyrillic-ext' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Ubuntu:300&subset=latin,cyrillic,cyrillic-ext' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=PT+Serif&subset=latin,cyrillic,cyrillic-ext' rel='stylesheet' type='text/css'>"],d,[{n:"Untitled Scene",o:"1",X:[0]}],[{o:"3",p:"600px",cA:false,Y:320,Z:568,L:[],c:"#000000",bY:1,d:320,U:{},T:{"51_pressed":{i:"51_pressed",n:"51_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"b",e:66,s:64,o:"97"},{f:"c",y:0,z:1,i:"a",e:171,s:169,o:"97"},{f:"c",y:0,z:1,i:"N",e:0,s:2,o:"97"},{f:"c",y:0,z:1,i:"O",e:0,s:2,o:"97"},{f:"c",y:0,z:1,i:"P",e:0,s:2,o:"97"},{f:"c",y:0,z:1,i:"M",e:0,s:2,o:"97"},{f:"c",y:0,z:1,i:"g",e:"#E6E6E6",s:"",o:"97"},{f:"c",y:0,z:1,i:"G",e:"#000000",s:"#FFFFFF",o:"97"},{y:1,i:"b",s:66,z:0,o:"97",f:"c"},{y:1,i:"a",s:171,z:0,o:"97",f:"c"},{y:1,i:"N",s:0,z:0,o:"97",f:"c"},{y:1,i:"O",s:0,z:0,o:"97",f:"c"},{y:1,i:"P",s:0,z:0,o:"97",f:"c"},{y:1,i:"M",s:0,z:0,o:"97",f:"c"},{y:1,i:"g",s:"#E6E6E6",z:0,o:"97",f:"c"},{y:1,i:"G",s:"#000000",z:0,o:"97",f:"c"}],f:30},"51_hover":{i:"51_hover",n:"51_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"B",e:"#CBCBCB",s:"#595959",o:"97"},{f:"c",y:0,z:1,i:"C",e:"#CBCBCB",s:"#595959",o:"97"},{f:"c",y:0,z:1,i:"D",e:"#CBCBCB",s:"#595959",o:"97"},{f:"c",y:0,z:1,i:"A",e:"#CBCBCB",s:"#595959",o:"97"},{y:1,i:"B",s:"#CBCBCB",z:0,o:"97",f:"c"},{y:1,i:"C",s:"#CBCBCB",z:0,o:"97",f:"c"},{y:1,i:"D",s:"#CBCBCB",z:0,o:"97",f:"c"},{y:1,i:"A",s:"#CBCBCB",z:0,o:"97",f:"c"}],f:30},"59_pressed":{i:"59_pressed",n:"59_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"b",e:318,s:316,o:"99"},{f:"c",y:0,z:1,i:"a",e:26,s:24,o:"99"},{f:"c",y:0,z:1,i:"N",e:0,s:2,o:"99"},{f:"c",y:0,z:1,i:"O",e:0,s:2,o:"99"},{f:"c",y:0,z:1,i:"P",e:0,s:2,o:"99"},{f:"c",y:0,z:1,i:"M",e:0,s:2,o:"99"},{f:"c",y:0,z:1,i:"g",e:"#E6E6E6",s:"",o:"99"},{f:"c",y:0,z:1,i:"G",e:"#000000",s:"#FFFFFF",o:"99"},{y:1,i:"b",s:318,z:0,o:"99",f:"c"},{y:1,i:"a",s:26,z:0,o:"99",f:"c"},{y:1,i:"N",s:0,z:0,o:"99",f:"c"},{y:1,i:"O",s:0,z:0,o:"99",f:"c"},{y:1,i:"P",s:0,z:0,o:"99",f:"c"},{y:1,i:"M",s:0,z:0,o:"99",f:"c"},{y:1,i:"g",s:"#E6E6E6",z:0,o:"99",f:"c"},{y:1,i:"G",s:"#000000",z:0,o:"99",f:"c"}],f:30},"73_hover":{i:"73_hover",n:"73_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"B",e:"#CBCBCB",s:"#595959",o:"101"},{f:"c",y:0,z:1,i:"C",e:"#CBCBCB",s:"#595959",o:"101"},{f:"c",y:0,z:1,i:"D",e:"#CBCBCB",s:"#595959",o:"101"},{f:"c",y:0,z:1,i:"A",e:"#CBCBCB",s:"#595959",o:"101"},{y:1,i:"B",s:"#CBCBCB",z:0,o:"101",f:"c"},{y:1,i:"C",s:"#CBCBCB",z:0,o:"101",f:"c"},{y:1,i:"D",s:"#CBCBCB",z:0,o:"101",f:"c"},{y:1,i:"A",s:"#CBCBCB",z:0,o:"101",f:"c"}],f:30},"58_hover":{i:"58_hover",n:"58_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"B",e:"#CBCBCB",s:"#595959",o:"98"},{f:"c",y:0,z:1,i:"C",e:"#CBCBCB",s:"#595959",o:"98"},{f:"c",y:0,z:1,i:"D",e:"#CBCBCB",s:"#595959",o:"98"},{f:"c",y:0,z:1,i:"A",e:"#CBCBCB",s:"#595959",o:"98"},{y:1,i:"B",s:"#CBCBCB",z:0,o:"98",f:"c"},{y:1,i:"C",s:"#CBCBCB",z:0,o:"98",f:"c"},{y:1,i:"D",s:"#CBCBCB",z:0,o:"98",f:"c"},{y:1,i:"A",s:"#CBCBCB",z:0,o:"98",f:"c"}],f:30},"73_pressed":{i:"73_pressed",n:"73_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"b",e:428,s:426,o:"101"},{f:"c",y:0,z:1,i:"a",e:103,s:101,o:"101"},{f:"c",y:0,z:1,i:"N",e:0,s:2,o:"101"},{f:"c",y:0,z:1,i:"O",e:0,s:2,o:"101"},{f:"c",y:0,z:1,i:"P",e:0,s:2,o:"101"},{f:"c",y:0,z:1,i:"M",e:0,s:2,o:"101"},{f:"c",y:0,z:1,i:"g",e:"#E6E6E6",s:"",o:"101"},{f:"c",y:0,z:1,i:"G",e:"#000000",s:"#FFFFFF",o:"101"},{y:1,i:"b",s:428,z:0,o:"101",f:"c"},{y:1,i:"a",s:103,z:0,o:"101",f:"c"},{y:1,i:"N",s:0,z:0,o:"101",f:"c"},{y:1,i:"O",s:0,z:0,o:"101",f:"c"},{y:1,i:"P",s:0,z:0,o:"101",f:"c"},{y:1,i:"M",s:0,z:0,o:"101",f:"c"},{y:1,i:"g",s:"#E6E6E6",z:0,o:"101",f:"c"},{y:1,i:"G",s:"#000000",z:0,o:"101",f:"c"}],f:30},"54_hover":{i:"54_hover",n:"54_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"B",e:"#CBCBCB",s:"#595959",o:"100"},{f:"c",y:0,z:1,i:"C",e:"#CBCBCB",s:"#595959",o:"100"},{f:"c",y:0,z:1,i:"D",e:"#CBCBCB",s:"#595959",o:"100"},{f:"c",y:0,z:1,i:"A",e:"#CBCBCB",s:"#595959",o:"100"},{y:1,i:"B",s:"#CBCBCB",z:0,o:"100",f:"c"},{y:1,i:"C",s:"#CBCBCB",z:0,o:"100",f:"c"},{y:1,i:"D",s:"#CBCBCB",z:0,o:"100",f:"c"},{y:1,i:"A",s:"#CBCBCB",z:0,o:"100",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"59_hover":{i:"59_hover",n:"59_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"B",e:"#CBCBCB",s:"#595959",o:"99"},{f:"c",y:0,z:1,i:"C",e:"#CBCBCB",s:"#595959",o:"99"},{f:"c",y:0,z:1,i:"D",e:"#CBCBCB",s:"#595959",o:"99"},{f:"c",y:0,z:1,i:"A",e:"#CBCBCB",s:"#595959",o:"99"},{y:1,i:"B",s:"#CBCBCB",z:0,o:"99",f:"c"},{y:1,i:"C",s:"#CBCBCB",z:0,o:"99",f:"c"},{y:1,i:"D",s:"#CBCBCB",z:0,o:"99",f:"c"},{y:1,i:"A",s:"#CBCBCB",z:0,o:"99",f:"c"}],f:30},"58_pressed":{i:"58_pressed",n:"58_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"b",e:318,s:316,o:"98"},{f:"c",y:0,z:1,i:"a",e:180,s:178,o:"98"},{f:"c",y:0,z:1,i:"N",e:0,s:2,o:"98"},{f:"c",y:0,z:1,i:"O",e:0,s:2,o:"98"},{f:"c",y:0,z:1,i:"P",e:0,s:2,o:"98"},{f:"c",y:0,z:1,i:"M",e:0,s:2,o:"98"},{f:"c",y:0,z:1,i:"g",e:"#E6E6E6",s:"",o:"98"},{f:"c",y:0,z:1,i:"G",e:"#000000",s:"#FFFFFF",o:"98"},{y:1,i:"b",s:318,z:0,o:"98",f:"c"},{y:1,i:"a",s:180,z:0,o:"98",f:"c"},{y:1,i:"N",s:0,z:0,o:"98",f:"c"},{y:1,i:"O",s:0,z:0,o:"98",f:"c"},{y:1,i:"P",s:0,z:0,o:"98",f:"c"},{y:1,i:"M",s:0,z:0,o:"98",f:"c"},{y:1,i:"g",s:"#E6E6E6",z:0,o:"98",f:"c"},{y:1,i:"G",s:"#000000",z:0,o:"98",f:"c"}],f:30},"54_pressed":{i:"54_pressed",n:"54_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"b",e:66,s:64,o:"100"},{f:"c",y:0,z:1,i:"a",e:36,s:34,o:"100"},{f:"c",y:0,z:1,i:"N",e:0,s:2,o:"100"},{f:"c",y:0,z:1,i:"O",e:0,s:2,o:"100"},{f:"c",y:0,z:1,i:"P",e:0,s:2,o:"100"},{f:"c",y:0,z:1,i:"M",e:0,s:2,o:"100"},{f:"c",y:0,z:1,i:"g",e:"#E6E6E6",s:"",o:"100"},{f:"c",y:0,z:1,i:"G",e:"#000000",s:"#FFFFFF",o:"100"},{y:1,i:"b",s:66,z:0,o:"100",f:"c"},{y:1,i:"a",s:36,z:0,o:"100",f:"c"},{y:1,i:"N",s:0,z:0,o:"100",f:"c"},{y:1,i:"O",s:0,z:0,o:"100",f:"c"},{y:1,i:"P",s:0,z:0,o:"100",f:"c"},{y:1,i:"M",s:0,z:0,o:"100",f:"c"},{y:1,i:"g",s:"#E6E6E6",z:0,o:"100",f:"c"},{y:1,i:"G",s:"#000000",z:0,o:"100",f:"c"}],f:30}},bZ:180,O:["100","97","102","103","96","95","104","106","105","99","98","101"],n:"Untitled Layout","_":0,v:{"103":{c:1,d:20,I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,k:"div",C:"#D8DDE4",z:13,O:0,D:"#D8DDE4",a:232,b:154},"95":{G:"#FFFFFF",aU:8,aV:8,r:"inline",s:"'PT Serif'",bD:"none",t:18,u:"normal",Z:"break-word",aP:"auto",v:"normal",w:"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u043d\u0443\u0436\u0435\u043d<br><font size=\"5\">\u0448\u0440\u0438\u0444\u0442?</font>",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:11,aS:8,cN:"none",aT:8,a:84,F:"center",b:201},"106":{c:1,d:130,I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,k:"div",C:"#D8DDE4",z:16,O:0,D:"#D8DDE4",a:159,b:298},"101":{b:426,z:24,K:"Solid",c:73,L:"Solid",d:48,aS:20,M:2,bD:"none",N:2,aT:20,dB:"button",O:2,g:"",aU:20,P:2,aV:20,tX:0.5,j:"absolute",aI:25,tY:0.55000000000000004,k:"div",aJ:25,aK:25,aL:25,A:"#595959",Y:22,B:"#595959",aM:"73_hover",Z:"break-word",C:"#595959",r:"inline",s:"Ubuntu",D:"#595959",aN:"73_pressed",t:24,u:"normal",F:"center",v:"300",G:"#FFFFFF",aP:"pointer",w:"<div style=\"vertical-align:middle;\">\u043b\u043e\u0433\u043e-\u0442\u0438\u043f</div>",x:"visible",I:"Solid",a:101,y:"preserve",J:"Solid"},"96":{c:198,d:122,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:1,w:"",aI:2,A:"#CBCBCB",N:1,x:"visible",j:"absolute",aJ:2,O:1,C:"#CBCBCB",z:1,k:"div",D:"#CBCBCB",aK:2,B:"#CBCBCB",P:1,a:60,aL:2,b:174},"104":{c:1,d:20,I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,k:"div",C:"#D8DDE4",z:14,O:0,D:"#D8DDE4",a:88,b:298},"97":{b:64,z:21,K:"Solid",c:73,L:"Solid",d:48,aS:20,M:2,bD:"none",N:2,aT:20,dB:"button",O:2,g:"",aU:20,P:2,aV:20,tX:0.5,j:"absolute",aI:25,tY:0.55000000000000004,k:"div",aJ:25,aK:25,aL:25,A:"#595959",Y:22,B:"#595959",aM:"51_hover",Z:"break-word",C:"#595959",r:"inline",s:"Ubuntu",D:"#595959",aN:"51_pressed",t:18,u:"normal",F:"center",v:"300",G:"#FFFFFF",aP:"pointer",w:"<div style=\"vertical-align:middle;\">\u0438\u043d\u0444\u043e-\u0433\u0440\u0430\u0444\u0438\u043a\u0430</div>",x:"visible",I:"Solid",a:169,y:"preserve",J:"Solid"},"102":{c:1,d:20,I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,k:"div",C:"#D8DDE4",z:12,O:0,D:"#D8DDE4",a:88,b:154},"98":{b:316,z:23,K:"Solid",c:73,L:"Solid",d:48,aS:20,M:2,bD:"none",N:2,aT:20,dB:"button",O:2,g:"",aU:20,P:2,aV:20,tX:0.5,j:"absolute",aI:25,tY:0.55000000000000004,k:"div",aJ:25,aK:25,aL:25,A:"#595959",Y:22,B:"#595959",aM:"58_hover",Z:"break-word",C:"#595959",r:"inline",s:"Ubuntu",D:"#595959",aN:"58_pressed",t:18,u:"normal",F:"center",v:"300",G:"#FFFFFF",aP:"pointer",w:"<div style=\"vertical-align:middle;\">\u043f\u0440\u0438\u0433\u043b\u0430-\u0448\u0435\u043d\u0438\u0435</div>",x:"visible",I:"Solid",a:178,y:"preserve",J:"Solid"},"105":{c:1,d:20,I:"None",J:"None",K:"None",g:"#E8EBED",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,k:"div",C:"#D8DDE4",z:15,O:0,D:"#D8DDE4",a:232,b:298},"100":{b:64,z:22,K:"Solid",c:73,L:"Solid",d:48,aS:20,M:2,bD:"none",N:2,aT:20,dB:"button",O:2,g:"",aU:20,P:2,aV:20,tX:0.5,j:"absolute",aI:25,tY:0.55000000000000004,k:"div",aJ:25,aK:25,aL:25,A:"#595959",Y:42,B:"#595959",aM:"54_hover",Z:"break-word",C:"#595959",r:"inline",s:"Ubuntu",D:"#595959",aN:"54_pressed",t:24,u:"normal",F:"center",v:"300",G:"#FFFFFF",aP:"pointer",w:"<div style=\"vertical-align:middle;\">\u043a\u043d\u0438\u0433\u0438</div><div style=\"vertical-align:middle;\"><br></div>",x:"visible",I:"Solid",a:34,y:"preserve",J:"Solid"},"99":{b:316,z:25,K:"Solid",c:73,L:"Solid",d:48,aS:20,M:2,bD:"none",N:2,aT:20,dB:"button",O:2,g:"",aU:20,P:2,aV:20,tX:0.5,j:"absolute",aI:25,tY:0.55000000000000004,k:"div",aJ:25,aK:25,aL:25,A:"#595959",Y:42,B:"#595959",aM:"59_hover",Z:"break-word",C:"#595959",r:"inline",s:"Ubuntu",D:"#595959",aN:"59_pressed",t:24,u:"normal",F:"center",v:"300",G:"#FFFFFF",aP:"pointer",w:"<div style=\"vertical-align:middle;\">\u0433\u0430\u0437\u0435\u0442\u0430</div>",x:"visible",I:"Solid",a:24,y:"preserve",J:"Solid"}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
