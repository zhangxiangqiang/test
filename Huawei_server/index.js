const CONFIG = require('./config'),
    PERSONAL_PATH = './json/personal.json',
    STORE_PATH = './json/store.json',
    PRODUCT_PATH = './json/product.json',
    CATEGORY_PATH = './json/category.json',
    DISCOVER_PATH = './json/discover.json';


/*-CREATE SERVER-*/
const express = require('express'),
    app = express();
app.listen(CONFIG.PORT, () => {
    console.log(`THE WEB SERVICE IS CREATED SUCCESSFULLY AND IS LISTENING TO THE PORT：${CONFIG.PORT}`);
});

/*-MIDDLE WARE-*/
//=>实现CROS跨域的中间件
app.use((req, res, next) => {
    const {ALLOW_ORIGIN, CREDENTIALS, HEADERS, ALLOW_METHODS} = CONFIG.CROS;
    res.header("Access-Control-Allow-Origin", ALLOW_ORIGIN);
    res.header("Access-Control-Allow-Credentials", CREDENTIALS);
    res.header("Access-Control-Allow-Headers", HEADERS);
    res.header("Access-Control-Allow-Methods", ALLOW_METHODS);
    req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
});

//=>实现SESSION操作的中间件
const session = require('express-session');
app.use(session(CONFIG.session));

//=>把所有POST请求，请求主体传递的内容进行解析，把URL-ENCODED格式转换为对象，存放到REQ.BODY属性上的
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//=>在所有的请求开始之前，把JSON中的数据获取到，挂载到REQ的某些属性上，以后想获取，直接的从属性读取即可
const {readFile} = require('./utils/promiseFS');
app.use(async (req, res, next) => {
    req.personalDATA = JSON.parse(await readFile(PERSONAL_PATH));
    req.storeDATA = JSON.parse(await readFile(STORE_PATH));
    req.productDATA = JSON.parse(await readFile(PRODUCT_PATH));
    req.categoryDATA = JSON.parse(await readFile(CATEGORY_PATH));
    req.discoverDATA = JSON.parse(await readFile(DISCOVER_PATH));
    next();
});

/*-ROUTE-*/
//=>EXPRESS中的路由管控，例如：请求的API接口地址是 '/personal/xxx' ，直接进入到 './routes/personal' 这个模块执行代码
app.use('/product', require('./routes/product'));
app.use('/personal', require('./routes/personal'));
app.use('/store', require('./routes/store'));
app.use('/category', require('./routes/category'));
app.use('/discover', require('./routes/discover'));
app.use((req, res, next) => {
    res.status(404);
    res.send('NOT FOUND!');
});