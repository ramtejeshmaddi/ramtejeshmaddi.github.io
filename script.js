let elements = document.querySelectorAll('.hidden');
let options = {
    threshold: 0.5
}
let lastScrollVal = window.scrollY;
let observer = new IntersectionObserver(entries => {
    console.log(entries.length);
    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(entry.target.classList.contains("hidden")){
                entry.target.classList.add("shown");
            }  
            if(entry.target.classList.contains("contact")){
                entry.target.classList.add("playIconAnimation");
            }
                
        }
        else{
            entry.target.classList.remove("shown");
            if(entry.target.classList.contains("contact")){
                entry.target.classList.remove("playIconAnimation");
            }
        }
    }) 
}, options );

elements.forEach(el => {
    observer.observe(el);
});
