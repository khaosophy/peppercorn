const User = require('../models/User');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../middleware/error');

const sendTokenResponse = (user, status, res) => {
  // function to get token from model, create cookie, and send response
  const token = user.getSignedToken();
  
  const options = {
    expires: new Date(Date.now() + (process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000)),
    httpOnly: true,
  };

  if(process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(status)
    .cookie('token', token, options)
    .json({ success: true, token });
}

// @desc      register new user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  // create user
  const user = await User.create({
    name,
    email,
    password,
  });

  sendTokenResponse(user, 200, res);
});

// @desc      log in user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // validate email and password
  if(!email || !password) {
    return next(new ErrorResponse('Please enter both an email and a password', 400));
  }

  // does user exist?
  const user = await User.findOne({ email }).select('+password');
  if(!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // is password valid?
  const isMatch = await user.matchPassword(password);
  if(!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(user, 200, res);
});

// @desc      Get current logged in user
// @route     POST /api/v1/auth/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user =  await User.findById(req.user);
  res.status(200).json({
    success: true,
    data: user,
  })
})