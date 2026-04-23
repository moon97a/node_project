const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 3000;

// 1. routes 폴더 생성 -> user.js 파일 생성 (목록 조회)
// 2. config 폴더 생성 -> db.js 파일 생성
//    .env 파일에 DB 정보 기록

const userRouter = require("./routes/user");

app.use(cors());
app.use("/users", userRouter);


const dataSet = [
    {"f_name":"오렌지", "count":10},
    {"f_name":"사과", "count":5},
    {"f_name":"바나나", "count":8}
];



app.get("/api/list", (req, res) => {
    console.log("요청이 들어옴..");
    res.send(dataSet);
});



app.listen(PORT, () => {
    console.log(PORT+"번 포트 실행중...🔥🔥🔥 ");        
    });
