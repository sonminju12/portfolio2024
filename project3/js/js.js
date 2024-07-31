$(document).ready(function () {
    // nav li click
    // 1.순번찾기
    // 2.클릭한 순번에 맞춰 article에게 class값 주기
    $('nav li').click(function () {

        var i = $(this).index()
        console.log(i)

        if(i==5)i=9
        $('article').removeClass('on')
        $('article').eq(i).addClass('on')

        $('nav li').removeClass('on')
        $('nav li').eq(i).addClass('on')
    });



    // Album1을 클릭하면, 클릭한 앨범의 내용으로 ALBUM_CD가 변경된다
    $('.Album1').click(function () {

    })




    // .play 클릭시, ALBUM_CD img가 회전한다
    $('.fa-play').click(function () {
        $('.ALBUM_CD img').removeClass('on')
        $('.ALBUM_CD img').addClass('on')
        $(this).css({ 'display': 'none' })
        $('.ALBUM_CD .playBtn li:nth-child(3) .fa-pause').css({ 'opacity': 0 }).stop().animate({ 'opacity': '1' })

        $('.timeBar').addClass('play')
        $('.timeBar').removeClass('stop')

        // timeBar가 움직인다
        

        // playTime 초가 진행된다
    })

    $('.fa-pause').click(function () {
        $('.ALBUM_CD img').removeClass('on')
        $('.ALBUM_CD .playBtn li:nth-child(3) .fa-pause').css({ 'opacity': 0 })
        $('.fa-play').css({ 'display': 'block' })

        $('.timeBar').addClass('stop')
    })






    // 타이핑
    const content1 = "SEO";
    const content2 = "IN";
    const content3 = "GUK";

    const text1 = document.querySelector(".typing1");
    const text2 = document.querySelector(".typing2");
    const text3 = document.querySelector(".typing3");

    let i = 0;
    let ii = 0;
    let iii = 0;

    function typing1() {
        if (i < content1.length) {
            let txt1 = content1.charAt(i);
            text1.innerHTML += txt1;
            i++;
        }
    }

    function typing2() {
        if (ii < content2.length) {
            let txt2 = content2.charAt(ii);
            text2.innerHTML += txt2;
            ii++;
        }
    }

    function typing3() {
        if (iii < content3.length) {
            let txt3 = content3.charAt(iii);
            text3.innerHTML += txt3;
            iii++;
        }
    }


    function time1() {

        setInterval(typing1, 200)
    }


    function time2() {

        setInterval(typing2, 200)
    }

    function time3() {

        setInterval(typing3, 200)
    }



    setTimeout(time1, 100);
    setTimeout(time2, 1000);
    setTimeout(time3, 1800);



    //눈
    $(document).ready(function () {
        $(document).snowfall({
            minSize: 5,
            maxSize: 10,
            round: true,
            maxSpeed : 0.5,
            maxSize : 8,
            flakeCount : 20
        })
    });

























}) //끝