let herschoolyes = '東海大學資工系學士'; 
let hatefoodyes='以上皆是';
let herbdateyes='11月10日';
let herjobyes='傳產鞋業IT';
let hermobandwatchyes='蘋果和蘋果';
let likefoodyes='馬鈴薯';
let likeanimalyes='貓';
let songcovidyes='微笑';
let herloveyes='身高165(含)以上';
let vaccineyes='2劑AZ和1劑高端';
var score=10;
var correct=0;

var youransherschool,youranshatefood,youranspcrexp,youransherbday,youransjob,youransmobandwatch
,youranslikefood,youransanimal,youranscovid,youransherlove,youransvaccine,inputusername;




localStorage.setItem('correcthershool',herschoolyes);
localStorage.setItem('correctherhatefood',hatefoodyes);
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
    const hername = document.getElementById('optionherschool').value; 
    const hatefood=document.getElementById('optionhatefood').value;
    const herbday=document.getElementById('optionbday').value;
    const herjob=document.getElementById('optionjob').value;
    const hermobandwatch=document.getElementById('optionmobile').value;
    const likefood=document.getElementById('optionmlovefood').value;
    const likeanimal=document.getElementById('optionmloveanimal').value;
    const songcovid=document.getElementById('optionmedical').value;
    const herlove=document.getElementById('optionlove').value;
    const vaccine=document.getElementById('optionmvaccine').value;

    var username = document.getElementById("user").value;



    youransherschool=hername;
    youranshatefood=hatefood;
    youransherbday=herbday;
    youransjob=herjob;
    youransmobandwatch=hermobandwatch;
    youranslikefood=likefood;
    youransanimal=likeanimal;
    youranscovid=songcovid;
    youransherlove=herlove;
    youransvaccine=vaccine;
    inputusername=username;

    
    localStorage.setItem('youransherschool',youransherschool);
    localStorage.setItem('youransherhatefood',youranshatefood);
    localStorage.setItem('youransherbdate',youransherbday);
    localStorage.setItem('youransherjob',youransjob);
    localStorage.setItem('youranshermobandwatch',youransmobandwatch);
    localStorage.setItem('youransherlikefood',youranslikefood);
    localStorage.setItem('youransherloveanimal',youransanimal);
    localStorage.setItem('youransherncovid',youranscovid);
    localStorage.setItem('youransherlove',youransherlove);
    localStorage.setItem('youranshervaccine',youransvaccine);
    localStorage.setItem('yourinputusername',inputusername);
    
    if(hername==herschoolyes)
    {
        correct+=1;
    }
    if(hatefood==hatefoodyes)
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
        alert('請輸入您的姓名!');
        correct=0;
        score=10;
    }
    else
    {

        alert('Hi! '+username+'!您對陳羿鈞的了解程度有'+score+'分');
        localStorage.setItem('youscore',score);
        
        
  
    }

    debugger;
    
   
   
  }
