var select = function (id) {
    return document.querySelector(id)
}

var username = select("#username");
var url = select("#url");
var tweetText = select("#tweet");
var mainText = select(".click-to-tweet-text a");


var userName = "PiyushSthr";
var Url = "https://piyushsuthar.codes/click-to-tweet";
var TweetText = "Hey! I just landed across this amazing tool, Click To tweet.";

username.addEventListener("input",()=>{
    userName = username.value
    urlGen(userName,null,null)
})

url.addEventListener("input",()=>{
    Url = url.value;
    urlGen(null,null,Url)
})

tweetText.addEventListener("input",()=>{
    TweetText = tweetText.value;
    urlGen(null,tweetText.value,null)
})

function urlGen(User,text,URL){
    mainText.innerText = TweetText;
    var Url  = URL || "https://piyushsuthar.codes";
    var uri = `https://twitter.com/intent/tweet?text=${TweetText}&tw_p=tweetbutton&url=${Url}&via=${userName}`
    var putUrl = select(".click-to-tweet-text a");
    var putUrl2 = select(".click-to-tweet-btn")
    putUrl.setAttribute("href",uri)
    putUrl2.setAttribute("href",uri)
}

function getCode(e){
    var html = select(".demo")
    console.log(html.innerHTML)

    select("#html").innerText = html.innerHTML;
    select(".result").style = "display:flex;"
    username.addEventListener("input",()=>{
        var html = select(".demo")
        select("#html").innerText = html.innerHTML;
    })
    
    url.addEventListener("input",()=>{
        var html = select(".demo")
        select("#html").innerText = html.innerHTML;
    })
    
    tweetText.addEventListener("input",()=>{
        var html = select(".demo")
        select("#html").innerText = html.innerHTML;
    })
}


function copy(type) {
    /* Get the text field */
    var copyText = document.getElementById(type);
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }