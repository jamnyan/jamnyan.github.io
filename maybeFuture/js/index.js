const parallax = document.querySelector('.parallax')
const parallaxLayer = document.querySelectorAll('.parallax__layer')
const showBox = document.querySelector('.parallax__cover')

//监听滚动实现视差效果
parallax.addEventListener('scroll', function() {
    const scrollTop = parallax.scrollY || parallax.scrollTop;
    parallaxLayer.forEach(function(layer,index) {
        console.log('layer', layer, index);
        const speed = (index-8) / 15
        layer.style.transform = `translateY(${-(scrollTop * speed)}px)`
        if(index == 6){
            showBox.style.transform = `translateY(${-(scrollTop * speed)}px)`
        }
    })
})