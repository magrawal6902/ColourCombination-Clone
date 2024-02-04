function timelineOne() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top ",
            end: "+=" + (window.innerHeight * 10),
            scrub: .01,
            pin: true,
        }
    });

    tl
        .to("#overlay #centerimg", {
            left: "50%",
            ease: Power1
        })
        .to("#circle", {
            scale: .2,
            ease: Power1
        }, 'same')
        .to("#overlay #purple", {
            top: '50%',
            ease: Power1
        }, 'same')
        .to("#overlay #mainh1", {
            top: '150%',
            ease: Power1
        }, 'same')
        .to("#overlay #centerimg img", {
            scale: 0,
            ease: Power1
        }, 'same')
        .to("#overlay #centerimg span", {
            opacity: 0,
            ease: Expo.easeInOut
        }, 'same')
        .to("#smcircle", {
            scale: .6,
            ease: Power1
        }, 'same')
        .to("#circle #btm img", {
            rotate: "-180deg",
            ease: Power1,
            stagger: .05
        }, 'same')
        .to("#imagecontainer img", {
            scale: 1.25,
            ease: Power0,
        }, "same")
        .to("#smcircle, #circle", {
            scale: 0,
            ease: Power1,
        }, "samesame")
        .to("#purple", {
            scale: 0,
            opacity: 0,
            ease: Power1,
        }, "samesame")
        .to("#overlay #sech1", {
            rotate: "0",
            bottom: 0,
            delay: -.2,
            ease: Power1,
        }, "samesame")
        .to("#sidepurple", {
            top: "0%",
            delay: -.4,
            ease: Power1,
        })
        .to("#sidepurple", {
            top: "-70%",
            delay: .2,
            ease: Power1,
        })
        .to("#imagecontainer img", {
            scale: 1,
            ease: Power0,
        }, "samesame")
}

function timelineTwo() {
    gsap.set("#soverlay #stop .circle", {top: "150%", scale: .5})
    
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            start: "top top",
            pin: true,
            scrub: .01,
            end: "+=" + (window.innerHeight * 12),
        }
    })

    tl2.to(".circle", {
        top: "50%",
        scale: 1,
        duration:3,
        ease: Power1,
        stagger: .1
    })
    .to(".circle", {
        top: "50%",
        duration:3,
        left: "50%",
        scale: 1,
        ease: Power1
    })
    .to(".circle", {
        scale: .7,
        duration:3,
        ease: Power1
    })
    .to(".circle", {
        scale: 10,
        duration:3,
        ease: Power1
    },"Z")
    .to("#number1", {
        top:'-100%',
        duration:3,
        ease:Power0,
    },"Z")
    .to("#number2", {
            display:"flex",
            top:'0%',
            duration:3,
            ease:Power0,
    },"Z")
    .to("#stop h1", {
        left: "-120%",
        duration: 10,
        ease: Power1
    }, "same")
    .to("#stop .pi", {
        background: `linear-gradient(to right, #D5A7B4, #B4AAD5)`,
        ease: Power1
    }, "same")
    .to("#wtop h1", {
        duration:10,
        left:"-100%",
        ease:Power0,
    },"c")
    .to("#number2", {
        display:"none",
        top:'-100%',
        delay:"-1",
        ease:Power0,
    },"b")
    .to("#number3", {
        display:"flex",
        top:'0%',
        delay:"-1",
        ease:Power0,
    },"b")
    .to("#text1", {
        opacity:0,
        delay:"-8",
        ease:Power0,
    },"c")
    .to("#wbtm2", {
        opacity:1,
        delay:"-7",
        ease:Power0,
    },"c")
    .to(".blocks", {
        top:'0%',
        duration:3,
        ease:Power0,
    })
    .to("#line1", {
        duration:3,
        display:"flex",
        left:'-15%',
        ease:Power0,
    },"g")
    .to("#line2", {
        duration:3,
        display:"flex",
        left:'-10%',
        ease:Power0,
    },"g")
}

window.addEventListener('DOMContentLoaded',function(){
    timelineOne();
    timelineTwo();
})