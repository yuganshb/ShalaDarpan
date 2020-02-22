console.log("ShalaDarpan Client has started. ");


chrome.runtime.onMessage.addListener(gotMessage);


function gotMessage(message, sender, sendResponse){

    console.log(message);
	
	var s = document.createElement('script');
	// TODO: add "script.js" to web_accessible_resources in manifest.json
	s.src = chrome.extension.getURL('script_th_Or.js');
	s.onload = function() {
		console.log('inside onload function');
		console.log(s);
		//oral_script(message.subject, message.no_of_students);
		if(message.or_pr=="Oral"){
		location.href=`javascript:oral_script(${message.subject}, ${message.no_of_students});
					console.log(${message.subject}, ${message.no_of_students});
					void 0`;
		}
		else{
			location.href=`javascript:practical_script(${message.subject}, ${message.no_of_students});
					console.log(${message.subject}, ${message.no_of_students});
					void 0`;
		}
		console.log('Exited onload function');
	};
	(document.head || document.documentElement).appendChild(s);

	
	/*function oral_script(s, n){
	
		console.log('filling details of students subject:- ' + s);
		var no_of_students = n;
		var subject = s;

		for(i=2;i<no_of_students;i++)
		{
		   var j = i-2;
		   if(i<10)
		   { 
			 ele = "ContentPlaceHolder1_grdStudent_ddl_SubjectAll_" + j;
			 ele_dol = "ctl00$ContentPlaceHolder1$grdStudent$ctl0" +(i)+ "$ddl_SubjectAll";
			 document.getElementById(ele).value = subject;
			 setTimeout('__doPostBack('+'\''+ele_dol+'\''+',\'\')');
			 
			 ele_or = "ContentPlaceHolder1_grdStudent_ddl_thStatus_" + j;
			 ele_dol = "ctl00$ContentPlaceHolder1$grdStudent$ctl0" +(i)+"$ddl_thStatus";
			 document.getElementById(ele_or).value = "P";
			 setTimeout('__doPostBack(\''+ele_dol+'\',\'\')');
			 
			 ele_or = "ContentPlaceHolder1_grdStudent_ddl_OrStatus_" + j;
			 ele_dol = "ctl00$ContentPlaceHolder1$grdStudent$ctl0" +(i)+"$ddl_OrStatus";
			 document.getElementById(ele_or).value = "P";
			 setTimeout('__doPostBack(\''+ele_dol+'\',\'\')');
			 
			 
		   }
		   else
		   {
			 ele = "ContentPlaceHolder1_grdStudent_ddl_SubjectAll_" + j;   
			 ele_dol = "ctl00$ContentPlaceHolder1$grdStudent$ctl" +(i)+ "$ddl_SubjectAll";
			 document.getElementById(ele).value = subject;
			 setTimeout('__doPostBack('+'\''+ele_dol+'\''+',\'\')');
			 
			 ele_or = "ContentPlaceHolder1_grdStudent_ddl_thStatus_" + j;
			 ele_dol = "ctl00$ContentPlaceHolder1$grdStudent$ctl" +(i)+"$ddl_thStatus";
			 document.getElementById(ele_or).value = "P";
			 setTimeout('__doPostBack(\''+ele_dol+'\',\'\')');
			 
			 ele_or = "ContentPlaceHolder1_grdStudent_ddl_OrStatus_" + j;
			 ele_dol = "ctl00$ContentPlaceHolder1$grdStudent$ctl" +(i)+"$ddl_OrStatus";
			 document.getElementById(ele_or).value = "P";
			 setTimeout('__doPostBack(\''+ele_dol+'\',\'\')');
			 
		  }

		}
	}
	
	location.href="javascript:oral_script(message.subject, message.no_of_students); void 0";*/
	
}

