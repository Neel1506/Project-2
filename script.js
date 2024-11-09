
let mm = gsap.matchMedia();
mm.add("(min-width: 800px)", () => {
  var Timeline = gsap.timeline({
    scrollTrigger:{
        trigger:'.two',
        start:'0% 95%',
        end:"50% 50%",
        scrub:1,
        // markers: "false",

    }
})

Timeline.to("#fanta",{
    top:"125%",
    left:"5%",
    width:"35%",
    ease: "power3.out",
},'orange')

Timeline.to("#orange-cut",{
    top:"170%",
    left:"25%",
    width:"10%",
    ease: "power3.out"
},'orange')

Timeline.to("#orange",{
    top:"180%",
    left:"80%",
    width:"20%",
    ease: "power3.out"
},'orange')

Timeline.to("#leaf",{
    top:"120%",
    left:"80%",
    rotate:'150deg',
    ease: "power3.out"
},'orange')


var Timeline2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.three',
        start:' 70% 95%',
        end:"70% 70%",
        scrub:3,
        // markers: "true",

    }
},'lemon')
 Timeline2.from("#lemon",{
    top:"110%",
    rotate:"-90deg",
    left:"-50%",
 },'lemon')

 Timeline2.from("#lemon2",{
    top:"110%",
    rotate:"90deg",
    right:"-50%",
 },'lemon')

 Timeline2.to("#orange-cut",{
    top:"212%",
    left:"42%",
    width:"17%"
 },'lemon')

 Timeline2.to("#fanta",{
    top:"227%",
    left:"33%"
 },'lemon')

 Timeline2.to("#orange",{
    top:"260%",
    left:"46%",
    width:"18%"
 },'lemon')


//  gsap.to("#fanta", {
//     rotation: 360,
//     yoyo: true,
//     repeat: -1,
//     duration: 10,
//     ease: "power1.inOut",
//     yoyoEase: "bounce.inOut",
//     transformOrigin: "center"
//   }); 
gsap.to("#fanta", {
    y: -20, // Adjust the float height
    duration: 1.5, // Duration of the float up and down
    ease: "power1.inOut", // Easing function
    yoyo: true, // Makes the animation go back and forth
    repeat: -1 // Repeats the animation indefinitely
  });

  gsap.to("#lemon", {
    y: -20, // Adjust the float height
    duration: 1.5, // Duration of the float up and down
    ease: "power1.inOut", // Easing function
    yoyo: true, // Makes the animation go back and forth
    repeat: -1 // Repeats the animation indefinitely
  });


  gsap.to("#lemon2", {
    y: -20, // Adjust the float height
    duration: 1.5, // Duration of the float up and down
    ease: "power1.inOut", // Easing function
    yoyo: true, // Makes the animation go back and forth
    repeat: -1 // Repeats the animation indefinitely
  });
  gsap.to("#orange", {
    y: -20, // Adjust the float height
    duration: 1.5, // Duration of the float up and down
    ease: "power1.inOut", // Easing function
    yoyo: true, // Makes the animation go back and forth
    repeat: -1 // Repeats the animation indefinitely
  });

  gsap.to("#orange-cut", {
    y: -20, // Adjust the float height
    duration: 1.5, // Duration of the float up and down
    ease: "power1.inOut", // Easing function
    yoyo: true, // Makes the animation go back and forth
    repeat: -1 // Repeats the animation indefinitely
  });

  gsap.to("#leaf", {
    y: -20, // Adjust the float height
    duration: 1.5, // Duration of the float up and down
    ease: "power1.inOut", // Easing function
    yoyo: true, // Makes the animation go back and forth
    repeat: -1 // Repeats the animation indefinitely
  });

//   gsap.to(".fanta_taxt", {
//     y: -20, // Adjust the float height
//     duration: 1.5, // Duration of the float up and down
//     ease: "power1.inOut", // Easing function
//     yoyo: true, // Makes the animation go back and forth
//     repeat: -1 // Repeats the animation indefinitely
//   });

// Make sure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);
gsap.to(".two", {
  // backgroundColor: "#004b8d", // Color you want to transition to
  ease: "none", // No easing
  scrollTrigger: {
    trigger: "#main", // Element that triggers the animation
    start: "50% 100%", // When the top of the trigger element hits the top of the viewport
    end: "bottom top", // When the bottom of the trigger element hits the top of the viewport
    scrub: true // Smoothly animate as you scroll
  }
})
})




mm.add("(max-width: 600px)", () => {
  var Timeline = gsap.timeline({
    scrollTrigger:{
        trigger:'.one',
        start:'0% 10%',
        end:"50% 15%",
        scrub:1,
        // markers: "true",

    }
})

Timeline.to("#fanta",{
    top:"135%",
    left:"25%",
    width:"45%",
    ease: "power3.out",
},'orange')

Timeline.to("#orange-cut",{
    top:"150%",
    left:"52%",
    width:"10%",
    ease: "power3.out"
},'orange')

Timeline.to("#orange",{
    top:"130%",
    left:"21%",
    width:"20%",
    ease: "power3.out"
},'orange')

Timeline.to("#leaf",{
    top:"110%",
    left:"60%",
    rotate:'150deg',
    ease: "power3.out"
},'orange')


var Timeline2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.two',
        start:' 40% 40%',
        end:"200% 100%",
        scrub:3,
        // markers: "true",

    }
},'lemon')
 Timeline2.from("#lemon",{
    top:"110%",
    rotate:"-90deg",
    left:"-50%",
 },'lemon')

 Timeline2.from("#lemon2",{
    top:"110%",
    rotate:"90deg",
    right:"-50%",
 },'lemon')

 Timeline2.to("#orange-cut",{
    top:"292%",
    left:"30%",
    width:"40%"
 },'lemon')

 Timeline2.to("#fanta",{
    top:"300%",
    left:"0%",
    width:'105%'
 },'lemon')

 Timeline2.to("#orange",{
    top:"330%",
    left:"46%",
    width:"38%"
 },'lemon')


//  gsap.to("#fanta", {
//     rotation: 360,
//     yoyo: true,
//     repeat: -1,
//     duration: 10,
//     ease: "power1.inOut",
//     yoyoEase: "bounce.inOut",
//     transformOrigin: "center"
//   }); 
gsap.to("#fanta", {
    y: -20, // Adjust the float height
    duration: 1.5, // Duration of the float up and down
    ease: "power1.inOut", // Easing function
    yoyo: true, // Makes the animation go back and forth
    repeat: -1 // Repeats the animation indefinitely
  });

  gsap.to("#lemon", {
    y: -20, // Adjust the float height
    duration: 1.5, // Duration of the float up and down
    ease: "power1.inOut", // Easing function
    yoyo: true, // Makes the animation go back and forth
    repeat: -1 // Repeats the animation indefinitely
  });


  gsap.to("#lemon2", {
    y: -20, // Adjust the float height
    duration: 1.5, // Duration of the float up and down
    ease: "power1.inOut", // Easing function
    yoyo: true, // Makes the animation go back and forth
    repeat: -1 // Repeats the animation indefinitely
  });
  gsap.to("#orange", {
    y: -20, // Adjust the float height
    duration: 1.5, // Duration of the float up and down
    ease: "power1.inOut", // Easing function
    yoyo: true, // Makes the animation go back and forth
    repeat: -1 // Repeats the animation indefinitely
  });

  gsap.to("#orange-cut", {
    y: -20, // Adjust the float height
    duration: 1.5, // Duration of the float up and down
    ease: "power1.inOut", // Easing function
    yoyo: true, // Makes the animation go back and forth
    repeat: -1 // Repeats the animation indefinitely
  });

  gsap.to("#leaf", {
    y: -20, // Adjust the float height
    duration: 1.5, // Duration of the float up and down
    ease: "power1.inOut", // Easing function
    yoyo: true, // Makes the animation go back and forth
    repeat: -1 // Repeats the animation indefinitely
  });

gsap.registerPlugin(ScrollTrigger);
})