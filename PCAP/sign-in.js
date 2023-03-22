document.querySelector('#btn-sign-in').addEventListener('click', function(){
    chrome.runtime.sendMessage({message: 'login'}, function(response){
        if(response === 'success')window.close();
    });
})
document.querySelector('#btn-stat').addEventListener('click', function(){
    chrome.runtime.sendMessage({message: 'isUserSignedIn'}, function(response){
        alert(response);
    });
})