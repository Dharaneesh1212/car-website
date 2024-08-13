import jwt from "jsonwebtoken";

export const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ error: "No access token found" });
  }
  const decoded = jwt.verify(token, process.env.KEY);
  req.user = decoded;
  next();
};
