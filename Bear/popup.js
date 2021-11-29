document.getElementById("btn").onmouseenter = function() {mouseEnter()};
document.getElementById("btn").onmouseleave = function() {mouseLeave()};

function mouseEnter() {
    document.getElementById("btn").className="btn btn-danger";
}

function mouseLeave() {
    document.getElementById("btn").className="btn btn-dark";
}




// document.addEventListener('DOMContentLoaded', function(){

//     const bg = chrome.extension.getBackgroundPage()
//     Object.keys(bg.bears).forEach(function (url) {
//         const div = document.createElement('div')
//         div.textContent = `${url}: The word found is  ${bg.bears[url]}`
//         document.body.appendChild(div)
//     })
    
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
// }, false)