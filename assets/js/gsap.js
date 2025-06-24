var tl = gsap.timeline()

// Header Start
tl.from('.logo img, #show li a, .section-header button',{
    y:-10,
    opacity:0,
    deley:0.3,
    duration:0.5,
    stagger:0.15,
})
// Header End

// Banner Start
function banner(){
    tl.from('.banner-content, .banner-img',{
        y:100,
        opacity:0,
        deley:0.5,
        duration:1,
        stagger:0.20,
    },"-=1")
}
banner();
// Banner End

// Services Start 
function services(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".services",
            scroller:"body",
            // markers:true,
            start: "top 100%",
            end: "top 50%",
            scrub:4,
        }
    })
    tl2.from('.services h2',{
        y:100,
        duration:1,
        delay:1,
        opacity:0,
    })
    
    tl2.from('.services .rw-1.left-side',{
        x:-300,
        duration:1,
        delay:1,
        opacity:0,
    },"anim1")
    
    tl2.from('.services .rw-1.right-side',{
        x:300,
        duration:1,
        delay:1,
        opacity:0,
    },"anim1")
    
    
    tl2.from('.services .rw-2.left-side',{
        x:-300,
        duration:1,
        delay:1,
        opacity:0,
    },"anim2")
    
    tl2.from('.services .rw-2.right-side',{
        x:300,
        duration:1,
        delay:1,
        opacity:0,
    },"anim2")
}
services();
// Services End


// Business Stand Start
function businessStand(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".business-stand",
            scroller:"body",
            // markers:true,
            start: "top 90%",
            end: "top 50%",
            scrub:4,
        }
    })
    
    tl3.from('.business-stand .section-title',{
        x:-300,
        duration:1,
        delay:1,
        opacity:0,
    },"anim")
    tl3.from('.business-stand .section-content p',{
        x:300,
        duration:1,
        delay:1,
        opacity:0,
    },"anim")
    tl3.from('.business-stand .left-box, .business-stand .right-box ',{
        y:100,
        duration:1,
        delay:1,
        opacity:0,
    },"anim")
}
businessStand();
// Business Stand End

// Projects Start
function projects(){
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:".projects",
            scroller:"body",
            start: "top 90%",
            end: "top 50%",
            scrub:4,
        }
    })
    
    tl4.from('.projects h2, .projects .swiper',{
        y:300,
        duration:1,
        delay:1,
        opacity:0,
    })
}
projects();
// Projects End

// Process Start 
function process(){
    var tl5 = gsap.timeline({
        scrollTrigger:{
            trigger:".working-process",
            scroller:"body",
            start: "top 90%",
            end: "top 50%",
            scrub:4,
        }
    })
    
    tl5.from('.working-process .left-content',{
        y:300,
        duration:1.5,
        delay:1,
        opacity:0,
    })
    tl5.from('.working-process .right-content .accordion-item',{
        y:300,
        duration:1,
        delay:0.5,
        opacity:0,
        stagger:0.15,
    })
}
process();
// Process End

// Testimonials Start 
function testimonials(){
    var tl6 = gsap.timeline({
        scrollTrigger:{
            trigger:".testimonials",
            scroller:"body",
            // markers:true,
            start: "top 60%",
            end: "top 20%",
            scrub:4,
        }
    })
    
    tl6.from('.testimonials h2',{
        y:300,
        duration:1,
        delay:1,
        opacity:0,
    })
    tl6.from('.testimonials .testi-box',{
        y:300,
        duration:5,
        delay:1.5,
        opacity:0,
        stagger:1.5,
    })
}
testimonials();
// Testimonials End

// Team Start 
function team(){
    var tl7 = gsap.timeline({
        scrollTrigger:{
            trigger:".team",
            scroller:"body",
            // markers:true,
            start: "top 90%",
            end: "top 20%",
            scrub:4,
        }
    })
    
    tl7.from('.team h2',{
        y:300,
        duration:2,
        delay:1,
        opacity:0,
    })
    tl7.from('.team .team-box',{
        y:300,
        duration:5,
        delay:1,
        opacity:0,
        stagger:1,
    })
}
team();
// Team End

// Contact Start 
function team(){
    var tl8 = gsap.timeline({
        scrollTrigger:{
            trigger:"footer",
            scroller:"body",
            // markers:true,
            start: "top 90%",
            end: "top 20%",
            scrub:4,
        }
    })
    

    tl8.from('footer .contact-details',{
        y:300,
        duration:5,
        delay:1,
        opacity:0,
    })
    tl8.from('footer .contact-form',{
        y:300,
        duration:5,
        delay:1,
        opacity:0,
    })
    tl8.from('footer .copyright',{
        y:30,
        duration:5,
        delay:1,
        opacity:0,
    })
}
contact();
// Contact End