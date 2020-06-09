import express from "express";
import cheerio from "cheerio";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(cors());

var list = [
    {
        // 남선
        url: "https://m.search.naver.com/search.naver?sm=top_sug.pre&fbm=1&acr=1&acq=%EB%82%A8%EC%84%A0&qdt=0&ie=utf8&query=%EB%82%A8%EC%84%A0%EC%95%8C%EB%AF%B8%EB%8A%84&where=m",
        money: "6,010",
    },
    {
        // 타이거
        url: "https://m.search.naver.com/search.naver?ie=UTF-8&sm=whl_hty&query=tiger+%EC%9B%90%EC%9C%A0%EC%84%A0%EB%AC%BCenhanced(h)&where=m",
        money: "1,891",
    },
    {
        // 대한
        url: "https://m.search.naver.com/search.naver?ie=UTF-8&sm=whl_hty&query=%EB%8C%80%EC%8B%A0%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0&where=m",
        money: "1,305",
    },
    {
        // 스페코
        url: "https://m.search.naver.com/search.naver?ie=UTF-8&sm=whl_hty&query=%EC%8A%A4%ED%8E%98%EC%BD%94&where=m",
        money: "4,335",
    },
    {
        // 대륙제관
        url: "https://m.search.naver.com/search.naver?ie=UTF-8&sm=whl_hty&query=%EB%8C%80%EB%A5%99%EC%A0%9C%EA%B4%80&where=m",
        money: "5,150",
    },
];

const getHtml = async (url, money) => {
    try {
        return await axios.get(url).then((html) => {
            let ulList = [];
            const $ = cheerio.load(html.data);
            const $bodyList = $("div.stock_top");
            $bodyList.each(function (i, elem) {
                var title = $(this).find("div.stock_tlt strong").text().substr(0, 1);
                var present_price = $(this).find("strong.price").text();
                var cost_price = money;
                var resu = (Number(present_price.replace(",", "")) - Number(cost_price.replace(",", ""))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                if (resu > 0) {
                    resu = "+" + resu;
                }

                ulList[i] = { t: title, p: present_price, r: resu };
            });
            return ulList;
        });
    } catch (error) {
        console.error(error);
    }
};

async function loop(array) {
    var info = [];
    for (const data of array) {
        info.push(await getHtml(data.url, data.money));
    }
    return info;
}

app.get("/", async (req, res) => {
    var data = await loop(list);
    return res.json(data);
});

app.listen(3000, () => {
    console.log("open");
});
