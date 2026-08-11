// クランブル徹底攻略
// メインページ用JavaScript

console.log("クランブル徹底攻略へようこそ！");


// ページ内リンクをクリックしたときの処理

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
