const express = require('express');
const router2 = express.Router();
const userController = require("../controllers/user-controller");

router2.get("/",userController.getUsers)
router2.post("/login1",userController.validate)

router2.get("/pay/:data",userController.display)

router2.get("/order/:data",userController.displayorder)

router2.post("/deleteorder",userController.deleteorder)

router2.post("/deletecart",userController.deletecart)
// router2.post("/home",userController.cart)
router2.post("/checkout",userController.checkout)
router2.post("/pac",userController.additem)
router2.get("/:userId",userController.getitem)
router2.post("/view1",userController.delitem)
router2.post("/fpassword",userController.emailSend)
router2.post("/fpassword/otp",userController.changePassword)
router2.post("/",userController.addUsers)

module.exports=router2