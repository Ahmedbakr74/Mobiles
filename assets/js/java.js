let el = document.querySelector('.up');

window.onscroll= function(){
    this.scrollY >= 1200 ? el.classList.add('show') : el.classList.remove('show');
}; 

el.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior:'smooth',
        });
        } ;  
        


