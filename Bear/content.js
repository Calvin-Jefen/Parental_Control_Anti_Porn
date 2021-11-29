// alert("It is bad for you");
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     const re = new RegExp('bear','gi')
//     const matches = document.documentElement.innerHTML.match(re)
//     sendResponse({count:matches.length})
// })

const fWords =['bear','animal']
var tmp = 0

for (let i = 0; i< fWords.length; i++) {
    // const element = array[index];
    const re = new RegExp(fWords[i],'gi')

    const matches = document.documentElement.innerHTML.match(re)
    if(matches.length > 0){
        tmp += matches.length 
    }
    // tmp = 0
}

chrome.runtime.sendMessage ({
    url: window.location.href,
    count : tmp
})

