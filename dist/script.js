(()=>{var f=window.innerWidth>991;function g(){let t=document.querySelectorAll(".btn_main_wrap");t&&t.forEach(e=>{let o=e.querySelector(".btn_main_hover");e.addEventListener("mouseenter",()=>{gsap.fromTo(o,{scale:0},{scale:1.1,duration:.35,ease:"power2.out"})}),e.addEventListener("mouseleave",()=>{gsap.fromTo(o,{scale:1.1},{scale:0,duration:.35,overwrite:!0,ease:"power2.in"})})})}function p(){let t=document.querySelectorAll(".btn_secondary_wrap");t&&t.forEach(e=>{let o=e.querySelector(".btn_secondary_hover");e.addEventListener("mouseenter",()=>{gsap.fromTo(o,{scale:0},{scale:1.1,duration:.35,ease:"power2.out"}),gsap.to(e,{borderColor:"#ffffff",duration:.35},0)}),e.addEventListener("mouseleave",()=>{gsap.fromTo(o,{scale:1.1},{scale:0,duration:.35,overwrite:!0,ease:"power2.in"}),gsap.to(e,{borderColor:"var(--theme--border)",duration:.35},0)})})}function m(){let t=window.location.protocol+"//"+window.location.host;if(window.location.href===t||window.location.href===t+"/")return;let o=[],n=getComputedStyle(document.documentElement),r=document.querySelector(".page_code_color style"),c=/--([^:\s]+):\s*var\(--([^)]+)\);/g;if(o.push({}),r){let i=r.sheet.cssRules||r.sheet.rules;for(let a of i)if(a.cssText.includes("data-theme=")&&!a.cssText.includes('data-theme="inherit"')){let l={},s;for(;(s=c.exec(a.cssText))!==null;){let u="--"+s[1],d=n.getPropertyValue("--"+s[2]);l[u]=d}o.push(l)}}gsap.timeline({scrollTrigger:{trigger:"body",start:"top top",end:"20px top",toggleActions:"none play reverse none"}}).to(".nav_wrap",{...o[3],duration:.2})}function h(){document.querySelectorAll("[navlink-hover-ani]").forEach(e=>{let o=e.querySelector(".nav_link-line");window.location.href===e.href&&gsap.set(o,{scaleX:1}),e.addEventListener("mouseenter",()=>{window.location.href!==e.href&&gsap.to(o,{scaleX:1,duration:.7,ease:"expo.out"})}),e.addEventListener("mouseleave",()=>{window.location.href!==e.href&&gsap.to(o,{scaleX:0,duration:.7,ease:"expo.out"})})})}function y(){let t=document.querySelectorAll("[data-fade-only]");t&&t.forEach(e=>{gsap.from(e,{opacity:0,duration:.7,scrollTrigger:{trigger:e,start:"top 85%"}})})}function v(){let t=document.querySelectorAll("[data-fade-bottom]");t&&t.forEach(e=>{gsap.from(e,{opacity:0,y:50,duration:.4,scrollTrigger:{trigger:e,start:"top 90%"}})})}function w(){let t=document.querySelectorAll("[data-stagger-wrap]");t&&t.forEach(e=>{e.querySelectorAll("[data-stagger-item]").forEach((n,r)=>{gsap.from(n,{y:50,opacity:0,delay:r*.1,duration:.4,scrollTrigger:{trigger:n,start:"top 90%"}})})})}function S(){g(),p(),m(),f&&h(),y(),v(),w(),ScrollTrigger.refresh()}document.addEventListener("DOMContentLoaded",t=>{S()});})();
