
$(document).ready(function(){
    let category = localStorage.getItem("selectedCategory");
    
    if(category === "science"){
        renderScienceQuestion();
    }
     else if(category === "maths"){
        renderMathsQuestion();
    }
     else if(category === "hindi"){
        renderHindiQuestion();
    }
     else if(category === "computer"){
        renderComputerQuestion();
    }
     else if(category === "gk"){
        renderGKQuestion();
    }
});

let quizMathsData = []; // store questions globally
let quizScienceData = [];  // store questions globally
let  quizGKData= [];  // store questions globally
let quizHindiData = [];  // store questions globally
let quizComputerData = [];  // store questions globally

function renderScienceQuestion(){
    let no = 1;
    $.ajax({
        url: 'data/science.json',
        type: 'GET',
        success: function (data) {
            quizScienceData = data; // save for later use
            $.each(data, function (key, x) {
                $('.quiz-container').append(`
                    <h2>${no}. ${x.question}</h2>        
                    <input type="radio" name="answer${no}" value="${x.options[0]}"> ${x.options[0]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[1]}"> ${x.options[1]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[2]}"> ${x.options[2]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[3]}"> ${x.options[3]}<br><br>
                `);
                no++;
            });

            $('.quiz-container').append('<button id="submitbtn">Submit</button>');

            $('#submitbtn').on('click', function (e) {
                e.preventDefault();
                checkScience();
            });
        }
    });


}
function checkScience() {
   let score = 0;
    $.each(quizScienceData, function (index, question) {
        let qNum = index + 1;
        let selected = $(`input[name="answer${qNum}"]:checked`).val();
        if (selected == question.answer) {
            score++;
        }
    });
     let message = "";
    if (score === quizScienceData.length) {
        message = "🎉 Perfect! You're a genius!";
    } else if (score > quizScienceData.length / 2) {
        message = "👍 Good job! Keep it up!";
    } else {
        message = "📚 Keep practicing, you'll get there!";
    }

    // insert into .result and show it
    $('.result').html(`<h2>Your Score</h2><p>${score} / ${quizScienceData.length}</p><p>${message}</p>`).fadeIn();
}


function renderMathsQuestion() {
    let no = 1;
    $.ajax({
        url: 'data/maths.json',
        type: 'GET',
        success: function (data) {
            quizMathsData = data; // save for later use
            $.each(data, function (key, x) {
                $('.quiz-container').append(`
                    <h2>${no}. ${x.question}</h2>        
                    <input type="radio" name="answer${no}" value="${x.options[0]}"> ${x.options[0]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[1]}"> ${x.options[1]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[2]}"> ${x.options[2]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[3]}"> ${x.options[3]}<br><br>
                `);
                no++;
            });

            $('.quiz-container').append('<button id="submitbtn">Submit</button>');

            $('#submitbtn').on('click', function (e) {
                e.preventDefault();
                checkMaths();
            });
        }
    });
}

function checkMaths() {
    let score = 0;
    $.each(quizMathsData, function (index, question) {
        let qNum = index + 1;
        let selected = $(`input[name="answer${qNum}"]:checked`).val();
        if (selected == question.answer) {
            score++;
        }
    });
     let message = "";
    if (score === quizMathsData.length) {
        message = "🎉 Perfect! You're a genius!";
    } else if (score > quizMathsData.length / 2) {
        message = "👍 Good job! Keep it up!";
    } else {
        message = "📚 Keep practicing, you'll get there!";
    }

    // insert into .result and show it
    $('.result').html(`<h2>Your Score</h2><p>${score} / ${quizMathsData.length}</p><p>${message}</p>`).fadeIn();
}
function renderHindiQuestion(){
    let no = 1;
    $.ajax({
        url: 'data/hindi.json',
        type: 'GET',
        success: function (data) {
            quizHindiData = data; // save for later use
            $.each(data, function (key, x) {
                $('.quiz-container').append(`
                    <h2>${no}. ${x.question}</h2>        
                    <input type="radio" name="answer${no}" value="${x.options[0]}"> ${x.options[0]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[1]}"> ${x.options[1]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[2]}"> ${x.options[2]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[3]}"> ${x.options[3]}<br><br>
                `);
                no++;
            });

            $('.quiz-container').append('<button id="submitbtn">Submit</button>');

            $('#submitbtn').on('click', function (e) {
                e.preventDefault();
                checkHindi();
            });
        }
    });

}
function checkHindi() {
    let score = 0;
    $.each(quizHindiData, function (index, question) {
        let qNum = index + 1;
        let selected = $(`input[name="answer${qNum}"]:checked`).val();
        if (selected == question.answer) {
            score++;
        }
    });
    let message = "";
    if (score === quizHindiData.length) {
        message = "🎉 Perfect! You're a genius!";
    } else if (score > quizHindiData.length / 2) {
        message = "👍 Good job! Keep it up!";
    } else {
        message = "📚 Keep practicing, you'll get there!";
    }

    // insert into .result and show it
    $('.result').html(`<h2>Your Score</h2><p>${score} / ${quizHindiData.length}</p><p>${message}</p>`).fadeIn();
}
function renderComputerQuestion(){
    let no = 1;
    $.ajax({
        url: 'data/computer.json',
        type: 'GET',
        success: function (data) {
            quizComputerData = data; // save for later use
            $.each(data, function (key, x) {
                $('.quiz-container').append(`
                    <h2>${no}. ${x.question}</h2>        
                    <input type="radio" name="answer${no}" value="${x.options[0]}"> ${x.options[0]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[1]}"> ${x.options[1]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[2]}"> ${x.options[2]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[3]}"> ${x.options[3]}<br><br>
                `);
                no++;
            });

            $('.quiz-container').append('<button id="submitbtn">Submit</button>');

            $('#submitbtn').on('click', function (e) {
                e.preventDefault();
                checkComputer();
            });
        }
    });
}
function checkComputer() {
    let score = 0;
    $.each(quizComputerData, function (index, question) {
        let qNum = index + 1;
        let selected = $(`input[name="answer${qNum}"]:checked`).val();
        if (selected == question.answer) {
            score++;
        }
    });
    let message = "";
    if (score === quizComputerData.length) {
        message = "🎉 Perfect! You're a genius!";
    } else if (score > quizComputerData.length / 2) {
        message = "👍 Good job! Keep it up!";
    } else {
        message = "📚 Keep practicing, you'll get there!";
    }

    // insert into .result and show it
    $('.result').html(`<h2>Your Score</h2><p>${score} / ${quizComputerData.length}</p><p>${message}</p>`).fadeIn();
}
function renderGKQuestion(){
    let no = 1;
    $.ajax({
        url: 'data/GK.json',
        type: 'GET',
        success: function (data) {
            quizGKData = data; // save for later use
            $.each(data, function (key, x) {
                $('.quiz-container').append(`
                    <h2>${no}. ${x.question}</h2>        
                    <input type="radio" name="answer${no}" value="${x.options[0]}"> ${x.options[0]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[1]}"> ${x.options[1]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[2]}"> ${x.options[2]}<br>
                    <input type="radio" name="answer${no}" value="${x.options[3]}"> ${x.options[3]}<br><br>
                `);
                no++;
            });

            $('.quiz-container').append('<button id="submitbtn">Submit</button>');

            $('#submitbtn').on('click', function (e) {
                e.preventDefault();
                checkGK();
            });
        }
    });


}
function checkGK() {
    let score = 0;
    $.each(quizGKData, function (index, question) {
        let qNum = index + 1;
        let selected = $(`input[name="answer${qNum}"]:checked`).val();
        if (selected == question.answer) {
            score++;
        }
    });
    let message = "";
    if (score === quizGKData.length) {
        message = "🎉 Perfect! You're a genius!";
    } else if (score > quizGKData.length / 2) {
        message = "👍 Good job! Keep it up!";
    } else {
        message = "📚 Keep practicing, you'll get there!";
    }

    // insert into .result and show it
    $('.result').html(`<h2>Your Score</h2><p>${score} / ${quizGKData.length}</p><p>${message}</p>`).fadeIn();
}



