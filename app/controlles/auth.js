const { httpError } = require('../helpers/handleError')
const { tokenSign } = require('../helpers/generateToken')

//TODO: Login!
const loginCtrl = async(req, res) => {
    try {

        const mockUser = {
            name: 'Felipe Aravena',
            email: 'escalab@test.com',
            password: '12345678',
            avatar: 'https://i.imgur.com/a/dpvI0xl'
        }

        const { email, password } = req.body


        if (mockUser.email !== 'escalab@test.com') {
            res.status(404)
            res.send({ error: 'User not found' })
        }

        const checkPassword = (mockUser.password === password)

        const tokenSession = await tokenSign(mockUser)

        if (checkPassword) { //TODO Contraseña es correcta!
            res.send({
                data: mockUser,
                tokenSession
            })
            return
        }

        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return
        }

    } catch (e) {
        httpError(res, e)
    }
}





module.exports = { loginCtrl }