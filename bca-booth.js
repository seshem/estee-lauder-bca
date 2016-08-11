// JavaScript File

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
            
        case "6":
            showPage6();
            break;
            
        case "7":
            showPage7();
            break;
            
        case "8":
            showPage8();
            break;
            
            
    }
    
}

function showPage1(){
    $('#page1').fadeTo(300, 1);
    $('#page2, #page3, #page4, #page5, #page6, #page7, #page8').hide();
}
function showPage2(){
    $('#page2').fadeTo(300, 1);
    $('#page1, #page3, #page4, #page5, #page6, #page7, #page8').hide();
}
function showPage3(){
    $('#page1, #page2, #page4, #page5, #page6, #page7, #page8').hide();
    $('#page3').fadeTo(300, 1);
}
function showPage4(){
    $('#page1, #page2, #page3, #page5, #page6, #page7, #page8').hide();
    $('#page4').fadeTo(300, 1);
}
function showPage5(){
    $('#page1, #page2, #page3, #page4, #page6, #page7, #page8').hide();
    $('#page5').fadeTo(300, 1);
}
function showPage6(){
    $('#page1, #page2, #page3, #page4, #page5, #page7, #page8').hide();
    $('#page6').fadeTo(300, 1);
}
function showPage7(){
    $('#page1, #page2, #page3, #page4, #page5, #page6, #page8').hide();
    $('#page7').fadeTo(300, 1);
}
function showPage8(){
    $('#page1, #page2, #page3, #page4, #page5, #page6, #page7').hide();
    $('#page8').fadeTo(300, 1);
}

$('section').on('click', function(){
    var thisSection = $(this).attr('id');
})

showPage('1');


jQuery(document).ready(function(){
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
});
