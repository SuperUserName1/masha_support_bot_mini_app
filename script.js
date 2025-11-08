const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

let image = document.querySelector('.img_pasha_main')
let score = 1;
let isCoolDown = false;
let isCoolDownTime = false;
let score_count = 1;
let score_time = 0;
let scoreTimeInterval = false;

image.addEventListener("click", function () {
    if (isCoolDown) return;
    score += score_count;

    isCoolDown = true;
    setTimeout(() => {
        isCoolDown = false;
    }, 200);
    

    document.querySelector('.score').textContent = score;

})

function changeWindow(windowName) {
    const windowList = document.querySelectorAll(".screen");
    windowList.forEach(screen => screen.classList.remove("active"));
    windowList.forEach(screen => screen.classList.add("disactivate"));

    const targetWindow = document.querySelector(`.pasha_${windowName}`);
    targetWindow.classList.add('active');
}

function addScoreCount(count) {
    if (count == 1) {
        if (score >= 10) {
            score -= 10;
            score_count += count;   
            document.querySelector('.score').textContent = score;
        }
    } else if(count == 3) {
        if (score >= 45) {
            score -= 45;
            score_count += count;   
            document.querySelector('.score').textContent = score;
        }
    } else if(count == 7) {
        if (score >= 90) {
            score -= 90;
            score_count += count;   
            document.querySelector('.score').textContent = score;
        }
    } else if(count == 10) {
        if (score >= 180) {
            score -= 180;
            score_count += count;   
            document.querySelector('.score').textContent = score;
        }
    }
    
}

function addScoreTimeRecursion() {
    if (scoreTimeInterval) return;

    scoreTimeInterval = setInterval(() => {    
        if (!isCoolDown) {
            score += score_time;
            document.querySelector('.score').textContent = score;
            
       }

    }, 1000)

}

function addScoreTime(count) {
    
    if (count == 1) {
        if (score >= 100) {
            score -= 100;
            score_time += count;
            document.querySelector('.score').textContent = score;
            addScoreTimeRecursion();
        }
    }
    else if(count == 3) {
        if (score >= 250) {
            score -= 250;
            score_time += count;
            document.querySelector('.score').textContent = score;
            addScoreTimeRecursion();
     
        }   
    }
    else if(count == 7) {
        if (score >= 500) {
            score -= 500;
            score_time += count;
            document.querySelector('.score').textContent = score;
            addScoreTimeRecursion();
        }
    }
    else if(count == 10) {
        if (score >= 1000) {
            score -= 1000;
            score_time += count;
            document.querySelector('.score').textContent = score;
            addScoreTimeRecursion();
        } 
    }
    
 
}