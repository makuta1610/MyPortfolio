//room3用コンテンツ
// 時刻表示更新
document.addEventListener('DOMContentLoaded', () => {
    const doorTrigger = document.getElementById('door3');
    const clockTrigger = document.getElementById('clock');
    const hintTrigger = document.getElementById('hint');
    
    const modalDoor = document.getElementById('modal_door3');
    const modalClock = document.getElementById('modal_clock');
    const modalHint = document.getElementById('modal_hint');
    const modalDoor2Open = document.getElementById('modal_door2_Open');
    
    const closeButtons = document.querySelectorAll('.close-button');
    const nextButton = document.querySelector('.next-button');

    // モーダル開く
    doorTrigger.addEventListener('click', () => {
        modalDoor.style.display = 'flex';
    });

    clockTrigger.addEventListener('click', () => {
        modalClock.style.display = 'flex';
    });

    hintTrigger.addEventListener('click', () => {
        modalHint.style.display = 'flex';
    });

    // モーダル閉じる
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    // 「進む」ボタン → 次の部屋へ遷移
    nextButton.addEventListener('click', () => {
        window.location.href = 'NazoGoal.html';
    });

    // パスワードチェック
    const passwordInput = document.getElementById('passwordInput');
    const passwordSubmit = document.getElementById('submitPassword');

    if (passwordInput && passwordSubmit) {
        passwordSubmit.addEventListener('click', () => {
            const now = new Date();
            const day = String(now.getDate()).padStart(2, '0');
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const hour = now.getHours();

            const correctPassword = `${day}${year}${month}${hour}`;
            if (passwordInput.value === correctPassword) {
                modalDoor.style.display = 'none';
                modalDoor2Open.style.display = 'flex';
            } else {
                alert('パスワードが違います');
            }
        });
    }

    // 時計のリアルタイム更新
    const clockDate = document.getElementById('date-text');
    const clockTime = document.getElementById('time-text');

    function updateClock() {
        const now = new Date();
        const dateStr = `${now.getFullYear()}年${String(now.getMonth() + 1).padStart(2, '0')}月${String(now.getDate()).padStart(2, '0')}日`;
        const timeStr = `${String(now.getHours()).padStart(2, '0')}時${String(now.getMinutes()).padStart(2, '0')}分${String(now.getSeconds()).padStart(2, '0')}秒`;

        if (clockDate) clockDate.textContent = dateStr;
        if (clockTime) clockTime.textContent = timeStr;
    }

    setInterval(updateClock, 1000);
    updateClock(); // 初期表示
});


