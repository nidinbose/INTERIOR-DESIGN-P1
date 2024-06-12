






import { Router } from "express";
import * as request from './requestHandler.js'
import { customMiddle } from "./middleware/customMiddle.js";
// import { home } from 'requestHandler.js'
// import { userLogin } from "./requestHandler.js";
const router=Router();


router.route('/add').post(request.addcar)
router.route('/get').get(request.getcars)
router.route('/getforedit/:id').get(request.getdataforedit)
router.route('/update/:id').patch(request.updatecar)
router.route('/delete/:id').delete(request.deletecar);

router.route('/user').post(request.userRegister)
router.route('/login').post(request.userLogin)

// router.route('/middle').post(customMiddle,request.endpoint)

// router.route('/').get(home)

export default router;