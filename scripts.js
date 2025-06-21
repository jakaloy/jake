const divs = document.getElementsByTagName("div");
const today = new Date();
const options = {month: 'long', day: 'numeric' };
const todayString = today.toLocaleDateString('en-US', options);
for (let i = 0; i < divs.length; i++) {
    if (divs[i].innerHTML.includes(todayString)) {
        const parentDiv = divs[i].parentElement;
        if (parentDiv && parentDiv.classList.contains("updatesection")) {
            divs[i].parentElement.style.border = '8px solid #C77238';
        }
    }
}
