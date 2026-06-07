import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animate elements fading in from bottom on scroll
 */
export function fadeInOnScroll(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: options.y || 60 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || 1,
        ease: options.ease || 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: options.start || 'top 85%',
          end: options.end || 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

/**
 * Stagger children elements into view
 */
export function staggerIn(parentSelector, childSelector, options = {}) {
  const parents = document.querySelectorAll(parentSelector);
  parents.forEach((parent) => {
    const children = parent.querySelectorAll(childSelector);
    gsap.fromTo(children,
      { opacity: 0, y: options.y || 40, scale: options.scale || 1 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: options.duration || 0.6,
        ease: options.ease || 'power2.out',
        stagger: options.stagger || 0.1,
        scrollTrigger: {
          trigger: parent,
          start: options.start || 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

/**
 * Text reveal animation — characters or words animate in
 */
export function textReveal(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    const text = el.textContent;
    const isWord = options.type === 'word';
    
    if (isWord) {
      const words = text.split(' ');
      el.innerHTML = words.map(word => `<span class="inline-block overflow-hidden"><span class="reveal-word inline-block" style="transform: translateY(100%)">${word}</span></span>`).join(' ');
      
      gsap.to(el.querySelectorAll('.reveal-word'), {
        y: 0,
        duration: options.duration || 0.8,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    } else {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration || 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  });
}

/**
 * Parallax effect for background elements
 */
export function parallaxLayer(selector, speed = 0.5) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

/**
 * Charge up XP bars when they scroll into view
 */
export function chargeXpBars(selector = '.xp-bar-fill') {
  const bars = document.querySelectorAll(selector);
  bars.forEach((bar) => {
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 90%',
      onEnter: () => bar.classList.add('charged'),
      once: true,
    });
  });
}

/**
 * Counter animation for stats
 */
export function animateCounter(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    gsap.fromTo(el,
      { textContent: 0 },
      {
        textContent: target,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });
}

/**
 * Refresh all ScrollTriggers (call after DOM changes)
 */
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}
