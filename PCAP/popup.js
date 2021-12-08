document.getElementById("btn").onmouseenter = function() {mouseEnter()};
document.getElementById("btn").onmouseleave = function() {mouseLeave()};

function mouseEnter() {
    document.getElementById("btn").className="btn btn-danger";
}

function mouseLeave() {
    document.getElementById("btn").className="btn btn-dark";
}
document.getElementById("inp-text").onkeyup = function(){checkempty()}

function checkempty(){
    if(document.getElementById("inp-text").value === "")
        document.getElementById("btn-add").disabled = true;
    else{
    document.getElementById("btn-add").disabled = false;
    }
}


document.getElementById("btn-add").onclick= function() {addline()}

function addline(){
    // var inptext = document.getElementById("inp-text").value;
    // document.getElementById("text").innerHTML =inptext;
    // // console.log(inptext)
    // document.getElementById("inp-text").value ="";

    // var tab = document.getElementById("tabarea")

    //     var newchk = document.createElement('input');
    //     newchk.setAttribute('type', 'checkbox');
    //     newchk.setAttribute('class', 'form-check-input');
    //     var newbtn= document.createElement('button');
    //     newbtn.setAttribute('class', 'btn btn-dark');
    //     newbtn.setAttribute('id', 'btn');

    //     var newTd = document.createElement('td');
    //     var newTd2 = document.createElement('td');
    //     newTd2.setAttribute=('id','text')
    //     var newTd3 = document.createElement('td');
    //     var newTr = document.createElement('tr');
    //     newTd.appendChild(newchk);
    //     newTd.appendChild(newchk);
    //     newTd.appendChild(newchk);
    //     newTr.appendChild(newTd,newTd2,newTd3);
    
        
    
    //     tab.appendChild(newTr);  
}


document.addEventListener('DOMContentLoaded', function(){

    // const bg = chrome.extension.getBackgroundPage()
    // Object.keys(bg.bears).forEach(function (url) {
    //     const div = document.createElement('div')
    //     div.textContent = `${url}: The word found is  ${bg.bears[url]}`
    //     document.body.appendChild(div)
    // })
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
    
// const bg = chrome.extension.getBackgroundPage()
// Object.key(bg.bears).forEach(function(url) {
// const div = document.createElement('div')
// div.textContent = `${url}: ${bg.bears[url]} `
// document.body.appendChild(div)
// }) 

    // document.querySelector('button').addEventListener('click', onclick, false)
    
    // function onclick(){
    //     chrome.tabs.query({currentWindow: true, active:true},
    //         function(tabs){
    //             chrome.tabs.sendMessage(tabs[0].id,'hi', setCount)
    //         })
    // }
    // function setCount(res){
    //     const div = document.createElement('div')
    //     div.textContent = `${res.count} bears` 
    //     document.body.appendChild(div)
//     // }
}, false)