container = document.getElementById("stagger-visualizer");
for (let i = 0; i < 200; i++) {
    myBox = document.createElement('div');
    myBox.classList.add("box");
    container.append(myBox);
}


const animation = anime.timeline({
    targets: '.box',
    easing: 'easeInOutExpo',
});

animation
    .add({
        rotate: () => {
            return anime.random(-360, 360)
        },
        translateX: () => {
            return anime.random(-550, 550)
        },
        translateY: () => {
            return anime.random(-350, 350)
        },
        duration: 3000,
        delay: anime.stagger(20, { easing: 'easeOutQuad' }),
        loop: true
    })
    .add({
        targets: '.menu',
        rotate: 0,
        translateX: 0,
        translateY: 0,
        duration: 3000,
        delay: anime.stagger(20, { easing: 'easeOutQuad' }),
    })
    .add({
        targets: '.menu',
        border: '#FFF 2px solid',
        translateX: function(el, i) {
            switch (i) {
                case 0:
                    {
                        dis = -180;
                        break;
                    }
                case 1:
                    {
                        dis = -60;

                        break;
                    }
                case 3:
                    {
                        dis = 180;
                        break;
                    }
                default:
                    {
                        dis = 60;
                        break;
                    }
            }
            return dis
        },
        duration: 1500,
        delay: anime.stagger(40, { easing: 'easeOutQuad' }),
    })