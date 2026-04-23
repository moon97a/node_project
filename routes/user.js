// 1. express 불러오기
const express = require('express');

// 2. 라우트 객체 생성하기
const router = express.Router();

// 3. DB 연결 객체 생성하기
const db = require('../config/db');

// 4. 목록조회 기능 구현
//    - 요청 경로 : /users/list
//    - 경로 설정 : /list
router.get('/list', async (req, res)=>{
    // 데이터베이스 연결에 대한 이슈를 처리하기 위한 예외 처리
    try {
        // DB 쿼리 실행
        const [rows] = await db.query("SELECT * FROM h_member");

        // 조회된 결과 JSON으로 유저에게 응답
        res.json(rows)

    }catch(err){
        // 콘솔창에 에러 로그 출력
        console.error(err);

        // 유저에는 HTTP 상태코드 500번 에러 응답
        res.status(500).json({message:"DB 접속 오류"})
        
    }
})

module.exports = router;