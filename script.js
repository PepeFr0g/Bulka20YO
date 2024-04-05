//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var HTMLquestions=[

    {
        question: "Выбери свой любимый напиток",
        choices: ["Чай/Кофе","Кокакола","Не хочу жениться, хочу пиво","Моча"],
        answer: 3
    
    },
    
    {
        question: "Что вы бы включили для вайбика",
        choices: ["Сисечки","Карусель","Чечня 1994","Утюг"],
        answer: 1
    
    },
    {
        question: "Куда вы хотите пойти работать",
        choices: ["Завод","Зовод","Служить в Армии","Охранником на концерт Уральских Пельмений"],
        answer: 4
    
    },
    {
        question: "Вам 20 лет, доступна ли вам Альтушка на гос услугах?",
        choices: ["Да","Нет", "Я альтушка", "Дмитрий Брекоткин"],
        answer: 1
    
    },
    {/*5*/
        question: "Кто ваш лучший друг?",
        choices: ["Илья Фалалеев","Пиво","Гриша Бушмакин","Ярослав Богатырев из 1 класса"],
        answer: 1
    
    },
    {
        question: "Что у вас стоит на обоях телефона?",
        choices: ["Фотка с концерта Уральских Пельменей","Фотка с мужиками с завода","Пиво","Утюг"],
        answer: 1
    
    }, 
    {
        question: "Ваша любимая игрулька на компьютере?",
        choices: ["Дота","Танчики","Кораблики","Каесочка"],
        answer: 2
    
    }, 
    {
        question: "Фанатом какого спорта ты являешься?",
        choices: ["Кибербулинг","Танковый биатлон","Футбол","Хоккей"],
        answer: 2
    
    }, 
    {
        question: "Какой твоё любимое пиво?",
        choices: ["Холодное","Темное","Я люблю мочу","Певко Григорий"],
        answer: 4
    
    }, 
    {/*10*/
        question: "Выбери строчку из песни",
        choices: ["«Алё», «А?», это — Пакистан, «Да»,","Хуёво, когда твою тёлку забирает с клуба мажик","Ба-да-бум, ба-да-бум, ба-да-бум, бам","Бери в рот сука,глотай мой хер глубже."],
        answer: 2
    
    }
                
];

var CSSquestions=[

    {
        question: "If we want define style for an unique element, then which css selector will we use ?",
        choices: ["Id","text","class","name"],
        answer: 1
    
    }, 
    {
        question: "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
        choices: ["margin","clear","float","padding"],
        answer: 2
    
    },
    {
        question: "Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack ?",
        choices: ["d-inex","s-index","x-index","z-index"],
        answer: 4
    
    }, 
    {/*4*/
        question: "Can we align a Block element by setting the left and right margins ?",
        choices: ["Yes, we can","Not Possible","Depends on browser","Depends upon operating System"],
        answer: 2
    
    },
    {
        question: "If we want to wrap a block of text around an image, which css property will we use ?",
        choices: ["wrap","push","float","align"],
        answer: 3
    
    },
    {/*6*/
        question: "If we want to show an Arrow as cursor, then which value we will use ?",
        choices: ["pointer","default","arrow","arr"],
        answer: 2
    
    }, 
    {
        question: "If we want to use a nice looking green dotted border around an image, which css property will we use?",
        choices: ["border-color","border-decoration","border-style","border-line"],
        answer: 3
    
    },
    {/*8*/
        question: "Which of the following properties will we use to display border around a cell without any content ?",
        choices: ["empty-cell","blank-cell","noncontent-cell","void-cell"],
        answer: 1
    
    }, 
    {
        question: "What should be the table width, so that the width of a table adjust to the current width of the browser window?",
        choices: ["640 pixels","100%","full-screen","1024px"],
        answer: 2
    
    },
    {
        question: "How can we write comment along with CSS code ?",
        choices: ["/* a comment */","// a comment //","/ a comment /","<' a comment'>"],
        answer: 1
    
    }
                
];
var JSquestions=[

    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        choices: ["JavaScript variable names must begin with a letter or the underscore character.","JavaScript variable names are case sensitive.","Both of the above."," None of the above."],
        answer: 3
    
    }, 
    {/*wscubetech*/
        question: " Which of the following is a server-side Java Script object?",
        choices: ["Function","File","FilleUpload","Data"],
        answer: 2
    
    },
    {
        question: "Java script can be used for Storing the form's contents to a database file on the server",
        choices: ["False","True"],
        answer: 1
    
    }, 
    {
        question: "How does Java Script store dates in objects of Date type?",
        choices: ["The number of days since January 1st, 1900","The number of seconds since January 1st, 1970","The number of milliseconds since January 1st, 1970","The number of picoseconds since January 1st, 1970"],
        answer: 3
    
    },
    {
        question: "C-style block-level scoping is not supported in Java script",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "JavaScript ignores extra spaces in Syntax",
        choices: ["True","False"],
        answer: 2
    
    }, 
    {
        question: "Which of the following is the tainted property of a window object in Java Script?",
        choices: ["Pathname","Protocol","Defaultststus","Host"],
        answer: 3
    
    },
    {
        question: "Which attribute needs to be changed to make elements invisible?",
        choices: ["visibilty","visible","invisible","None of the above"],
        answer: 1
    
    }, 
    {
        question: " Javascript is an object oriented language?",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "What is the alternate name for Java script?",
        choices: ["LimeScript","ECMScript","Both of the above","ECMAScript"],
        answer: 4
    
    }
                
];
var PYquestions=[

    {
        question: "What is the output of the following program : print(Hello World'[::-1])",
        choices: ["dlroW olleH","Hello Worl","d","Error"],
        answer: 1
    
    }, 
    {
        question: "Given a function that does not return any value, what value is shown when executed at the shell?",
        choices: ["int","bool","void","None"],
        answer: 4
    
    },
    {
        question: "Which module in Python supports regular expressions?",
        choices: ["re","regex","pyregex","None of the above"],
        answer: 1
    
    }, 
    {
        question: "What is the output of the following program : (tricky ques.)  print (0.1 + 0.2 == 0.3) ",
        choices: ["True","False","Machine Dependent","Error"],
        answer: 2
    
    },
    {
        question: "Which of the following is not a complex number?",
        choices: ["k = 2 + 3j","k = complex(2, 3)","k = 2 + 3l","k = 2 + 3J"],
        answer: 3
    
    },
    {
        question: "What does ~~~~~~5 evaluate to?",
        choices: ["+5","-11","+11","-5"],
        answer: 1
    
    }, 
    {
        question: "Given a string s = вЂњWelcomeвЂќ, which of the following code is incorrect?",
        choices: ["print s[0]","print s.lower()","s[1] = вЂ�rвЂ™","print s.strip()"],
        answer: 3
    
    },
    {
        question: "________ is a simple but incomplete version of a function.",
        choices: ["Stub","Function","A function developed using bottom-up approach","A function developed using top-down approach"],
        answer: 1
    
    }, 
    {
        question: "To start Python from the command prompt, use the command ______",
        choices: ["execute python","go python","python","run python"],
        answer: 3
    
    },
    {
        question: "Which of the following is correct about Python?",
        choices: ["It supports automatic garbage collection.","It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java","Both of the above","None of the above"],
        answer: 3
    
    }
                
];
var Cquestions=[

    {
        question: "C Language was developed in the year ____",
        choices: ["1970","1975","1980","1985"],
        answer: 1
    
    }, 
    {
        question: "Which one is not a reserve keyword in C Language?",
        choices: ["auto","main","case","register"],
        answer: 2
    
    },
    {
        question: "A C variable name can start with a ____",
        choices: ["Number","Plus Sign","Underscore","Asterisk"],
        answer: 3
    
    }, 
    {
        question: "Prototype of a function means _____",
        choices: ["Name of Function","Output of Function","Declaration of Function","Input of a Function"],
        answer: 3
    
    },
    {
        question: "Name the loop that executes at least once.",
        choices: ["for","If","do-while","while"],
        answer: 3
    
    },
    {
        question: "Far pointer can access _____",
        choices: ["Single memory location","No memory location","All memory location","First and Last Memory Address"],
        answer: 3
    
    }, 
    {
        question: "A pointer pointing to a memory location of the variable even after deletion of the variavle is known as _____",
        choices: ["far pointer","dangling pointer","null pointer","void pointer"],
        answer: 2
    
    },
    {
        question: "An uninitialized pointer in C is called ___",
        choices: ["Constructor","dangling pointer","Wild Pointer","Destructor"],
        answer: 3
    
    }, 
    {
        question: "A pointer that is pointing to NOTHING is called ____",
        choices: ["VOID Pointer","DANGLING Pointer","NULL Pointer","WILD Pointer"],
        answer: 3
    
    },
    {
        question: "Who is known as the father of C Language ?",
        choices: ["Digvijay","James A. Sosling","Dr. E. F. Codd","Dennis Ritchie"],
        answer: 4
    
    }
                
];





//alert(questions.length);
document.getElementById("score").textContent="Твой жалкий счет : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Вопрос : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=10;
        document.getElementById("score").textContent="Вопрос : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=5;
        document.getElementById("score").textContent="Вопрос : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Вопрос : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="Ты решил "+(countQues+1)+" скуфиянских вопроса "+document.getElementById("language").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("Праильна").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" правильна и в "+((countQues+1)-correct)+" ты обосрался";
    
    document.getElementById("display-final-score").innerHTML="Твой скуфский счет: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Капец ты скуф:)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Ну так, пойдет, вообще счет ничего не значит, ты скуф";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Меч-мерек-мемек-шмек-шмек \n Меч-мерек-мекс-векс-чмермек \n И мекс-мекс-чмермек И меке-шмек-мек-мек-шмермек \n Та-чипи-меч-шмерме \n Не понял?\n Ты скуф!";
    }else{
        document.querySelector(".remark").innerHTML="Бро, тебе нуджно больше тренироваться";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("Quiz Website Project Created By Digvijay Singh");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
