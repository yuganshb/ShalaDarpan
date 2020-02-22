/*
11- hindi
12 - english
13 - Science
14 - Mathematics
15 - Social Science
16 - Sanskrit
104 - Foundation of IT
105 - Socially Useful Projects/Rajasthan Study
106 - SUPW
107 - arts
108 - health
*/

function oral_script(s, n){
	
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

function practical_script(s, n){
	
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
		 
		 ele_or = "ContentPlaceHolder1_grdStudent_ddl_PrStatus_" + j;
		 ele_dol = "ctl00$ContentPlaceHolder1$grdStudent$ctl0" +(i)+"$ddl_PrStatus";
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
		 
		 ele_or = "ContentPlaceHolder1_grdStudent_ddl_PrStatus_" + j;
		 ele_dol = "ctl00$ContentPlaceHolder1$grdStudent$ctl" +(i)+"$ddl_PrStatus";
		 document.getElementById(ele_or).value = "P";
		 setTimeout('__doPostBack(\''+ele_dol+'\',\'\')');
		 
	  }

	}
}