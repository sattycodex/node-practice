exports.successResponse = (res, data,message='success') => {
  res.status(200).json({
    success: true,
    data: data,
    message: message
  });
}

exports.errorResponse = (res, error) => {
  res.status(500).json({
    success: false,
    error: error.message || 'Internal Server Error',
  });
}