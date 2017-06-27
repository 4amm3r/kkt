function changeImage(current, direction) {
	var imagesNumber = 3;
    if(current < 1){
        current = imagesNumber;
    }
    if(current > 3){
        current = 1;
    }
    var xAmount = "100";
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // some code..
        xAmount = "5";
    }

    var transition = "+=" + xAmount;
    var transitionback = "-=" + xAmount;

    if (direction == -1) {
        transition = "-=" + xAmount;
        transitionback = "+=" + xAmount;
    } else if (direction == 0) {
        transition = "-=0";
        transitionback = "+=0";
    }

    $("#normal" + currentImage).animate({
        'left': transition,
        'opacity' : 0.25
    }, 300, function() {
        $(this).hide();
        $(this).css('left', transitionback);
        $(this).css('opacity', 1);
        $("#normal" + current).fadeIn(300);
    });
    currentImage = current;

}
var currentImage = 1;

function changeCardImage(current, direction) {
	var imagesNumber = 3;
    if(current < 1){
        current = imagesNumber;
    }
    if(current > 3){
        current = 1;
    }
    var xAmount = "100";
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // some code..
        xAmount = "5";
    }

    var transition = "+=" + xAmount;
    var transitionback = "-=" + xAmount;

    if (direction == -1) {
        transition = "-=" + xAmount;
        transitionback = "+=" + xAmount;
    } else if (direction == 0) {
        transition = "-=0";
        transitionback = "+=0";
    }

    $("#card" + currentCardImage).animate({
        'left': transition,
        'opacity' : 0.25
    }, 300, function() {
        $(this).hide();
        $(this).css('left', transitionback);
        $(this).css('opacity', 1);
        $("#card" + current).fadeIn(300);
    });
    currentCardImage = current;

}
var currentCardImage = 1;

var petnumber = 1;
function addpet(){
    var row = "<tr class='addpet"+petnumber+"'><td><label class='halfinput'>Pet Name</label><input class='halfinput' name='petname' id='name" + petnumber + "' type='text'></td><td><label class='halfinput'>Description</label><select class='halfinput' name='petinfo' id='animal" + petnumber + "'><td><img class='peticons' id='addpet" + petnumber + "' src='images/misc/minus.png'/></td><td><img class='peticons' id='addpetbutton" + petnumber + "' src='images/misc/add.png'/></td></tr>"
    $('#addpet' +petnumber).name = petnumber;
    $('#pettable').append(row);
    
    $('#addpet' +petnumber).on('click', function(){
        $('tr').remove("."+this.id);
        petnumber-=1;
    });
    $('#addpetbutton' +petnumber).on('click', function(){
        addpet();
    });
    petnumber+=1;
}