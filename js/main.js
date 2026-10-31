/* =========================================================
   Fueangfa Xaysana 838 — main.js
   1) ปุ่มสลับภาษา ລາວ / EN (จำภาษาที่เลือกไว้)
   2) เมนูบนมือถือ
   3) ฟอร์มขอใบเสนอราคา → สร้าง PDF (quote-pdf.js) หรือส่งข้อความเข้า WhatsApp
   ========================================================= */

// เบอร์ WhatsApp ของบริษัท (รูปแบบสากล ไม่มี + และไม่มีเลข 0 ข้างหน้า)
var WHATSAPP_NUMBER = '8562097929002';

(function () {
  var body = document.body;

  // ---------- 1) สลับภาษา ----------
  function setLang(lang) {
    if (lang === 'en') {
      body.classList.add('lang-en');
      document.documentElement.lang = 'en';
    } else {
      body.classList.remove('lang-en');
      document.documentElement.lang = 'lo';
    }
    try { localStorage.setItem('fx-lang', lang); } catch (e) {}
  }

  var saved = 'lo';
  try { saved = localStorage.getItem('fx-lang') || 'lo'; } catch (e) {}
  setLang(saved);

  var langBtn = document.querySelector('.lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      setLang(body.classList.contains('lang-en') ? 'lo' : 'en');
    });
  }

  // ---------- 2) เมนูมือถือ ----------
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.main-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ---------- 3) ฟอร์มขอใบเสนอราคา ----------
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // ถ้ามีระบบสร้าง PDF (js/quote-pdf.js) ให้ใช้ระบบนั้น ถ้าไม่มี ส่งเป็นข้อความธรรมดา
      if (window.FXQuotePDF && window.FXQuotePDF.ready()) { window.FXQuotePDF.handle(e); return; }
      var en = body.classList.contains('lang-en');
      function v(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; }
      var lines = en ? [
        'Hello, I would like to request a quote.',
        'Name: ' + v('q-name'),
        'Company / organization: ' + v('q-org'),
        'Phone: ' + v('q-phone'),
        'Email: ' + v('q-email'),
        'Type of work: ' + v('q-kind'),
        'Preferred start: ' + v('q-start'),
        'Project location: ' + v('q-place'),
        'Details: ' + v('q-details')
      ] : [
        'ສະບາຍດີ, ຂໍໃບສະເໜີລາຄາ',
        'ຊື່: ' + v('q-name'),
        'ບໍລິສັດ / ອົງກອນ: ' + v('q-org'),
        'ເບີໂທ: ' + v('q-phone'),
        'ອີເມວ: ' + v('q-email'),
        'ປະເພດວຽກ: ' + v('q-kind'),
        'ວັນທີຕ້ອງການເລີ່ມ: ' + v('q-start'),
        'ສະຖານທີ່ໂຄງການ: ' + v('q-place'),
        'ລາຍລະອຽດ: ' + v('q-details')
      ];
      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  }
})();
