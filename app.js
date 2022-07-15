// initialize count 

let count = 0;

// select value and buttons 

const value = document.querySelector("#value");
const butn = document.querySelectorAll(".butn")

// to loop through each element
butn.forEach((butn) => {
    butn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList

        if (styles.contains('increase')) {
            count++
        } else if (styles.contains('decrease')) {
            count--
        } else {
            count = 0;
        }
        if (count > 0) {
           value.style.color = 'green'; 
        } if (count < 0) {
            value.style.color = 'red';
        } 
        if (count === 0) {
            value.style.color = "grey";
        }
        value.textContent = count
    })
})