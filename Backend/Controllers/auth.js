
const User = require('../Models/user.js')
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken');
const { createError } = require('../utils/error.js');


const register =  async (req, res, next) => {
       try {
           const { username, email, password } = req.body;
           const existingUser = await User.findOne({ email });
           if (existingUser) {
                   if(existingUser.isBlocked == true){
                         return next(createError(401,'User Blocked'))
                   }
                   else{
                     const checkPassword = await bcrypt.compare(password,existingUser.password)
                     if(checkPassword){
                            const tocken  = jwt.sign({id:existingUser._id,isAdmin:existingUser.isAdmin},process.env.JWT_SECRET_KEY)
                            const {password,isAdmin,...otherDetails} = existingUser._doc
                            res.cookie('access_tocken',tocken,{
                                   httpOnly:true,
                                   path:'/'
                                   }
                                   ).status(200).json({...otherDetails});
                     }
                     else{
                            return next(createError(401,'Invalid Credentials'))
                      }
                     }

           }
           else{
              const hashedPassword = await bcrypt.hash(password,10)    
              const newUser = {
                username: username, 
                email: email,
                password: hashedPassword,   
                 };
                 
               const user = await User.create(newUser)
               const tocken  = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET_KEY)
                                const {password:userPassword,isAdmin,...otherDetails} = user._doc
                                res.cookie('access_tocken',tocken,{
                                       httpOnly:true,
                                       path:'/'
                                       }
                                       ).status(200).json({...otherDetails});
           }

         

       } catch (error) {
              next(createError(401,"User registration failed"))
       }
   };
   
   



module.exports ={
       register,
       
}