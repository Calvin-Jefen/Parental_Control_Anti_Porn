// alert("It is bad for you");
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     const re = new RegExp('bear','gi')
//     const matches = document.documentElement.innerHTML.match(re)
//     sendResponse({count:matches.length})
// })

const fWords =['bear','animal','carnivore']
var tmp = 0;
var words = "";
var tmptot = 0;
var matches = 0;

for (let i = 0; i< fWords.length; i++) {
    // const element = array[index];
    matches = 0;
    const re = new RegExp(fWords[i],'gi')

    matches = document.documentElement.innerHTML.match(re)
    if(matches != 0){
        try {
            tmp = 0;
            tmp += matches.length
            tmptot  += tmp
            // words = {
            //     "word" : fWords[i],
            //     "total" : tmp
            // };
            // tmp = 0
            words += " "+ fWords[i]+": "+tmp+"|"
            
            chrome.runtime.sendMessage ({
                url: window.location.href,
                count : words 
            })
        } catch (error) {
            words = "no forbidden words found"
            chrome.runtime.sendMessage ({
                url: window.location.href,
                count : words 
            })
        }
   
    }
}



