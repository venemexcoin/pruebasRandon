let animationExample = document.querySelector('.animation_exmple_01');
let animationCounter = document.querySelector('.animation_exmple_01 span');
let animationPaused = false

let animation = anime({
    targets: [animationExample],
    duration: 1500,
    delay:100,
    direction: 'alternate', 
    loop: 3,
    endDelay:1000,
    easing:'easeInOutSine',

    translateX: 500,
    backgroundColor: '#333',
    rotate:'2turn',
    scale: ['1.2','.8','.1','1.5'],
    autoplay: false
});

let animation02 = anime({
    targets:[animationCounter],

    duration: 1500,
    delay: 100,
    direction: 'alternate', 
    loop: 3,
    endDelay: 1000,
    easing:'easeInOutSine', 

    innerHTML: [1,100],
    round: 1,
    autoplay: false
});

/*document.addEventListener('click', () => {
   if(!animationPaused){
    animation.play();
    animation02.play();
   }else {
    animation.pause();
    animation02.pause();
   }
   animationPaused = !animationPaused;
});*/

document.addEventListener('click',() => {
    if(animation.began){
        animation.complited = false;
        animation02.complite = false;

        animation.reverse();
        animation02.reverse();
    }else {
        animation.play();
        animation02.play();
    }
});