const express = require('express');
const app = express();
const port = 8080

const mongoose = require('mongoose');
const {User} = require("./Models/User");// 미리 정의했던 모델 가져오기
const {auth} = require("./middleware/auth");// 미리 정의했던 모델 가져오기
const bodyParser = require('body-parser');
const config = require("./config/key");
const e = require('express');
const cookieParser = require('cookie-parser');


// 데이터 분석을 위한 추가 설정
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));  
app.use(bodyParser.json());

mongoose.set('strictQuery',true)
mongoose.connect(config.mongoURI,
{
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => console.log('Successfully connected to mongodb'))
.catch(e => console.error(e));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/api/users/register', (req,res) =>{
    // 회원 가입할 때 필요한 정보들을 클라이언트로부터 받으면 데이터베이스에 정보 저장
    // 미리 정의했던 모델을 가져와야 함
    const user = new User(req.body);

    user.save((err, userInfo) =>{// user모델에 정보들 저장
        //만약 에러가 발생 시 json형식으로 에러와 에러메시지 전달
        if(err) return res.json({success:false, err})
        return res.status(200).json({
            success:true
        })
    })
})

app.post('/api/users/login', (req, res) =>
{
  // 1. 요청된 이메일을 데이터베이스에서 찾기
  User.findOne({email: req.body.email}, (err, user)=>{
    if(!user){
      return res.json({
        loginSuccess : false,
        massage : "제공된 이메일에 해당하는 유저가 없음"
      })
    }
  // 2. 요청된 이메일이 있다면 비밀번호 체크
    user.comparePassword(req.body.password, (err,isMatch)=>{
      if(!isMatch){
        return res.json({
          loginSuccess : false,
          massage : "비밀번호가 틀립니다"
        })
      }
      // 3. 위 조건을 모두 만족하면 Token 생성
      user.generateToken((err,user)=>{
        if(err) return res.status(400).send(err)
        // 현재 user에는 토큰이 있음 토큰을 쿠키에 저장
        res.cookie("x_auth",user.token).status(200).json({
          loginSuccess : true,
          userID : user._id 
        })        
      })
    })
  })
})

app.get('/api/users/auth', auth, (req, res) =>{
  // 여기까지 왔다면 auth가 true라는 뜻
  res.status(200).json({
    _id : req.usrt._id,
    isAdimn : req.user.role ===0 ? false : true,
    isAuth : true,
    email : req.user.email,
    name : req.user.name,
    lastname : req.user.lastname,
    rola : req.user.role,
    image : req.user.image
  })
})

app.get('/api/users/logout', auth, (req, res) =>{
  User.findOneAndUpdate({_id:req.user._id,},
    {token :""},
    (err,user)=>{
      if(err) return res.json({
        success : false,
        err,
      })
      return res.status(200).send({success:true})
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})