## Common Web Site

Web Site ของบริษัททั่วไปอาจจะมีแค่ 2-3 หน้า ก็ได้
ไม่จำเป็นต้องมี Database ให้ยุ่งยาก
ทำแค่ Static Content ให้ดูดีเหมือนบริษัทชั้นนำก่อนในช่วงแรก

```
            The Home Page 
                 (/)
                  ^
                  '
    .-------------'-------------.
    '             '             '
    v             v             v
About Us      Not Found
 /about         /error

```

ตัวอย่างการเขียน Web Site ด้วย Node.js
```
.
'-- main.js
'-- views
'   '-- home.html
'   '-- about.html
'   '-- header.html
'   '-- footer.html
'   '-- error.html
'-- public
    '-- normalize.css
    '-- main.css
```

ตัวอย่าง Project นี้จะใช้ Framework ชื่อ Express.js
เป็นหลัก ซึ่งเป็น Framework ที่นิยมใช้มากที่สุด 
สังเกตได้จากการที่มีงานรองรับมากที่สุด

```javascript
var express = require("express")
var server  = express()
server.listen(5050)
var ejs     = require("ejs")
server.engine("html", ejs.renderFile)

server.get("/",        showHomePage)
server.get("/about",   showAboutPage)
server.get("/history", showHistoryPage)
server.use(express.static("public"))
server.use(showError)

```

## Database

หน้าต่อไปที่ควรมีคือหน้า Contact Us 
เพื่อให้ผู้ใช้สามารถส่งข้อมูลถึงบริษัทได้
หน้านี้จะมี Request สองแบบ คือ แบบ GET และ POST

```javascript
server.get ("/contact", showContactPage)
server.post("/contact", saveContactDetail)
server.get ("/contact-received", showContactReceived)

```

หน้า Contact Us อาจจะมีการส่ง Email ไปให้ผู้ใช้ที่กรอกข้อมูลเข้ามา 
ว่าได้รับข้อความเรียบร้อยแล้ว แต่ในตอนนี้ยังไม่มี

## Member System

เมื่อระบบใหญ่ขึ้น อาจจะต้องมีระบบ Log In ให้ Staff, Supplier, หรือ Partner
ที่เกี่ยวข้อง Log In เข้ามาใช้ระบบได้ ใน Code นี้จะมีระบบ Log In ของ Staff

```javascript
server.get ("/login", showLogInPage)
server.post("/login", checkPassword)
server.get ("/profile", showStaffProfilePage)

```



































