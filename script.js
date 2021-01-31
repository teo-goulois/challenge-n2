

document.querySelectorAll(".toggle").forEach(el => {
    el.addEventListener('click', () => {
        const parent = el.previousElementSibling.firstElementChild
        const answer = el.previousElementSibling.lastElementChild
        answer.style.display = answer.style.display === "block" ? "none" : "block";
        el.style.transform = el.style.transform === "rotate(-135deg)" ? "rotate(45deg)" : "rotate(-135deg)";
        parent.style.fontWeight = parent.style.fontWeight === "700" ? "400" : "700";    
    });
})

