document.getElementById("scrollButton1").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    const sectionToScrollTo1 = document.getElementById("sectionToScrollTo1");
    sectionToScrollTo1.scrollIntoView({ behavior: "smooth" }); // Scroll to the section smoothly
});
document.getElementById("scrollButton2").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    const sectionToScrollTo2 = document.getElementById("sectionToScrollTo2");
    sectionToScrollTo2.scrollIntoView({ behavior: "smooth" }); // Scroll to the section smoothly
});
 
const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

const observer2= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show2');
        }
        else{
            
            entry.target.classList.remove('show2');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el)=>observer2.observe(el));





