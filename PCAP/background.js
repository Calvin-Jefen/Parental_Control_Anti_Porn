window.PCAP = {}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    window.PCAP[request.url] = request.count
}) 

chrome.identity.getProfileUserInfo({'accountStatus':'ANY'}, function(info){ 
    return userEmail = info.email; 
  });

chrome.runtime.onInstalled.addListener(function(details){
    if (details.reason == "install") {
        try {
            var email = userEmail;
        fetch('http://localhost/report_api/api/user', {
                        method: 'POST',
                        headers: {
                            'keyapipenjualan':'p3nju4l4n',
                            'content-type': 'application/json',
                            authorization: 'Bearer 123abc456def'
                        },
                        body: JSON.stringify({
                            user_email : email
                        })
                    })
                        .then(response =>{
                          console.log(response)
                        })
                            
                        .catch(err => {
                            console.log(err)
                        })

        getid()
        } catch (error) {
            console.log(error);
        }
        //insert the forbidden words here everytime user register
        
    } else if(details.reason == "update") {
        getid()
    }
    
});

function getid(){
    try {
        var email = userEmail;
    fetch('http://localhost/report_api/api/user/userid?user_email='+email, {
                    method: 'GET',
                    headers: {
                        'keyapipenjualan':'p3nju4l4n',
                        'content-type': 'application/json',
                        authorization: 'Bearer 123abc456def'
                    }
                })
                    .then(response => {
                        if(!response.ok){
                            throw Error("ERROR")
                        }
                        return response.json()
                    }
                    )
                    .then( data => {
                        var uid = data.data[0].user_id;
                        chrome.storage.local.set({user_id: uid}, function() {
                        });
                    })
                    
    } catch (error) {
        
    }
    
            
}


chrome.storage.local.get(['user_id'], function(result) {
    userId = result.user_id ;
    
    chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    
                const bg = chrome.extension.getBackgroundPage()
                Object.keys(bg.PCAP).forEach(function (url) {
                    
        
                    let totalWords = bg.PCAP[url];
                    var word = totalWords.split("|");
                    var repcont ="The url : "+ url +",the word found + count : "+ word
                    try {
                        fetch('http://localhost/report_api/api/report', {
                            method: 'POST',
                            headers: {
                                'keyapipenjualan':'p3nju4l4n',
                                'content-type': 'application/json',
                                authorization: 'Bearer 123abc456def'
                            },
                            body: JSON.stringify({
                                user_id :userId,
                                report : repcont })
                        })
                            .then(response => {

                                // console.log(response)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    } catch (error) {
                        
                    }
                })
    }); 
    
});



// let fwords =
// fetch('http://localhost/report_api/api/report/fwords?user_id='+ userId, {
//     method: 'GET',
//     headers: {
//         'keyapipenjualan':'p3nju4l4n',
//         'content-type': 'application/json',
//         authorization: 'Bearer 123abc456def'
//     }
// })
//     .then(response => {
//         console.log(userId)
//         console.log(response)
//     })
//     .catch(err => {
//         console.log(err)
//     })





// chrome.browserAction.onClicked.addListener(function(tab){
//     chrome.tabs.create({url:'popup.html'})
// })



