# ReactJS

### 본 정리는 인프론 John Ahn 따라하며 배우는 노드, 리액트 시리즈 - 기본 강의를 참고하였습니다.

### #1 Node JS 와 Express JS 설치

<details>
<summary> Node JS 와 Express JS 설치 </summary>
<div markdown="1">

**NodeJS**

- NodeJS가 나오기 전까지는 Javascript를 브라우저에서만 사용가능했는데 서버사이드에서 쓸 수 있게 해주는 언어

**ExpressJS**

- NodeJS를 이용하여 자동차를 만드는 것
- NodeJS를 이용하여 웹 개발을 도와주는 프레임워크

### **NodeJS 설치 및 폴더 생성**

- 터미널에서 다음 명령어를 통해 노드설치 여부 확인
    
    ```bash
    node -v
    ```
    
- 버전이 없다고 가정하고 진행
    
    [Node.js](https://nodejs.org/en/)
    
    최신버전보다 검증이 된 LTS버전을 다운로드 후 설치
    
- 원하는 워크스페이스에서 boiler-plater 폴더 생성
- 해당 워크스페이스로 이동 후  npm 패키지 생성
    - 터미널에서 다음 명령어 사용 엔터를 쳐서 기본값으로 진행
    
    ```bash
    npm init
    ```
    
    - author은 자신의 이름을 입력 (안해도 됨)
- **Express 설치**
    - 워크스페이스 디렉토리에서 다음 명령어 입력
        - —save 옵션을 주면 패키지에 의존성 추가
        
        ```bash
        npm install express --save
        ```
        
- **Index.js 생성 후 기본적인 샘플코드 작성**
    - 
    
    [Express "Hello World" 예제](https://expressjs.com/ko/starter/hello-world.html)
    
    ```jsx
    const express = require('express')
    const app = express()
    const port = 3000
    
    app.get('/', (req, res) => {
      res.send('Hello World!')
    })
    
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    ```
    
- **package.json 파일 수정**
    - "start": "node index.js" 코드 추가
    
    ```jsx
    "scripts": {
        "start": "node index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
    ```
    
- **Index.js 실행**
    
    ```bash
    npm run start
    ```
    
    - [localhost:3000](http://localhost:3000)을 주소창에 입력하여 확인

<img width="636" alt="스크린샷 2022-12-27 오후 6 25 50" src="https://user-images.githubusercontent.com/79856225/209817264-f65887ac-aa0b-451c-82bb-bc387ebb68f0.png">

</div>
</details>

### #2 MongoDB 연결

<details>
<summary> MongoDB 연결 </summary>
<div markdown="1">

**MongoDB 로그인**

- 회원가입 후 로그인
    
    [Cloud: MongoDB Cloud](https://cloud.mongodb.com/v2/620e6b7154ca89437ccd355f#/clusters)
    

**클러스터 생성**

1. **Shared 클러스터를 사용 (무료)**

<img width="795" alt="스크린샷 2022-12-27 오후 6 26 47" src="https://user-images.githubusercontent.com/79856225/209817272-1f919388-042c-4620-b66c-326ed195859c.png">

<img width="791" alt="스크린샷 2022-12-27 오후 6 28 28" src="https://user-images.githubusercontent.com/79856225/209817273-ba397f01-33f6-4e31-a0e7-588647d7b793.png">

1. 3개의 클라우드 중 원하는 클라우드 선택
    
    <img width="823" alt="스크린샷 2022-12-27 오후 6 31 05" src="https://user-images.githubusercontent.com/79856225/209817280-de0b6a2c-12f9-43fb-924f-3512431e56d1.png">
    
2. **지역 선택**
    
    <img width="800" alt="스크린샷 2022-12-27 오후 6 32 55" src="https://user-images.githubusercontent.com/79856225/209817283-89c14aa5-1f04-4778-8ba6-fc0466d9a3c4.png">
    
    1. **Tier와 Name 설정**
        
        <img width="653" alt="스크린샷 2022-12-27 오후 6 37 28" src="https://user-images.githubusercontent.com/79856225/209817285-ebe6fafb-fa81-4e04-b110-314c00b83104.png">
        
    2. **User 생성**
        
        이름과 비밀번호를 입력 후 생성
        
        <img width="627" alt="스크린샷 2022-12-27 오후 6 39 36" src="https://user-images.githubusercontent.com/79856225/209817288-a155e63a-9e37-406b-bf07-e2783f642f9a.png">
        
        자신의 IP를 등록 후 생성 
        
        <img width="366" alt="스크린샷 2022-12-27 오후 6 43 57" src="https://user-images.githubusercontent.com/79856225/209817292-21606112-f3e9-4cec-b9c0-29da1fd410c4.png">
        
    
    **Mongoose 설치**
    
    몽고DB를 간단하게 쓸 수 있는 Object Modeling Tool
    
    ```bash
    npm install mongoose --save
    ```
    
    1. 몽고디비 커넥트 주소 복사
        
        <img width="622" alt="스크린샷 2022-12-27 오후 6 44 14" src="https://user-images.githubusercontent.com/79856225/209817294-83d7d37d-6593-4ccf-b6e5-31608330a46e.png">
        
        <img width="647" alt="스크린샷 2022-12-27 오후 6 44 36" src="https://user-images.githubusercontent.com/79856225/209817296-b5f5e8ca-cc5c-4c34-a2b8-5c42ade28f47.png">
        
        <img width="370" alt="스크린샷 2022-12-27 오후 6 55 40" src="https://user-images.githubusercontent.com/79856225/209817299-60cb6879-bb91-4096-af5d-639bd1401bb5.png">
        
    2. 몽구스를 이용하여 몽고DB 연결 
        1. index.js파일 수정 
            
            ```jsx
            const mongoose = require('mongoose')
            mongoose.connect('mongodb+srv://유저아이디:유저비밀번호@junprojcet.kzx4jm1.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true, useUnifiedTopology: true 
            }).then(() => console.log('Successfully connected to mongodb'))
            .catch(e => console.error(e));
            ```
            
        - connet 부분에 자신의 유저 이메일과 비밀번호를 넣어줘야 함
        - 전체코드
            
            ```jsx
            const express = require('express')
            const app = express()
            const port = 3000
            
            const mongoose = require('mongoose')
            mongoose.connect('mongodb+srv://유저아이디:유저비밀번호@junprojcet.kzx4jm1.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true, useUnifiedTopology: true 
            }).then(() => console.log('Successfully connected to mongodb'))
            .catch(e => console.error(e));
            
            app.get('/', (req, res) => {
              res.send('Hello World!')
            })
            
            app.listen(port, () => {
              console.log(`Example app listening on port ${port}`)
            })
            ```
            
    3. npm run start 명령어를 이용하여 확인
        
        <img width="595" alt="스크린샷 2022-12-28 오후 8 28 19" src="https://user-images.githubusercontent.com/79856225/209817303-69d05598-6f06-489f-9050-462782141465.png">
</div>
</details>


### #3 MonoDB model & Schema


<details>
<summary> MonoDB model & Schema </summary>
<div markdown="1">

<img width="324" alt="스크린샷 2022-12-28 오후 8 29 36" src="https://user-images.githubusercontent.com/79856225/209817665-4dfbd0a4-d301-40c6-8515-47b09dd7cb62.png">

**Model**

- 스키마를 감싸주는 역할

**Schema**

- 하나하나의 정보들을 지정

**Models 폴더 생성**

- User.js 파일 생성 후 코드 입력
    
    ```jsx
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
    ```

</div>
</details>

### #4 BodyParser & PostMan & 회원가입 기능

<details>
<summary> BodyParser & PostMan & 회원가입 기능 </summary>
<div markdown="1">

<img width="513" alt="스크린샷 2022-12-27 오후 9 01 16" src="https://user-images.githubusercontent.com/79856225/209955590-4361cd62-0ab5-4dde-8fd0-1fd080e344aa.png">

- 클라이언트에서 보내주는 정보를 받기 위해서는 Body-parser 필요
- 다음 명령어를 이용하여 설치
    
    ```bash
    npm install body-parser --save
    ```
    
    <img width="299" alt="스크린샷 2022-12-27 오후 9 03 08" src="https://user-images.githubusercontent.com/79856225/209955604-8791e150-eab1-4f30-b44a-a9c0211b525c.png">
    
- 포스트맨  : http 요청을 날리고 응답을 보여주는 서비스인
- 자신의 운영체제에 맞게 포스트맨 다운로드
    
    [Postman API Platform | Sign Up for Free](https://www.postman.com/)
    
- **Register Route 생성**
    - index.js 파일에 다음 코드 추가
        
        ```jsx
        const {User} = require("./Models/User")// 미리 정의했던 모델 가져오기
        const bodyParser = require('body-parser')
        
        // 데이터 분석을 위한 추가 설정
        app.use(bodyParser.urlencoded({extended:true}));  
        app.use(bodyParser.json());
        
        app.post('/register', (req,res) =>{
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
        ```
        
        - 전체코드
            
            ```
            const express = require('express')
            const app = express()
            const port = 3000
            const mongoose = require('mongoose')
            
            const {User} = require("./Models/User")// 미리 정의했던 모델 가져오기
            const bodyParser = require('body-parser')
            
            // 데이터 분석을 위한 추가 설정
            app.use(bodyParser.urlencoded({extended:true}));  
            app.use(bodyParser.json());
            
            mongoose.set('strictQuery',true)
            mongoose.connect('mongodb+srv://Jun:zxc123@junprojcet.kzx4jm1.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true, useUnifiedTopology: true 
            }).then(() => console.log('Successfully connected to mongodb'))
            .catch(e => console.error(e));
            
            app.get('/', (req, res) => {
              res.send('Hello World!')
            })
            
            app.post('/register', (req,res) =>{
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
            
            app.listen(port, () => {
              console.log(`Example app listening on port ${port}`)
            })
            ```
            
            ```jsx
            const express = require('express')
            const app = express()
            const port = 3000
            const mongoose = require('mongoose')
            
            const {User} = require("Models/User")// 미리 정의했던 모델 가져오기
            const bodyParser = require('body-parser')
            
            // 데이터 분석을 위한 추가 설정
            app.use(bodyParser.urlencoded({extended:true}));  
            app.use(bodyParser.json());
            
            mongoose.connect('mongodb+srv://Jun:zxc123@junprojcet.kzx4jm1.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true, useUnifiedTopology: true 
            }).then(() => console.log('Successfully connected to mongodb'))
            .catch(e => console.error(e));
            
            app.get('/', (req, res) => {
              res.send('Hello World!')
            })
            
            app.post('/register', (req,res) =>{
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
            
            app.listen(port, () => {
              console.log(`Example app listening on port ${port}`)
            })
            ```
            
- 코드를 실행 후 **포스트맨에서 확인**
    
    —# Error : MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: [https://docs.atlas.mongodb.com/security-whitelist/](https://docs.atlas.mongodb.com/security-whitelist/)
    
    아이피 주소가 바뀌어서 생긴 오류로 Nerwork Access에서 현재 IP로 변경해주면 해결이 가능하다.
    
    - localhost에 Json형식으로 POST 요청 후 확인하면 아래와 같이 true가 나오면 정상적으로 요청이 완료
    
    <img width="838" alt="스크린샷 2022-12-27 오후 9 47 39" src="https://user-images.githubusercontent.com/79856225/209955613-690dbf75-f156-49e5-8fdb-28e95a43fef4.png">

</div>
</details>

### #5 Nodemon 설치

<details>
<summary> Nodemon 설치 </summary>
<div markdown="1">

**서버를 재시작하지 않아도 변경이 되면 자동으로 해주는 도구**

<img width="436" alt="스크린샷 2022-12-27 오후 9 50 59" src="https://user-images.githubusercontent.com/79856225/209955812-1113f81d-afb1-4a41-872a-88dc40fe9b8f.png">


- 다음 명령어를 이용하여 설치
    
    ```bash
    npm install nodemon --save-dev
    # dev를 쓰면 개발모드(로컬)에서만 사용
    ```
    
    - 패키지에서 dev의존성 추가 확인 가능
- 추가 스크립트 작성
    
    ```jsx
    "backend": "nodemon index.js",
    // nodemon을 이용하여 시작함
    ```
    
    npm run backend 명령어로 실행 후 확인

</div>
</details>

### #6 비밀 설정 정보 관리

<details>
<summary> 비밀 설정 정보 관리 </summary>
<div markdown="1">

**MongoDB url은 배포시 숨겨야 함**

**2개의 다른 환경에서 개발**

<img width="476" alt="스크린샷 2022-12-27 오후 9 59 16" src="https://user-images.githubusercontent.com/79856225/209956341-a56ca3a7-a7f3-411b-a76d-599681320db9.png">


- config 폴더 생성
    - dev.js 파일 생성 후 다음 코드 작성
        
        ```jsx
        module.exports ={
            mongoURI:'mongodb+srv://Jun:zxc123@junprojcet.kzx4jm1.mongodb.net/?retryWrites=true&w=majority'
        }
        ```
        
    - prod.js 파일 생성 후 다음 코드 작성
        
        ```jsx
        module.exports = {
            mongoURI : process.env.MONOG_URI
        } //헤로쿠의 경우
        ```
        
    - key.js 파일 생성 후 다음 코드 작성
        
        ```jsx
        if(process.env.NODE_ENV === 'production')
        {
        	module.exports = require('./prod');
        }
        else
        {
        	module.exports = require('./dev');module.exports ={
            mongoURI:'mongodb+srv://Jun:zxc123@junprojcet.kzx4jm1.mongodb.net/?retryWrites=true&w=majority'
            }
        }
        ```
        
- index.js 파일 코드 추가 및 수정
    
    ```jsx
    const config = require("./config/key");
    
    mongoose.connect(config.mongoURI,
    {
        useNewUrlParser: true, useUnifiedTopology: true 
    }).then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));
    ```
    
    - 전체 코드
        
        ```jsx
        const express = require('express')
        const app = express()
        const port = 3000
        
        const mongoose = require('mongoose')
        const {User} = require("./Models/User")// 미리 정의했던 모델 가져오기
        const bodyParser = require('body-parser')
        
        const config = require("./config/key");
        
        // 데이터 분석을 위한 추가 설정
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
        
        app.post('/register', (req,res) =>{
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
        
        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
        ```
        
- gitignore 에서 dev.js 파일 추가

</div>
</details>

### #7 Bcrypt로 비밀번호 암호화

<details>
<summary> Bcrypt로 비밀번호 암호화 </summary>
<div markdown="1">

**현재 비밀번호는 데이터베이스에 그대로 노출되기 때문에 관리해야함**

<img width="464" alt="스크린샷 2022-12-28 오후 8 30 54" src="https://user-images.githubusercontent.com/79856225/209957029-c69e7a84-0adb-47e6-b95a-0e930298ff56.png">

<img width="452" alt="스크린샷 2022-12-27 오후 10 11 49" src="https://user-images.githubusercontent.com/79856225/209957048-69b36283-87d0-4ec0-a4e9-9c2c3c84aca3.png">

- 다음명령어로 bycrypt 설치
    
    ```bash
    npm install bcrypt --save
    ```
    

**Bycrypt로 비밀번호 암호화 하는 순서**

1. 먼저 Register Route에서 save하기전 (index.js)
2. 유저 정보들을 데이터 베이스에 저장하기 전 암호화
    1. Salt
        - salt를 생성하고 이용해서 비밀번호를 암호화
    - **Models/User.js 파일 수정**
        
        ```jsx
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
        ```
        
        - 전체 코드
            
            ```jsx
            const mongoose = require('mongoose');
            const bcrypt = require('bcrypt');
            const saltRounds = 10; // 10자리를 이용하여 생성
            
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
            })
            
            const User = mongoose.model('User', userSchema) //스키마를 모델로 감싸줌
            module.exports = {User} //다른곳에서 사용할 수 있게 하기위해
            ```
            

**포스트맨에서 POST 요청 후 데이터베이스에서 확인**

암호화가 제대로된걸 확인할 수 있다.

<img width="484" alt="스크린샷 2022-12-27 오후 10 37 02" src="https://user-images.githubusercontent.com/79856225/209957066-8f794972-ba06-40c1-9f08-d9a76245edfd.png">

</div>
</details>

### #8 로그인 기능

<details>
<summary> 로그인 기능  </summary>
<div markdown="1">

- **전체 흐름도**
    
    <img width="385" alt="스크린샷 2022-12-28 오후 8 31 25" src="https://user-images.githubusercontent.com/79856225/209957741-334aae38-e70f-4638-bffa-3e32559554e4.png">
    
1. **요청된 이메일을 데이터베이스에서 찾기**
    
    ```jsx
    //몽고DB에서 제공하는 find함수 사용
    // 1. 요청된 이메일을 데이터베이스에서 찾기
      User.findOne({email: req.body.email}, (err, user)=>{
        if(!user){
          return res.json({
            loginSuccess : false,
            massage : "제공된 이메일에 해당하는 유저가 없음"
          })
        }
    ```
    
2. **요청된 이메일이 있다면 비밀번호 체크**
    
    **새로운 함수 생성(Model/User.js)파일 수정**
    
    ```jsx
    // Model/User.js 
    userSchema.methods.comparePassword = function(plainPassword,callbackfunk)
    {
        // plainPassword = 1234
        // database 암호 = 암호화된 비밀번호 
    
        bcrypt.compare(plainPassword, this.password, function(err, isMatch){
            if(err){
                return callbackfunk(err);
            }
            else
                callbackfunk(null, isMatch);
        })
    }
    ```
    
    ```jsx
    // index.js파일 수정
    // 2. 요청된 이메일이 있다면 비밀번호 체크
        user.comparePassword(req.body.password, (err,isMatch)=>{
          if(!isMatch){
            return res.json({
              loginSuccess : false,
              massage : "비밀번호가 틀립니다"
            })
          }
    ```
    
3. **위 조건을 모두 만족하면 Token 생성**
    
    **JsonWebToken 라이브러리 설치**
    
    **토큰 저장용 cookie-parser 라이브러리 설치**
    
    ```bash
    npm install jsonwebtoken --save
    npm install cookie-parser --save
    ```
    
    **새로운 함수 생성(Model/User.js)파일 수정**
    
    ```jsx
    // Model/User.js 
    const jwt = require('jsonwebtoken');
    
    userSchema.methods.generateToken = function(callbackfunk){
        //jsonwebtoken을 이용하여 토큰 생성
        var user = this;
        var token = jwt.sign(user._id.toHexString(), 'secretToken')
        // user._id + 'secretToken' = token
        // user.id + secretToken 을 이용하여 토큰을 생성하고 나중에 secretToken을 이용하여 user.id 확인 가능
        user.token = token
        user.save(function(err, user){
            if(err) return callbackfunk(err)
            callbackfunk(null, user)
        })
    }
    ```
    
    ```jsx
    // index.js파일 수정
    const cookieParser = require('cookie-parser');
    app.use(cookieParser());
    
    // 3. 위 조건을 모두 만족하면 Token 생성
          user.generateToken((err,user)=>{
            if(err) return res.status(400).send(err)
            // 현재 user에는 토큰이 있음 토큰을 쿠키에 저장
            res.cookie("x_auth",user.token).status(200).json({
              loginSuccess : true,
              userID : user._id 
            })        
          })
    ```
    
    - **전체 코드 (User.js)**
        
        ```jsx
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
        
        userSchema.methods.comparePassword = function(plainPassword,callbackfunk)
        {
            // plainPassword = 1234
            // database 암호 = 암호화된 비밀번호 
        
            bcrypt.compare(plainPassword, this.password, function(err, isMatch){
                if(err){
                    return callbackfunk(err);
                }
                else
                    callbackfunk(null, isMatch);
            })
        }
        userSchema.methods.generateToken = function(callbackfunk){
            //jsonwebtoken을 이용하여 토큰 생성
            var user = this;
            var token = jwt.sign(user._id.toHexString(), 'secretToken')
            // user._id + 'secretToken' = token
            // user.id + secretToken 을 이용하여 토큰을 생성하고 나중에 secretToken을 이용하여 user.id 확인 가능
            user.token = token
            user.save(function(err, user){
                if(err) return callbackfunk(err)
                callbackfunk(null, user)
            })
        }
        
        const User = mongoose.model('User', userSchema) //스키마를 모델로 감싸줌
        module.exports = {User} //다른곳에서 사용할 수 있게 하기위해
        ```
        
    - **전체 코드 (index.js)**
        
        ```jsx
        const express = require('express');
        const app = express();
        const port = 3000
        
        const mongoose = require('mongoose');
        const {User} = require("./Models/User");// 미리 정의했던 모델 가져오기
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
        
        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
        ```
        
    
    **로그인 테스트**
    
    **포스트맨을 이용하여 로그인 확인**
    
    - 정보를 잘못 입력했을 때
        
        <img width="839" alt="스크린샷 2022-12-28 오후 9 12 17" src="https://user-images.githubusercontent.com/79856225/209957762-1a5a9d41-f4c8-4ed4-902b-4879cb6305f1.png">
        
    - 정보를 제대로 입력했을 때
        
        <img width="844" alt="스크린샷 2022-12-28 오후 9 13 16" src="https://user-images.githubusercontent.com/79856225/209957783-ef3f6b45-0bef-4cf5-8bd0-a51ae84bf32d.png">

        
    
     **제대로 나오는걸 확인할 수 있다.**

</div>
</details>

### #9 Auth 기능 추가

<details>
<summary> Auth 기능 추가 </summary>
<div markdown="1">

- **전체 흐름도**
    
    <img width="495" alt="스크린샷 2022-12-28 오후 9 15 55" src="https://user-images.githubusercontent.com/79856225/209958364-22f7bbd7-b881-40a6-a2a2-415712adb721.png">

    

**페이지별로 로그인 또는 관리자 확인 필요한경우 체크하기 위해서**

- **서버는 토큰을 데이터베이스에 저장되어 있음**
- **클라이언트는 토큰을 쿠키에 저장되어 있음**

**인증을 위해서는 중간에 인증처리를 해줄 미드웨어가 필요**

- **middleware/auth.js 파일 생성 후 다음 코드 추가**
    
    ```jsx
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
    ```
    
- 복호화 함수를 정의해야 하므로 User.js파일에 다음 코드 추가
    
    ```jsx
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
    ```
    
- index.js 파일 코드 추가
    
    ```jsx
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
    ```

</div>
</details>

### #10 로그아웃 기능 만들기

<details>
<summary> 로그아웃 기능 만들기 </summary>
<div markdown="1">

- **전체 흐름도**
    
    <img width="689" alt="스크린샷 2022-12-28 오후 9 43 12" src="https://user-images.githubusercontent.com/79856225/209958742-aa1ac87d-b090-403c-a663-9960a794a692.png">
    

**로그아웃은 이미 로그인이 되어있으므로 해당 유저 데이터베이스에서 토큰만 삭제하면 됨**

- **index.js 파일에 다음 코드 추가**
    
    ```jsx
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
    ```
    

**포스트맨에서 로그인 후 로그아웃 확인**

<img width="845" alt="스크린샷 2022-12-28 오후 9 56 48" src="https://user-images.githubusercontent.com/79856225/209958749-8b420c6f-aea9-4f7b-b089-9ae19c72167a.png">

**데이터베이스에서 토큰 삭제 확인**

- 로그아웃 전
    
    <img width="292" alt="스크린샷 2022-12-28 오후 9 51 06" src="https://user-images.githubusercontent.com/79856225/209958766-853431bc-141c-4229-b0bd-4d4e131801e3.png">
    
- 로그아웃 후
    
    <img width="323" alt="스크린샷 2022-12-28 오후 9 58 02" src="https://user-images.githubusercontent.com/79856225/209958777-215d4b8b-43d0-4853-a67c-5fa1ca0dea9b.png">


</div>
</details>

<!--
<details>
<summary>  </summary>
<div markdown="1">

</div>
</details>
----------------------
-->


### #11 리액트 소개 및 설치

<details>
<summary>리액트 소개 및 설치 </summary>
<div markdown="1">

- **전체 흐름도**
    
    <img width="657" alt="스크린샷 2022-12-28 오후 9 59 00" src="https://user-images.githubusercontent.com/79856225/210166327-b74f2fca-e309-4485-b2c2-720bf16693ea.png">

    

**프론트도 다루기 위해서 React JS 사용**

**React JS는 2013년도에 페이스북에서 만들어진 라이브러리이다.**

- **특징**
    - **컴포넌트로 이루어져 있어 재사용이 용이하다.**
    - **Virtual DOM**
        - Real DOM VS Virtual DOM
            - **10개의 리스트 중 1개만 변화한 경우**
                - Read DOM은 전체를 업데이트 해야함
                - **Virtual DOM은 1개만 업데이트 가능**
        - 스냅샷을 찍어 바뀐 부분부분만을 확인 후 RealDOM에서 바꾸는 형식

**Create - React 설치하기**

- 전체 흐름도
    
    ![스크린샷 2022-12-28 오후 10.33.06.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e416be30-4420-49ed-a43d-cdeb131c820b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-12-28_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.33.06.png)
    

**프론트도 해야하므로 client, server 폴더 생성하여 분리**

**server 폴더에 지금까지 했던 파일들 이동**

- config 폴더
- middleware 폴더
- Models 폴더
- index.js 파일

**client 폴더로 이동 후 터미널에 다음 명령어 실행**

```bash
npx create-react-app .
```

**—# npm ? npx?**

- npm (node package manager)
    - 저장소 역할
    - -g 플래그를 주면 글로벌로 다운로드
        - 플래그를 주지 않으면 node-modules에 저장
    - **원래는 글로벌로 create-react를 다운로드 했었음**
- **npx를 이용하여 다운없이 저장소에 있는 리액트를 가져와서 사용가능**
    - 저장공간 부담이 없음
    - 항상 최신 버전 사용 가능

**client 폴더로 이동하여 npm run start 입력**

—# package.json 스크립트에 start 명령어가 등록되어 있음

- node_modules
    - 라이브러리 저장소
- public
    - static 파일들 보관함
- src
    - 소스코드 보관함 (실질적으로 여기파일들로 코딩함)
- package.json
    - 설치한 라이브러리 목록
- **App.js**
    - 렌더링된 페이지가 보여짐

</div>
</details>


### #12 CRA to Our Boilerplate

<details>
<summary> CRA to Our Boilerplate </summary>
<div markdown="1">

- **전체 흐름도**
    
    <img width="240" alt="스크린샷 2022-12-28 오후 11 00 15" src="https://user-images.githubusercontent.com/79856225/210166354-2a6d4d9e-4813-4490-9f25-3af181cdbefc.png">
    

**src 하위 경로에 다음 폴더 및 파일 추가**

- **_actions 폴더 생성**
- **_reducers 폴더 생성**
- **components 폴더 생성**
    - **views 폴더 생성**
        - **LandingPage 폴더 생성 : 처음 페이지**
            - **LandingPage.js 파일 생성 후 다음 코드 입력**
            - **ES7 React 확장팩을 설치하면 rfce를 입력하여 기본 코드 자동완성 가능**
                
                <img width="1495" alt="스크린샷 2022-12-28 오후 11 17 37" src="https://user-images.githubusercontent.com/79856225/210166355-424954bc-99e3-41bf-9644-7bdf3929f4f0.png">

                
                ```jsx
                //**LandingPage
                import React from 'react'
                
                function LandingPage(){
                    return (
                        <div>
                            LandingPage
                        </div>
                    )
                }
                export default LandingPage**
                ```
                
        - **LoginPage 폴더 생성 : 로그인 페이지**
            - **LoginPage.js 파일 생성 후 다음 코드 입력**
            
            ```jsx
            import React from 'react'
            
            function LoginPage() {
              return (
                <div>LoginPage</div>
              )
            }
            
            export default LoginPage
            ```
            
        - **RegisterPage 폴더 생성 : 회원가 입 페이지**
            - **RegisterPage.js 파일 생성 후 다음 코드 입력**
            
            ```jsx
            import React from 'react'
            
            function RegisterPage() {
              return (
                <div>RegisterPage</div>
              )
            }
            
            export default RegisterPage
            ```
            
        - **NavBar 폴더 생성 : 네비게이션 바**
            - **NavBar.js 파일 생성 후 다음 코드 입력**
            
            ```jsx
            import React from 'react'
            
            function NavBar() {
              return (
                <div>NavBar</div>
              )
            }
            
            export default NavBar
            ```
            
        - **Footer 폴더 생성 : 하단 정보**
            - **Footer.js 파일 생성 후 다음 코드 입력**
            
            ```jsx
            import React from 'react'
            
            export default function Footer() {
              return (
                <div>Footer</div>
              )
            }
            ```
            
- **utils 폴더 생성**
- **hoc 폴더 생성**
- **Config.js 파일 생성**

</div>
</details>

### #13 React Router Dom

<details>
<summary> React Router Dom </summary>
<div markdown="1">

- **전체 흐름도**
    
    <img width="667" alt="스크린샷 2022-12-28 오후 11 21 58" src="https://user-images.githubusercontent.com/79856225/210166378-77af81fe-de50-4c5b-bbd2-89829d639358.png">

    

**하나의 페이지에서 다음페이지로 넘어가기 위한 Router 설정**

**React Router Dom 라이브러리 설치(clinet 폴더에서 입력해야 함)**

```bash
npm install react-router-dom --save
```

**App.js 파일 수정**

- 메인 페이지
- 로그인 페이지
- 회원가입 페이지

```jsx
import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
}from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'

function App(){
	return (
		<Router>
			<div>
				{
					}
				<Switch>
					<Route exact path="/" component ={LandingPage} />
					<Route exact  path="/login " component = {LoginPage} />
					<Route exact  path="/register " component = {RegisterPage } />
				</Switch>
			</div>
		</Router>		
	);
}

export default App;
```

</div>
</details>


### # 14 데이터 Flow & Axios

<details>
<summary> 데이터 Flow & Axios </summary>
<div markdown="1">

- **전체 흐름도**
    
    <img width="527" alt="스크린샷 2022-12-29 오후 11 14 40" src="https://user-images.githubusercontent.com/79856225/210306985-83c18785-ef6b-4e27-a42b-f4b8b76130db.png">

    

**NodeJs → Server**

**ReactJs → Clinet**

**MongoDB → DB**

**유저가 로그인(클라이언트) → 서버에서 데이터베이스 접근 → 일치여부 확인 → 유저에게 보여줌**

**이제 클라이언트가 있으니 POSTMAN이 아닌 Axios 라이브러리 를 이용**

- **Axios 라이브러리 다운로드**
    - client 폴더로 이동 후 다음 명령어 입력
    
    ```bash
    npm install axios --save
    ```
    
- **LandingPage.js 파일 코드 추가(클라이언트)**
    
    ```jsx
    import React, {useEffect} from 'react'
    import axios from 'axios'
    import { response } from 'express'
    
    function LandingPage(){
    
        useEffect(()=>{
            axios.get('/api/hello')
            .then(response => console.log(response.data))
        }, [])
    
        return (
            <div>
                LandingPage
            </div>
        )
    }
    export default LandingPage
    ```
    
- **index.js 파일 코드 추가(서버)**
    
    ```jsx
    app.get('/api/hello', (req,res) =>{
    
      res.send("안녕하세요")
    })
    ```
    
- **2개의 터미널을 이용하여 server와 client 서버 실행**
    - server 디렉토리에서 npm run start
    - client 디렉토리에서 npm run start
    
    **확인하면 에러가 뜬다 이유는 서로의 포트번호가 달라서임  따로 설정필요**

</div>
</details>


### # 15 CORS 이슈, Proxy 설정

<details>
<summary> CORS 이슈, Proxy 설정 </summary>
<div markdown="1">

- **전체 흐름도**
    
    <img width="465" alt="스크린샷 2022-12-29 오후 11 31 20" src="https://user-images.githubusercontent.com/79856225/210307349-94687fdf-2575-4fc1-af13-12b176cdf37e.png">
    

**서로의 서버 포트번호가 달라서 에러가 발생**

**CORS 정책이란 ?**

- **Cross  Origin  Resource Sharing**
    
    **서로 다른 웹사이트에서 다른 도메인끼리 소통하려면 제한이 걸림**
    
- **다양한 해결방법이 존재**
    - **Proxy 설정으로 해결**

**Proxy 설정**

- **다음 명령어로 Proxy 라이브러리 다운로드(clinet 폴더)**
    
    ```bash
    npm install http-proxy-middleware --save
    ```
    
- **src/setupProxy.js 파일 생성 후 다음 코드 추가**
    - **target 포트번호는 자신의 포트번호와 맞춰야 함**
    - **기존 서버 3000 포트번호에서 포트번호를 5050으로 바꿨음**
    
    ```jsx
    const { createProxyMiddleware } = require('http-proxy-middleware');
    
    module.exports = function(app) {
      app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:5050',
          changeOrigin: true,
        })
      );
    };
    ```
    
- **2개의 터미널을 이용하여 server와 client 서버 실행**
    - server 디렉토리에서 npm run start
    - client 디렉토리에서 npm run start
    
    —# 다음과 같은 에러발생 시
    
    ```bash
    Compiled with problems:X
    
    ERROR in ./node_modules/body-parser/lib/read.js 19:11-26
    
    Module not found: Error: Can't resolve 'zlib' in '/Users/dak_kiwon/Jun/boiler-plater/clinet/node_modules/body-parser/lib'
    ```
    
    <img width="1004" alt="스크린샷 2022-12-29 오후 11 49 30" src="https://user-images.githubusercontent.com/79856225/210307355-a1426628-3268-461c-84f7-9ee677723b12.png">
    
    <img width="632" alt="스크린샷 2022-12-29 오후 11 49 54" src="https://user-images.githubusercontent.com/79856225/210307357-12e15e5b-8c59-41ad-9214-ff0980a6bef1.png">

    
    **해당 오류가 나는 페이지에서 express 부분을 삭제하면 정상작동 한다!**

</div>
</details>


### # 16 Proxy Sever란?


<details>
<summary> Proxy Sever란? </summary>
<div markdown="1">
**MongoDB 로그인**

- 회원가입 후 로그인
    
    [Cloud: MongoDB Cloud](https://cloud.mongodb.com/v2/620e6b7154ca89437ccd355f#/clusters)
    
    <img width="596" alt="스크린샷 2022-12-29 오후 11 52 43" src="https://user-images.githubusercontent.com/79856225/210307746-4ecb806a-43c3-4dc7-ba81-5a1b23f93377.png">

    

**Proxy Sever의 기능**

1. **유저가 보낸 IP를 임의로 바꿀 수 있음**
2. **방화벽 기능**
3. **웹 필터 기능**
4. **캐쉬 데이터 제공**

**Proxy Sever의 사용 이유**

1. 회사나 직원들 집안에서 아이들 인터넷 사용 제어
    1. 특정 사이트 제한
2. 캐쉬를 이용하여 더 빠른 인터넷 이용 제공
    1. 미리 캐쉬에 자료를 보관하여 빠르게 처리가능
3. 더 나은 보안 제공
    1. 아이피를 가릴 수 있음
4. 이용 제한된 사이트 접근 가능

</div>
</details>


### # 17 Concurrently

<details>
<summary> Concurrently </summary>
<div markdown="1">

- **전체 흐름도**
    
    <img width="663" alt="스크린샷 2022-12-30 오전 12 02 39" src="https://user-images.githubusercontent.com/79856225/210307917-4052e8ca-2986-41d6-bbee-53c08eee881b.png">

    

**Concurrently를 이용하여 프론트와 백 서버를 한 번에 켤 수있다.**

**Concurrently 라이브러리 설치 (workspace 폴더)**

```bash
npm install concurrently --save
```

**Workspace 폴더에  package.json 스크립트를 수정**

```jsx
"dev" : "concurrently \"npm run backend\" \"npm run start --prefix clinet\"" 
```

**전체 코드**

- **index.js 파일이 server 폴더로 옮겨졌으므로 그 경로에 맞게 Main경로를 수정**

```jsx
{
  "name": "boiler-plater",
  "version": "1.0.0",
  "description": "",
  "main": "./server/index.js",
  "scripts": {
    "start": "node index.js",
    "backend": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "concurrently \"npm run backend\" \"npm run start --prefix clinet\"" 
  },
  "author": "Jun",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "body-parser": "^1.20.1",
    "concurrently": "^7.6.0",
    "cookie-parser": "^1.4.6",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^6.8.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```

**npm run dev 명령어 실행 후 확인**

</div>
</details>


### # 18 Antd CSS Framwrok

<details>
<summary> Antd CSS Framwrok </summary>
<div markdown="1">

- **전체 흐름도**
    
    <img width="496" alt="스크린샷 2022-12-30 오전 12 16 27" src="https://user-images.githubusercontent.com/79856225/210308152-38a0925b-0774-486b-875e-126d608e86ef.png">

    

리액트에서 가장 유명한 프레임워크종류 중 **Ant Design 사용**

1. Material UI
2. React Bootstrap
3. Semantic UI
4. **Ant Design** 
5. Materialize

[https://ant.design/](https://ant.design/)

**Ant Design**

- 사이즈가 큼
- 사용이 편리하고 디자인이 깔끔함
- 배울 때 어려움

**Ant Design 설치 (client 폴더에서 설치)**

```bash
npm install antd --save
```

**clinet/src/index.js 파일에 다음 코드 추가**

```jsx
import 'antd/dist/antd.css';
```

</div>
</details>

### # 19 Redux 기초

<details>
<summary> Redux 기초 </summary>
<div markdown="1">

- **전체 흐름도**
    
    <img width="416" alt="스크린샷 2022-12-30 오전 12 22 58" src="https://user-images.githubusercontent.com/79856225/210308329-d0a83354-94e7-4ae7-80e8-6444598c2e11.png">
    

### **Redux → 상태 관리 라이브러리**

**Props Vs State**

**Props**

- properties의 줄임말
- 컴포넌트간의 무언가를 주고받을 때는 props을 이용
- 부모 → 자식 으로만 보낼 수 있음
- 부모 → 자식으로 보낸 값은 바뀔 수 없다.
    - 바꾸려면 부모 → 자식으로 새로운 값을 다시 보내야 함

**State**

- 컴포넌트안에서 데이터를 주고받을 때는 state이용
- 컴포넌트안에서의 값들은 변할 수 있다.
- 새로운값으로 변할 시 리렌더링된다.

**Redux**

<img width="409" alt="스크린샷 2022-12-30 오전 12 29 52" src="https://user-images.githubusercontent.com/79856225/210308334-38800bf6-77e9-4212-970f-71b504be8ac9.png">

- Store를 이용하여 컴포넌트 변화를 직접 접근할 수 있음
- 한뱡항으로만 흐름
- Action
    - 무엇이 일었났는지 설명하는 객체
- Reducer
    - 이전 State과 action object를 받은 후에 변해진 state를 반환한다.
- Store
    - 애플리케이션의 state을 감싸줌
    - 여러가지 함수(메소드)가 존재

</div>
</details>




<!--
<details>
<summary>  </summary>
<div markdown="1">

</div>
</details>
----------------------
-->
