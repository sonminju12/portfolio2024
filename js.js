$(document).ready(function () {
    // 컨셉뷰 클릭하면 shop이 보여라
    $('.conceptBtn1').click(function (e) {
        //a링크 무력화
        e.preventDefault()
        $('.popUp1').css({ 'display': 'flex' })


        //shop reset을 클릭하면 shop이 사라진다
        $('.reset').click(function (e) {
            //button 무력화
            $('.popUp1').css({ 'display': 'none' })
        })
    });


    // 컨셉뷰 클릭하면 shop이 보여라
    $('.conceptBtn2').click(function (e) {
        //a링크 무력화
        e.preventDefault()
        $('.popUp2').css({ 'display': 'flex' })


        //shop reset을 클릭하면 shop이 사라진다
        $('.reset').click(function (e) {
            //button 무력화
            $('.popUp2').css({ 'display': 'none' })
        })
    });


    // 컨셉뷰 클릭하면 shop이 보여라
    $('.conceptBtn3').click(function (e) {
        //a링크 무력화
        e.preventDefault()
        $('.popUp3').css({ 'display': 'flex' })


        //shop reset을 클릭하면 shop이 사라진다
        $('.reset').click(function (e) {
            //button 무력화
            $('.popUp3').css({ 'display': 'none' })
        })
    });

    // 라벨이미지에 마우스를 올리면 사라진다
    $('.label img').mouseenter(function(){
        $(this).css({'display': 'none'})
    })


}) //끝