# ReactJS

### 본 정리는 인프론 John Ahn 따라하며 배우는 노드, 리액트 시리즈 - 기본 강의를 참고하였습니다.

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



<!--
<details>
<summary>  </summary>
<div markdown="1">

</div>
</details>
----------------------
-->
