// from here our javascript code starts for quiz application
// all the id are stored below in the variables 
const nameInput = document.getElementById('name');
const enter = document.getElementById('enter');
const displayName = document.getElementById('displayName');
const quizDetails = document.getElementById('quiz_details');
const quizCategory = document.getElementById('Quiz_category');
const questionTitle = document.getElementById('questionTitle');
const options =document.getElementById("options");
const next = document.getElementById("next");
const questionPage = document.getElementById("questionPage");
const timerElement = document.getElementById("timer");
const GotoHome = document.getElementById("goToHome");
const restart = document.getElementById("restart");
let username = "";
const quesNo = document.getElementById("queNo");

// by clicking on the enter button on home page the below function will executed.
// by clicking on enter the name of the user displayed and below if condition executed
// if user does not enter the name then message will give as a alert to enter the name.    
enter.addEventListener('click', function () {
    const displayUser = nameInput.value;
    username = displayUser
    if (displayUser !== "") {
        displayName.textContent= "Hello " + username + "!"; 
        quizDetails.textContent = "Select one category to attempt quiz. Each category includes 10 questions."
        nameInput.value="";
        quizCategory.style.display="block";
//    above there are if condition in which some of the action take place     
               
            }else{
      alert("Please enter name");
    }
    // after that the quiz category will appeared and when the user selecting one of the category then start quiz button appeared
    quizCategory.addEventListener("click" , function () {
        document.getElementById("startQuiz").style.display="block";
    })
    
    
});


// for selecting one of the category the logic from line number 41 is started
// the below variable selectedButton refers to the categories of quiz
let selectedButton = null;
// on the indexedDB.html page there are four button contain quiz categories including a funtion selectButton(this)
function selectButton(button) {
    if (selectedButton) {
        //class selected is dynamically created or remove when the user selects one of the category.
        selectedButton.classList.remove('selected');
    }
    button.classList.add("selected");
    selectedButton = button;
}
// from line number 53 the question of all the 4 categories are stored in objects of arrays
const questions = {
    //  math question added with the question option and the answer is also defined
    math:[
        {
            num: 1,
            question: "121 Divided by 11 is?" ,
            options: ["11" , "10" , "19" , "18"],
            answer: "11"

        },
        {   
            num: 2,
            question: "60 Times of 8 Equals to ?" ,
            options: ["480" , "300" , "250" , "400"],
            answer: "480"
        },
        {
            num: 3,
            question: "What is the Next Prime Number after 7 ?" ,
            options: ["13" , "12" , "14" , "11"],
            answer: "11"
        },
        {
            num: 4,
           question: "What is 5 * 9?",
           options: ["22" , "34" , "45" , "54"],
           answer: "45"
        },
        {
            num: 5,
            question: "How Many Years are there in a Decade?",
            options: ["5 Years" , "10 years" , "15 Years" , "20 years"],
            answer: "10 years"
        },
        {
            num: 6,
            question: "How Many Months Make a Century?",
           options: ["12" , "120" , "1200" , "12000"],
           answer: "1200"
        },
        { 
            num: 7,
            question: "How Many Sides are there in a Decagon?",
            options: ["8" , "1" , "10" , "14"],
            answer: "10"
       
        },
        {
            num: 8,
            question: "What Number Comes Before 9019?",
            options: ["9001" , "9020" , "9011" , "9018"],
            answer: "9018"
       
        },
        {
            num: 9,
            question: " What is 6% Equals to",
            options: ["0.06" , "0.6" , "0.006" , "6.0"],
            answer: "0.06"
          
        },
        {
            num: 10,
            question: " Solve 23 + 3 ÷ 3",
            options: ["24" , "25" , "26" , "27"],
            answer: "24"

        },
      ],
    //   html and css question are added.
      htmlandcss:[
        {
            num: 1,
            question: "What is full form of HTML?",
            options: ["Hyper text Markup Language", "hyper text makeup language", "hyper text makeup location", "hyper text markup location"],
        answer: "Hyper text Markup Language"
        },
        {
            num: 2,
            question: "What is full form of CSS?",
            options: ["Concading style sheet", "Cascading statement sheet", "Cascading Style Sheet", "Cacading storage sheet"],
        answer: "Cascading Style Sheet"
        },
        {
            num: 3,
            question: "The correct sequence of HTML tags for starting a webpage is -",
            options: ["Head, Title, HTML, body" , "HTML, Body, Title, Head" , "HTML, Head, Title, Body" , "HTML, Head, Title, script"],
            answer: "HTML, Head, Title, Body"
        },
        {
            num: 4,
            question: "Which of the following element is responsible for making the text bold in HTML?",
            options:  ["<pre>" , "<a>" , "<b>" , "<br>"],
            answer: "<b>"
        },
        {
            num: 5,
            question: "Which of the following tag is used for inserting the largest heading in HTML?",
            options: ["<h3>" , "<h1>" , "<h5>", "<h6>"],
            answer: "<h1>"
        },
        {
            num: 6,
            question: "Which of the following tag is used to insert a line-break in HTML?",
            options: ["<br>" ,"<a>" ,"<pre>" ,"<b>" ],
            answer: "<br>"
        },
        {
            num: 7,
            question: "How can we change the background color of an element?",
            options: ["background color", "color", "border", "width"],
            answer: "background color"
        },
        {
            num: 8,
          question: "How can we change the text color of an element?",
          options: ["color", "background color", "none of the above", "Both A and B"],
          answer: "color"
        },
        {
            num: 9,
         question:"What type of CSS is generally recommended for designing large web pages?",
         options: ["Internal", "External", "Inline", "None of the above" ],
         answer: "External"
        },
        {
            num: 10,
        question: "The CSS property used to specify the transparency of an element is?",
        options: ["opacity", "visibilty", "filter", "rgb"],
        answer: "opacity"
        },
      ],
    //   logical reasoning question are added 
      logicalReasoning:[
        {
            num: 1,
          question: "Complete the series 1,6,13,22,33,..?",
          options: ["46", "48", "49", "51"],
          answer: "46"
        },
        {
            num: 2,
          question: "Complete the series 3, 7, 23, 95, ?",
          options: ["62", "128", "479", "575"],
          answer: "479"
        },
        {
            num: 3,
            question: "Complete the series 7, 26, 63, 124, 215, 342, ?",
            options: ["391", "511", "481", "421"],
            answer: "511"
        },
        {
            num: 4,
            question: "Complete the series 165, 195, 255, 285, 345, ?",
            options: ["390", "420", "435", "375"],
            answer: "435"
        },
        {
            num: 5,
            question:"Complete the Series 34, 45, 56, 67.......",
            options: ["78", "89", "87", "35"],
            answer: "78"
        },
        {
            num: 6,
            question: "Complete the series 5690, 5121, 4552, 3983, 3414, 2845, ?",
            options: ["2276", "2516", "2356", "2456"],
            answer: "2276"
        },
        {
            num: 7,
            question: "Complete the series 6, 13, 28, 59, ?, 249.",
            options: ["276", "122", "235", "56"],
            answer: "122" 
        },
        {
            num: 8,
            question: "Complete the series 4, 8, 10, 14, 16, 20, ?",
            options: ["22", "67", "34", "24"],
            answer: "22"
        },
        {
            num: 9,
            question: "Complete the series 9, 17, 33, 65, ?",
            options: ["22", "67", "129", "99"],
            answer: "129"
        },
        {
            num: 10,
            question: "Look at this series: 12, 11, 13, 12, 14, 13, … What number should come next?",
            options: ["10", "16", "13", "15"],
            answer: "15"
        },
      ],
    //   accounts question are added 
      accounts:[
        {
            num: 1,
            question: "Look at this series: 12, 11, 13, 12, 14, 13, … What number should come next?",
            options: ["residual value", "Market price", "Orignal price", "Book price"],
            answer: "residual value"
        },
        {
            num: 2,
            question: "Deferred tax liabilities are shown under:",
            options: ["non-current assets", "non-current liabilities", "current liabilities", "current assets"],
            answer: "non-current liabilities"
        },
        {
            num: 3,
            question:"Which of the following is NOT the example of non current assets?",
            options:["Capital WIP", "accounts receivable >180 days", "Commercial Vehicle ", "Plant and machinery"],
            answer: "accounts receivable >180 days"
        },

        {
            num: 4,
            question:"The revenues and expenses of a company are displayed in which statement?",
            options: ["Profit and loss account", "Income Statement", "Cash Flow Statement", "Balance Sheet"],
            answer: "Income Statement"
        },
        {
            num: 5,
            question: "The main Purpose of Financial Accounting is?",
            options: ["To Provide financial information to shareholders", "To maintain balance sheet", "To minimize taxes.", "To keep track of liabilities"],
            answer:" To Provide financial information to shareholders"
        },
        {
            num: 6,
            question: "The expanded accounting equation is used by which statement?",
            options: ["Cash Flow Statement", "Balance Sheet ", "Income Statement", "None of the above"],
            answer: "Balance Sheet"
        },
        {
            num: 7,
            question: "What type of balance do asset accounts have?",
            options: ["Contra", "Credit", "Debit", "All of the above" ],
            answer: "Debit" 
        },
        {
            num: 8,
            question: "The kind of debts which are needed to be repaid in a short term is known as?",
            options: ["Intangible Assets", "Depreciating Assets", "Current Liabilities", "Fixed Liabilities"],
            answer: "Current Liabilities"
        },
        {
            num: 9,
            question: "The account which increases equity is known as?",
            options: ["Debit Account", "Credit Account", "Revenue", "Treasury Stock"],
            answer: "Revenue"
        },
        {
            num: 10,
            question: "What are the long-term assets which do not have any physical existence?",
            options: ["Current Assets", "Current Liabilities", "Tangible Assets", "Intangible Assets"],
            answer: "Intangible Assets"
        },
      ] 

}
// we want that when the quiz start so every type of data or result start with zero. so i stored 0 in every variable related to the result data. 
let attemptedQuestion = 0;
let correctQuestion = 0;
let totalTimeTaken = 0;
let currentQuestionIndex = 0;
let currentCategory = null;
let score = 0;
let time;
const totalTime = 12;
let sec = totalTime;
// for the quiz question timer also added 12 seconds of timer if the user not answered in defined time then next question automatically displayed.
function timer() {
    timerElement.innerHTML = sec;
    sec--;
    if (sec === 0) {
        sec = totalTime;
        clearInterval(time);
        currentQuestionIndex++;
        // to display next question the loadQuestion() function called
        loadQuestion();
    }
}
document.getElementById("math").addEventListener("click", () => selectCategory("math"));
    document.getElementById("logicalReasoning").addEventListener("click", () => selectCategory("logicalReasoning"));
    document.getElementById("htmlandcss").addEventListener("click", () => selectCategory("htmlandcss"));
    document.getElementById("accounts").addEventListener("click", () => selectCategory("accounts"));

    const subjectTitle = {
        math: "Math",
        logicalReasoning: "Logical Reasoning",
        htmlandcss: "Html and Css",
        accounts: "Accounts",
    }
    function selectCategory(category) {
        currentCategory = category;
        document.getElementById("startQuiz").style.display = "block";
        //display the subject title dynamically
        const currentsubjectTitle = document.getElementById("currentSubjectTitle");
        currentsubjectTitle.textContent = subjectTitle[category];
       
      }




// by clicking on start button the quiz will start and for that the startQuiz() function called
function startQuiz() {
    // by clicking on start quiz button the home page disappeared and the question area will appeared
    document.getElementById('home_page').style.display="none";
    questionPage.style.display="block";
    currentQuestionIndex = 0;
    score= 0;
    // to display first question on screen the loadQuestion() funciton called
    loadQuestion();
}
// to load the question one by one the logic be applied and create a funtion name as loadQuestion()
function loadQuestion() {
    const categoryQuestions = questions[currentCategory];
    sec = totalTime;
    clearInterval(time);
    timer();
    time = setInterval(timer,1000);
    
    // condition of if and else applied and a for loop also in which the 
    // category selected by the user only question related to that category displayed
    if (currentQuestionIndex < categoryQuestions.length) {
        const currentQuestion = categoryQuestions[currentQuestionIndex];
        questionTitle.textContent = currentQuestion.question;
        quesNo.textContent = currentQuestion.num;

        

        for (let i = 0; i < currentQuestion.options.length; i++) {
            const option = document.getElementById("option" +(i+1));
            option.textContent = currentQuestion.options[i];
            option.addEventListener("click", checkAnswer);
            option.style.backgroundColor = "";
            
        }

       
    }else{
        // in the else condition the endQuiz() function called
        endQuiz();
    }
}
// for checking that the user selects correct answer or not for that the checkAnswer() function created
function checkAnswer(event) {
    const selectedoption= event.target;
    const currentQuestion = questions[currentCategory][currentQuestionIndex];
    // the id in which score of the user is shown is stored in the variable
    const scoreElement = document.getElementById("score");
    // all the variables related to check answer are defined above in the Code
    // In if condition only be executed if the user selects only correct answer and then the score increase and then the numbering of correct answer will be increased
    // also if the user selects the correct option then the background color of the option displayed blue
    if (selectedoption.textContent === currentQuestion.answer) {
         score++;
         scoreElement.textContent=score;
        selectedoption.style.backgroundColor = "green";
        correctQuestion++;
    } 
    else{
        // if the user selects the wrong answer then the background color of option displayed red
        selectedoption.style.backgroundColor = "red";
    }
    // in the attemptedQuestion when the user attempts the numbering of the attemps question increased
    attemptedQuestion++;
    currentQuestionIndex++;

   
    disableOption();     //disableOption() function called when the user selects one option then other option will disabled.
   function disableOption() {
    // for loop is defined and the option are stored in the variable named as option 
     for (let i = 0; i < 4; i++) {
        const option = document.getElementById("option" + (i+1));
        // when the user selects the option then the dom manipulation defined in which the checkanswer function called 
        option.removeEventListener("click" , checkAnswer);
    }
}
// the question will displayed continously till the length of the question is less than category. 
    if (currentQuestionIndex < questions[currentCategory].length) {
        // by clicking on next button the load question function called 
        next.addEventListener("click", loadQuestion);
        next.style.display="block";
    }else{
        // when the all question completed the quiz will end 
        endQuiz();
    }
}
    
    //  now when the quiz end the result area of the user displayed so for that the endQuiz() function is created  
    function endQuiz() {
        // when all the questions are over then the question page disappeared
        // also the user result appeared
        questionPage.style.display="none";
        document.getElementById("userResult").style.display="block";
        document.getElementById("resultName").textContent= "Hello" + " " + username;
        //  all the id on result area in the html page are dynamically show the result of the user through the defined variables
        document.getElementById("attemptedQuestion").textContent = attemptedQuestion;
        document.getElementById("correctAnswer").textContent = correctQuestion;
        document.getElementById("wrongAnswer").textContent = attemptedQuestion - correctQuestion;
        const percentage =((correctQuestion / attemptedQuestion) * 100).toFixed(2) + "%";
        document.getElementById("scoreInPercentage").textContent = percentage;
    }
  
    GotoHome.addEventListener("click" , function () {
       
        document.getElementById("home_page").style.display="block";
        document.getElementById("userResult").style.display="none";
        displayName.textContent="";
        quizDetails.textContent="";
        nameInput.value= "";
        quizCategory.style.display="none";

        document.getElementById("resultName").textContent = "";
        document.getElementById("attemptedQuestion").textContent = "";
        document.getElementById("correctAnswer").textContent = "";
        document.getElementById("wrongAnswer").textContent = "";
        document.getElementById("scoreInPercentage").textContent = "";
        // Optionally, reset other variables or data
        attemptedQuestion = 0;
        correctQuestion = 0;
        score = 0;
        // Optionally, clear the selected category
        currentCategory = null;
        // Optionally, clear the selected option styles
        for (let i = 0; i < 4; i++) {
            const option = document.getElementById("option" + (i + 1));
            option.style.backgroundColor = "";
        }
        // Optionally, reset the timer
        clearInterval(time);
        sec = totalTime;
        // Optionally, clear the displayed question and next button
      
    })
    restart.addEventListener("click" , function () {
       document.getElementById("userResult").style.display="none";
       document.getElementById("home_page").style.display-"block";
       attemptedQuestion= 0; 
       correctQuestion= 0;
       score = 0;
       

       startQuiz();

    })
    // after the result area shown to user these is button displayed if the user wants to go back to home page then click on that button. 
    // GotoHome is variable in which the id GotoHome is stored and a event listener  is applied on click to the button the result page disappeared and home page appeared
    
   
// In this the javacript code ended and also all the funtion are defined above 
     
    
 
    
















