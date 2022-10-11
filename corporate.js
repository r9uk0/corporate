window.addEventListener('DOMContentLoaded', (event) => {
    setHeaderFooter();
    //headerとfooter表示
    function setHeaderFooter() {
        const htmlHeader = '<header><nav><a href="https://aruruaruruaruru.github.io/corporate/index.html" class="headerLogo"><img src="https://aruruaruruaruru.github.io/corporate/img/fictionLogo.png" alt="架空コーポレートサイトのロゴ"></a><ul id="headerMenu"><li><a href="https://aruruaruruaruru.github.io/corporate/about/index.html">会社概要</a></li><li><a href="https://aruruaruruaruru.github.io/corporate/business/index.html">事業内容</a></li><li><a href="https://aruruaruruaruru.github.io/corporate/news/index.html">ニュース</a></li><li><a href="https://aruruaruruaruru.github.io/corporate/recruit/index.html">採用情報</a></li><li><a href="https://aruruaruruaruru.github.io/corporate/contact/index.html">お問い合わせ</a></li></ul><div id="hamburgerMenu"><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div></div></nav></header>';

        const htmlFooter = '<footer><div><div class="footerLogo"><a href=""><img src="https://aruruaruruaruru.github.io/corporate/img/fictionLogo.png" alt="架空コーポレートサイトのロゴ"></a><p>Copyright 2021 Aruru</p></div><div class="footerSNS"><a href="https://twitter.com/obakedeR"><img src="https://aruruaruruaruru.github.io/corporate/img/2021 Twitter logo - blue.png" alt="Twitterロゴ"></a><a href="https://www.youtube.com/channel/UCH3IK__gt16UrjcTfyRcySg"><img src="https://aruruaruruaruru.github.io/corporate/img/youtube_social_icon_red.png" alt="Youtubeロゴ"></a><a href="https://github.com/aruruAruruAruru"><img src="https://aruruaruruaruru.github.io/corporate/img/GitHub-Mark-120px-plus.png" alt="Githubロゴ"></a></div></div></footer>';

        const mainBody = document.querySelectorAll('main')[0];
        mainBody.insertAdjacentHTML('afterbegin', htmlHeader);
        mainBody.insertAdjacentHTML('beforeend', htmlFooter);
    }

    //tab以下でハンバーガーメニューを表示
    hamburgerMenu();
    //tab以下でハンバーガーメニューを表示
    function hamburgerMenu() {
        let hamburgerMenu = document.getElementById('hamburgerMenu');
        let headerMenu = document.getElementById('headerMenu');

        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('h30');
            hamburgerMenu.children[0].classList.toggle('rightBorder');
            hamburgerMenu.children[1].classList.toggle('centerBorder');
            hamburgerMenu.children[2].classList.toggle('leftBorder');
            headerMenu.classList.toggle('headerMenuDisp');
        });
    }
});
window.onload = function() {
    //トップのスライド
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        breakpoints: {
            // 768px以上の場合
            1280: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            }
        },
        spaceBetween: 12,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3500,
        },
    });

    //トップのシェード
    let shadeBox = document.getElementsByClassName('shadeBox');
    let shadeInner = document.getElementsByClassName('shadeInner');

}