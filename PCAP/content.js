//fetch the fwords using API here
//assign the fetched words to a variable
const fWords =['bear','animal','carnivore']
var tmp = 0;
var words = "";
var tmptot = 0;
var matches = 0;


        try {
           if(detect()){
            chrome.runtime.sendMessage ({
                url: window.location.href,
                count : words 
                
            })
            document.body.innerHTML = `<div class="container" style=" width :100%; height:100%; background-color: rgba(255, 255, 255, .15);  
            backdrop-filter: blur(5px);"><div>` ;
            
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
        
                    tmp = 0;
                    tmp += matches.length
                    tmptot  += tmp
                    words += " "+ fWords[i]+": "+tmp+"|"
                    
                }
                return true
            } catch (error) {
                return false
            } 
            
        }




// words = {
            //     "word" : fWords[i],
            //     "total" : tmp
            // };
            // tmp = 0
