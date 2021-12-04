window.PCAP = {}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    window.PCAP[request.url] = request.count
}) 

// chrome.browserAction.onClicked.addListener(function(tab){
//     chrome.tabs.create({url:'popup.html'})
// })

chrome.browserAction.onClicked.addListener(function(tab){
    //chrome.tabs.create({url:'popup.html'})
    
    // const bg = chrome.extension.getBackgroundPage()
    // Object.keys(bg.bears).forEach(function (url) {
    //     let totalWords = bg.bears[url];
    //     var word = totalWords.split("|");

    //     // word.forEach(element => {
    //     //     var words = Object.assign(element)
    //     // });

    //     alert(word)
    // })
})
// window.bears = {}
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     window.bears[request.url] = request.count
// })

// chrome.browserAction.onClicked.addListener(function (tab) {
//     chrome.tabs.create({url: 'popup.html'})
// })   