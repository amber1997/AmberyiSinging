let hernameyes = '我的秒回等你卻是輪迴'; 
let hatefoodyes='第100天';
let pcrexpyes='可是不知不覺變成習慣';
let herbdateyes='確診';
let herjobyes='Pay';
let hermobandwatchyes='為你們而作的歌';
let likefoodyes='嫁給我吧';
let likeanimalyes='我的心會痛';
let songcovidyes='秒回';
let herloveyes='寂寞 #4 5';
let vaccineyes='愛恨';
var score=10;
var correct=0;

var youransname,youranshatefood,youranspcrexp,youransherbday,youransjob,youransmobandwatch
,youranslikefood,youransanimal,youranscovid,youransherlove,youransvaccine,inputusername;




localStorage.setItem('correcthername',hernameyes);
localStorage.setItem('correctherhatefood',hatefoodyes);
localStorage.setItem('correctpcrexp',pcrexpyes);
localStorage.setItem('correctherbdate',herbdateyes);
localStorage.setItem('correctherjob',herjobyes);
localStorage.setItem('correcthermobandwatch',hermobandwatchyes);
localStorage.setItem('correctherlikefood',likefoodyes);
localStorage.setItem('correctherloveanimal',likeanimalyes);
localStorage.setItem('correctherncovid',songcovidyes);
localStorage.setItem('correctherlove',herloveyes);
localStorage.setItem('correcthervaccine',vaccineyes);



function processFormData() {
    
    window.history.forward(1);  
    correct=0;
    score=10;
    const hername = document.getElementById('optionhername').value; 
    const hatefood=document.getElementById('optionhatefood').value;
    const pcrexp=document.getElementById('optionpcr').value;
    const herbday=document.getElementById('optionbday').value;
    const herjob=document.getElementById('optionjob').value;
    const hermobandwatch=document.getElementById('optionmobile').value;
    const likefood=document.getElementById('optionmlovefood').value;
    const likeanimal=document.getElementById('optionmloveanimal').value;
    const songcovid=document.getElementById('optionmedical').value;
    const herlove=document.getElementById('optionlove').value;
    const vaccine=document.getElementById('optionmvaccine').value;

    var username = document.getElementById("user").value;



    youransname=hername;
    youranshatefood=hatefood;
    youranspcrexp=pcrexp;
    youransherbday=herbday;
    youransjob=herjob;
    youransmobandwatch=hermobandwatch;
    youranslikefood=likefood;
    youransanimal=likeanimal;
    youranscovid=songcovid;
    youransherlove=herlove;
    youransvaccine=vaccine;
    inputusername=username;

    
    localStorage.setItem('youranshername',youransname);
    localStorage.setItem('youransherhatefood',youranshatefood);
    localStorage.setItem('youransherpcrexp',youranspcrexp);
    localStorage.setItem('youransherbdate',youransherbday);
    localStorage.setItem('youransherjob',youransjob);
    localStorage.setItem('youranshermobandwatch',youransmobandwatch);
    localStorage.setItem('youransherlikefood',youranslikefood);
    localStorage.setItem('youransherloveanimal',youransanimal);
    localStorage.setItem('youransherncovid',youranscovid);
    localStorage.setItem('youransherlove',youransherlove);
    localStorage.setItem('youranshervaccine',youransvaccine);
    localStorage.setItem('yourinputusername',inputusername);
    
    if(hername==hernameyes)
    {
        correct+=1;
    }
    if(hatefood==hatefoodyes)
    {
        correct+=1;
    }
    if(pcrexp==pcrexpyes)
    {
        correct+=1;
    }
    if(herbday==herbdateyes)
    {
        correct+=1;
    }

    if(herjob==herjobyes)
    {
        correct+=1;
    }

    if(hermobandwatch==hermobandwatchyes)
    {
        correct+=1;
    }

    if(likefood==likefoodyes)
    {
        correct+=1;
    }

    if(likeanimal==likeanimalyes)
    {
        correct+=1;
    }

    if(songcovid==songcovidyes)
    {
        correct+=1;
    }

    if(herlove==herloveyes)
    {
        correct+=1;
    }

    if(vaccine==vaccineyes)
    {
        correct+=1;
    }

    debugger;
    score=score*correct;


    

    if(username=="")
    {
        alert('Please enter your name!');
        correct=0;
        score=10;
    }
    else
    {

        alert('Hi! '+username+'!Your score is:'+score);
        localStorage.setItem('youscore',score);
        
        
  
    }

    debugger;
    
   
   
  }
