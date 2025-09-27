document.addEventListener('DOMContentLoaded', () => {
    // Hero-Typing-Effect
    const typingText = document.querySelector('.typing');
    if (typingText) {
        const text = typingText.innerText;
        typingText.innerText = '';
        let i = 0;
        function typing() {
            if (i < text.length) {
                typingText.innerText += text.charAt(i);
                i++;
                setTimeout(typing, 100);
            }
        }
        typing();
    }

    // About Me Sequential Animation
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        const aboutSentences = aboutContent.querySelectorAll('.reveal');
        const aboutObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutSentences.forEach((sentence, index) => {
                        setTimeout(() => {
                            sentence.classList.add('visible');
                        }, index * 500); // 0.5초 간격
                    });
                    observer.unobserve(entry.target); // 한번만 애니메이션 실행
                }
            });
        }, { threshold: 0.4 });
        aboutObserver.observe(aboutContent);
    }

    // General Scroll-Reveal-Animation for other sections
    const revealElements = document.querySelectorAll('.section.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Project-Card-3D-Tilt-Effect
    const tiltElements = document.querySelectorAll('.project-card');
    if (tiltElements.length > 0) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js';
        document.head.appendChild(script);

        script.onload = () => {
            VanillaTilt.init(tiltElements, {
                max: 25,
                speed: 400,
                glare: true,
                'max-glare': 0.5,
            });
        };
    }

    // Experience-Timeline-Animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // Other Experience Card Animation
    const otherCards = document.querySelectorAll('.other-card');
    const otherCardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    otherCards.forEach(card => {
        otherCardObserver.observe(card);
    });

    // Contact-Social-Icon-Color-Fill
    const socialIcons = document.querySelectorAll('.social-icon i');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.color = 'var(--point-color)';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.color = '';
        });
    });
});