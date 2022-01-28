var yourinputname=localStorage.getItem('yourinputusername');

document.write(yourinputname+'，這是您的答案</br>');

var youanshername=localStorage.getItem('youranshername');
var youansherhatefood=localStorage.getItem('youransherhatefood');
var youansherpcrexp=localStorage.getItem('youransherpcrexp');
var youansherbdate=localStorage.getItem('youransherbdate');
var youansherjob=localStorage.getItem('youransherjob');
var youanshermobandwatch=localStorage.getItem('youranshermobandwatch');
var youansherlikefood=localStorage.getItem('youransherlikefood');
var youansherloveanimal=localStorage.getItem('youransherloveanimal');
var youanshersongcovid=localStorage.getItem('youransherncovid');
var youansherlove=localStorage.getItem('youransherlove');
var youanshervaccine=localStorage.getItem('youranshervaccine');
var youscore=localStorage.getItem('youscore');

document.write('1.'+youanshername+'</br>');
document.write('2.'+youansherhatefood+'</br>');
document.write('3.'+youansherpcrexp+'</br>');
document.write('4.'+youansherbdate+'</br>');
document.write('5.'+youansherjob+'</br>');
document.write('6.'+youanshermobandwatch+'</br>');
document.write('7.'+youansherlikefood+'</br>');
document.write('8.'+youansherloveanimal+'</br>');
document.write('9.'+youanshersongcovid+'</br>');
document.write('10.'+youansherlove+'</br>');
document.write('11.'+youanshervaccine+'</br>');
document.write('您的分數是:'+youscore+'分'+'</br></br>');


document.write('這是正確答案：</br>');
document.write('1.'+localStorage.getItem('correcthername')+'</br>');
document.write('2.'+localStorage.getItem('correctherhatefood')+'</br>');
document.write('3.'+localStorage.getItem('correctpcrexp')+'</br>');
document.write('4.'+localStorage.getItem('correctherbdate')+'</br>');
document.write('5.'+localStorage.getItem('correctherjob')+'</br>');
document.write('6.'+localStorage.getItem('correcthermobandwatch')+'</br>');
document.write('7.'+localStorage.getItem('correctherlikefood')+'</br>');
document.write('8.'+localStorage.getItem('correctherloveanimal')+'</br>');
document.write('9.'+localStorage.getItem('correctherncovid')+'</br>');
document.write('10.'+localStorage.getItem('correctherlove')+'</br>');
document.write('11.'+localStorage.getItem('correcthervaccine')+'</br></br>');