



gsap.registerPlugin(ScrollTrigger);

gsap.from("#titulo1", {
    opacity: 0,
    y: -100,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#titulo1",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
    }
});

/* gsap.from("#titulo2", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#titulo2",
        start: "top 60%",
        end: "bottom 40%",
        scrub: 1,
    }
});
 */
gsap.from("#texto1", {
    opacity: 0,
    scale: 0.9,
    duration: 1.0,
    delay: 0.6,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "#texto1",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
    }
});

const titulo1Spans = document.querySelectorAll("#titulo1 span");

function detenerAnimacionTitulo() {
    titulo1Spans.forEach(span => {
        span.style.animation = 'none';
        span.style.color = 'green';
    });
}

setTimeout(detenerAnimacionTitulo, 5000);

gsap.from("#caracteristicas", {
    opacity: 0,
    y: -30,
    duration: 1,
    scrollTrigger: {
        trigger: "#caracteristicas",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1
    }
});

/* // Animación intercalada para cada cuadro de característica
gsap.utils.toArray("#caracteristicasdesc p").forEach((cuadro, index) => {
    const fromVars = {};
    const toVars = {
        translateX: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: cuadro,
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1,
            toggleActions: "play none none reverse",
        },
        delay: index * 0.15
    };

    if (index % 2 === 0) { // Si el índice es par (0, 2, 4, 6...)
        fromVars.translateX = "-100%"; // Comienza desde la izquierda
        fromVars.opacity = 0;
    } else { // Si el índice es impar (1, 3, 5...)
        fromVars.translateX = "100%";  // Comienza desde la derecha
        fromVars.opacity = 0;
    }

    gsap.fromTo(cuadro, fromVars, toVars);
}); */
