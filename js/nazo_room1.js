//room1用コンテンツ
document.addEventListener('DOMContentLoaded', () => {
    let boxOpened = false; 
    // box の処理（開封状態を考慮）
    const boxTrigger = document.getElementById('box');
    const modalBox = document.getElementById('modal_box');
    const modalOpenBox = document.getElementById('modal_openBox');
    const boxAnswer = document.getElementById('box-answer');
    const boxEnter = document.getElementById('box-enter');
    const modalDoor = document.getElementById('modal_door');
    const modalDoorOpen = document.getElementById('modal_door_Open');
    const doorDropZone = modalDoor.querySelector('.modal-content');

    // door, book の処理
    const simpleItems = ['door', 'book'];

    simpleItems.forEach(item => {
        const trigger = document.getElementById(item);
        const modal = document.getElementById(`modal_${item}`);
        const closeBtn = modal.querySelector('.close-button');

        trigger.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });

    // 開くときの処理
    boxTrigger.addEventListener('click', () => {
        if (boxOpened) {
            modalOpenBox.style.display = 'flex';
        } else {
            modalBox.style.display = 'flex';
        }
    });

    // パスワード入力チェック
    boxEnter.addEventListener('click', () => {
        const userInput = boxAnswer.value.trim();
        if (userInput === "") return;

        const testImagePath = `img/nazo/${userInput}.png`;
        const testImg = new Image();

        testImg.onload = () => {
            // 正解時
            modalBox.style.display = "none";
            modalOpenBox.style.display = "flex";
            boxOpened= true;
        };

        testImg.onerror = () => {
            // 不正解時
            boxAnswer.value = "MISS";
        };

        testImg.src = testImagePath;
    });

    // MISS消去
    boxAnswer.addEventListener('focus', () => {
        if (boxAnswer.value === "MISS") {
            boxAnswer.value = "";
        }
    });

    // ドアにファイルをドラッグオーバー時の処理
    doorDropZone.addEventListener('dragover', (e) => {
        e.preventDefault(); // dropを許可する
        doorDropZone.classList.add('highlight');
    });

    // ドラッグ離脱時
    doorDropZone.addEventListener('dragleave', () => {
        doorDropZone.classList.remove('highlight');
    });

    // ファイルがドロップされた時の処理
    doorDropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        doorDropZone.classList.remove('highlight');

        const files = e.dataTransfer.files;
        if (files.length === 0) return;

        const file = files[0];
        const fileName = file.name;
        const baseName = fileName.split('.').slice(0, -1).join('.').toLowerCase();

        if (baseName == 'key') {
            // ドア開け処理：モーダル切り替え
            modalDoor.style.display = 'none';
            modalDoorOpen.style.display = 'flex';
        } else {
            alert('違うファイルです。Keyをドロップしてください。');
        }
    });

    // 「進む」ボタン
    document.querySelector('.next-button').addEventListener('click', () => {
        window.location.href = 'room2.html'; // 次の画面へ遷移
    });

    // すべての「閉じる」ボタン共通処理
    document.querySelectorAll('.close-button').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });
});