$(document).ready(function (){

    const content1 = "ABOUT THE PERFUME";

    const text1 = document.querySelector(".typing");

    let i = 0;

    function typing() {
        if (i < content1.length) {
            let txt1 = content1.charAt(i);
            text1.innerHTML += txt1;
            i++;
        }
    }

    function time() {
        setInterval(typing, 200)
    }

    setTimeout(time, 100);




    // shopTxt2 like i 클릭시 첫번째i가 나타난다

    $('.shopTxt2 .like .black').click(function(){
        $('.like .pink').css({'z-index':'1'})
        $('.like .black').css({'z-index':'0'})
    })

    $('.shopTxt2 .like .pink').click(function(){
        $('.like .black').css({'z-index':'1'})
        $('.like .pink').css({'z-index':'0'})
    })


    //ml1  click on
    $('.ml1').click(function(){
        $('.ml2').removeClass('on')
        $('.ml1').addClass('on')
    })

    $('.ml2').click(function(){
        $('.ml1').removeClass('on')
        $('.ml2').addClass('on')
    })






}); //끝