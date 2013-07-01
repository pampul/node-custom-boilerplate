/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
  , User = mongoose.model('User')


/**
 * Show the first page
 * @param req
 * @param res
 * @param next
 */
exports.index = function(req, res, next){

  console.log('Executing index controller ...');

  var user = new User();
  user.name = 'Florian';
  user.email = 'florian.mithieux@gmail.com';
  user.password = 'password';

  user.save(function(err){
    if(err){
      console.log('Error !!!');
    }else{
      console.log('Creating user ...');
      var options = {}
      User.find({}).exec(function(err, users){

        if(err) return res.render('500')
        console.log(users);

      })
    }
  })

  res.render('index', {});

}


/**
 * Show login form
 */
exports.login = function (req, res) {
  res.render('login', {
    title: 'Login'
  })
}

/**
 * Create user
 */
exports.create = function (req, res) {
  var user = new User(req.body)
  user.provider = 'local'
  user.save(function (err) {
    if (err) {
      return res.render('users/signup', {
        errors: utils.errors(err.errors),
        user: user,
        title: 'Sign up'
      })
    }

    // manually login the user once successfully signed up
    req.logIn(user, function(err) {
      if (err) return next(err)
      return res.redirect('/')
    })
  })
}