---
title:  drone 與其他CI/CD的比較
---

drone! 星星數多爆的CI/CD
![](https://i.imgur.com/nMSbBb5.jpg)

## 其他軟體超級比一比
* jenkins

    ![](https://i.imgur.com/QEjj6FM.png)

    老牌的CI

* Gitlab CI

    ![](https://i.imgur.com/LNP063o.png)

    沒用過xddd

* Travis CI

    ![](https://i.imgur.com/eEQmoFo.png)

    在github上push的時候會自動跑的一個CI服務

    其實我覺得用起來跟Drone很像

    不過Travis CI 會提供給你他的雲端虛擬機

    而Drone CI 要自己架

## 如果你有以下需求 你可能需要drone
![](https://i.imgur.com/2NHJBaT.png)
1. 工具設定複雜
2. 維護成本很高
3. 新人學習困難

## 怎麼用
1. 設定docker-compose
2. 設定github outh
3. 設定serveo反向代理
4. 直接起起來~~
5. 確認outh

![](https://i.imgur.com/QIkbv5T.png)

6. 看到所有的github頁面

![](https://i.imgur.com/X266GoG.png)

7. 根據這個github設計drone.yml

    https://github.com/go-training/drone-nodejs-example/blob/master/.drone.yml

## 我用起來最深的感受
* 優點
    1. 只要會使用yaml與docker 一切都變得超簡單
    2. 秒啟動秒安裝 真的是很輕的一個CI/CD 
    3. 所有的插建都用docker封裝 這很吸引我哈哈
* 缺點
    1. 可調的參數少 或者說我才剛使用 知道能調的地方不多
* 結論
    如果是一間有規模的公司 可以採用jenkins
    
    因為它可以調整的東西或者是插件已經非常豐富
    
    但如果是一間小型或者新創公司 那可以建議使用drone
    
    因為它安裝與學習成本不高
    
    小公司不太需要jenkins那麼龐大的架構
    
    也不需要那麼複雜的設定
    
    另外 他的討論社群目前非常活躍 是個可期待的CI/CD
    
    我自己客觀的比喻
    
    jenkins 與 drone 就好像現在的 java 與 go 語言吧
    
## 其他
* serveo: 好用的反向代理軟體 跟ngrok很像 但他可以自訂domain

## 參考
* [安裝 Drone 0.5 自動測試平台並與 Github 連結](https://yami.io/drone/)
* [Drone - Re: 從零開始的 CI 生活](https://vagrantpi.github.io/2018/09/28/drone-101/)
* [10 分鐘內用 Traefik 架設 Drone 搭配 GitHub 服務](https://blog.wu-boy.com/2019/03/setup-traefik-with-drone-ci-cd-in-ten-minutes/)
* [為什麼我用 Drone 取代 Jenkins 及 GitLab CI](https://blog.wu-boy.com/2017/09/why-i-choose-drone-as-ci-cd-tool/)
* [[自動建置實戰]Jenkins+Github+Docker](http://mis101bird.js.org/cd/)
* [實戰 Docker + Jenkins + Django + Postgres](https://github.com/twtrubiks/docker-jenkins-django-tutorial)
* [在（Docker里的）Jenkins里运行Docker](http://www.dockone.io/article/431)
* [[Jenkins]持續整合之路(十一)Jenkins加入Slave作自動佈署(Copy Artifact plugin)](https://dotblogs.com.tw/stanley14/2018/06/19/jenkins_copyartifact_plugin)
* [[Ricky筆記] Jenkins with DooD (Docker-outside-of-Docker)](https://medium.com/@amosricky95/ricky%E7%AD%86%E8%A8%98-jenkins-with-dood-docker-outside-of-docker-8b93b06206fc)
* [使用 Docker 安裝 Jenkins](https://ithelp.ithome.com.tw/articles/10200621?sc=iThelpR)
* [阿里巴巴如何基于 Kubernetes 实践 CI/CD](https://www.infoq.cn/article/432eDCqBIU5je_dQj3Zx)
* [docker运行jenkins](https://www.jianshu.com/p/3671eb8de971)

<disqus />