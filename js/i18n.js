// Translations. English is also written directly in the HTML, so the page still
// reads correctly if this script fails. Elements opt in with data-i18n (text),
// data-i18n-alt (image alt) or data-i18n-content (meta description).

// Published Google Sheet (CSV) that overrides the text below, so Chin Chin can
// edit the site without touching code. Columns: key, en, zh, my (any others are
// ignored). Empty cells, or the sheet being unreachable, fall back to the text
// below. Leave as "" to turn the sheet off.
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9wojaRKCadNxKxNFtLOIn6wC7NyfmhHnNXLOLWb6A0pZem4IgB6iJsD5PHRDxMFOzxLMMJ2CQwM2P/pub?gid=0&single=true&output=csv";
const translations = {
  en: {
    "meta.indexTitle": "Chin Chin | Myanmar-Taiwan Bridge",
    "meta.indexDesc": "Chin Chin — Myanmar content creator based in Taiwan. Study abroad guidance, 1-on-1 Chinese tutoring, and brand partnerships.",
    "meta.aboutTitle": "About Chin Chin | Chin Chin",
    "meta.aboutDesc": "About Chin Chin — Myanmar content creator based in Taiwan, National Taiwan University graduate, and guide for Myanmar students moving to Taiwan.",
    "nav.about": "About",
    "nav.study": "Study in Taiwan",
    "nav.tutoring": "Chinese Tutoring",
    "nav.partnerships": "Brand Partnerships",
    "nav.contact": "Contact",
    "hero.eyebrow": "Myanmar creator, based in Taiwan · 14K+ followers",
    "hero.title": "Helping Myanmar students find their way to Taiwan.",
    "hero.lead": "I've called Taiwan home for 8 years. Every day, my followers ask me the same questions: How to study in Taiwan? How to learn Chinese? How do I survive here? This site is where I answer those questions properly.",
    "hero.ctaStudy": "I want to study in Taiwan",
    "hero.ctaTutoring": "I want to learn Chinese",
    "hero.more": "Read my full story →",
    "study.title": "Study in Taiwan",
    "study.body": "Thinking about coming to Taiwan to study? Tell me a bit about where you are and what you're hoping to do, and I'll follow up with next steps.",
    "form.openNew": "Form not showing properly? Open it in a new tab",
    "tutoring.title": "1-on-1 Online Chinese Tutoring",
    "tutoring.body": "Learn Mandarin one-on-one, online, at your own pace. Let me know your level and schedule and I'll get back to you with options.",
    "partner.title": "Brand Partnerships",
    "partner.body": "I work with brands relevant to my audience of Myanmar and Taiwan-based followers. For collaboration inquiries, media kit, and rates, get in touch directly.",
    "partner.cta": "Email for brand inquiries",
    "contact.title": "Other Ways to Reach Me",
    "footer.rights": "All rights reserved.",
    "about.eyebrow": "About",
    "about.lead": "I came to Taiwan from Myanmar, completed the 僑生先修部 (overseas student prep program), and graduated from National Taiwan University's Department of Accounting — Taiwan's top-ranked university. Along the way I built a following across Myanmar and Taiwan, and now I use it to help students and fans figure out the same path I once had to figure out myself: getting into a Taiwanese school, learning Chinese, and settling in.",
    "stat.followersValue": "14K+",
    "stat.followers": "Followers",
    "stat.yearsValue": "8+ yrs",
    "stat.years": "In Taiwan",
    "stat.ntuValue": "NTU",
    "stat.ntu": "Accounting graduate",
    "stat.langValue": "3",
    "stat.languages": "Languages fluent",
    "alt.ntu": "Chin Chin at National Taiwan University on graduation day",
    "alt.taipei101": "Chin Chin in front of Taipei 101",
    "alt.highschool": "Chin Chin at her senior high school",
  },
  zh: {
    "meta.indexTitle": "Chin Chin 青青 | 緬甸與台灣的橋樑",
    "meta.indexDesc": "青青 Chin Chin — 住在台灣的緬甸創作者。提供來台留學諮詢、一對一線上中文家教與品牌合作。",
    "meta.aboutTitle": "關於青青 | Chin Chin",
    "meta.aboutDesc": "關於青青 — 住在台灣的緬甸創作者、臺大畢業生，協助緬甸學生來台灣。",
    "nav.about": "關於我",
    "nav.study": "來台留學",
    "nav.tutoring": "中文家教",
    "nav.partnerships": "品牌合作",
    "nav.contact": "聯絡我",
    "hero.eyebrow": "緬甸創作者，現居台灣 · 14K+ 追蹤者",
    "hero.title": "幫助緬甸學生找到來台灣的路。",
    "hero.lead": "我在台灣生活已經 8 年了。粉絲每天都問我一樣的問題：怎麼來台灣讀書、怎麼學中文、怎麼在這裡順利生活。這個網站，就是我好好回答這些問題的地方。",
    "hero.ctaStudy": "我想來台灣讀書",
    "hero.ctaTutoring": "我想學中文",
    "hero.more": "看我的完整故事 →",
    "study.title": "來台留學",
    "study.body": "正在考慮來台灣讀書嗎？告訴我你目前的狀況和想做的事，我會再跟你聯絡，說明下一步該怎麼做。",
    "form.openNew": "表單顯示不完整？點這裡在新分頁開啟",
    "tutoring.title": "一對一線上中文家教",
    "tutoring.body": "線上一對一學中文，照你自己的步調。告訴我你的程度和可以上課的時間，我會回覆你適合的方案。",
    "partner.title": "品牌合作",
    "partner.body": "我和與緬甸、台灣粉絲相關的品牌合作。合作洽詢、媒體資料與報價，歡迎直接與我聯絡。",
    "partner.cta": "寄信洽詢品牌合作",
    "contact.title": "其他聯絡方式",
    "footer.rights": "版權所有。",
    "about.eyebrow": "關於我",
    "about.lead": "我從緬甸來到台灣，讀完僑生先修部，之後從台灣排名第一的國立臺灣大學會計學系畢業。一路上，我在緬甸和台灣累積了一群粉絲，現在我用這個平台，幫助學生和粉絲走我當年自己摸索過的路：申請台灣的學校、學中文，以及在這裡安頓下來。",
    "stat.followersValue": "14K+",
    "stat.followers": "追蹤者",
    "stat.yearsValue": "8+ 年",
    "stat.years": "在台灣",
    "stat.ntuValue": "臺大",
    "stat.ntu": "會計系畢業",
    "stat.langValue": "3",
    "stat.languages": "種流利語言",
    "alt.ntu": "青青在臺大畢業典禮當天",
    "alt.taipei101": "青青在台北 101 前",
    "alt.highschool": "青青在她的高中母校",
  },
  // Burmese (Unicode).
  my: {
    "meta.indexTitle": "Chin Chin | မြန်မာ-ထိုင်ဝမ် တံတား",
    "meta.indexDesc": "ထိုင်ဝမ်အခြေစိုက် မြန်မာ Content Creator Chin Chin — ထိုင်ဝမ်ပညာသင် အကြံပေး၊ တစ်ဦးချင်း အွန်လိုင်းတရုတ်စာသင်တန်းနှင့် Brand ပူးပေါင်းဆောင်ရွက်မှု။",
    "meta.aboutTitle": "Chin Chin အကြောင်း | Chin Chin",
    "meta.aboutDesc": "ထိုင်ဝမ်အခြေစိုက် မြန်မာ Content Creator နှင့် National Taiwan University ဘွဲ့ရ Chin Chin အကြောင်း။",
    "nav.about": "ကျွန်မအကြောင်း",
    "nav.study": "ထိုင်ဝမ်တွင် ပညာသင်ရန်",
    "nav.tutoring": "တရုတ်စာ သင်တန်း",
    "nav.partnerships": "Brand ပူးပေါင်းမှု",
    "nav.contact": "ဆက်သွယ်ရန်",
    "hero.eyebrow": "ထိုင်ဝမ်အခြေစိုက် မြန်မာ Creator · Followers 14K+",
    "hero.title": "မြန်မာကျောင်းသားများ ထိုင်ဝမ်သို့ လာရောက်ပညာသင်ကြားနိုင်ရန် ကူညီလမ်းပြပေးနေပါတယ်။",
    "hero.lead": "ချင်း ထိုင်ဝမ်မှာနေတာ ၈ နှစ်ရှိပါပြီ။ Followerတွေတော်တော်များများက နေ့တိုင်းလိုလို ဒီမေးခွန်းတွေကို ထပ်ခါထပ်ခါမေးကြတယ် — ထိုင်ဝမ်မှာပညာသင်ဖို့ ဘယ်လိုပြင်ဆင်ရမလဲ? တရုတ်စာကို ဘယ်လိုသင်ယူရမလဲ? ဒီမှာနေထိုင်ရတာ အဆင်ပြေအောင် ဘယ်လိုနေရမလဲဆိုပြီးတော့ပေါ့။ ဒါကြောင့်မို့ ဒီဝဘ်ဆိုက်လေးထဲမှာပဲ အဲဒီမေးခွန်းတွေကို သေချာလေး သီးသန့်ဖြေပေးသွားပါမယ်နော်။",
    "hero.ctaStudy": "ထိုင်ဝမ်မှာ ကျောင်းတက်ချင်ပါတယ်",
    "hero.ctaTutoring": "တရုတ်စာ လေ့လာချင်ပါတယ်",
    "hero.more": "ကျွန်မရဲ့ ဇာတ်လမ်း အပြည့်အစုံ ဖတ်ရန် →",
    "study.title": "ထိုင်ဝမ်တွင် ပညာသင်ရန်",
    "study.body": "ထိုင်ဝမ်မှာ ကျောင်းလာတက်ဖို့ စဉ်းစားနေပါသလား။ သင့်ရဲ့ လက်ရှိအခြေအနေနဲ့ ရည်မှန်းချက်တွေကို ပြောပြပေးပါ၊ ရှေ့ဆက်ဘာလုပ်ရမလဲဆိုတာကို ကျွန်မ ပြန်လည်ဆက်သွယ် အကြံပြုပေးပါမယ်။",
    "form.openNew": "Form ကို အပြည့်အစုံ မမြင်ရဘူးလား။ Tab အသစ်မှာ ဖွင့်ရန် ဒီမှာ နှိပ်ပါ",
    "tutoring.title": "တစ်ဦးချင်း အွန်လိုင်း တရုတ်စာ သင်တန်း",
    "tutoring.body": "တရုတ်စာ (Mandarin) ကို အွန်လိုင်းမှတစ်ဆင့် တစ်ဦးချင်း၊ မိမိအဆင်ပြေမည့်အချိန်နှင့် အရှိန်အဟုန်အတိုင်း လေ့လာနိုင်ပါတယ်။ သင့်ရဲ့ လက်ရှိအဆင့်နဲ့ အားလပ်ချိန်ကို ပြောပြပေးပါ၊ သင့်တော်မယ့် သင်တန်းအစီအစဉ်များနဲ့အတူ ပြန်လည်ဆက်သွယ်ပေးပါမယ်။",
    "partner.title": "Brand ပူးပေါင်းဆောင်ရွက်မှု",
    "partner.body": "မြန်မာနဲ့ ထိုင်ဝမ်မှာရှိတဲ့ ကျွန်မရဲ့ Followers တွေနဲ့ ကိုက်ညီမယ့် Brand တွေနဲ့ ပူးပေါင်းဆောင်ရွက်နေပါတယ်။ Sponsorship ၊ Media Kit နဲ့ ဈေးနှုန်းများအတွက် တိုက်ရိုက် ဆက်သွယ်စုံစမ်းနိုင်ပါတယ်။",
    "partner.cta": "Brand ပူးပေါင်းမှုအတွက် Email ပို့ရန်",
    "contact.title": "အခြား ဆက်သွယ်နိုင်သည့် နည်းလမ်းများ",
    "footer.rights": "မူပိုင်ခွင့် အားလုံး ရယူထားသည်။",
    "about.eyebrow": "ကျွန်မအကြောင်း",
    "about.lead": "ကျွန်မက မြန်မာနိုင်ငံကနေ ထိုင်ဝမ်ကို လာရောက်ခဲ့ပြီး 僑生先修部 (နိုင်ငံခြားသားကျောင်းသားများအတွက် တက္ကသိုလ်အကြိုပြင်ဆင်ရေးသင်တန်း) ကို တက်ရောက်ခဲ့ပါတယ်။ အဲဒီနောက်မှာတော့ ထိုင်ဝမ်ရဲ့ အကောင်းဆုံးတက္ကသိုလ်ဖြစ်တဲ့ National Taiwan University (NTU) ရဲ့ စာရင်းကိုင်မေဂျာနဲ့ ဘွဲ့ရခဲ့ပါတယ်။ ဒီခရီးလမ်းတစ်လျှောက်မှာ မြန်မာနဲ့ ထိုင်ဝမ်က Followers တွေရဲ့ အားပေးမှုကို ရရှိခဲ့ပြီး၊ အခုချိန်မှာတော့ ကျွန်မကိုယ်တိုင် ကြုံတွေ့ဖြတ်သန်းခဲ့ရတဲ့ အတွေ့အကြုံတွေကနေတစ်ဆင့် ထိုင်ဝမ်မှာ ကျောင်းဝင်ခွင့်ရဖို့၊ တရုတ်စာလေ့လာဖို့နဲ့ ဒီမှာ အခြေချနေထိုင်ဖို့ စတဲ့ အကြောင်းအရာတွေကို ကျောင်းသားတွေနဲ့ Followers တွေအတွက် ပြန်လည်မျှဝေ ကူညီပေးနေပါတယ်။",
    "stat.followersValue": "14K+",
    "stat.followers": "Followers",
    "stat.yearsValue": "၈+ နှစ်",
    "stat.years": "ထိုင်ဝမ်တွင်",
    "stat.ntuValue": "NTU",
    "stat.ntu": "စာရင်းကိုင် ဘွဲ့ရ",
    "stat.langValue": "၃",
    "stat.languages": "ဘာသာစကား ကျွမ်းကျင်",
    "alt.ntu": "NTU ဘွဲ့နှင်းသဘင်နေ့တွင် Chin Chin",
    "alt.taipei101": "Taipei 101 ရှေ့တွင် Chin Chin",
    "alt.highschool": "အထက်တန်းကျောင်းတွင် Chin Chin",
  },
};

const htmlLang = { en: "en", zh: "zh-Hant", my: "my" };

function pickInitialLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (fromUrl in translations) return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (saved in translations) return saved;
  } catch (e) {}
  for (const l of navigator.languages || [navigator.language || ""]) {
    if (l.startsWith("zh")) return "zh";
    if (l.startsWith("my")) return "my";
    if (l.startsWith("en")) return "en";
  }
  return "en";
}

// Minimal CSV parser: handles quoted fields with commas, quotes and newlines.
function parseCsv(csv) {
  const rows = [[]];
  let field = "";
  let quoted = false;
  for (let i = 0; i < csv.length; i++) {
    const c = csv[i];
    if (quoted) {
      if (c === '"' && csv[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      rows[rows.length - 1].push(field);
      field = "";
    } else if (c === "\n") {
      rows[rows.length - 1].push(field);
      field = "";
      rows.push([]);
    } else if (c !== "\r") field += c;
  }
  rows[rows.length - 1].push(field);
  return rows;
}

// Turns sheet rows into { en: { key: text }, zh: {...}, my: {...} }.
function sheetToText(rows) {
  const header = rows[0].map((h) => h.trim().toLowerCase());
  const keyCol = header.indexOf("key");
  const out = {};
  if (keyCol < 0) return out;
  for (const lang of Object.keys(translations)) {
    const col = header.indexOf(lang);
    if (col < 0) continue;
    out[lang] = {};
    for (const row of rows.slice(1)) {
      const key = (row[keyCol] || "").trim();
      const text = (row[col] || "").trim();
      if (key && text) out[lang][key] = text;
    }
  }
  return out;
}

// Last sheet text this browser saw, so edits show instantly on repeat visits
// while the fresh copy loads.
let sheetText = {};
if (SHEET_CSV_URL) {
  try {
    sheetText = JSON.parse(localStorage.getItem("sheetText")) || {};
  } catch (e) {}
}

let currentLang = "en";

function setLang(lang) {
  currentLang = lang;
  const dict = { ...translations[lang], ...sheetText[lang] };
  document.documentElement.lang = htmlLang[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text) el.textContent = text;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const text = dict[el.dataset.i18nAlt];
    if (text) el.alt = text;
  });
  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const text = dict[el.dataset.i18nContent];
    if (text) el.content = text;
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang);
  });
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}
}

document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

setLang(pickInitialLang());

if (SHEET_CSV_URL) {
  fetch(SHEET_CSV_URL, { cache: "no-store" })
    .then((res) => (res.ok ? res.text() : Promise.reject(res.status)))
    .then((csv) => {
      sheetText = sheetToText(parseCsv(csv));
      try {
        localStorage.setItem("sheetText", JSON.stringify(sheetText));
      } catch (e) {}
      setLang(currentLang);
    })
    .catch(() => {});
}
