const stage=document.getElementById('envelopeStage');
const invitation=document.getElementById('invitation');
const openButton=document.getElementById('openInvitation');
const backButton=document.getElementById('backToEnvelope');
const rsvpButton=document.getElementById('rsvpButton');
const rsvpNote=document.getElementById('rsvpNote');

const translations={
ky:{
intro:'Сиздерге<br><span>сүйүнчүлүү кабарыбыз бар…</span>',dateShort:'22 · НОЯБРЬ · 2026',
envelopeLabel: 'ҮЙЛӨНҮҮ ТОЙГО ЧАКЫРУУ',
openHint:'АЧУУ ҮЧҮН БАСЫҢЫЗ',
tinyNote:'Сизди кубанычыбызга ортоктош болууга чакырабыз ♡',back:'← Конвертке кайтуу',
dear:'КЫМБАТТУУ ТУУГАНДАР ЖАНА ЖАКЫНДАР!',headline:'Биз баш кошуп жатабыз!',
invitationCopy:'Өмүрүбүздөгү эң маанилүү жана өзгөчө күнүбүздү биз менен бирге бөлүшүүгө сиздерди үйлөнүү тоюбузга —',
weddingWord:'чын жүрөктөн чакырабыз!',photoCaption1:'Биздин тарыхыбыз уланууда…',photoCaption2:'Бул күндү сиздер менен бөлүшкүбүз келет ♡',
dateLabel:'КҮНҮ',dateValue:'22-ноябрь',weekday:'жекшемби',placeLabel:'ӨТҮҮЧҮ ЖЕР',restaurant:'Ресторан',
mapHint:'картадан көрүү',timeLabel:'УБАКТЫСЫ',closing:'СИЗДЕРДИ<br>КОНОКТОРУБУЗДУН АРАСЫНДА КӨРҮҮГӨ КУБАНЫЧТАБЫЗ!',
rsvp:'Катышууну ырастоо',rsvpNote:'Келериңизди же келе албай турганыңызды билдирип коюңуз.',
footer:'Биз сиздерди күтөбүз ♡',
rsvpMessage:'Саламатсызбы! 22-ноябрь күнү саат 16:00дөгү тоюңуздарга катышарымды ырастайм ❤️'
},
ru:{
intro:'У нас есть<br><span>радостная новость…</span>',dateShort:'22 · НОЯБРЯ · 2026',
envelopeLabel:'ПРИГЛАШЕНИЕ',our:'на нашу',wedding:'свадьбу',openHint:'НАЖМИТЕ, ЧТОБЫ ОТКРЫТЬ',
tinyNote:'Будем счастливы разделить с вами нашу радость ♡',back:'← Вернуться к конверту',
dear:'ДОРОГИЕ РОДНЫЕ И БЛИЗКИЕ!',headline:'Мы женимся!',
invitationCopy:'С огромной радостью приглашаем вас разделить с нами самый важный и особенный день в нашей жизни —',
weddingWord:'нашу свадьбу',photoCaption1:'Наша история продолжается…',photoCaption2:'И мы хотим разделить этот день с вами ♡',
dateLabel:'ДАТА',dateValue:'22 ноября',weekday:'воскресенье',placeLabel:'МЕСТО',restaurant:'Ресторан',
mapHint:'на карте',timeLabel:'ВРЕМЯ',closing:'БУДЕМ СЧАСТЛИВЫ ВИДЕТЬ ВАС<br>СРЕДИ НАШИХ ГОСТЕЙ!',
rsvp:'Подтвердить участие',rsvpNote:'Будем благодарны, если вы дадите нам знать, что будете с нами.',
footer:'С любовью, в ожидании нашего дня ♡',
rsvpMessage:'Привет! Подтверждаю участие в вашей свадьбе 22 ноября в 16:00 ❤️'
}};
let currentLang='ky';
function setLanguage(lang){
 currentLang=translations[lang]?lang:'ky';
 document.documentElement.lang=currentLang;
 document.querySelectorAll('[data-i18n]').forEach(el=>{const value=translations[currentLang][el.dataset.i18n];if(value!==undefined)el.innerHTML=value;});
 document.querySelectorAll('[data-lang]').forEach(btn=>{const active=btn.dataset.lang===currentLang;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active));});
 document.title=currentLang==='ky'?'Тойго чакыруу — 22-ноябрь, 2026':'Приглашение на свадьбу — 22 ноября 2026';
}
document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();setLanguage(btn.dataset.lang);}));
setLanguage('ky');
openButton.addEventListener('click',()=>{
 stage.style.transition='opacity .45s ease, transform .45s ease';stage.style.opacity='0';stage.style.transform='scale(.97)';
 window.setTimeout(()=>{stage.style.display='none';invitation.classList.add('is-open');invitation.setAttribute('aria-hidden','false');window.scrollTo({top:0,behavior:'smooth'});},420);
});
backButton.addEventListener('click',()=>{
 invitation.classList.remove('is-open');invitation.setAttribute('aria-hidden','true');stage.style.display='flex';stage.style.opacity='0';stage.style.transform='scale(.98)';
 window.setTimeout(()=>{stage.style.opacity='1';stage.style.transform='scale(1)';window.scrollTo({top:0,behavior:'smooth'});},20);
});
rsvpButton.addEventListener('click',()=>{
 const message=encodeURIComponent(translations[currentLang].rsvpMessage);
 const whatsappNumber='+996700947741';
 window.open(`https://wa.me/${whatsappNumber.replace(/\D/g,'')}?text=${message}`,'_blank','noopener');
});
