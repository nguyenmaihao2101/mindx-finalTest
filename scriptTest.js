//spin
const images1 = ["C:/Users/HP/Desktop/DbiCode/dbi-web/mindx/FinalTest/tom.png","C:/Users/HP/Desktop/DbiCode/dbi-web/mindx/FinalTest/bau.png","C:/Users/HP/Desktop/DbiCode/dbi-web/mindx/FinalTest/ga.png","C:/Users/HP/Desktop/DbiCode/dbi-web/mindx/FinalTest/ca.png","C:/Users/HP/Desktop/DbiCode/dbi-web/mindx/FinalTest/cua.png","C:/Users/HP/Desktop/DbiCode/dbi-web/mindx/FinalTest/huou.png"]

const resultElement1 = document.getElementById('result1');
const resultElement2 = document.getElementById('result2');
const resultElement3 = document.getElementById('result3');

const spinButton1 = document.getElementById('spinButton');
const spinButton2 = document.getElementById('spinButton');
const spinButton3 = document.getElementById('spinButton');

// randomly select an image and de-active button and images while clicking
function spin1() {
    let spins1 = 100; // Number of spins
    let currentSpin1 = 0;

    const spinInterval1 = setInterval(() => {
        const randomIndex1 = Math.floor(Math.random() * images1.length);
        resultElement1.innerHTML = `<img src="${images1[randomIndex1]}" alt="Result Image" height="60" width="60">`;
        currentSpin1++;
        document.getElementById('spinButton').disabled = true;
        document.getElementById('resetButton').disabled = true;
        document.getElementById('clickButton1').style.pointerEvents = 'none';
        document.getElementById('clickButton4').style.pointerEvents = 'none';
    
        if (currentSpin1 >= spins1) {
            clearInterval(spinInterval1);
            resultElement1.innerHTML = `<img src="${images1[randomIndex1]}" alt="Result Image" height="60" width="60">`;
            document.getElementById('spinButton').disabled = false;
            document.getElementById('resetButton').disabled = false;
            document.getElementById('clickButton1').style.pointerEvents = 'auto';
            document.getElementById('clickButton4').style.pointerEvents = 'auto';    
        }
    }, 50); // Interval time for spinning effect
}


function spin2() {
    let spins2 = 100; // Number of spins
    let currentSpin2 = 0;

    const spinInterval2 = setInterval(() => {
        const randomIndex2  = Math.floor(Math.random() * images1.length);
        resultElement2.innerHTML = `<img src="${images1[randomIndex2]}" alt="Result Image" height="60" width="60">`;
        currentSpin2++;
        document.getElementById('spinButton').disabled = true;
        document.getElementById('resetButton').disabled = true;
        document.getElementById('clickButton2').style.pointerEvents = 'none';
        document.getElementById('clickButton5').style.pointerEvents = 'none';

        if (currentSpin2 >= spins2) {
            clearInterval(spinInterval2);
            resultElement2.innerHTML = `<img src="${images1[randomIndex2]}" alt="Result Image" height="60" width="60">`;
            document.getElementById('spinButton').disabled = false;
            document.getElementById('resetButton').disabled = false;
            document.getElementById('clickButton2').style.pointerEvents = 'auto';
            document.getElementById('clickButton5').style.pointerEvents = 'auto';
        }
    }, 50); // Interval time for spinning effect
}


function spin3() {
    let spins3 = 100; // Number of spins
    let currentSpin3 = 0;

    const spinInterval3 = setInterval(() => {
        const randomIndex3  = Math.floor(Math.random() * images1.length);
        resultElement3.innerHTML = `<img src="${images1[randomIndex3]}" alt="Result Image" height="60" width="60">`;
        currentSpin3++;
        document.getElementById('spinButton').disabled = true;
        document.getElementById('resetButton').disabled = true;
        document.getElementById('clickButton3').style.pointerEvents = 'none';
        document.getElementById('clickButton6').style.pointerEvents = 'none';

        if (currentSpin3 >= spins3) {
            clearInterval(spinInterval3);
            resultElement3.innerHTML = `<img src="${images1[randomIndex3]}" alt="Result Image" height="60" width="60">`;
            document.getElementById('spinButton').disabled = false;
            document.getElementById('resetButton').disabled = false;
            document.getElementById('clickButton3').style.pointerEvents = 'auto';
            document.getElementById('clickButton6').style.pointerEvents = 'auto';
        }
    }, 50); // Interval time for spinning effect
}


spinButton1.addEventListener('click', spin1);

spinButton2.addEventListener('click', spin2);

spinButton3.addEventListener('click', spin3);

//count

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let totalClicks = 0;

document.getElementById("clickButton1").addEventListener("click", function() {
    if (totalClicks < 3) {
        count1++;
        totalClicks++;
        document.getElementById("count1").textContent = count1;
    }
});

document.getElementById("clickButton2").addEventListener("click", function() {
    if (totalClicks < 3) {
        count2++;
        totalClicks++;
        document.getElementById("count2").textContent = count2;
    }
});

document.getElementById("clickButton3").addEventListener("click", function() {
    if (totalClicks < 3) {
        count3++;
        totalClicks++;
        document.getElementById("count3").textContent = count3;
    }
});


document.getElementById("clickButton4").addEventListener("click", function() {
    if (totalClicks < 3) {
        count4++;
        totalClicks++;
        document.getElementById("count4").textContent = count4;
    }
});

document.getElementById("clickButton5").addEventListener("click", function() {
    if (totalClicks < 3) {
        count5++;
        totalClicks++;
        document.getElementById("count5").textContent = count5;
    }
});

document.getElementById("clickButton6").addEventListener("click", function() {
    if (totalClicks < 3) {
        count6++;
        totalClicks++;
        document.getElementById("count6").textContent = count6;
    }
});

//reset count


document.getElementById("resetButton").addEventListener("click", function() {
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    count5 = 0;
    count6 = 0;
    totalClicks = 0;
    document.getElementById("count1").textContent = count1;  
    document.getElementById("count2").textContent = count2;  
    document.getElementById("count3").textContent = count3;  
    document.getElementById("count4").textContent = count4;  
    document.getElementById("count5").textContent = count5;  
    document.getElementById("count6").textContent = count6;     
});



