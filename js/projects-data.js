/* =========================================================
   projects-data.js — รายละเอียดโครงการ (เด้งขึ้นมาตอนกดการ์ดในหน้าผลงาน)

   วิธีแก้:
   - id      ต้องตรงกับ data-project="..." ในไฟล์ projects.html
   - ongoing true = ขึ้นป้าย "ກຳລັງດຳເນີນ / Ongoing"
   - photos  รายชื่อรูป เรียงตามลำดับที่แสดง (ไม่มีรูปใส่ [])
   - lo      ข้อความภาษาลาว,  en  ข้อความภาษาอังกฤษ
   - ลำดับในรายการนี้ = ลำดับของปุ่ม ก่อนหน้า / ถัดไป
   ข้อความที่อยู่ใน [ ] คือช่องที่ยังต้องเติม
   ========================================================= */

var PROJECTS = [
  {
    id: 'nr2e-flood-2026',
    ongoing: false,
    photos: [],
    lo: {
      title: 'ເກັບກູ້ດິນເຈື່ອນຫຼັງນ້ຳຖ້ວມ ເສັ້ນທາງ NR 2E',
      period: '2026',
      location: 'ເສັ້ນທາງແຫ່ງຊາດ NR 2E, ແຂວງອຸດົມໄຊ',
      client: '[ຜູ້ວ່າຈ້າງ]',
      type: 'ເກັບກູ້ດິນເຈື່ອນ, ແກ້ໄຂສຸກເສີນ',
      text: 'ຫຼັງເຫດການຝົນຕົກໜັກ ແລະ ນ້ຳຖ້ວມ ວັນທີ 30 ສິງຫາ 2026 ເກີດດິນເຈື່ອນຫຼາຍຈຸດຕາມເສັ້ນທາງ NR 2E. ທີມງານ ແລະ ເຄື່ອງຈັກຂອງບໍລິສັດໄດ້ຮ່ວມເກັບກູ້ດິນ ເພື່ອເປີດທາງໃຫ້ລົດສັນຈອນໄດ້ຢ່າງປອດໄພ. [ລາຍລະອຽດເພີ່ມເຕີມ]'
    },
    en: {
      title: 'Landslide clearing after the NR 2E flood',
      period: '2026',
      location: 'National Road 2E, Oudomxay Province',
      client: '[Client]',
      type: 'Landslide clearing, emergency works',
      text: 'After heavy rain and flooding on 30 August 2026, landslides blocked NR 2E at many points. Our team and machinery helped clear the debris so traffic could pass safely again. [More details]'
    }
  },
  {
    id: 'nr2-rental',
    ongoing: true,
    photos: ['images/project-7.jpg', 'images/projects/nr2-rental-2.jpg', 'images/projects/nr2-rental-3.jpg', 'images/projects/nr2-rental-4.jpg'],
    lo: {
      title: 'ໃຫ້ເຊົ່າເຄື່ອງຈັກໜັກ ບຳລຸງຮັກສາເສັ້ນທາງ NR 2 ກມ 51+100 – 78+100',
      period: '14 ມັງກອນ 2026 – 14 ມັງກອນ 2028 (24 ເດືອນ)',
      location: 'ເສັ້ນທາງແຫ່ງຊາດ NR 2, ກມ 51+100 – 78+100',
      client: 'ຜູ້ຮັບເໝົາ: ບໍລິສັດ ຮ່ວມທຶນກໍ່ສ້າງ, ບໍລິການ ແລະ ການຄ້າ 68',
      type: 'ໃຫ້ເຊົ່າເຄື່ອງຈັກໜັກ, ບຳລຸງຮັກສາເສັ້ນທາງ',
      text: 'ບໍລິສັດສະໜອງເຄື່ອງຈັກໜັກ ເພື່ອບຳລຸງຮັກສາ ແລະ ສ້ອມແປງເສັ້ນທາງແຫ່ງຊາດຊ່ວງນີ້ ຕະຫຼອດໄລຍະ 24 ເດືອນ ໂດຍເຮັດວຽກຮ່ວມກັບຜູ້ຮັບເໝົາ ບໍລິສັດ 68.'
    },
    en: {
      title: 'Equipment rental for NR 2 maintenance, km 51+100 – 78+100',
      period: '14 January 2026 – 14 January 2028 (24 months)',
      location: 'National Road 2, km 51+100 – 78+100',
      client: 'Main contractor: Construction, Service and Trading JV Co. 68',
      type: 'Heavy equipment rental, road maintenance',
      text: 'We supply heavy machinery for the maintenance and repair of this national road section over 24 months, working with the main contractor Co. 68.'
    }
  },
  {
    id: 'nr2e-66-78',
    ongoing: true,
    photos: ['images/project-8.jpg', 'images/projects/nr2e-66-78-2.jpg', 'images/projects/nr2e-66-78-3.jpg'],
    lo: {
      title: 'ກໍ່ສ້າງເສັ້ນທາງ NR 2E ກມ 66+000 – 78+100',
      period: '25 ພະຈິກ 2025 – 25 ພະຈິກ 2027',
      location: 'ເສັ້ນທາງແຫ່ງຊາດ NR 2E, ກມ 66+000 – 78+100',
      client: 'ຜູ້ຮັບເໝົາ: ບໍລິສັດ ຮ່ວມທຶນກໍ່ສ້າງ, ບໍລິການ ແລະ ການຄ້າ 68',
      type: 'ກໍ່ສ້າງຖະໜົນ',
      text: 'ວຽກກໍ່ສ້າງເສັ້ນທາງເທິງທາງຫຼວງແຫ່ງຊາດ NR 2E ໄລຍະທາງປະມານ 12 ກມ ໂດຍເຮັດວຽກຮ່ວມກັບຜູ້ຮັບເໝົາ ບໍລິສັດ 68.'
    },
    en: {
      title: 'NR 2E road construction, km 66+000 – 78+100',
      period: '25 November 2025 – 25 November 2027',
      location: 'National Road 2E, km 66+000 – 78+100',
      client: 'Main contractor: Construction, Service and Trading JV Co. 68',
      type: 'Road construction',
      text: 'Road construction on about 12 km of National Road 2E, working with the main contractor Co. 68.'
    }
  },
  {
    id: 'pak-nam-noy',
    ongoing: false,
    photos: ['images/project-6.jpg', 'images/projects/pak-nam-noy-2.jpg', 'images/projects/pak-nam-noy-3.jpg', 'images/projects/pak-nam-noy-4.jpg'],
    lo: {
      title: 'ປັບລະດັບດິນ ສຳລັບຕະຫຼາດຊຸມຊົນປາກນ້ຳນ້ອຍ',
      period: 'ມີນາ – ພຶດສະພາ 2026',
      location: 'ເມືອງຂວາ, ແຂວງຜົ້ງສາລີ',
      client: '[ຜູ້ວ່າຈ້າງ]',
      type: 'ປັບລະດັບດິນ, ຍົກຍ້າຍ',
      text: 'ປັບລະດັບດິນ ແລະ ຍົກຍ້າຍ 7 ຄອບຄົວ ທີ່ໄດ້ຮັບຜົນກະທົບຈາກໂຄງການສ້ອມແປງ ແລະ ຍົກລະດັບເສັ້ນທາງ NR 2E ເພື່ອອຳນວຍຄວາມສະດວກໃນການກໍ່ສ້າງຕະຫຼາດຊຸມຊົນປາກນ້ຳນ້ອຍ.'
    },
    en: {
      title: 'Land leveling for Pak Nam Noy community market',
      period: 'March – May 2026',
      location: 'Muang Khua, Phongsaly Province',
      client: '[Client]',
      type: 'Land leveling, relocation',
      text: 'Land leveling and relocation of 7 families affected by the NR 2E repair and upgrade project, to make way for the Pak Nam Noy community market.'
    }
  },
  {
    id: 'nr2e-km10',
    ongoing: false,
    photos: ['images/project-5.jpg', 'images/projects/nr2e-km10-2.jpg', 'images/projects/nr2e-km10-3.jpg'],
    lo: {
      title: 'ໃຫ້ເຊົ່າເຄື່ອງຈັກ ແລະ ສ້ອມແປງເສັ້ນທາງ NR 2E ກມ 10',
      period: 'ກຸມພາ – ສິງຫາ 2026 (6 ເດືອນ)',
      location: 'ເມືອງໄຊ, ແຂວງອຸດົມໄຊ',
      client: '[ຜູ້ວ່າຈ້າງ]',
      type: 'ໃຫ້ເຊົ່າເຄື່ອງຈັກໜັກ, ສ້ອມແປງເສັ້ນທາງ',
      text: 'ໃຫ້ເຊົ່າເຄື່ອງຈັກໜັກ ແລະ ສ້ອມແປງເສັ້ນທາງແຫ່ງຊາດ NR 2E ທີ່ກິໂລແມັດທີ 10 ໄລຍະ 6 ເດືອນ.'
    },
    en: {
      title: 'Equipment rental and road repair, NR 2E km 10',
      period: 'February – August 2026 (6 months)',
      location: 'Xay District, Oudomxay Province',
      client: '[Client]',
      type: 'Heavy equipment rental, road repair',
      text: 'Heavy equipment rental and repair of National Road 2E at kilometer 10 over 6 months.'
    }
  },
  {
    id: 'bsa2',
    ongoing: false,
    photos: ['images/project-4.jpg', 'images/projects/bsa2-2.jpg'],
    lo: {
      title: 'ກໍ່ສ້າງເສັ້ນທາງ 2.75 ກມ ເຂດອຸດສາຫະກຳ BSA 2',
      period: '2024 – 2025',
      location: 'ເຂດອຸດສາຫະກຳ BSA 2, ແຂວງອັດຕະປື',
      client: 'Southern Laos Agricultural Business Production and Investment Sole Co., Ltd.',
      type: 'ກໍ່ສ້າງຖະໜົນ',
      text: 'ກໍ່ສ້າງເສັ້ນທາງ ໄລຍະທາງ 2.75 ກມ ຂ້າມເຂດອຸດສາຫະກຳ BSA 2.'
    },
    en: {
      title: '2.75 km road, BSA 2 industrial zone',
      period: '2024 – 2025',
      location: 'BSA 2 industrial zone, Attapeu Province',
      client: 'Southern Laos Agricultural Business Production and Investment Sole Co., Ltd.',
      type: 'Road construction',
      text: 'Construction of a 2.75 km road across the BSA 2 industrial zone.'
    }
  },
  {
    id: 'road-3-9km',
    ongoing: false,
    photos: ['images/project-3.jpg', 'images/projects/road-3-9km-2.jpg'],
    lo: {
      title: 'ປັບປຸງໜ້າດິນຖະໜົນ 3.9 ກມ',
      period: '2023 – 2025',
      location: 'ເຂດລ້ຽງງົວ ແລະ ເຂດອຸດສາຫະກຳ',
      client: 'Southern Laos Agricultural Business Production and Investment Sole Co., Ltd.',
      type: 'ປັບປຸງໜ້າດິນຖະໜົນ',
      text: 'ປັບປຸງໜ້າດິນຖະໜົນ ໄລຍະທາງ 3.9 ກມ ຜ່ານເຂດລ້ຽງງົວ ແລະ ເຂດອຸດສາຫະກຳ.'
    },
    en: {
      title: '3.9 km road surface improvement',
      period: '2023 – 2025',
      location: 'Cattle-farming and industrial areas',
      client: 'Southern Laos Agricultural Business Production and Investment Sole Co., Ltd.',
      type: 'Road surface improvement',
      text: 'Surface improvement of a 3.9 km road through cattle-farming and industrial areas.'
    }
  },
  {
    id: 'bsa1',
    ongoing: false,
    photos: [],
    lo: {
      title: 'ກໍ່ສ້າງເສັ້ນທາງ 2.25 ກມ ເຂດອຸດສາຫະກຳ BSA 1',
      period: '2023 – 2024',
      location: 'ເມືອງໄຊເສດຖາ, ແຂວງອັດຕະປື',
      client: 'Southern Laos Agricultural Business Production and Investment Sole Co., Ltd.',
      type: 'ກໍ່ສ້າງຖະໜົນ',
      text: 'ກໍ່ສ້າງເສັ້ນທາງ ໄລຍະທາງ 2.25 ກມ ໃນເຂດອຸດສາຫະກຳ BSA 1.'
    },
    en: {
      title: '2.25 km road, BSA 1 industrial zone',
      period: '2023 – 2024',
      location: 'Xaysetha District, Attapeu Province',
      client: 'Southern Laos Agricultural Business Production and Investment Sole Co., Ltd.',
      type: 'Road construction',
      text: 'Construction of a 2.25 km road in the BSA 1 industrial zone.'
    }
  },
  {
    id: 'hagl-farm',
    ongoing: false,
    photos: [],
    lo: {
      title: 'ບຸກເບີກ ແລະ ຖົມດິນ ສຳລັບຟາມງົວນົມ (ໄລຍະທີ 1)',
      period: '2021 – 2023',
      location: 'ເມືອງໄຊເສດຖາ, ແຂວງອັດຕະປື',
      client: 'HAGL',
      type: 'ບຸກເບີກ ແລະ ຖົມດິນ',
      text: 'ບຸກເບີກພື້ນທີ່ ແລະ ຖົມດິນ ສຳລັບຟາມງົວນົມ ໄລຍະທີ 1 ພາຍໃຕ້ໂຄງການລົງທຶນຂອງ HAGL.'
    },
    en: {
      title: 'Land clearing and filling for a dairy farm (phase 1)',
      period: '2021 – 2023',
      location: 'Xaysetha District, Attapeu Province',
      client: 'HAGL',
      type: 'Land clearing and filling',
      text: 'Land clearing and filling for phase 1 of a dairy farm under an HAGL investment project.'
    }
  }
];
