import { v4 as uuidv4 } from "uuid";

const cookieMiddleware = (req, res, next) => {
  let visitorId = req.cookies.visitorId;

  if (!visitorId) {
    visitorId = uuidv4();
    res.cookie("visitorId", visitorId, { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true });
    req.isNewVisitor = true;
  } else {
    req.isNewVisitor = false;
  }

  req.visitorId = visitorId;
  next();
};

export default cookieMiddleware;
