// import jwt  from "jsonwebtoken";

// const jwtAuth = (req,res,next)=>{

// const token = req.header['authorization'];
// console.log(token);
// if(!token){
//     return res.status(400).send("invalid user");
// }
// try{
//     jwt.verify(token,"Mytwitter");
// }

// catch{
//     return res.status(400).send('unauthorized');
// }
// next()
// }
// export default jwtAuth;
import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
    // console.log(req.cookies);
  const {token} = req.cookies;
  if (!token) {
    return res.status(400).send("Invalid user");
  }
  try {
    jwt.verify(token, "Mytwitter");
  } catch {
    return res.status(400).send('Unauthorized');
  }

  next();
};

export default jwtAuth;
