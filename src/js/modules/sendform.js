export const send = () => {
    const forms = document.querySelectorAll("form");
    let data = {};
    class Send {
        _apiKey = "7023015420:AAErko_HZmS7aSKXyBw-mcmcSTfjGQhXEDY";
        _chatId = "-4536366649";
        _url = `https://api.telegram.org/bot${this._apiKey}/sendMessage`;
        /* data = `
            📩 Вам новое сообщение:
            <b>Имя:</b> ${"=("}
            <b>Фамилия:</b> ${"=("}
            <b>Сообщение:</b> ${"=("}
        `; */
        tmData = {
            chat_Id: this._chatId,
            text: this.data,
            parse_mode: "HTML",
        };
        constructor(data) {
            this.data = data;
        }
        async met() {
            const respons = await fetch(this._url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(this.tmData),
            });
            const json = await respons.json();
        }
    }

    const promotion = document.querySelectorAll(".get__info");
    promotion.forEach((item) =>
        item.addEventListener("click", (e) => {
            if (e.target && e.target.classList.contains("btn")) {
                let parent = e.target.closest(".data__wrapper");
                let productName = parent.querySelector(".txt").innerText;
                let profilSistem = parent.querySelector(".profile__sistem")?.innerText;

                data = writeData(undefined, undefined, e.target.textContent, productName, profilSistem);
                console.log(JSON.stringify(data));
            }
        })
    );
    forms.forEach((item) => {
        item.addEventListener("submit", (e) => {
            e.preventDefault();
            let parent = e.target.closest(".info__wrapper");
            let t = parent.querySelector(".info__title")?.innerText;
            let fd = new FormData(e.target);
            data["name"] = fd.get("fio");
            data["phone"] = fd.get("phone");
            data["applicationtype"] = t;
            console.log(data);
        });
    });
    function writeData(name = "Не указано", phone = "Не указано", title = "Не указано", productName = "Не указано", profileSistem = "Не указано", applicationType = "Не указано") {
        return {
            name: name,
            phone: phone,
            btntitle: title,
            productname: productName,
            profilesistem: profileSistem,
            applicationtype: applicationType,
        };
    }
    console.log(navigator)
};
