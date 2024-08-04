console.log(window.innerWidth); // Показывает ширину окна браузера
console.log(document.body.clientWidth); // Показывает ширину <body>


const tl=gsap.timeline()

tl.fromTo('.SD1', {
    y: -150,
    x: -150,
    opacity: -1,
    
}, 
{
    y: -20,
    x: 60,
    opacity: 1,
    duration: 2
}, 0

). fromTo('.SelfDescription li', 
{
    x: -100,
    opacity: 0
    }, 
    {
    x: 0,
    opacity: 1,
    duration: 2
    }, 1
    
). fromTo('nav li', 
    {
        x: 2000,
        opacity: -1,
    },
    {
        x: 0,
        opacity: 1,
        duration: 3
    }, 0   
).fromTo('.SelfPhoto', 
    {
        x: 300,
        opacity: 0,
    }, 
    {
        x: 0,
        opacity: 1,
        duration: 2
    }, 1
). fromTo('.Initials', {
x: -500,
opacity: 0,
}, {
    x: 0,
    duration: 2,
    opacity: 1
}, 1    
). fromTo('.AL1', {
    x: -500,
    opacity: 0,
}, {
    x: 0,
    duration: 2,
    opacity: 1

}, 1). fromTo('.AL2', {
    x: -700,
    opacity: 0,
}, {
    x: 0,
    duration: 2,
    opacity: 1
}, 1). fromTo('.AL3', {
    x: -900,
    opacity: 0,
}, {
    x: 0,
    duration: 2,
    opacity: 1
}, 1). fromTo('.AL4', {
    x: -1100,
    opacity: 0,
}, {
    x: 0,
    duration: 2,
    opacity: 1
}, 1)

const tl2=gsap.timeline({
    scrollTrigger: {
        trigger: '.btnrec',
        start: 'bottom +=400px',
        // markers: true,
        // scrub: true,
    }
})

tl2.fromTo('.TP1', {
        y: -50,
        opacity: 0,
}, {
        y: 0,
        opacity: 1,
        duration: 1.5,
}, 0). fromTo('.TP2', {
        y: -50,
        opacity: 0,

}, {
        y: 0,
        opacity: 1,
        duration: 1.5,

}, 1). fromTo('.DrSpiller', {
        x: -150,
        opacity: 0,
}, {
        x: 0, 
        opacity: 1,
        duration: 2,
}, 2). fromTo('.Esthederm', {
        y: -100,
        opacity: 0, 
}, {
        y: 0,
        opacity: 1,
        duration: 2,
}, 2). fromTo('.Glymed', {
    y: -100,
    opacity: 0, 
}, {
    y: 0,
    opacity: 1,
    duration: 2,
}, 2). fromTo('.Renew', {
    x: 150,
    opacity: 0,
}, {
    x: 0, 
    opacity: 1,
    duration: 2,
}, 2)

    const tl3=gsap.timeline({
        scrollTrigger: {
            trigger: '.TP3',
            start: 'top +=600',
            // markers: true,
            // scrub: true,

        }
    })

    tl3.fromTo('.IP', {
        x: 300,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 2,
    })


const tl4=gsap.timeline({
    scrollTrigger: {
        trigger: '.TP3',
        start: 'top +=300',
        // markers: true,
        // scrub: true,
    }
})

tl4.fromTo('.PhotoItem1', {
    scale: 0.5,
    opacity: 0,
}, {
    opacity: 1,
    scale: 1,
    duration: 2,
}, 1). fromTo('.TextItem1', {
    x: 0,
    scale: 0,
    opacity: -1,
}, {
    x: 0,
    opacity: 1,
    scale: 1,
    duration: 2,
}, 0). fromTo('.PhotoItem2', {
    scale: 0.5,
    opacity: 0,
}, {
    opacity: 1,
    scale: 1,
    duration: 2,
}, 1). fromTo('.TextItem2', {
    x: 0,
    scale: 0,
    opacity: -1,
}, {
    x: 0,
    opacity: 1,
    scale: 1,
    duration: 2,
}, 0)

const tl5=gsap.timeline({
    scrollTrigger: {
        trigger: '.OP',
        start: 'top +=600',
        markers: true,
        // scrub: true,
    }
})

tl5.fromTo('.FC', {
    x: 0,
    y: 0,
    opacity: 0,
    
}, {
    x: 0,
    y: 100,
    opacity: 1,
    duration: 1,
}, 0). fromTo('.OP1', {
    x: 60,
    y: -40,
    opacity: -1,
}, {
    x: -30,
    opacity: 1,
    duration: 2,
}, 0). fromTo('.OP2', {
    x: 60,
    y: -40,
    opacity: -1,
}, {
    x: -30,
    opacity: 1,
    duration: 2.8,
}, 0). fromTo('.OP3', {
    x: 60,
    y: -40,
    opacity: -1,
}, {
    x: -30,
    opacity: 1,
    duration: 3.6,
}, 0). fromTo('.OP4', {
    x: 60,
    y: -40,
    opacity: -1,
}, {
    x: -30,
    opacity: 1,
    duration: 4.4,
}, 0). fromTo('.OPP1', {
    x: -60,
    y: -40,
    opacity: -1,
}, {
    x: 30,
    opacity: 1,
    duration: 2,
}, 0). fromTo('.OPP2', {
    x: -60,
    y: -40,
    opacity: -1,
}, {
    x: 30,
    opacity: 1,
    duration: 2.8,
}, 0). fromTo('.OPP3', {
    x: -60,
    y: -40,
    opacity: -1,
}, {
    x: 30,
    opacity: 1,
    duration: 3.6,
}, 0). fromTo('.OPP4', {
    x: -60,
    y: -40,
    opacity: -1,
}, {
    x: 30,
    opacity: 1,
    duration: 4.4,
}, 0)















fromTo('.OPP1, .OPP2, .OPP3, .OPP4', {
    x: -120,
    y: -40,
    opacity: -1,
}, {
    x: 100,
    opacity: 1,
    duration: 2,
}, 1)

const container = document.querySelector('.ItemsContent1');
const content = document.querySelector('.CC1');

const clonedContent = content.cloneNode(true);
container.appendChild(clonedContent);