/* =========================================================
   animations.js — ลูกเล่นทั้งหมด
   1) สไลด์รูปหน้าแรก      2) ปรากฏตอนเลื่อน
   3) ตัวเลขวิ่ง             4) หัวเว็บหด + ปุ่มกลับขึ้นบน
   5) กดรูปดูรูปใหญ่         6) แถบชื่อลูกค้าเลื่อน
   ========================================================= */

var SLIDE_SECONDS = 6;      // เปลี่ยนรูปหน้าแรกทุกกี่วินาที
var COUNT_SECONDS = 1.6;    // ตัวเลขวิ่งนานกี่วินาที

(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;

  // ---------- 1) สไลด์รูปหน้าแรก ----------
  var slides = document.querySelectorAll('.hero-slides .slide');
  var dotsBox = document.querySelector('.slide-dots');
  if (slides.length > 1 && dotsBox) {
    var current = 0, timer = null;
    var dots = [];
    function show(i) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }
    function start() { timer = setInterval(function () { show(current + 1); }, SLIDE_SECONDS * 1000); }  // โหมดลดการเคลื่อนไหว: เปลี่ยนรูปแบบจางเข้า ไม่ซูม
    slides.forEach(function (s, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'ຮູບທີ ' + (i + 1) + ' / Slide ' + (i + 1));
      if (i === 0) b.classList.add('active');
      b.addEventListener('click', function () { clearInterval(timer); show(i); start(); });
      dotsBox.appendChild(b);
      dots.push(b);
    });
    start();
  }

  // ---------- 2) ปรากฏตอนเลื่อนลงมาถึง ----------
  var REVEAL = '.section h2, .section .lead, .card, .ticks li, .fleet-group, .timeline li, .figure, .contact-list li, .form, .fleet-total';
  if (hasIO) {   // โหมดลดการเคลื่อนไหว: ยังจางเข้า แต่ไม่ขยับ (ดู animations.css)
    // ปรากฏเสร็จแล้ว → เอาคลาสออก ให้การ์ดกลับไปใช้ลูกเล่นชี้เมาส์ตามปกติ (ไม่หน่วง)
    function settle(el) {
      setTimeout(function () {
        el.classList.remove('reveal', 'is-visible');
        el.style.transitionDelay = '';
      }, 1100);
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); settle(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll(REVEAL).forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = ((i % 4) * 90) + 'ms';
      io.observe(el);
    });

    // กันพลาด: เลื่อนจอเร็วมากจนข้ามไป หรือเพิ่งสลับภาษา → แสดงทุกอันที่เลื่อนผ่านมาแล้ว
    var pending = false;
    function catchUp() {
      pending = false;
      var vh = window.innerHeight;
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(function (el) {
        if (el.offsetParent === null) return;               // ซ่อนอยู่ (ข้อความอีกภาษา)
        if (el.getBoundingClientRect().top < vh) { el.classList.add('is-visible'); io.unobserve(el); settle(el); }
      });
    }
    function queue() { if (!pending) { pending = true; requestAnimationFrame(catchUp); } }
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    document.addEventListener('click', function (e) { if (e.target.closest('.lang-btn')) setTimeout(queue, 30); });
    window.addEventListener('pageshow', queue);   // กลับมาหน้าเดิมด้วยปุ่มย้อนกลับ
  }

  // ---------- 3) ตัวเลขวิ่ง (ใส่ data-count="ตัวเลข" ที่ตัวเลขไหนก็ได้) ----------
  function runCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) { return; }   // ตัวเลขวิ่งได้ทุกโหมด (ไม่ใช่การขยับหน้าจอ)
    var t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / (COUNT_SECONDS * 1000), 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = '0';
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    if (hasIO) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { runCount(en.target); cio.unobserve(en.target); }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (c) { cio.observe(c); });
    }
  }

  // ---------- 4) หัวเว็บหด + ปุ่มกลับขึ้นบน ----------
  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('scrolled', y > 40);
    if (toTop) toTop.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  }

  // ---------- 5) กดรูปเพื่อดูรูปใหญ่ ----------
  var zoomImgs = document.querySelectorAll('img.photo, .gallery img');
  if (zoomImgs.length) {
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.innerHTML = '<button class="lightbox-close" type="button" aria-label="ປິດ / Close">&times;</button><img alt=""><p></p>';
    document.body.appendChild(box);
    var bigImg = box.querySelector('img'), cap = box.querySelector('p'), closeBtn = box.querySelector('.lightbox-close');
    var lastFocus = null;

    function captionFor(img) {
      var fig = img.closest('figure');
      if (fig) {
        var caps = fig.querySelectorAll('figcaption');
        for (var i = 0; i < caps.length; i++) { if (caps[i].offsetParent !== null) return caps[i].textContent; }
      }
      var card = img.closest('.card');
      if (card) {
        var hs = card.querySelectorAll('h3');
        for (var j = 0; j < hs.length; j++) { if (hs[j].offsetParent !== null) return hs[j].textContent; }
      }
      return img.alt || '';
    }
    function open(img) {
      lastFocus = document.activeElement;
      bigImg.src = img.src;
      bigImg.alt = img.alt;
      cap.textContent = captionFor(img);
      box.classList.add('open');
      closeBtn.focus();
    }
    function close() {
      box.classList.remove('open');
      if (lastFocus) lastFocus.focus();
    }
    zoomImgs.forEach(function (img) {
      img.classList.add('zoomable');
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.addEventListener('click', function () { open(img); });
      img.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); } });
    });
    closeBtn.addEventListener('click', close);
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && box.classList.contains('open')) close(); });
  }

  // ---------- 6) แถบชื่อลูกค้าเลื่อนอัตโนมัติ ----------
  document.querySelectorAll('.marquee-track').forEach(function (track) {
    if (reduce) return;
    Array.prototype.slice.call(track.children).forEach(function (li) {
      var c = li.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      track.appendChild(c);
    });
  });
})();
