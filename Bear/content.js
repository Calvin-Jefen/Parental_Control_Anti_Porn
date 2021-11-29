// alert("It is bad for you");
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     const re = new RegExp('bear','gi')
//     const matches = document.documentElement.innerHTML.match(re)
//     sendResponse({count:matches.length})
// })

const fWords =['bear','animal']
var tmp = 0
var words = "";

for (let i = 0; i< fWords.length; i++) {
    // const element = array[index];
    const re = new RegExp(fWords[i],'gi')

    const matches = document.documentElement.innerHTML.match(re)
    tmp = 0;
    tmp += matches.length
    // words = {
    //     "word" : fWords[i],
    //     "total" : tmp
    // };
    // tmp = 0
    words += fWords[i]+tmp+"|"
}

chrome.runtime.sendMessage ({
    url: window.location.href,
    count : words 
})

