function showString(toShow) {
	typingText = document.getElementById('typing-title')
	typingText.innerHTML = toShow + "|"
}

function recursiveTyping(toShow, curShow, pos, timeWrite, timeErase) {
	showString(curShow);
	
	if (pos >= toShow.length){
		return;
	}

	let timeSleep = 0 

	if (toShow[pos] == '~') {
		curShow = curShow.slice(0, -1)
		timeSleep = timeErase
	}
	else {
		curShow = curShow + toShow[pos]
		timeSleep = timeWrite
	}

	setTimeout(() => {
		recursiveTyping(toShow, curShow, pos+1, timeWrite, timeErase)
	}, timeSleep);	
}

function typing(toShow) {
	let timeWrite = 100
	let timeErase = 150
	recursiveTyping(toShow, '', 0, timeWrite, timeErase)
}