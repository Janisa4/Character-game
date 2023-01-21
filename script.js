$(".start").show();
$(".blankSpace").hide();
$(".retry").hide();
$(".answer").hide();
$(".albs").show();
$(".feeling").hide();
$(".person").hide();
$(".numberThree").hide();
$(".personalityOne").hide();
$(".discription").show();

var counter=0;

$(".start").click(function(){
    $(".feeling").show();
    $(".numberThree").show();
    $(".person").show();
    $(".personalityOne").show();
    $(".answer").show();
    $(".start").hide();
    $(".discription").hide();
    
});
$(".answer").click(function() {
    counter += 1;
    $(".counter").text("This quiz has been taken " + counter + " times");
    var number=Number($(".numberThree").val());
    var personality=$(".personalityOne").val();
    $(".answer").hide();
    $(".retry").show();
    $(".feeling").hide();
    $(".person").hide();
    $(".retry").show();
    $(".blankSpace").show();
    $(".personalityOne").hide();
    $(".numberThree").hide();

    if (number <=3 && personality==="reserved") {
        $(".blankSpace").text("Based on your answers your album is Thriller. You are a timid at first but then once people get to know you, you're very outgoing."); $(".albs").attr("src","https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png");
    }
    else if (number <=6 && personality==="cool") {
        $(".blankSpace").text("Based on your answers your album is Bad.You think you're so cool and popular, but in a good way."); $(".albs").attr("src","https://upload.wikimedia.org/wikipedia/en/5/51/Michael_Jackson_-_Bad.png");        
    }
    else if (number <=9 && personality==="strong") {
        $(".blankSpace").text("Based on your answers your album is Invincible.you don't care about what others say about you,and you stick to what you believe in despite what others think."); $(".albs").attr("src","https://m.media-amazon.com/images/I/51UCvsfk9wL._SY580_.jpg");
    }
    else if (number ===10 &&personality==="loving") {
        $(".blankSpace").text("Based on your answers your album is Off the Wall.You are a very romantic and loving person and you care about all the people in your life."); $(".albs").attr("src","https://media.pitchfork.com/photos/5929b3a1ea9e61561daa6b11/1:1/w_600/a6db7cdb.jpg");
    }    
    else{
    alert("Invalid input try again.");      
    $(".blankSpace").hide();
    }    
});

$(".retry").click(function(){
$(".albs").attr("src","https://pbs.twimg.com/media/FOJrHhDXMAgPAqe.jpg:large"); 
    $("h1").text("What Michael Jackson album are you?");
    $(".answer").show();
    $(".personalityOne").show();
    $(".numberThree").show();    
    $(".feeling").show();
    $(".person").show();    
    $(".retry").hide();
    $(".blankSpace").hide();
});