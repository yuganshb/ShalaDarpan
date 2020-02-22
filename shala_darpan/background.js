console.log("Background script running")

//chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
	console.log(tab);
	let msg = {
		"subject": 11,
		"no_of_students": 62,
		"tab_id": tab.id
	}
	chrome.tabs.sendMessage(tab.id, msg);
}