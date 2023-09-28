const listRouter = require("express").Router()
const {ListItems} = require("../model/List.model")
const {getList,postList} = require("../controller/List.controller")

// const listRouter = Router()

listRouter.get("/",getList)

listRouter.post("/post",postList)


 

module.exports = {listRouter}