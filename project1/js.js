$(document).ready(function(){
// 주변관광지 이미지에 마우스를 올리면 텍스트가 보여라
$('.imgBox1 img').mouseenter(function(){
    $('.section7 .txtBox1').css({'left' : 0}).stop().animate({'left':'40%'},1000)
})
$('.imgBox1 img').mouseleave(function(){
    $('.section7 .txtBox1').css({'left' : '40%'}).stop().animate({'left':'0'},1000)
})

$('.imgBox2 img').mouseenter(function(){
    $('.section7 .txtBox2').css({'right' : 0}).stop().animate({'right':'40%'},1000)
})
$('.imgBox2 img').mouseleave(function(){
    $('.section7 .txtBox2').css({'right' : '40%'}).stop().animate({'right':'0'},1000)
})










})  // 끝