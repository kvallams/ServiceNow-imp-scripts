//update user locations based on EPPN
var gr = new GlideRecord('sys_user');
gr.addEncodedeQuery('active=true^u_eppnISNOTEMPTY^u_eppnNOT LIKE@ucop.edu');
gr.query();
while(gr.next()){
	var eppn = gr.u_eppn.toString().toLowerCase();
	if(eppn.indexOf('@berkeley.edu')>0){
		gr.location = 'd9aaa8dbad9e940078c181ec60dbb99a';
	}
	if(eppn.indexOf('@ucsd.edu')>0){
		gr.location = '1fc2b41fad9e940078c181ec60dbb918';
	}
	if(eppn.indexOf('@uchastings.edu')>0){
		gr.location = '94d4f9e1a4cae40078c1d1e3f84cce96';
	}
	if(eppn.indexOf('@ucsc.edu')>0){
		gr.location = '64c2b41fad9e940078c181ec60dbb99a';
	}
	if(eppn.indexOf('@ucmerced.edu')>0){
		gr.location = 'd1c1741fad9e940078c181ec60dbb9cc';
	}
	if(eppn.indexOf('@ucsb.edu')>0){
		gr.location = 'ecc2b41fad9e940078c181ec60dbb992';
	}
	if(eppn.indexOf('@ucr.edu')>0){
		gr.location = 'f1c1741fad9e940078c181ec60dbb9d3';
	}
	if(eppn.indexOf('@ucdavis.edu')>0){
		gr.location = 'c1c1f01fad9e940078c181ec60dbb917';
	}
	if(eppn.indexOf('@ucla.edu')>0){
		gr.location = 'aec1741fad9e940078c181ec60dbb99f';
	}
	if(eppn.indexOf('@ucsf.edu')>0){
		gr.location = '3cc2b41fad9e940078c181ec60dbb91f';
	}
	if(eppn.indexOf('@uci.edu')>0){
		gr.location = 'f2c1f01fad9e940078c181ec60dbb91e';
	}
	gr.update();
}
