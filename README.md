# 🧠 Seggle

교내 인공지능 과목 온라인 저지

### 배포 링크: http://seggle.ai/

## 프로젝트 소개

`Seggle`은 Sejong + Kaggle를 합한 말로 “세종대학교만의 머신러닝/인공지능 문제 채점시스템”을 말합니다.

우리 학교 교수님들께서 출제하신 대회 문제들을 직접 풀어볼 수 있고 기계학습/인공지능과 관련된 수업을 수강하는 학생들은 실습/과제/시험을 모두 한 번에 Seggle에서 해결할 수 있습니다. 

Seggle을 통해 ML/AI 실력을 향상시켜 보세요😊

## 프로젝트 기능
 
## 🛠️ 기술 스택
- **Front-End** <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=Vue.js&logoColor=white">
- **Deploy** <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white"> <img src="https://img.shields.io/badge/EC2-010101?style=flat&logo=EC2&logoColor=white"> <img src="https://img.shields.io/badge/NGINX-009639?style=flat&logo=NGINX&logoColor=white">

![image](https://user-images.githubusercontent.com/80238096/203716600-934543a0-55be-4c79-a301-d0398236e32a.png)


 ## 📁 프로젝트 구조

 ### Frontend 구조
 
 ```bash
frontend
├── public                # index.html / favicon
└── src
    ├── api               # api 관련 모듈들
    ├── assets            # 필요한 리소스들
    ├── components        # 컴포넌트들
    ├── router            # 라우터들
    ├── store             # 상태관리
    ├── styles            # 공통 스타일들(base.scss)
    ├── utils             # 재사용 가능한 모듈들
    ├── views             # 페이지들
    ├── App.vue(FILE)     # App 컴포넌트
    └── main.js(FILE)     # entry point
```


 ## ▶️ 설치 및 실행
 
 ### 프로젝트 설치 및 실행 - Development mode
 #### client
.env 파일
```bash
VUE_APP_API_URLT=YOUR SERVER API
 ```
 실행
 ```bash
$ git clone https://github.com/seggle/FE.git
$ cd FE
$ npm install
$ npm run serve
 ```
 
 ## 🙋‍♀️ 멤버
 <table>
  <tr>
    <td align="center">
      <a href="">
<!--         <img src="/" width="75px;" alt="inyeong-kang"/><br /> -->
        <sub><b>강인영</b></sub>
      </a><br />
      <a href="/" title="Code">:computer:</a> 
    </td>
    <td align="center">
      <a href="">
<!--         <img src="/" width="75px;" alt="inyeong-kang"/><br /> -->
        <sub><b>노효주</b></sub>
      </a><br />
      <a href="/" title="Code">:computer:</a> 
    </td>
    <td align="center">
      <a href="https://github.com/minkyung00">
<!--         <img src="/" width="75px;" alt="inyeong-kang"/><br /> -->
        <sub><b>신민경</b></sub>
      </a><br />
      <a href="/" title="Code">:computer:</a> 
    </td>
  </tr>
</table>
