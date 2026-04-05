document.addEventListener('DOMContentLoaded', () => {

    // ── 햄버거 메뉴 ──────────────────────────────
    const hamburger = document.querySelector('.hamburger');
    const navLinks  = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    // ── 스크롤 reveal ─────────────────────────────
    const revealEls = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });
    revealEls.forEach(el => revealObs.observe(el));

    // ── 프로젝트 커서 따라다니는 이미지 ───────────
    const hoverImg = document.querySelector('.project-hover-img');
    if (hoverImg) {
        document.addEventListener('mousemove', (e) => {
            hoverImg.style.left = e.clientX + 'px';
            hoverImg.style.top  = e.clientY + 'px';
        });
        document.querySelectorAll('.project-row').forEach(row => {
            row.addEventListener('mouseenter', () => {
                const src = row.dataset.img;
                if (!src) return;
                hoverImg.src = src;
                hoverImg.style.opacity = '1';
            });
            row.addEventListener('mouseleave', () => {
                hoverImg.style.opacity = '0';
            });
        });
    }

    // ── 프로그레스 바 (서브페이지용) ─────────────
    const bars = document.querySelectorAll('.progress-bar');
    if (bars.length) {
        const progressObs = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.width = (entry.target.dataset.rate * 100) + '%';
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.8 });
        bars.forEach(bar => progressObs.observe(bar));
    }

});
