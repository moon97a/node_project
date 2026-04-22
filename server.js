const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;


const dataSet = [
    {"f_name":"오렌지", "count":10},
    {"f_name":"사과", "count":5},
    {"f_name":"바나나", "count":8}
];

app.use(cors());

app.get("/api/list", (req, res) => {
    console.log("요청이 들어옴..");
    res.send(dataSet);
});



app.listen(PORT, () => {
    console.log(PORT+"번 포트 실행중...🔥🔥🔥 ");        
    });
