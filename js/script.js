$(document).ready(function(){
    $(document).on('click', '.science', function(){
        // Category save karo localStorage me
        localStorage.setItem("selectedCategory", "science");
        // New page pe jao
        window.location.href = "questionpage.html";
    });
        $(document).on('click', '.maths', function(){
        // Category save karo localStorage me
        localStorage.setItem("selectedCategory", "maths");
        // New page pe jao
        window.location.href = "questionpage.html";
    });
        $(document).on('click', '.hindi', function(){
        // Category save karo localStorage me
        localStorage.setItem("selectedCategory", "hindi");
        // New page pe jao
        window.location.href = "questionpage.html";
    });
        $(document).on('click', '.computer', function(){
        // Category save karo localStorage me
        localStorage.setItem("selectedCategory", "computer");
        // New page pe jao
        window.location.href = "questionpage.html";
    });
        $(document).on('click', '.gk', function(){
        // Category save karo localStorage me
        localStorage.setItem("selectedCategory", "gk");
        // New page pe jao
        window.location.href = "questionpage.html";
    });
});
