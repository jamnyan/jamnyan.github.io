let videoList = document.querySelectorAll('.video-list .list');

videoList.forEach(vid => {
    vid.onclick = () =>{
        let src = vid.querySelector('.list-video').src;
        console.log(src);
        document.querySelector('.main-video').src = src;
        document.querySelector('.main-video').play();
    }
});