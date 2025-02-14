const asyncHandler = (userFN) => async (err, req, res, next) => {
  try {
    await userFN(err, req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
export { asyncHandler };

// const asyncHandler = (requestHandler) => {
//   (err, req, res, next) => {
//     Promise.resolve(requestHandler(err, req, res, next)).catch((err) =>
//       next(err)
//     );
//   };
// };
