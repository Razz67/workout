// Login User

const loginUser = async (req, res) => {
    res.json({msg: 'Login user'})
}

//Signup User
const signupUser = async (req, res) => {
    res.json({msg:  'Sign up user'})
}

module.exports = {signupUser, loginUser} 