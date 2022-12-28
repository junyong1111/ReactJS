const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type : String,
        maxlength : 50,
    },
    email:{
        type : String,
        trim : true, // space를 없애주는 역할
        unique :1  // 똑같은 이메일 사용금지
    },
    password:{
        type : String,
        minlength :5,
    },
    lastname:{
        type : String,
        maxlength : 50,
    },
    role:{ //관리자 또는 일반이 설정 기본은 일반
        type : Number,
        default : 0
    },
    image: String,
    token:{ //유효성 관리를 위한 토큰
        type:String,
    },
    tokenExp:{ //토큰의 유효기간
        type:Number,
    },
})

const User = mongoose.model('User', userSchema) //스키마를 모델로 감싸줌
module.exports = {User} //다른곳에서 사용할 수 있게 하기위해