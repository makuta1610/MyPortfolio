window.addEventListener("DOMContentLoaded", () => {
const container = document.getElementById("works-list");
const container_10 = document.getElementById("works-list_10");
const container_3 = document.getElementById("works-list_3");
const container_link = document.getElementById("works-link");

console.log("はじまる？");
if (container) {
    works.sort((a,b)=>(new Date(b.date) - new Date(a.date))).forEach(work => {
    const article = document.createElement("article");

    article.innerHTML = `
        <a href="${work.link}">
        <div class="article-flex">
            <img src="${work.image}" alt="${work.title}">
            <div class="text-content">
            <h2>${work.title}</h2>
            <ul>
                <li><time datetime="${work.date}">投稿日: ${work.date}</time></li>
                <li><p>ジャンル：${work.genre}</p></li>
                <li><p>概要：${work.summary}</p></li>
            </ul>
            </div>
        </div>
        </a>
    `;

    container.appendChild(article);
    });
}

console.log("はじまる？");
if(container_10){
    var cnt = 0;

    works.sort((a,b)=>(new Date(b.date) - new Date(a.date))).forEach(work => {

    if(cnt < 10)
        {
        const li = document.createElement("li");

        li.innerHTML = `
            <a href="${work.link}">
                <p>${work.title}</p>
            </a>
        `;

        container_10.appendChild(li);
        }
    cnt ++;
    });
}

console.log("はじまる？");
if(container_3){
    var cnt = 0;

    works.sort((a,b)=>(new Date(b.date) - new Date(a.date))).forEach(work => {

    if(cnt < 3)
        {
        const article = document.createElement("article");

        article.innerHTML = `
            <a href="${work.link}">
            <div class="article-flex">
                <img src="${work.image}" alt="${work.title}">
                <div class="text-content">
                <h2>${work.title}</h2>
                <ul>
                    <li><time datetime="${work.date}">投稿日: ${work.date}</time></li>
                    <li><p>概要：${work.summary}</p></li>
                </ul>
                </div>
            </div>
            </a>
        `;

        container_3.appendChild(article);
        }
    cnt ++;
    });
}

console.log("はじまる？");
if (container_link) {
    console.log("はじまるよ");
    const params = new URLSearchParams(window.location.search);
    console.log("どうかな");
    const key = params.get("key");
        if (!key) {
                    console.log("keyがnullか未定義です");
                    }
    const work = works.find(w => w.key === key);
    console.log("work =", work);

    if (work) {
        console.log("おｋ");
        const article = document.createElement("article");
        article.innerHTML = `
            <a href="${work.exURL}" target="_blank">
                <div class="article-flex">
                    <img src="${work.image}" alt="${work.title}">
                    <div class="text-content">
                        <h2>${work.title}</h2>
                    </div>
                </div>
            </a>
        `;
        container_link.appendChild(article);
    } else {
        container_link.innerHTML += "<p>指定された制作物が見つかりませんでした。</p>";
    }
}
else{console.log("ヌルです");}
});