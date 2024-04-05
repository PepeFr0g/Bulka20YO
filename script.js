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
        document.getElementById("score").textContent="Твой жалкий счет : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=5;
        document.getElementById("score").textContent="Твой жалкий счет : "+score;
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
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" правильна и в "+((countQues+1)-correct)+" ты обосрался";
    
    document.getElementById("display-final-score").innerHTML="Твой скуфский счет: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Капец ты скуф:)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Ну так, пойдет, вообще счет ничего не значит, ты скуф. И вообще, Бро, тебе нужно больше тренироваться";
    
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
