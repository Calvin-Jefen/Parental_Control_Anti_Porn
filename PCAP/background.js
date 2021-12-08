window.PCAP = {}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    window.PCAP[request.url] = request.count
    
}) 

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    const bg = chrome.extension.getBackgroundPage()
    Object.keys(bg.PCAP).forEach(function (url) {
            let totalWords = bg.PCAP[url];
            var word = totalWords.split("|");
            
            // word.forEach(element => {
            //     var words = Object.assign(element)
            // });
    
            // alert(word)
            //console.log(url +" "+word)
            var repcont ="The url : "+ url +",the word found + count : "+ word

                fetch('http://localhost/report_api/api/report', {
                    method: 'POST',
                    headers: {
                        'keyapipenjualan':'p3nju4l4n',
                        'content-type': 'application/json',
                        authorization: 'Bearer 123abc456def'
                    },
                    body: JSON.stringify({report : repcont })
                })
                    .then(response => {
                        console.log(response)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            
    
        })
        
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