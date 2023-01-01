const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; // 10자리를 이용하여 생성
const jwt = require('jsonwebtoken');


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

userSchema.pre('save', function(next){
	var user = this; //현재 스키마를 참조하는 객체
	if(user.isModified('password')) //비밀번호가 바뀐경우만
{
	//비밀번호 암호화 
	bcrypt.genSalt(saltRounds, function(err,salt){
		if(err) return next(err)
		bcrypt.hash(user.password,salt, function(err,hash){
			if(err) return next(err)
			user.password = hash // 암호화된 비밀번호로 교체
			next()
			})
		})
	}
    else{
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword,callbackfunc)
{
    // plainPassword = 1234
    // database 암호 = 암호화된 비밀번호 

    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err){
            return callbackfunc(err);
        }
        else
            callbackfunc(null, isMatch);
    })
}
userSchema.methods.generateToken = function(callbackfunc){
    //jsonwebtoken을 이용하여 토큰 생성
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    // user._id + 'secretToken' = token
    // user.id + secretToken 을 이용하여 토큰을 생성하고 나중에 secretToken을 이용하여 user.id 확인 가능
    user.token = token
    user.save(function(err, user){
        if(err) return callbackfunc(err)
        callbackfunc(null, user)
    })
}
userSchema.statics.findByToken = function(token, callbackfunc){
    var user = this;
    // 토큰을 가져와서 복호화 -> 디코드
    jwt.verify(token,'secretToken', function(err,deToken){
        //유저 아이디를 이용하여 유저를 찾고 클라이언트에서 가져온 토큰과 DB토큰과 비교
        user.findOne({"_id":deToken, "token":token}, function(err,userInfo){
            if(err) return callbackfunc(err)
            callbackfunc(null, userInfo)
        })
    })
}

const User = mongoose.model('User', userSchema) //스키마를 모델로 감싸줌
module.exports = {User} //다른곳에서 사용할 수 있게 하기위해
