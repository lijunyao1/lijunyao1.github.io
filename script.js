// 滚动显现动画
const revealElements = document.querySelectorAll('.section-header, .about-text, .about-quote, .thought-card, .work-item, .contact-content, .west-items, .works-intro');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.85;
    
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
            el.classList.add('reveal');
            // 延迟添加 active 类，实现错落效果
            setTimeout(() => {
                el.classList.add('active');
            }, 50);
        }
    });
}

// 初始化
window.addEventListener('load', () => {
    checkReveal();
});

window.addEventListener('scroll', () => {
    checkReveal();
});

// 导航滚动效果
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(26, 26, 26, 0.9)';
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.padding = '20px 0';
    } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.padding = '36px 0';
    }
    
    lastScroll = currentScroll;
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 首屏视差效果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    
    if (scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
    }
});

// 思想卡片错落显现
const thoughtCards = document.querySelectorAll('.thought-card');
thoughtCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// 作品项目错落显现
const workItems = document.querySelectorAll('.work-item');
workItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});