const {User} = require("../Models/User");// 미리 정의했던 모델 가져오기
const { request } = require("express");

let auth = (req, res, netx) =>{
    //인증 처리를 하는 곳

    // 1. 클라이언트에서 토큰을 가져옴
    let token = req.cookies.x_auth;
    // 2. 토큰을 복호화(디코드)한 후 유저를 찾는다.
    User.findByToken(token,(err, user)=>{
        if(err) throw err;
        if(!user) return res.json({
            isAuth : false,
            error :  true
        })
        // 3-1. 유저가 있으면 인증 OK
        // 3-2. 유저가 없으면 인증 NO
        req.token = token
        req.user = user
        netx(); //미들웨어에서 다음으로 갈 수 있게
    })
   

}

module.exports = {auth};