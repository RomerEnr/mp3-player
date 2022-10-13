(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const c=[{title:"Monkey Island Theme",artist:"Michael Land",url:"https://scummbar.com/mi2/MI1-CD/01%20-%20Opening%20Themes%20-%20Introduction.mp3",image:"img/monkey.jpeg"},{title:"The SCUMM Bar",artist:"Michael Land",url:"https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3",image:"img/scummbar.jpeg"},{title:"LeChuck's Theme",artist:"Michael Land",url:"https://scummbar.com/mi2/MI1-CD/04%20-%20LeChuck's%20Theme.mp3",image:"img/lechuck.jpeg"},{title:"Monkey Island (Remix)",artist:"Michael Land",url:"https://scummbar.com/mi2/MI1-CD/26%20-%20Monkey%20Island%20-%20Rock%20Remix%202.mp3",image:"img/monkey-mix.jpeg"}],b=(e,o)=>{const n=document.querySelectorAll("a");e!==null&&n[e].classList.remove("active"),n[o].classList.add("active")},a=document.createElement("audio"),u=document.querySelector("#play"),M=document.querySelector("#prev"),C=document.querySelector("#next"),y=document.querySelector(".current-time"),d=document.querySelector(".progress-slider"),v=document.querySelector(".total-duration"),S=document.querySelector("#toggle-button"),k=e=>{const o=document.querySelector(".art-box");o.style.backgroundImage=`url("${c[e].image}")`},T=e=>{const o=document.querySelector(".artist-data h1"),n=document.querySelector(".artist-data h2");o.textContent=c[e].title,n.textContent=c[e].artist},p=()=>{a.paused?(u.classList.remove("fa-pause"),u.classList.add("fa-play")):(u.classList.add("fa-pause"),u.classList.remove("fa-play"))},L=()=>{l!==null&&(a.play(),p())},E=()=>{d.value=0,y.textContent="00:00",v.textContent="00:00"},x=()=>{let e=0;if(!isNaN(a.duration)){e=a.currentTime*(100/a.duration),d.value=e;let o=Math.floor(a.currentTime/60),n=Math.floor(a.currentTime-o*60),r=Math.floor(a.duration/60),t=Math.floor(a.duration-r*60);n<10&&(n="0"+n),t<10&&(t="0"+t),o<10&&(o="0"+o),r<10&&(r="0"+r),y.textContent=o+":"+n,v.textContent=r+":"+t}},h=["Dime una vez mas todos los cr\xEDmenes que comet\xED, y te dir\xE9 el precio de la victoria","El amor es cruel, sin embargo, \xA1vencer\xE1!","Esta niebla tiene s\xF3lo una cura y yo la encontrar\xE9.","Que cosa tan peque\xF1a y fr\xE1gil es el amor.","Mientras m\xE1s negra la noche, m\xE1s brillan las estrellas.","\xA1Eh, mira, estoy abriendo mi caja de preocupaciones! Un momento. \xA1Est\xE1 vac\xEDa!","Hay un placer en la locura que solo los locos conocen.","A nadie se le ha prometido el ma\xF1ana.","No te conviertas en una bestia para derrotar a otra.","Tramposo es una forma bonita de decir ganador","La gente desperdicia mucho tiempo, y luego quieren m\xE1s. Desean m\xE1s horas en sus d\xEDas, m\xE1s d\xEDas en sus a\xF1os, m\xE1s a\xF1os en sus vidas.","No importa cuanto tiempo tengas, sino como lo usas.","Te regalo mi dolor.","La piedad es un lujo y una responsabilidad de los humanos.","Si no eres capaz de aprovechar cada momento no mereces un solo segundo mas.","\xBFT\xFA tambi\xE9n quieres jugar? Ser\xE1 divertido.","Solo hay dos bufones en la baraja.... y me tocas t\xFA.","Hay errores que no puedes cometer dos veces.","Un aut\xE9ntico maestro nunca deja de aprender."],j=document.querySelector("#quotes"),g=()=>{j.textContent=h[Math.floor(Math.random()*h.length)]},q=()=>{g();const e=l+1;e>c.length-1?i(0):i(e)};let l=null,f;const i=e=>{e!==l&&(clearInterval(f),E(),b(l,e),l=e,a.src=c[e].url,L(),k(e),T(e),p(),f=setInterval(x,1e3),a.addEventListener("ended",q))},I=()=>{c.forEach((e,o)=>{const n=document.createElement("a"),r=document.querySelector(".playlist-list"),t=document.createElement("li");n.textContent=`${o+1}. ${e.title} - ${e.artist}`,n.href="#",n.addEventListener("click",()=>{i(o)}),t.appendChild(n),r.appendChild(t)})},D=()=>{a.pause(),p()},N=()=>{g();const e=l-1;e<0?i(c.length-1):i(e)},A=()=>{const e=a.duration*(d.value/100);a.currentTime=e,console.log(d.value)},B=()=>{document.querySelector(".playlist").classList.toggle("hide"),S.classList.toggle("fa-toggle-on")},O=()=>{I(),i(0),g(),u.addEventListener("click",()=>{a.paused?L():D()}),C.addEventListener("click",()=>{q()}),M.addEventListener("click",()=>{N()}),d.addEventListener("change",()=>{A()}),S.addEventListener("click",()=>{B()})};O();
