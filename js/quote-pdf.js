/* =========================================================
   quote-pdf.js — สร้างเอกสาร PDF "ໃບຂໍໃບສະເໜີລາຄາ" จากฟอร์มหน้า contact.html
   แล้วช่วยลูกค้าส่งเข้า WhatsApp ของบริษัท

   ขั้นตอนที่ลูกค้าเห็น:
     1) กรอกฟอร์ม แล้วกดปุ่ม → เว็บสร้าง PDF ให้
     2) กด "ສົ່ງຂໍ້ຄວາມ" → เปิดแชท WhatsApp ของบริษัทพร้อมข้อความสรุป
     3) กด "ສົ່ງໄຟລ໌ PDF" (มือถือ) หรือ "ດາວໂຫຼດ PDF" แล้วแนบในแชท (คอม)

   แก้ข้อมูลบริษัทที่โชว์ในเอกสารได้ที่ QUOTE_COMPANY ข้างล่าง
   หน้าตาเอกสารแก้ได้ที่ css/quote-pdf.css (ส่วน .qdoc)
   ใช้ไลบรารี: js/vendor/html2canvas.min.js และ js/vendor/jspdf.umd.min.js
   ========================================================= */

var QUOTE_COMPANY = {
  nameLo: 'ບໍລິສັດ ເຟືອງຟ້າ ໄຊຊະນະ 838 ຈຳກັດຜູ້ດຽວ',
  nameEn: 'Fueangfa Xaysana 838 Sole Co., Ltd.',
  addressLo: 'ບ້ານໜອງປິງ, ເມືອງສີໂຄດຕະບອງ, ນະຄອນຫຼວງວຽງຈັນ',
  addressEn: 'Nongping Village, Sykhottabong District, Vientiane Capital, Laos',
  phone: '020 9792 9002',
  email: 'laothanhconstruction@gmail.com',
  sloganLo: 'ສ້າງສາຄຸນນະພາບ ເຊື່ອມຕໍ່ອະນາຄົດ ກ້າວໄປສູ່ໄຊຊະນະ'
};

var QUOTE_LOGO = 'data:image/jpeg;base64,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';

(function () {
  var form = document.getElementById('quote-form');
  if (!form) return;

  function ready() { return !!(window.html2canvas && window.jspdf && window.jspdf.jsPDF); }
  window.FXQuotePDF = { ready: ready, handle: handle };

  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function both(lo, en, tag, cls) {
    tag = tag || 'span'; cls = cls ? ' ' + cls : '';
    return '<' + tag + ' class="lo' + cls + '">' + lo + '</' + tag + '><' + tag + ' class="en' + cls + '">' + en + '</' + tag + '>';
  }
  function v(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fmtDate(iso) {           // 2026-11-05 → 05/11/2026
    if (!iso) return '';
    var p = iso.split('-');
    return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : iso;
  }

  // ---------- หน้าต่างแสดงขั้นตอน ----------
  var dlg = document.createElement('div');
  dlg.className = 'qd';
  dlg.setAttribute('role', 'dialog');
  dlg.setAttribute('aria-modal', 'true');
  dlg.setAttribute('aria-labelledby', 'qd-title');
  dlg.innerHTML = '<div class="qd-panel"><button class="qd-close" type="button" aria-label="ປິດ / Close">&times;</button><div class="qd-body"></div></div>';
  document.body.appendChild(dlg);
  var dBody = dlg.querySelector('.qd-body');
  var lastFocus = null, pdfUrl = null;
  function openDlg(html) {
    if (!dlg.classList.contains('open')) lastFocus = document.activeElement;
    dBody.innerHTML = html;
    dlg.classList.add('open');
    dlg.querySelector('.qd-close').focus();
  }
  function closeDlg() {
    dlg.classList.remove('open');
    if (lastFocus) lastFocus.focus();
  }
  dlg.querySelector('.qd-close').addEventListener('click', closeDlg);
  dlg.addEventListener('click', function (e) { if (e.target === dlg) closeDlg(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && dlg.classList.contains('open')) closeDlg(); });

  // ---------- เอกสาร ----------
  function buildDoc(d) {
    var row = function (lo, en, val) {
      return '<tr><th><b>' + lo + '</b><small>' + en + '</small></th><td>' + (val ? esc(val) : '<span class="qdoc-empty">—</span>') + '</td></tr>';
    };
    var blank = function (lo, en) { return '<tr><th><b>' + lo + '</b><small>' + en + '</small></th><td class="qdoc-line"></td></tr>'; };
    var c = QUOTE_COMPANY;
    return '' +
      '<div class="qdoc">' +
        '<div class="qdoc-head">' +
          '<img src="' + QUOTE_LOGO + '" alt="">' +
          '<div class="qdoc-co">' +
            '<b>' + esc(c.nameLo) + '</b>' +
            '<span>' + esc(c.nameEn) + '</span>' +
            '<small>' + esc(c.addressLo) + '<br>' + esc(c.addressEn) + '</small>' +
            '<small>ໂທ / Tel: ' + esc(c.phone) + ' (WhatsApp) &nbsp; Email: ' + esc(c.email) + '</small>' +
          '</div>' +
        '</div>' +
        '<div class="qdoc-title">' +
          '<div><h1>ໃບຂໍໃບສະເໜີລາຄາ</h1><p>Request for Quotation</p></div>' +
          '<table class="qdoc-ref">' +
            '<tr><th>ເລກທີ / No.</th><td>' + esc(d.ref) + '</td></tr>' +
            '<tr><th>ວັນທີ / Date</th><td>' + esc(d.date) + '</td></tr>' +
          '</table>' +
        '</div>' +
        '<h2><span>1.</span>ຂໍ້ມູນຜູ້ຂໍ <small>Requester</small></h2>' +
        '<table class="qdoc-table">' +
          row('ຊື່ ແລະ ນາມສະກຸນ', 'Full name', d.name) +
          row('ບໍລິສັດ / ອົງກອນ', 'Company / organization', d.org) +
          row('ເບີໂທລະສັບ', 'Phone', d.phone) +
          row('ອີເມວ', 'Email', d.email) +
        '</table>' +
        '<h2><span>2.</span>ລາຍລະອຽດໂຄງການ <small>Project details</small></h2>' +
        '<table class="qdoc-table">' +
          row('ປະເພດວຽກ', 'Type of work', d.kind) +
          row('ສະຖານທີ່ໂຄງການ', 'Project location', d.place) +
          row('ວັນທີຕ້ອງການເລີ່ມ', 'Preferred start date', d.start) +
        '</table>' +
        '<div class="qdoc-box"><b>ລາຍລະອຽດ</b> <small>Details</small><p>' + (d.details ? esc(d.details) : '—') + '</p></div>' +
        '<h2><span>3.</span>ສຳລັບບໍລິສັດ <small>For office use</small></h2>' +
        '<table class="qdoc-table">' +
          blank('ວັນທີຮັບ', 'Received on') +
          blank('ຜູ້ຮັບຜິດຊອບ', 'Handled by') +
          blank('ໝາຍເຫດ', 'Notes') +
        '</table>' +
        '<p class="qdoc-note">ເອກະສານນີ້ສ້າງອັດຕະໂນມັດຈາກເວັບໄຊຂອງບໍລິສັດ ເພື່ອຂໍໃບສະເໜີລາຄາ ແລະ ບໍ່ແມ່ນສັນຍາ.<br>This document was generated by our website as a request for quotation. It is not a contract.</p>' +
        '<div class="qdoc-foot"><span>' + esc(c.sloganLo) + '</span><span>' + esc(c.phone) + ' &nbsp;|&nbsp; ' + esc(c.email) + '</span></div>' +
      '</div>';
  }

  // ---------- ข้อความสรุปสำหรับ WhatsApp ----------
  function message(d, en) {
    var L = en ? [
      'Hello, I would like to request a quote. Ref: ' + d.ref + ' (PDF attached)',
      'Name: ' + d.name, 'Company: ' + d.org, 'Phone: ' + d.phone,
      'Type of work: ' + d.kind, 'Location: ' + d.place
    ] : [
      'ສະບາຍດີ, ຂໍໃບສະເໜີລາຄາ ເລກທີ ' + d.ref + ' (ແນບໄຟລ໌ PDF)',
      'ຊື່: ' + d.name, 'ບໍລິສັດ: ' + d.org, 'ເບີໂທ: ' + d.phone,
      'ປະເພດວຽກ: ' + d.kind, 'ສະຖານທີ່: ' + d.place
    ];
    return L.join('\n');
  }

  // ---------- สร้าง PDF ----------
  function makePdf(d) {
    var holder = document.createElement('div');
    holder.className = 'qdoc-holder';
    holder.setAttribute('aria-hidden', 'true');
    holder.innerHTML = buildDoc(d);
    document.body.appendChild(holder);
    var docEl = holder.firstChild;
    var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
    return fontsReady.then(function () {
      return window.html2canvas(docEl, { scale: 2, backgroundColor: '#ffffff', useCORS: true, logging: false });
    }).then(function (canvas) {
      var jsPDF = window.jspdf.jsPDF;
      var pdf = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });
      var pageW = pdf.internal.pageSize.getWidth(), pageH = pdf.internal.pageSize.getHeight();
      var sliceH = Math.floor(canvas.width * pageH / pageW);   // ความสูงของ 1 หน้า (pixel)
      if (canvas.height <= sliceH * 1.2) {
        // ยาวเกินหน้าไม่มาก → ย่อให้พอดี 1 หน้า
        var h = Math.min(pageH, canvas.height * pageW / canvas.width);
        var w = canvas.width * h / canvas.height;
        pdf.addImage(canvas.toDataURL('image/jpeg', 0.92), 'JPEG', (pageW - w) / 2, 0, w, h);
        pdf.setProperties({ title: 'Request for Quotation ' + d.ref, author: QUOTE_COMPANY.nameEn });
        holder.remove();
        return pdf.output('blob');
      }
      for (var y = 0, page = 0; y < canvas.height; y += sliceH, page++) {
        var part = document.createElement('canvas');
        part.width = canvas.width;
        part.height = Math.min(sliceH, canvas.height - y);
        part.getContext('2d').drawImage(canvas, 0, y, canvas.width, part.height, 0, 0, canvas.width, part.height);
        if (page > 0) pdf.addPage();
        pdf.addImage(part.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, pageW, part.height * pageW / canvas.width);
      }
      pdf.setProperties({ title: 'Request for Quotation ' + d.ref, author: QUOTE_COMPANY.nameEn });
      holder.remove();
      return pdf.output('blob');
    }, function (err) { holder.remove(); throw err; });
  }

  // ---------- เมื่อกดส่งฟอร์ม ----------
  function handle(e) {
    if (e) e.preventDefault();
    var now = new Date();
    var d = {
      name: v('q-name'), org: v('q-org'), phone: v('q-phone'), email: v('q-email'),
      kind: v('q-kind'), place: v('q-place'), start: fmtDate(v('q-start')), details: v('q-details'),
      date: pad(now.getDate()) + '/' + pad(now.getMonth() + 1) + '/' + now.getFullYear(),
      ref: 'FX-RFQ-' + now.getFullYear() + pad(now.getMonth() + 1) + pad(now.getDate()) + '-' + pad(now.getHours()) + pad(now.getMinutes())
    };
    var en = document.body.classList.contains('lang-en');
    var waUrl = 'https://wa.me/' + (window.WHATSAPP_NUMBER || '8562097929002') + '?text=' + encodeURIComponent(message(d, en));
    var fname = d.ref + '.pdf';

    openDlg('<div class="qd-loading"><span class="qd-spin" aria-hidden="true"></span>' +
      both('ກຳລັງສ້າງເອກະສານ PDF…', 'Creating your PDF…', 'p') + '</div>');

    makePdf(d).then(function (blob) {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
      pdfUrl = URL.createObjectURL(blob);
      var file = null, canShare = false;
      try {
        file = new File([blob], fname, { type: 'application/pdf' });
        canShare = !!(navigator.canShare && navigator.canShare({ files: [file] }));
      } catch (err) { canShare = false; }

      var step2 = canShare
        ? '<li><div>' + both('ສົ່ງໄຟລ໌ PDF', 'Send the PDF file', 'b') + both('ເລືອກ WhatsApp ແລ້ວເລືອກແຊັດ 020 9792 9002', 'Choose WhatsApp, then the chat with 020 9792 9002', 'small') + '</div>' +
          '<button class="btn btn-orange qd-share" type="button">' + both('ສົ່ງໄຟລ໌ PDF', 'Send PDF') + '</button></li>'
        : '<li><div>' + both('ດາວໂຫຼດ PDF ແລ້ວແນບໃນແຊັດ', 'Download the PDF and attach it in the chat', 'b') + both('ກົດຮູບຄລິບໜີບເຈ້ຍ ໃນ WhatsApp ເພື່ອແນບໄຟລ໌', 'Use the paperclip in WhatsApp to attach it', 'small') + '</div>' +
          '<a class="btn btn-orange" href="' + pdfUrl + '" download="' + esc(fname) + '">' + both('ດາວໂຫຼດ PDF', 'Download PDF') + '</a></li>';

      openDlg(
        both('ເອກະສານພ້ອມແລ້ວ', 'Your document is ready', 'h2', 'qd-h') +
        '<p class="qd-ref">' + esc(fname) + '</p>' +
        '<ol class="qd-steps">' +
          '<li><div>' + both('ສົ່ງຂໍ້ຄວາມຫາພວກເຮົາ', 'Send us a message', 'b') + both('ເປີດແຊັດ WhatsApp ຂອງບໍລິສັດ ພ້ອມຂໍ້ຄວາມສະຫຼຸບ', 'Opens our WhatsApp chat with a short summary', 'small') + '</div>' +
          '<a class="btn btn-navy" href="' + waUrl + '" target="_blank" rel="noopener">' + both('ສົ່ງຂໍ້ຄວາມ', 'Send message') + '</a></li>' +
          step2 +
        '</ol>' +
        '<a class="qd-preview" href="' + pdfUrl + '" target="_blank" rel="noopener">' + both('ເບິ່ງເອກະສານ PDF', 'Preview the PDF') + '</a>'
      );
      dBody.querySelector('h2').id = 'qd-title';
      var shareBtn = dBody.querySelector('.qd-share');
      if (shareBtn) {
        shareBtn.addEventListener('click', function () {
          navigator.share({ files: [file], title: fname, text: message(d, en) }).catch(function () {});
        });
      }
    }).catch(function () {
      openDlg(both('ສ້າງ PDF ບໍ່ສຳເລັດ', 'Could not create the PDF', 'h2', 'qd-h') +
        both('ທ່ານຍັງສົ່ງຂໍ້ມູນເປັນຂໍ້ຄວາມທາງ WhatsApp ໄດ້.', 'You can still send your details as a WhatsApp message.', 'p') +
        '<a class="btn btn-navy" style="margin-top:16px" href="' + waUrl + '" target="_blank" rel="noopener">' + both('ສົ່ງທາງ WhatsApp', 'Send via WhatsApp') + '</a>');
    });
  }
})();
