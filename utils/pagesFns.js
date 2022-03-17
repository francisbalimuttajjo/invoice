const sendResponse = (req, res, statusCode, msg, status) => {

  return res.status(statusCode).json({
    status: status ? status : "success",
    msg,
  });
};


export {sendResponse}