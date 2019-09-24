---
title: aysnc await 學習筆記
---

## 何謂非同步?
最近從python一路寫到javascript
會對javascript的"非同步"感到非常頭大
舉個例子
我們現在在[Jsbin](https://jsbin.com/hayifeyewa/1/edit?js,console)
貼下以下程式碼
```
console.log('hi')
fetch('hayifeyewa').then(done => console.log("done"))
console.log('bye')
```
我們會印出
```
hi
bye
done
```
怎麼會這樣 以python的觀念來看 因該是
```
hi
done
bye
```
最大原因是python是個同步的語言
意思是
> 在對任一行程式進行請求的時候
> python都等到程式回應之後在進行下一行程式
> 即為IO阻塞式的語言

為甚麼要稱作阻塞式 是因為當python在進行這個requests請求時
python是停住在等待requests回應後 再進行下一步 
讓程式有順序的跑 邏輯也比較直覺
那是不是代表同步的語言就是最好的呢?

> 要看使用場合決定 

如果js是同步語言會造成以下結果
{%youtube p59z-tAoxyA %}
js只要一有"長時間"的請求 js就會卡在那 甚麼事都不能做
你試想 假設我今天在gmail傳送了一封信件(POST)
在傳送過程中我的頁面都是當掉的 那使用體驗會有多差

### 參考
[[筆記] 理解 JavaScript 中的事件循環、堆疊、佇列和併發模式（Learn event loop, stack, queue, and concurrency mode of JavaScript in depth）](https://pjchender.blogspot.com/2017/08/javascript-learn-event-loop-stack-queue.html)

## 非同步怎麼做到的?
我們現在瞭解了非同步就是
> 程序不必等待元件的I/O 即繼續執行
> 當I/O元件回應的時候 即會觸發當初給他定義的function

講得有點饒舌 我們用以下的影片來說明
{%youtube N0Au8yc5IOw %}
[實作連結](http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2hpJykKCnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgewogIGNvbnNvbGUubG9nKCd0aGVyZScpCn0sIDUwMDApCgpjb25zb2xlLmxvZygnSlNDb25mRVUnKQ%3D%3D!!!)
圖中的區域分別是
* stack: js執行的地方
* webapis: 瀏覽器提供的很多I/O api 有requests相關、計時器相關的
* task queue: 當webapis的I/O操作完畢開始回應時
    會將當初準備好的js function建立在task queue
* event loop: 用來監控stack與task queue的模塊
    只要stack是空的 就把task queue的js function丟到stack裡讓js執行
    
首先 我們的瀏覽器"並不是只有js在上面運作"
js只是上面的一個引擎 其他還有requests引擎 計時的引擎等等
舉個例子 js在使用計時器引擎時 只是跟對方說
> 欸欸 這個callback function給你
> 5秒後記得回來告訴我要執行這個callback啊

過了5秒後 計時器引擎就會把這個callback生在task queue裡面
然後event loop模塊趁js執行的空檔把callback交給js讓他執行(在stack裡執行)


### 參考
[[C#]Multiple thread和非同步的差異，並正確自訂非同步的方式](https://dotblogs.com.tw/kinanson/2018/03/28/075558)

## 那在python中怎麼辦到?
python 需要一個模塊 可以提供各種requests相關、計時器相關的I/O元件api
並且此模塊也擁有 event loop的功能 因此python在3.5提供了asyncio
舉個例子 我們對google要10次GET >>> [demo](https://repl.it/repls/InformalCraftyWifi)
```
import requests
import time
import asyncio

url = 'https://www.google.com.tw/'
loop = asyncio.get_event_loop()

start_time = time.time()

async def send_req(url):
    t = time.time()
    print("Send a request at",t-start_time,"seconds.")

    res = await loop.run_in_executor(None,requests.get,url)

    t = time.time()
    print("Receive a response at",t-start_time,"seconds.")

tasks = []

for i in range(10):
    task = loop.create_task(send_req(url))
    tasks.append(task)

loop.run_until_complete(asyncio.wait(tasks))
```
他的順序是這樣的
1. asyncio 創造一個event loop模塊
2. python將send_req這10個非同步function丟入event loop給他監控
3. event loop啟動 python開始執行event loop 的function 
4. 遇到await就把後方帶的requests交給I/O request 元件 讓他執行 
5. 不理他繼續跑其他function
6. I/O requests元件執行完畢返回request 所要return的值
7. 繼續執行下方程式碼
![](https://i.imgur.com/D704LUx.png)

### 參考
[python的asyncio模組(一)：異步執行的好處](https://ithelp.ithome.com.tw/articles/10199385)
[高性能IO模型（摘选）](https://www.jianshu.com/p/6a37a6aee879)

## 他的原理是甚麼？
首先 我們要先瞭解python的yiedl [ref](https://blog.csdn.net/soonfly/article/details/78361819)
> yield就是讓你的程式碼可以中途中斷 將執行敘返回
```
def tset():
    return ["a" * 10000000]

def test2(n):
    count = 0
    while < n:
        yield count
        count += 1
```
> 而 "yield from" iterable本质上等于for item in iterable: yield item的缩写版
```
def g1():     
     yield  range(5)
def g2():
     yield  from range(5)

it1 = g1()
it2 = g2()
for x in it1:
    print(x)

for x in it2:
    print(x)
```
```
def g1():
  for item in range(5):
    yield  item
def g2():
  yield from range(5)

it1 = g1()
it2 = g2()
for x in it1:
  print(x)

for x in it2:
  print(x)
```
![](https://i.imgur.com/P2UdsKP.png)
![](https://i.imgur.com/ee606XA.png)

### 參考
[分散式通訊協議-TCP/IP與常用IO方式](https://www.itread01.com/content/1545808988.html)

---

## 對公司有甚麼好處？
在我目前待的公司 我有一些case必須要同時測試多台device
在我們對device provision的時候 有時候有很多需求是要同時provision多台
或者MQTT再開一個thread來進行test case 我們就可以利用協程來達到同樣的效果
他會比multi process 或者 thread 更輕便 不耗資源 因為
* process本質上就是再開一個python 假設你80核心 那其實沒關係XD
* thread本質上會因為GIL而造成CPU互搶資源

### 同時多台的test case
以某一個專案來說來說
以前不知道有python可以非同步 就只能採用js的非同步再套到robot上
其實這造成後續維護上的不便
```
for(let i = 0; i < env.DEVICE_COUNT; i++) {
            provisionPromise[i] = device.sendProvisionAndReturnClient(sn[i].substring(0, 12), deviceToken[i], provisionToken[i]);
        }
        deviceClients = await Promise.all(provisionPromise);
```
### 使用在MQTT上
[aiomqtt](https://github.com/mossblaser/aiomqtt)以實作了這個功能
我們也可以開多個MQTT client 來對murano進行publish
而不是再用multi thread 照成CPU運作的困難

### 參考
[GIL是甚麼](http://ccu-cs-os2009s-495410049.blogspot.com/2009/06/os-process-thread-part-3.html?m=1)

---

## 其他有趣的文章

### 把node js 的非同步模快套再python上
再以上介紹上 可以知道要做到非同步協程
主要的重點就是要有一個擁有Event loop核心的模快來跟電腦底層的I/O元件分配任務
所以我們也可以把node js 的libuv模快 套用到python上

#### 參考
[基於 libuv 的 uvloop 令 Python 3.5+ 的 asyncio 更快](https://carlos.aboutmy.info/blog/?p=713)
[[從libuv/v8到nodejs 系列] ：Libuv - 環境建置與說明](http://sj82516-blog.logdown.com/posts/3903966/from-libuv-v8-to-nodejs-series-libuv-environment-setting-and-description)

#### 線程 進程 是甚麼
可以看看RobinC的文章 寫的更清楚
> 引用RobinC：
> process是資源分配的最小單位 你可以把他想成一個工廠
> thread式CPU執行的最小單位 你可以把他想成工人

CPU密集型（你可以想成很多演算法） >>>
適合使用multi process 因為各個工廠的資源都是分開的 不會因為爭奪GIL資源而耗費時間
IO密集型（你可以想成很多requests）>>>
適合使用multi thread 因為thread把事情交代給request I/O就開始等待 而這些I/O都是分開的 不會搶資源(可以參考上圖) 但是首先條件式你的電腦要式多CPU 可以跑多thread

#### 參考
[谈谈python的GIL、多线程、多进程](https://zhuanlan.zhihu.com/p/20953544)

### callback hell
![](https://i.imgur.com/7dpMt31.png)

關鍵 >>> 假設我們的程式碼試想要有序的 即
```
x = request1("hi")
y = request2(x)
z = request3(y)
```
再同步的語言中會等待IO返回 再執行下一行
可是非同步的語言中IO返回所執行的東西是當初交代給他的callback function
所以你必須把下一行程式碼包裝好 跟IO說 等等你完成後要執行這個喔
長這樣
```
z = requests1("hi", requests2(x, requests3(y)))
```
把他變成波動全就變這樣
```
z = requests1("hi",
        requests2(x,
            requests3(y)
        )
    )
```

---

## 其他參考
[还在疑惑并发和并行？](https://laike9m.com/blog/huan-zai-yi-huo-bing-fa-he-bing-xing,61/还在疑惑并发和并行？)
[从0到1，Python异步编程的演进之路](https://zhuanlan.zhihu.com/p/25228075)
[Python Async/Await入门指南](https://zhuanlan.zhihu.com/p/27258289)
[Linux 驅動程式的 I/O, #4: 什麼是 Blocking I/O](http://www.jollen.org/blog/2008/08/linux_device_driver_blocking_io.html)

<disqus />