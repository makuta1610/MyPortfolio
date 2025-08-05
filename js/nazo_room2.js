//room2用コンテンツ
document.addEventListener('DOMContentLoaded', () => {
    const puzzleTrigger = document.getElementById('pazle');
    const modalPazle = document.getElementById('modal_pazle');
    const modalDoor2Open = document.getElementById('modal_door2_Open');
    const closeButtons = document.querySelectorAll('.close-button');

    // 開く
    puzzleTrigger.addEventListener('click', () => {
        modalPazle.style.display = 'flex';
    });

    // 閉じる
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    // 進むボタン
    document.querySelector('.next-button').addEventListener('click', () => {
        window.location.href = 'room3.html';
    });

    // 正解チェック
    const enterBtn = document.getElementById('puzzle-enter');
    const answerInput = document.getElementById('puzzle-answer');

    enterBtn.addEventListener('click', () => {
        const userInput = answerInput.value.trim();
        if (userInput === "") return;

        const testImagePath = `img/nazo/${userInput}.png`;
        const testImg = new Image();

        testImg.onload = () => {
            // 正解時
            modalPazle.style.display = 'none';
            modalDoor2Open.style.display = 'flex';
        };
        testImg.onerror = () => {
            // 不正解時
            boxAnswer.value = "MISS";
        };

        testImg.src = testImagePath;
    });

    answerInput.addEventListener('focus', () => {
        if (answerInput.value === "MISS") {
            answerInput.value = "";
        }
    });

    // パズルのドラッグ移動
    let active = null;
    let offsetX = 0;
    let offsetY = 0;
    const scale = 0.4; //モーダル画面のスケール

    document.querySelectorAll('.draggable').forEach(el => {
        el.style.cursor = 'grab';
        el.style.position = 'absolute';

        el.addEventListener('mousedown', e => {
            active = el;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            el.style.cursor = 'grabbing';
            el.style.zIndex = 1001;
            document.body.style.userSelect = 'none';
        });
    });

    document.addEventListener('mousemove', e => {
        if (active) {
            const container = document.querySelector('.puzzle-container');
            const rect = container.getBoundingClientRect();
            let x = (e.clientX - rect.left - offsetX * scale) / scale;
            let y = (e.clientY - rect.top - offsetY * scale) / scale;
            active.style.left = `${x}px`;
            active.style.top = `${y}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (active) {
            active.style.zIndex = '';
            active.style.cursor = 'grab';
            document.body.style.userSelect = '';
            active = null;
        }
    });
});

