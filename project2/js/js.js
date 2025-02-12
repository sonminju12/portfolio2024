$(document).ready(function () {
    // 장바구니를 클릭하면 shop이 보여라
    $('.shopCart').click(function (e) {

        //a링크 무력화
        e.preventDefault()

        $('.shop').css({ 'display': 'flex' })


        //shop reset을 클릭하면 shop이 사라진다
        $('.reset').click(function (e) {

            //button 무력화

            $('.shop').css({ 'display': 'none' })
        })
    });

    // 변수
    let i = 0;
    //cart를 클릭했을때, 숫자(변수)가 증가하고 shopCart의 span에 출력
    $('.cart').click(function (e) {

        //a링크 무력화
        e.preventDefault()

        i++
        console.log(i)

        $('.shopCart').find('span').text(i)
        $('.cartList').find('span').text(i)



        // 나의 부모안에서 price를 찾아 금액을 출력해라
        let txt = $(this).parents('a').find('.price em').text()
        console.log(txt)

        // p안에있는 img 태그를 출력
        let timg = $(this).parents('a').find('p').html()
        console.log(timg)

        //shop list에 txt를 계속 출력되게해라
        $('.shop').find('.checkList').append('<div>' + (timg + txt) + '<div>')



    });

    // empty 틀릭했을때 장바구니의 숫자가 0이되어라
    $('.empty').click(function () {

        //변수 0이되라
        i = 0;

        $('.shopCart').find('span').text(i)
        $('.cartList').find('span').text(i)

        //shop list를 비워라
        $('.shop').find('.checkList').empty(i)
    });





    // 슬라이드

    $(document).ready(function () {
        var s = 0;

        setInterval(function () {
            s++;
            if (s == 4) s = 0;

            // .slider li를 왼쪽 100% 위치에 있던 1번이 왼쪽 0 움직이고,
            $('.slider li').eq(s-1).css({ 'left': 0 }).stop().animate({ 'left': '-100%' }, 2000);
            // .slider li를 왼쪽 0 위치에 있던 0번이 왼쪽 -100% 위치로 이동
            $('.slider li').eq(s).css({ 'left': '100%' }).stop().animate({ 'left': 0 }, 3000)
        }, 3000)
    });
}) //끝