const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('mobile-open');
  if(open){
    nav.style.display='flex';
    nav.style.position='absolute';
    nav.style.top='82px';
    nav.style.left='0';
    nav.style.right='0';
    nav.style.padding='20px';
    nav.style.background='#faf9f5';
    nav.style.flexDirection='column';
    nav.style.alignItems='stretch';
    nav.style.gap='14px';
    nav.style.boxShadow='0 15px 30px rgba(0,0,0,.1)';
  }else nav.style.display='';
});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{
  if(window.innerWidth<=800){nav.classList.remove('mobile-open');nav.style.display='';}
}));