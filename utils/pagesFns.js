const sendResponse = (req, res, statusCode, data, status) => {

  return res.status(statusCode).json({
    status: status ? status : "success",
    data,
  });
};


export {sendResponse}