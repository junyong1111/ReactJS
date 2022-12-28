# ReactJS

### 본 정리는 인프론 John Ahn 따라하며 배우는 노드, 리액트 시리즈 - 기본 강의를 참고하였습니다.

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