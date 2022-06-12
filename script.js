var quizdata= [
    {
        question: 'Which framework is related JS',
        a: '.net',
        b: 'flask',
        c: 'react',
        d: 'django',
        correct: 'c'
    },
    {
        question: 'Which is not a programming language',
        a: 'html',
        b: 'Python',
        c: 'java',
        d: 'js',
        correct: 'a'
    },
    {
        question: 'Which is not a framework',
        a: 'react',
        b: 'javascript',
        c: 'angular',
        d: 'django',
        correct: 'b'
    },
    {
        question: 'CSS stands for',
        a: 'cascading style state',
        b: 'cascading style sheet',
        c: 'cascading sheet of style',
        d: 'none',
        correct: 'b'
    }
]

var quiz=document.getElementById('quiz');
var answer=document.getElementById('answer');
var question=document.getElementById('question');
var option_a=document.getElementById('a_value');
var option_b=document.getElementById('b_value');
var option_c=document.getElementById('c_value');
var option_d=document.getElementById('d_value');
var submitbtn=document.getElementById('submit');

var currentQuestion=0;
var quizScore=0;
loadQuiz();
function loadQuiz(){
    deselect();
}
 function deselect(){
     
 }

 function chutiya(){
     console.log("mc bhim");
 }

 const submit=()=>{
    document.write("you have submiited successfully");
 }