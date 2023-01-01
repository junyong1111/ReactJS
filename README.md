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
<summary> 12 CRA to Our Boilerplate </summary>
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

### # 13 React Router Dom

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
