/* =========================================================
   projects.js — หน้าต่างรายละเอียดโครงการ
   กดการ์ดที่มี data-project="id" → เปิดรายละเอียดจาก projects-data.js
   ลิงก์ตรงไปโครงการได้ด้วย เช่น projects.html#nr2e-66-78
   ไม่ต้องแก้ไฟล์นี้ แก้ข้อมูลที่ projects-data.js
   ========================================================= */
(function () {
  if (typeof PROJECTS === 'undefined') return;
  var byId = {};
  PROJECTS.forEach(function (p, i) { p._i = i; byId[p.id] = p; });

  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function both(lo, en, tag, cls) {
    tag = tag || 'span'; cls = cls ? ' ' + cls : '';
    return '<' + tag + ' class="lo' + cls + '">' + esc(lo) + '</' + tag + '><' + tag + ' class="en' + cls + '">' + esc(en) + '</' + tag + '>';
  }

  // ---------- สร้างหน้าต่าง ----------
  var modal = document.createElement('div');
  modal.className = 'pm';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'pm-title');
  modal.innerHTML =
    '<div class="pm-panel">' +
      '<button class="pm-close" type="button" aria-label="ປິດ / Close">&times;</button>' +
      '<div class="pm-media"></div>' +
      '<div class="pm-info"></div>' +
    '</div>';
  document.body.appendChild(modal);
  var media = modal.querySelector('.pm-media');
  var info = modal.querySelector('.pm-info');
  var closeBtn = modal.querySelector('.pm-close');
  var current = null, lastFocus = null;

  function render(p) {
    // รูป
    if (p.photos && p.photos.length) {
      var thumbs = p.photos.length > 1 ? '<div class="pm-thumbs">' + p.photos.map(function (src, i) {
        return '<button type="button" data-i="' + i + '"' + (i === 0 ? ' class="active"' : '') + ' aria-label="ຮູບທີ ' + (i + 1) + ' / Photo ' + (i + 1) + '"><img src="' + esc(src) + '" alt=""></button>';
      }).join('') + '</div>' : '';
      media.innerHTML = '<img class="pm-main" src="' + esc(p.photos[0]) + '" alt="' + esc(p.en.title) + '">' + thumbs;
      media.querySelectorAll('.pm-thumbs button').forEach(function (b) {
        b.addEventListener('click', function () {
          media.querySelector('.pm-main').src = p.photos[+b.getAttribute('data-i')];
          media.querySelectorAll('.pm-thumbs button').forEach(function (x) { x.classList.remove('active'); });
          b.classList.add('active');
        });
      });
    } else {
      media.innerHTML = '<div class="placeholder pm-main">' + both('ໃສ່ຮູບໂຄງການ', 'Add project photo') + '</div>';
    }

    // ข้อมูล
    var rows = [
      ['ໄລຍະເວລາ', 'Period', p.lo.period, p.en.period],
      ['ສະຖານທີ່', 'Location', p.lo.location, p.en.location],
      ['ຜູ້ວ່າຈ້າງ', 'Client', p.lo.client, p.en.client],
      ['ປະເພດວຽກ', 'Type of work', p.lo.type, p.en.type]
    ].filter(function (r) { return r[2] || r[3]; }).map(function (r) {
      return '<div><dt>' + both(r[0], r[1]) + '</dt><dd>' + both(r[2], r[3]) + '</dd></div>';
    }).join('');

    var prev = PROJECTS[(p._i - 1 + PROJECTS.length) % PROJECTS.length];
    var next = PROJECTS[(p._i + 1) % PROJECTS.length];

    info.innerHTML =
      (p.ongoing ? both('ກຳລັງດຳເນີນ', 'Ongoing', 'span', 'tag') : '') +
      '<h2 id="pm-title">' + both(p.lo.title, p.en.title) + '</h2>' +
      '<dl class="pm-details">' + rows + '</dl>' +
      both(p.lo.text, p.en.text, 'p', 'pm-text') +
      '<div class="pm-actions">' +
        '<a class="btn btn-orange" href="contact.html#quote">' + both('ຂໍໃບສະເໜີລາຄາໂຄງການຄ້າຍກັນ', 'Request a quote for similar work') + '</a>' +
      '</div>' +
      '<div class="pm-nav">' +
        '<button type="button" data-go="' + esc(prev.id) + '">&larr; ' + both('ໂຄງການກ່ອນ', 'Previous') + '</button>' +
        '<button type="button" data-go="' + esc(next.id) + '">' + both('ໂຄງການຕໍ່ໄປ', 'Next') + ' &rarr;</button>' +
      '</div>';
    info.querySelectorAll('[data-go]').forEach(function (b) {
      b.addEventListener('click', function () { open(b.getAttribute('data-go')); });
    });
    modal.querySelector('.pm-panel').scrollTop = 0;
  }

  function open(id) {
    var p = byId[id];
    if (!p) return;
    if (!modal.classList.contains('open')) lastFocus = document.activeElement;
    current = p;
    render(p);
    modal.classList.add('open');
    document.body.classList.add('no-scroll');
    try { history.replaceState(null, '', '#' + id); } catch (e) {}
    closeBtn.focus();
  }

  function close() {
    modal.classList.remove('open');
    document.body.classList.remove('no-scroll');
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
    if (lastFocus) lastFocus.focus();
  }

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') close();
  });

  // ---------- ผูกกับการ์ด ----------
  document.querySelectorAll('[data-project]').forEach(function (card) {
    var id = card.getAttribute('data-project');
    card.classList.add('clickable');
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      open(id);
    });
  });

  // ---------- เปิดจากลิงก์ เช่น projects.html#bsa2 ----------
  var h = decodeURIComponent((location.hash || '').slice(1));
  if (h && byId[h]) open(h);
})();
