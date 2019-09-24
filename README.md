# my-blog

## 需求

* docker
* docker-compose

## 目前有的Components

* Disqus: 可使用FB, Google, Twitter登入留言的留言板
* fbChat: 讓瀏覽部落格的人可以直接透過FB與你的粉專交談

## 資料夾結構

```
.
├── another # 其他網頁 你可以放其他靜態網頁在此資料夾 便可依照https://<USERNAME>.github.io/another/<資料夾名稱> 來瀏覽
├── deploy.sh
├── docker-compose.yaml
├── Dockerfile
├── docs # 部落格資料夾 詳細配置可參考官網: https://vuepress.vuejs.org/zh/
│   ├── .vuepress
│   ├─├── components # vue組件 可引用置全局
│   ├─├── dist # 打包檔案
│   ├─├── public # 公用檔案
│   ├─├── config.js # vue設定
│   ├─├── enhanceApp.js # 引入模組
│   ├── <文章群組>
│   │   └── README.md # 文章
│   └── README.md # 部落格根目錄
├── package.json
├── package-lock.json
└── README.md
```

## 環境變數

請複製 **.env.example** 成 **.env** 檔案

並依照以下資訊編輯

```
//.env.example
# Github info
GITHUB_USERNAME= //請輸入你的Github帳號名稱

# FB customer chat
PAGE_ID= //請輸入FB customer chat的page id

# Disqus
DISQUA_USERNAME= //請輸入Disqus的使用者名稱
```

## 初始化

```
docker-compose build &&\
docker-compose run web npm install
```

## 開始寫作!

```
docker-compose up
```

打開**localhost:8080**

開始寫作時會即時預覽在網頁上

## 打包

```
docker-compose run web npm run docs:build
```

## 部屬

```
./deploy.sh
```