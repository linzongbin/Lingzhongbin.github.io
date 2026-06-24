// ==================== 共用導覽欄 ====================
function renderSiteNavigation() {
  const nav = document.querySelector('nav[data-site-nav]');
  if (!nav) return;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = [
    ['index.html', '首頁'],
    ['education.html', '教育背景'],
    ['experience.html', '實務經驗'],
    ['skills.html', '專業技能'],
    ['projects.html', '專案作品'],
    ['articles.html', '文章'],
    ['awards.html', '獲獎榮譽'],
    ['photos.html', '活動照片']
  ];

  nav.innerHTML = `
    <div class="container">
      <a href="index.html" class="logo">My Portfolio</a>
      <ul>
        ${navItems.map(([href, label]) => {
          const activeClass = href === currentPage ? 'active' : '';
          return `<li><a href="${href}" class="${activeClass}">${label}</a></li>`;
        }).join('')}
      </ul>
    </div>
  `;
}

// ==================== 頁面加載效果 ====================
document.addEventListener('DOMContentLoaded', function() {
  renderSiteNavigation();

  // 頁面平滑過渡
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 10);

  // 初始化動畫
  animateSkillBars();
  animateCounters();
});

// ==================== 技能欄動畫 ====================
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = '0';
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  });

  skillBars.forEach(bar => {
    observer.observe(bar);
  });
}

// ==================== 平滑滾動 ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==================== 導航欄高亮 ====================
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('nav[data-site-nav] a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  if (!current) return;

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// ==================== 計數器動畫 ====================
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 50);
    let current = 0;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && current === 0) {
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target;
            clearInterval(interval);
          } else {
            counter.textContent = Math.floor(current);
          }
        }, 50);
        observer.unobserve(counter);
      }
    });

    observer.observe(counter);
  });
}

// ==================== 模態框 ====================
const modal = document.getElementById('photoModal');
const photos = document.querySelectorAll('.photo-item img');
const closeBtn = document.querySelector('.close-modal');

if (modal) {
  photos.forEach(photo => {
    photo.addEventListener('click', function() {
      const modalImg = document.getElementById('modalImage');
      modalImg.src = this.src;
      modal.style.display = 'block';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// ==================== 浮動動畫 ====================
function addFloatingAnimation() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.6s ease forwards`;
    card.style.animationDelay = `${index * 0.1}s`;
  });
}

// ==================== 複製按鈕功能 ====================
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('已複製到剪貼板！');
  });
}

// ==================== 表單驗證 ====================
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return true;

  const inputs = form.querySelectorAll('input, textarea');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = 'red';
      isValid = false;
    } else {
      input.style.borderColor = '';
    }
  });

  return isValid;
}

// ==================== 頁面載入時執行 ====================
window.addEventListener('load', function() {
  addFloatingAnimation();
});

// ==================== 顯示/隱藏導航菜單（移動版） ====================
function toggleMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  if (navMenu) {
    navMenu.classList.toggle('active');
  }
}
