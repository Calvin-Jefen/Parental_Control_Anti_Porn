chrome.storage.local.get(['fwords'], function(result) {
const fWords = result.fwords;
var tmp = 0;
var words = "";
var tmptot = 0;
var matches = 0;
//alert (fWords);

        try {
            if(detect()){
                
                chrome.runtime.sendMessage ({
                    url: window.location.href,
                    count : words 
                    
                })
            block();
            }
            else{
                words = "no forbidden words found"
                chrome.runtime.sendMessage ({
                    url: window.location.href,
                    count : words 
                })
            }
        
        
    } catch (error) {
        
    }
    
    function detect(){
            try { 
                for (let i = 0; i< fWords.length; i++) {
                    matches = 0;
                    const re = new RegExp(fWords[i],'gi')
                
                    matches = document.documentElement.innerHTML.match(re)
                    if(matches){
                        tmp = 0;
                        tmp += matches.length
                        tmptot  += tmp
                        words += " "+ fWords[i]+": "+tmp+"|"
                    }
                }
                    if(words){
                        return true
                    }
                else{
                    return false
                }
            } catch (error) {
                return false
            } 
            
        }
        
        function block(){
            document.body.innerHTML = `<div class="container" style=" width :100%; height:100%; background-color: rgba(255, 255, 255, .15);  
            backdrop-filter: blur(5px);">THE WEBSITE IS BLOCKED <div>` ;
        }
        
        })