const sendResponse = (req, res, statusCode, msg, status) => {
  // res.status(200).json({ status: "success", msg: "invoice deleted" });
  return res.status(statusCode).json({
    status: status ? status : "success",
    msg,
  });
};


export {sendResponse}