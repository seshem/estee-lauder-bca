function showPage(whichPage) {

    switch (whichPage){
        case "1":
            showPage1();
            break;
            
        case "2":
            showPage2();
            break;
            
        case "3":
            showPage3();
            break;
            
        case "4":
            showPage4();
            break;
            
        case "5":
            showPage5();
            break;
            
        case "6a":
            showPage6a();
            break;
            
        case "6b":
            showPage6b();
            break;
    }
    
}

function showPage1(){
    $('#page1').fadeTo(300, 1);
    $('#page2, #page3, #page4, #page5, #page6a, #page6b').hide();
}
function showPage2(){
    $('#page2').fadeTo(300, 1);
    $('#page1, #page3, #page4, #page5, #page6a, #page6b').hide();
}
function showPage3(){
    $('#page1, #page2, #page4, #page5, #page6a, #page6b').hide();
    $('#page3').fadeTo(300, 1);
}
function showPage4(){
    $('#page1, #page2, #page3, #page5, #page6a, #page6b').hide();
    $('#page4').fadeTo(300, 1);
}
function showPage5(){
    $('#page1, #page2, #page3, #page4, #page6a, #page6b').hide();
    $('#page5').fadeTo(300, 1);
}
function showPage6a(){
    $('#page1, #page2, #page3, #page4, #page5, #page6b').hide();
    $('#page6a').fadeTo(300, 1);
}
function showPage6b(){
    $('#page1, #page2, #page3, #page4, #page5, #page6a').hide();
    $('#page6b').fadeTo(300, 1);
}


$('section').on('click', function(){
    var thisSection = $(this).attr('id');
})

showPage('1');