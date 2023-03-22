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
            newUser();
        } catch (error) {
            console.log(error);
        }
        
        async function newUser(){
            const register = await registerUser(email);
            // console.log(register);
            if(register){
                console.log(register)
                setTimeout(() => getid(), 1000); 
                setTimeout(() => sendFwords(), 2000);
            }
        } 
        
    } else if(details.reason == "update") {
        getid()
    }
    
});

function sendFwords(){
    chrome.storage.local.get(['user_id'], function(result) {
        userId = result.user_id ;
        console.log(userId);
        if(userId){
            const fwords =["bear","b3ar","b34r","b e a r","be ar","b3 4r","bea r","b34 r","bea r","b 3 4 r","animal","4nimal","4n1mal","4n1m4l","a nimal","ani-mal","a-nimal","a n i m a l","an imal","anim al","carnivore","c4rnivore","carniv0re","c4rn1vore","c4rn1v0re","c4rn1vor3","carnivor3","c a r n i v o r e","carn ivore","c-arnivore","wild","w1ld","wlld","w i l d","w 1 l d","w l l d","w ild","wi ld","wll d","wil d","fish","f1sh","f ish","f-ish","f_ish","f15h","f i s h","fi sh","fis h","fi5h"];
            for(i = 0; i<fwords.length;i++){
                fetch('http://localhost/report_api/api/fwords', {
                        method: 'POST',
                        headers: {
                            'keyapipenjualan':'p3nju4l4n',
                            'content-type': 'application/json',
                            authorization: 'Bearer 123abc456def'
                        },
                            body: JSON.stringify({
                                user_id : userId,
                                fwords : fwords[i] 
                            })
                        })
                            .then(response => {

                                console.log(response)
                            })
                            .catch(err => {
                                console.log(err)
                            })
            }
        }
    });
}
function registerUser(email){
    return fetch('http://localhost/report_api/api/user', {
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
            console.log("User Registered !")
            return response.json()
        })
            
        .catch(err => {
            console.log(err)
        })
}

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
    // sconsole.log(userId)
    getForbiddenWords(userId)
                const bg = chrome.extension.getBackgroundPage()
                Object.keys(bg.PCAP).forEach(function (url) {
                    
        
                    let totalWords = bg.PCAP[url];
                    var word = totalWords.split("|");
                    console.log(word);
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

function getForbiddenWords(uid){
    
    fetch('http://localhost/report_api/api/fwords?user_id='+uid, {
        method: 'GET',
        headers: {
            'keyapipenjualan':'p3nju4l4n',
            'content-type': 'application/json',
            authorization: 'Bearer 123abc456def'
        }
    })
    .then(response => {
        return response.json()
    }
    )
    .then(data => {
        const datalen= data.data.user_data
        var words = [];
        for (let i = 0; i < datalen.length; i++) {
            words [i] = data.data.user_data[i].fwords;
        }
        // console.log(words)
        chrome.storage.local.set({fwords: words}, function() {
        });
        
    })
    
    
}
    





// chrome.browserAction.onClicked.addListener(function(tab){
//     chrome.tabs.create({url:'popup.html'})
// })



