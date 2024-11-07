const parallax = document.querySelector('.out-box')
const parallaxLayer = document.querySelectorAll('.parallax__layer')
const showBox = document.querySelector('.parallax__cover')

//监听滚动实现视差效果
parallax.addEventListener('scroll', function() {
    const scrollTop = parallax.scrollY || parallax.scrollTop;
    parallaxLayer.forEach(function(layer,index) {
        // console.log('layer', layer, index);
        const speed = (index-6) / 15
        layer.style.transform = `translateY(${-(scrollTop * speed)}px)`
        // if(index == 6){
        //     showBox.style.transform = `translateY(${-(scrollTop * speed)}px)`
        // }
    })
})


// 首页时间部分
const time = document.querySelector('.time');

function showTime(dom) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours()<10?'0'+date.getHours():date.getHours();
    const minute = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
    const second = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
    // dom.innerHTML = `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
    dom.innerHTML = `${hour}:${minute}:${second}`;
}

showTime(time);
setInterval(function() {
    showTime(time);
}, 1000);
