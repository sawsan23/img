Skip to content
sawsan23
/
ss
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
ss/js/js/qs.js
@sawsan23
sawsan23 Add files via upload
 1 contributor
55 lines (55 sloc)  12 KB
const generateQuote = function() { const quotes = [
{ quote: "က&#4156;င&#4154;န&#4140;စ&#4157;&#4140;ပ&#4156;&#4145;&#4140;ဆ&#4141;&#4143;ခ&#4156;င&#4154;&#4152;က သင&#4151;&#4154;လ&#4155;&#4158;&#4140;က&#4141;&#4143; မထ&#4141;ခ&#4141;&#4143;က&#4154;စ&#4145;ပ&#4139;ဘ&#4144;&#4152;&#4171;",  author: "sawsan" },
{ quote: "It is impossible to manufacture or imitate love", author: "Horace Slughorn" },
{ quote: "Being different isn't a bad thing. I means that you are brave enough to be yourself.", author: "Luna Lovegood" },
{ quote: "အသ&#4141;ပည&#4140;မ&#4158;&#4140; လ&#4145;&#4151;လ&#4140;န&#4158;&#4150;စပ&#4154;သ&#4144;သည&#4154;ရ&#4158;&#4143;&#4150;&#4152;န&#4158;&#4141;မ&#4151;&#4154;မည&#4154;က&#4141;&#4143; မက&#4156;&#4145;&#4140;က&#4154;&#4170; အတက&#4154;ပည&#4140;မ&#4158;&#4140; က&#4155;&#4157;မ&#4154;&#4152;က&#4155;င&#4154;န&#4158;&#4150;စပ&#4154;တ&#4146;&#4151;သ&#4144;သည&#4154;အခက&#4154;အခ&#4146;က&#4141;&#4143; မက&#4156;&#4145;&#4140;က&#4154;&#4170;", author: "sawsan" },
{ quote: "If you want to know what a man&#8217;s like, take a good look at how he treats his inferiors, not his equals.", author: "Sirius Black" },
{ quote: "Never trust anything that can think for itself if you can&#8217;t see where it keeps its brain.", author: "Arthur Weasley" },
{ quote: "Habits if not resisted soon become necessity.", author: "sawsan"},
{ quote: "လ&#4143;ပ&#4154;ရည&#4154;က&#4141;&#4143;င&#4154;ရည&#4154;ရ&#4158;&#4141;လ&#4155;&#4158;င&#4154; အသ&#4143;&#4150;&#4152;က&#4155;တ&#4146;&#4151;သ&#4144;ဖ&#4156;စ&#4154;မယ&#4154;&#4170;က&#4141;&#4143;ယ&#4154;က&#4155;င&#4151;&#4154;တရ&#4140;&#4152;ရ&#4158;&#4141;လ&#4155;&#4158;င&#4154; ယ&#4143;&#4150;က&#4156;ည&#4154;ရတ&#4146;&#4151;သ&#4144;ဖ&#4156;စ&#4154;မယ&#4154;", author: "sawsan" },
{ quote: "Every human life is worth the same, and worth saving.", author: "Kingsley Shacklebolt" },
{ quote: "An unexamined life is not worth living.", author: "Socrates" },
{ quote: "Have a biscuit, Potter.", author: "Minerva McGonagall" },
{ quote: "အ&#4145;&#4140;င&#4154;မ&#4156;င&#4154;မ&#4158;&#4143;ဆ&#4141;&#4143;တ&#4140; က&#4141;&#4143;ယ&#4154;လ&#4141;&#4143;ခ&#4155;င&#4154;တ&#4140;က&#4141;&#4143;ရတ&#4140;&#4170; ပ&#4155;&#4145;&#4140;&#4154;ရ&#4157;&#4158;င&#4154;မ&#4158;&#4143;ဆ&#4141;&#4143;တ&#4140; က&#4141;&#4143;ယ&#4154;ရရ&#4158;&#4141;တ&#4146;&#4151;အပ&#4145;&#4139;&#4154;မ&#4158;&#4140; က&#4155;&#4145;နပ&#4154;န&#4145;တ&#4140;&#4170;", author: "sawsan" },
{ quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", author: "Bill Gates" },
{ quote: "The best thing about the future is that it comes one day at a time", author: "Abraham Lincoln" },
{ quote: "ယခ&#4143;သင&#4154;က&#4145;&#4140;င&#4154;&#4152;အ&#4145;&#4140;င&#4154;န&#4145;ပ&#4139;&#4170; အက&#4156;&#4145;&#4140;င&#4154;&#4152;တ&#4141;&#4143;က&#4154;ဆ&#4141;&#4143;င&#4154;သ&#4145;&#4140;အခ&#4139; အက&#4155;&#4141;&#4143;&#4152;ပ&#4145;&#4152;ပ&#4139;မည&#4154;&#4171;", author: "sawsan" },
{ quote: "Success is most often achieved by those who don’t know that failure is inevitable.", author: "Coco Chanel" },
{ quote: "I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness.", author: "Kanye West" },
{ quote: "ခ&#4155;စ&#4154;ခ&#4156;င&#4154;&#4152;&#4170; မ&#4143;န&#4154;&#4152;ခ&#4156;င&#4154;&#4152;&#4170; ခ&#4155;&#4142;&#4152;မ&#4157;မ&#4154;&#4152;ခ&#4156;င&#4154;&#4152;&#4170; က&#4146;&#4151;ရ&#4146;&#4151;ခ&#4156;င&#4154;&#4152;ဆ&#4141;&#4143;တ&#4140; သ&#4144;တစ&#4154;ပ&#4139;&#4152;စ&#4141;တ&#4154;ထ&#4146;မ&#4158;&#4140; ခဏဖ&#4156;စ&#4154;သ&#4157;&#4140;&#4152;တ&#4146;&#4151; အတ&#4157;&#4145;&#4152;လ&#4145;&#4152;တစ&#4154;ခ&#4143;ပ&#4139;&#4171;",  author: "sawsan" },
{ quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
{ quote: "The way to get started is to quit talking and begin doing", author: "Walt Disney" },
{ quote: "လ&#4143;ပ&#4154;န&#4141;&#4143;င&#4154;ခ&#4156;င&#4154;&#4152; မလ&#4143;ပ&#4154;န&#4141;&#4143;င&#4154;ခ&#4156;င&#4154;&#4152;သည&#4154; က&#4141;&#4143;ယ&#4151;&#4154;ရ&#4146;&#4151;အရည&#4154;အခ&#4155;င&#4154;&#4152;န&#4146;&#4151;ဆ&#4141;&#4143;င&#4154;တယ&#4154;&#4170; လ&#4143;ပ&#4154;သင&#4151;&#4154;ခ&#4156;င&#4154;&#4152; မလ&#4143;ပ&#4154;သင&#4151;&#4154;ခ&#4156;င&#4154;&#4152;သည&#4154; က&#4141;&#4143;ယ&#4151;&#4154;ရ&#4146;&#4151; ရပ&#4154;တည&#4154;မ&#4158;&#4143;အခ&#4156;&#4145;အန&#4145;န&#4146;&#4151; ဆ&#4141;&#4143;င&#4154;တယ&#4154;&#4171;", author: "sawsan" },
{ quote: "Always bear in mind that your own resolution to success is more important than any other one thing.", author: "Abraham Lincoln" },
{ quote: "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.", author: "Elon Musk" },
{ quote: "က&#4141;&#4143;ယ&#4151;&#4154;ရ&#4146;&#4151; အ&#4140;ရ&#4143;&#4150;က ဘယ&#4154;မ&#4158;&#4140;က&#4155;က&#4154;စ&#4140;&#4152;န&#4145;တယ&#4154;ဆ&#4141;&#4143;တ&#4140; သ&#4141;မန&#4145;တ&#4146;&#4151;လ&#4144;အတ&#4157;က&#4154; အ&#4146;&#4151;အခ&#4155;&#4141;န&#4154;တ&#4157;&#4145;က သ&#4145;န&#4145;တ&#4146;&#4151;အခ&#4155;&#4141;န&#4154;န&#4146;&#4151;အတ&#4144;တ&#4144;ပ&#4146;", author: "sawsan" },
{ quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", author: "Steve Jobs" },
{ quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
{ quote: "ယခ&#4143;သင&#4154;အခ&#4155;&#4141;န&#4154;ဖ&#4156;&#4143;န&#4154;&#4152;န&#4145;လ&#4155;&#4158;င&#4154; န&#4145;&#4140;င&#4154;အခ&#4139;တ&#4157;င&#4154; အခ&#4155;&#4141;န&#4154;က သင&#4151;&#4154;က&#4141;&#4143; ဖ&#4156;&#4143;န&#4154;&#4152;ပစ&#4154;လ&#4141;မ&#4151;&#4154;မည&#4154;",  author: "sawsan" },
{ quote: "Life is never fair, and perhaps it is a good thing for most of us that it is not.", author: "Oscar Wilde" },
{ quote: "Love the life you live. Live the life you love.", author: "Bob Marley" },
{ quote: "ပ&#4139;ရမ&#4142;ဆ&#4141;&#4143;တ&#4140; စ&#4157;&#4146;မ&#4156;&#4146;တ&#4146;&#4151;အလ&#4145;&#4151;အက&#4155;င&#4151;&#4154;တစ&#4154;ခ&#4143;&#4171;",  author: "sawsan" },
{ quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey" },
{ quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
{ quote: "လ&#4144;တ&#4157;&#4145;မ&#4158;&#4140; က&#4141;&#4143;ယ&#4151;&#4154;ရ&#4143;ပ&#4154;က&#4141;&#4143; ပ&#4156;န&#4154;မမ&#4156;င&#4154;န&#4141;&#4143;င&#4154;အ&#4145;&#4140;င&#4154;&#4170; က&#4141;&#4143;ယ&#4151;&#4154;စက&#4140;&#4152;သ&#4150;က&#4141;&#4143;ပ&#4156;န&#4154;မက&#4156;&#4140;&#4152;န&#4141;&#4143;င&#4154;အ&#4145;&#4140;င&#4154;အလ&#4157;&#4158;&#4140;တစ&#4154;ခ&#4143;က ဖ&#4143;&#4150;&#4152;အ&#4143;ပ&#4154;ထ&#4140;&#4152;တယ&#4154; အ&#4146;&#4151;ဒ&#4142;အလ&#4157;&#4158;&#4140;က&#4141;&#4143; အတ&#4153;တလ&#4141;&#4143;&#4151;ခ&#4145;&#4139;&#4154;တယ&#4154;&#4171;",  author: "sawsan" },
{ quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
{ quote: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
{ quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
{ quote: "လ&#4143;ပ&#4154;သင&#4151;&#4154;တ&#4140;ထက&#4154; လ&#4143;ပ&#4154;ခ&#4155;င&#4154;တ&#4140;က&#4141;&#4143; ဦ&#4152;စ&#4140;&#4152;ပ&#4145;&#4152;ပ&#4139; လ&#4143;ပ&#4154;သင&#4151;&#4154;တ&#4140;က&#4141;&#4143; သ&#4144;မ&#4155;&#4140;&#4152;တ&#4157;&#4145; လ&#4143;ပ&#4154;က&#4156;ပ&#4139;လ&#4141;မ&#4151;&#4154;မယ&#4154;", author: "အ&#4145;&#4140;&#4154;ပ&#4142;က&#4155;ယ&#4154;,က&#4155;က&#4155;မ&#4154;&#4152;" },
{ quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", author: "Steve Jobs" },
{ quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
{ quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
{ quote: "က&#4155;န&#4145;&#4140;&#4154;တ&#4141;&#4143;&#4151;သည&#4154; မ&#4156;င&#4154;လ&#4141;&#4143;က&#4154;ရသ&#4145;&#4140; အမ&#4156;င&#4154;ပ&#4145;&#4139;&#4154;မ&#4144;တည&#4154;&#4173; ခ&#4150;စ&#4140;&#4152;ခ&#4155;က&#4154;ဖ&#4156;င&#4151;&#4154;ဆ&#4143;&#4150;&#4152;ဖ&#4156;တ&#4154;န&#4145;သ&#4144;မ&#4155;&#4140;&#4152; မဖ&#4156;စ&#4154;သင&#4151;&#4154;ပ&#4139;&#4171;",  author: "sawsan" },
{ quote: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
{ quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
{ quote: "Always remember that you are absolutely unique. Just like everyone else. ", author: "Margaret Mead" },  
];
    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}  
     window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}  
var marginBottom,marginRight,snowMax=15,snowColor=["#DDD","#EEE"],snowEntity="&#x2022;",snowSpeed=.75,snowMinSize=6,snowMaxSize=14,snowRefresh=50,snowStyles="cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;",snow=[],pos=[],coords=[],lefr=[];function randomise(o){return rand=Math.floor(o*Math.random()),rand}function initSnow(){var o=snowMaxSize-snowMinSize;for(marginBottom=document.body.scrollHeight-5,marginRight=document.body.clientWidth-15,i=0;i<=snowMax;i++)coords[i]=0,lefr[i]=15*Math.random(),pos[i]=.03+Math.random()/10,snow[i]=document.getElementById("flake"+i),snow[i].style.fontFamily="inherit",snow[i].size=randomise(o)+snowMinSize,snow[i].style.fontSize=snow[i].size+"px",snow[i].style.color=snowColor[randomise(snowColor.length)],snow[i].style.zIndex=1e3,snow[i].sink=snowSpeed*snow[i].size/5,snow[i].posX=randomise(marginRight-snow[i].size),snow[i].posY=randomise(2*marginBottom-marginBottom-2*snow[i].size),snow[i].style.left=snow[i].posX+"px",snow[i].style.top=snow[i].posY+"px";moveSnow()}function resize(){marginBottom=document.body.scrollHeight-5,marginRight=document.body.clientWidth-15}function moveSnow(){for(i=0;i<=snowMax;i++)coords[i]+=pos[i],snow[i].posY+=snow[i].sink,snow[i].style.left=snow[i].posX+lefr[i]*Math.sin(coords[i])+"px",snow[i].style.top=snow[i].posY+"px",(snow[i].posY>=marginBottom-2*snow[i].size||parseInt(snow[i].style.left)>marginRight-3*lefr[i])&&(snow[i].posX=randomise(marginRight-snow[i].size),snow[i].posY=0);setTimeout("moveSnow()",snowRefresh)}for(i=0;i<=snowMax;i++)document.write("<span id='flake"+i+"' style='"+snowStyles+"position:absolute;top:-"+snowMaxSize+"'>"+snowEntity+"</span>");window.addEventListener("resize",resize),window.addEventListener("load",initSnow);
