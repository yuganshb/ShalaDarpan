
document.addEventListener("DOMContentLoaded", function(){
	var submit = document.getElementById("submit");
	console.log(submit);
	submit.addEventListener("click", function(){
   setup()});
});

function setup(){
	console.log('in pop js');
	
	let subject = document.getElementById('subject_code');
	let no_of_students = document.getElementById('no_of_students');
	let or_pr = document.getElementById('or_pr');
	
	console.log(subject.value, no_of_students.value, or_pr.value);
	
	let params = {
      active: true,
      currentWindow: true
    };
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
      console.log('got tabs');
      console.log(tabs);
      // send a message to the content script
      let message = {
		  "subject": subject.value,
		  "no_of_students": no_of_students.value,
		  "or_pr": or_pr.value
	  }
      chrome.tabs.sendMessage(tabs[0].id, message);
    }
}

