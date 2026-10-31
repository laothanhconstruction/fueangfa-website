/* =========================================================
   machinery-data.js — รายละเอียดกลจักรและรถ (เด้งขึ้นมาตอนกดการ์ดในหน้า machinery.html)

   วิธีแก้:
   - id      ต้องตรงกับ data-project="..." ในไฟล์ machinery.html
   - photos  รายชื่อรูป เรียงตามลำดับที่แสดง (ไม่มีรูปใส่ [])  รูปอยู่ใน images/machinery/
   - lo      ข้อความภาษาลาว,  en  ข้อความภาษาอังกฤษ
             ถ้าไม่ใส่ en ตรงไหน จะใช้ข้อความลาวแทน (เช่น ยี่ห้อ/รุ่น)
   - models  ใส่เป็นรายการ [ ... ] จะขึ้นทีละบรรทัด
   - อยากเพิ่มหัวข้อใหม่ (เช่น ปีผลิต, ขนาด): เพิ่มใน DETAIL_FIELDS ท้ายไฟล์
     แล้วใส่ค่าในแต่ละคัน เช่น  year: '2020'
   ข้อความที่อยู่ใน [ ] คือช่องที่ยังต้องเติม
   ========================================================= */

var MACHINES = [
  {
    id: 'excavators',
    photos: ['images/machinery/excavator-1.jpg', 'images/machinery/excavator-2.jpg', 'images/machinery/excavator-3.jpg', 'images/machinery/excavator-4.jpg', 'images/machinery/excavator-5.jpg'],
    lo: {
      title: 'ລົດຈົກ',
      count: '8 ຄັນ',
      models: ['Kobelco SK200 × 4', 'Kobelco SK350 × 1', 'Komatsu PC200 × 1', 'Hyundai HX220S × 1', 'Doosan 420 × 1'],
      use: 'ຂຸດ, ຕັກ ແລະ ຂົນຍ້າຍດິນ, ເກັບກູ້ດິນເຈື່ອນ',
      text: 'ລົດຈົກຂະໜາດກາງ ແລະ ຂະໜາດໃຫຍ່ ສຳລັບວຽກດິນ ແລະ ວຽກກໍ່ສ້າງຖະໜົນ.'
    },
    en: {
      title: 'Excavators',
      count: '8 units',
      use: 'Digging, loading and moving earth; landslide clearing',
      text: 'Mid-size and large excavators for earthworks and road construction.'
    }
  },
  {
    id: 'grader',
    photos: ['images/machinery/grader-1.jpg'],
    lo: {
      title: 'ລົດເກດ',
      count: '1 ຄັນ',
      models: ['Komatsu × 1'],
      use: 'ປັບລະດັບຖະໜົນ, ປູພື້ນ ແລະ ກໍ່ສ້າງທາງຫຼວງ',
      text: ''
    },
    en: {
      title: 'Motor grader',
      count: '1 unit',
      use: 'Road grading, base spreading and highway construction'
    }
  },
  {
    id: 'loader',
    photos: ['images/machinery/loader-1.jpg'],
    lo: {
      title: 'ລົດຕັກ',
      count: '1 ຄັນ',
      models: ['Komatsu WA300-1 × 1'],
      use: 'ຈັດການວັດສະດຸ ແລະ ກະກຽມສະຖານທີ່',
      text: ''
    },
    en: {
      title: 'Wheel loader',
      count: '1 unit',
      use: 'Material handling and site preparation'
    }
  },
  {
    id: 'rollers',
    photos: ['images/machinery/roller-1.jpg', 'images/machinery/roller-2.jpg', 'images/machinery/roller-3.jpg', 'images/machinery/roller-4.jpg'],
    lo: {
      title: 'ລົດໂລ',
      count: '4 ຄັນ',
      models: ['Vibromax 2000 × 1', 'Sakai 8 ໂຕນ × 1', 'VV 1000 D × 1', 'XGMA XG6224M × 1'],
      use: 'ອັດແໜ້ນດິນ, ໂລດິນ, ປູຢາງໝາກຕອຍ ແລະ ວຽກພື້ນຖານຖະໜົນ',
      text: ''
    },
    en: {
      title: 'Rollers',
      count: '4 units',
      models: ['Vibromax 2000 × 1', 'Sakai 8 t × 1', 'VV 1000 D × 1', 'XGMA XG6224M × 1'],
      use: 'Soil compaction, asphalt paving and road base works'
    }
  },
  {
    id: 'dump-10',
    photos: ['images/machinery/dump10-1.jpg', 'images/machinery/dump10-2.jpg', 'images/machinery/dump10-3.jpg', 'images/machinery/dump10-4.jpg'],
    lo: {
      title: 'ລົດດ້າມ 10 ລໍ້',
      count: '7 ຄັນ',
      models: ['Chenglong M3 × 5', 'Shacman F2000 × 1', 'SAIC Hongyan SMART × 1'],
      use: 'ຂົນສົ່ງດິນ, ຫີນກ້ອນ ແລະ ວັດສະດຸກໍ່ສ້າງ',
      text: ''
    },
    en: {
      title: 'Dump trucks, 10-wheel',
      count: '7 units',
      use: 'Hauling soil, rock and construction materials'
    }
  },
  {
    id: 'dump-12',
    photos: ['images/machinery/dump12-1.jpg', 'images/machinery/dump12-2.jpg'],
    lo: {
      title: 'ລົດດ້າມ 12 ລໍ້',
      count: '4 ຄັນ',
      models: ['HOWO V7 ປີ 2018 × 3', 'HOWO V7 ປີ 2020 × 1'],
      use: 'ຂົນສົ່ງດິນ, ຫີນກ້ອນ ແລະ ວັດສະດຸກໍ່ສ້າງ',
      text: ''
    },
    en: {
      title: 'Dump trucks, 12-wheel',
      count: '4 units',
      models: ['HOWO V7 (2018) × 3', 'HOWO V7 (2020) × 1'],
      use: 'Hauling soil, rock and construction materials'
    }
  },
  {
    id: 'water-trucks',
    photos: ['images/machinery/water-1.jpg', 'images/machinery/water-2.jpg'],
    lo: {
      title: 'ລົດຫົດນ້ຳ',
      count: '2 ຄັນ',
      models: ['Isuzu × 1', 'Dongfeng × 1'],
      use: 'ຫົດນ້ຳຄວບຄຸມຝຸ່ນ ແລະ ຊ່ວຍອັດແໜ້ນດິນ',
      text: ''
    },
    en: {
      title: 'Water trucks',
      count: '2 units',
      use: 'Dust control and water for compaction'
    }
  },
  {
    id: 'fuel-truck',
    photos: [],
    lo: {
      title: 'ລົດບັນທຸກນ້ຳມັນເຊື້ອໄຟ',
      count: '1 ຄັນ',
      models: ['[ຍີ່ຫໍ້ / ລຸ້ນ]'],
      use: 'ສົ່ງນ້ຳມັນເຊື້ອໄຟໃຫ້ເຄື່ອງຈັກຢູ່ໜ້າວຽກ',
      text: ''
    },
    en: {
      title: 'Fuel truck',
      count: '1 unit',
      models: ['[Brand / model]'],
      use: 'Refueling machines on site'
    }
  },
  {
    id: 'hyundai-h100',
    photos: ['images/machinery/h100-1.jpg'],
    lo: {
      title: 'ລົດຮຸນໄດ H100',
      count: '1 ຄັນ',
      models: ['Hyundai H100 × 1'],
      use: 'ຂົນສົ່ງອຸປະກອນ ແລະ ວັດສະດຸນ້ອຍ',
      text: ''
    },
    en: {
      title: 'Hyundai H100 light truck',
      count: '1 unit',
      use: 'Carrying tools and light materials'
    }
  },
  {
    id: 'company-vehicles',
    photos: [],
    lo: {
      title: 'ລົດບໍລິຫານ (ລົດເກັງ ແລະ ລົດກະບະ)',
      count: '9 ຄັນ',
      models: ['[ຍີ່ຫໍ້ / ລຸ້ນ]'],
      use: 'ຮັບສົ່ງພະນັກງານ ແລະ ກວດກາໜ້າວຽກ',
      text: ''
    },
    en: {
      title: 'Company vehicles (cars and pickups)',
      count: '9 units',
      models: ['[Brand / model]'],
      use: 'Staff transport and site supervision'
    }
  }
];

/* ---------- หัวข้อที่โชว์ในหน้าต่าง: [ชื่อข้อมูล, ภาษาลาว, ภาษาอังกฤษ] ---------- */
var DETAIL_ITEMS = MACHINES;
var DETAIL_FIELDS = [
  ['count', 'ຈຳນວນ', 'Units'],
  ['models', 'ຍີ່ຫໍ້ ແລະ ລຸ້ນ', 'Brand and model'],
  ['use', 'ໜ້າທີ່ການໃຊ້ງານ', 'Used for']
];
var DETAIL_CTA = { lo: 'ສອບຖາມການເຊົ່າອຸປະກອນກົນຈັກໜັກ', en: 'Ask about equipment rental', href: 'contact.html#quote' };
