const keyboard = document.querySelector('.keyboard');
const rows = document.querySelectorAll('.row');
const keys = document.querySelectorAll('.key');
const clickMp3 = new Audio('sound/click.mp3');
const copyright = document.querySelector('.copyright');
let colors = ['rgb(255, 0, 0)', 'rgb(162, 0, 255)', 'rgb(251, 255, 0)'];
function audioPlay() { clickMp3.paused ? clickMp3.play() : clickMp3.pause() }
document.body.addEventListener('keydown', e => {
    // console.log(e.code);
    audioPlay();
    let arr = [];
    let color = Math.round(Math.random() * (colors.length - 1));
    copyright.style = `color: ${colors[color]}`;
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].classList.contains(e.code)) {
            keys[i].style = `color: ${colors[color]}; box-shadow: 0 0 10px 5px ${colors[color]}, 0 0 10px 5px ${colors[color]}; transform: scale(0.97); transition: none;`;
            setTimeout(() => keys[i].style = `color: #fff; box-shadow: 0 0 0 7px #222; transform: scale(1); transition: 1s;`, 200);
            for (let j = 0; j < keys[i].parentElement.children.length; j++) {
                arr.push(keys[i].parentElement.children[j])
            }
            let currentLeft = arr.indexOf(keys[i]);
            let currentRight = arr.indexOf(keys[i]);
            setInterval(() => {
                if (currentLeft > 0) {
                    currentLeft--;
                    arr[currentLeft].style = `color: ${colors[color]}; box-shadow: 0 0 10px 5px ${colors[color]}, 0 0 10px 5px ${colors[color]}; transform: scale(0.97); transition: none;`;
                    setTimeout(() => arr[currentLeft].style = `color: #fff; box-shadow: 0 0 0 7px #222; transform: scale(1); transition: 1s;`, 50);
                }
            }, 100);
            setInterval(() => {
                if (currentRight < (keys[i].parentElement.children.length - 1)) {
                    currentRight++;
                    arr[currentRight].style = `color: ${colors[color]}; box-shadow: 0 0 10px 5px ${colors[color]}, 0 0 10px 5px ${colors[color]}; transform: scale(0.97); transition: none;`;
                    setTimeout(() => arr[currentRight].style = `color: #fff; box-shadow: 0 0 0 7px #222; transform: scale(1); transition: 1s;`, 50)
                }
            }, 100);
        }
    }
});
for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = () => {
        audioPlay();
        let arr = [];
        let color = Math.round(Math.random() * (colors.length - 1));
        copyright.style = `color: ${colors[color]}`;
        keys[i].style = `color: ${colors[color]}; box-shadow: 0 0 10px 5px ${colors[color]}, 0 0 10px 5px ${colors[color]}; transform: scale(0.97); transition: none;`;
        setTimeout(() => keys[i].style = `color: #fff; box-shadow: 0 0 0 7px #222; transform: scale(1); transition: 1s;`, 200);
        for (let j = 0; j < keys[i].parentElement.children.length; j++) {
            arr.push(keys[i].parentElement.children[j])
        }
        let currentLeft = arr.indexOf(keys[i]);
        let currentRight = arr.indexOf(keys[i]);
        setInterval(() => {
            if (currentLeft > 0) {
                currentLeft--;
                arr[currentLeft].style = `color: ${colors[color]}; box-shadow: 0 0 10px 5px ${colors[color]}, 0 0 10px 5px ${colors[color]}; transform: scale(0.97); transition: none;`;
                setTimeout(() => arr[currentLeft].style = `color: #fff; box-shadow: 0 0 0 7px #222; transform: scale(1); transition: 1s;`, 50);
            }
        }, 100);
        setInterval(() => {
            if (currentRight < (keys[i].parentElement.children.length - 1)) {
                currentRight++;
                arr[currentRight].style = `color: ${colors[color]}; box-shadow: 0 0 10px 5px ${colors[color]}, 0 0 10px 5px ${colors[color]}; transform: scale(0.97); transition: none;`;
                setTimeout(() => arr[currentRight].style = `color: #fff; box-shadow: 0 0 0 7px #222; transform: scale(1); transition: 1s;`, 50)
            }
        }, 100);
    }
}
