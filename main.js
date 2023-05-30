<!-- Swiper JS -->
<script src="https://unpkg.com/split-type"></script>
<script src="js/mf/core/Core.js"></script>
<script src="js/jquery/jquery.splitflap.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
<script async src="https://unpkg.com/typer-dot-js@0.1.0/typer.js"></script> 
 <script src="https://uploads-ssl.webflow.com/6330c0ebacf06abbc83b6eb3/64104b752e949a0c5bb23809_lenis-offbrand-v1.txt"></script>
<style>.horizontal-trigger {height: calc(100% - 100vh);}</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
<script src="https://unpkg.com/split-type"></script>
<script>
let typeSplit = new SplitType(".work_title", {
  types: "words, chars",
  tagName: "span"
});

$(".work_link").each(function (index) {
  let listOne = $(this).find(".work_title.is-1 .char");
  let listTwo = $(this).find(".work_title.is-2 .char");
  // Timeline
  let tl = gsap.timeline({ paused: true });
  tl.to(listOne, {
    translateY: "-0.2em",
    rotationY: "-5.7deg",
    rotationX: "-90deg",
    stagger: { each: 0.08 },
    ease: "power3.inOut",
    duration: 0.7
  });
  tl.from(
    listTwo,
    {
      translateY: "0.2em",
      rotationY: "5.7deg",
      rotationX: "90deg",
      stagger: { each: 0.08 },
      ease: "power3.inOut",
      duration: 0.7
    },
    0.1
  );
  $(this).on("mouseenter", function () {
    tl.restart();
  });
  $(this).on("mouseleave", function () {
    tl.reverse();
  });
});
</script>
<script>
gsap.registerPlugin(ScrollTrigger);
let horizontalItem = $(".horizontal-item");
let horizontalSection = $(".horizontal-section");
let moveDistance;
function calculateScroll() {
  // Desktop
  let itemsInView = 3;
  let scrollSpeed = 1.2;

  if (window.matchMedia("(max-width: 3000px)").matches) {
    // Mobile Portrait
    itemsInView = 1;
    scrollSpeed = 1.2;
  } else if (window.matchMedia("(max-width: 800px)").matches) {
    // Mobile Landscape
    itemsInView = 1;
    scrollSpeed = 1.2;
  } else if (window.matchMedia("(max-width: 800px)").matches) {
    // Tablet
    itemsInView = 2;
    scrollSpeed = 1.2;
  }
  let moveAmount = horizontalItem.length - itemsInView;
  let minHeight =
    scrollSpeed * horizontalItem.outerWidth() * horizontalItem.length;
  if (moveAmount <= 0) {
    moveAmount = 0;
    minHeight = 0;
    // horizontalSection.css('height', '100vh');
  } else {
    horizontalSection.css("height", "300vh");
  }
  moveDistance = horizontalItem.outerWidth() * moveAmount;
  horizontalSection.css("min-height", minHeight + "px");
}
calculateScroll();
window.onresize = function () {
  calculateScroll();
};

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-trigger",
    // trigger element - viewport
    start: "top top",
    end: "bottom top",
    invalidateOnRefresh: true,
    markers: false,
    scrub: 1
  }
});
tl.to(".horizontal-section .list", {
  x: () => -moveDistance,
  duration: 2
});
</script>
<script>
$(".project-div").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $("body");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      // can also use "20px 80%"
      start: "-25%",
      end: "bottom bottom",
      scrub: 1
    }
  });
  tl.fromTo(
    targetElement,
    {
      backgroundColor: "#0c0910",
      duration: 1
    },
    {
      backgroundColor: "#a393bf",
      duration: 1
    }
  );
});
</script>
<script>
window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span"
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      }
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 60%",
      onEnter: () => timeline.play()
    });
  }

  $("[words-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), { opacity: 0, yPercent: 100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } });
    createScrollTrigger($(this), tl);
  });

  $("[words-rotate-in]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.set($(this).find(".word"), { transformPerspective: 1000 });
    tl.from($(this).find(".word"), { rotationX: -90, duration: 0.6, ease: "power2.out", stagger: { amount: 0.6 } });
    createScrollTrigger($(this), tl);
  });

  $("[words-slide-from-right]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), { opacity: 0, x: "1em", duration: 0.6, ease: "power2.out", stagger: { amount: 0.2 } });
    createScrollTrigger($(this), tl);
  });

  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { yPercent: 100, duration: 0.2, ease: "power1.out", stagger: { amount: 0.6 } });
    createScrollTrigger($(this), tl);
  });

  $("[letters-slide-down]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { yPercent: -120, duration: 0.3, ease: "power1.out", stagger: { amount: 0.7 } });
    createScrollTrigger($(this), tl);
  });

  $("[letters-fade-in]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { opacity: 0, duration: 0.2, ease: "power1.out", stagger: { amount: 0.8 } });
    createScrollTrigger($(this), tl);
  });

  $("[letters-fade-in-random]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { opacity: 0, duration: 0.3, ease: "power1.out", stagger: { amount: 0.6, from: "random" } });
    createScrollTrigger($(this), tl);
  });

  $("[scrub-each-word]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 90%",
        end: "top center",
        scrub: true
      }
    });
    tl.from($(this).find(".word"), { opacity: 0.2, duration: 0.2, ease: "power1.out", stagger: { each: 0.4 } });
  });

  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });
});
</script>