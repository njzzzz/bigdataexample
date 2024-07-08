// init-mongo.js

db = db.getSiblingDB('低代码大屏') // 切换到数据库 'a'
db.createCollection('dummy') // 创建一个集合，确保数据库存
