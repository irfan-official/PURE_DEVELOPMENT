class ApiError extends Error {
  constructor(
    statsusCode,
    message = "Something went wrong",
    error = [],
    statck
  ) {}
}
