class PagesController {
    welcome(req,res,next) {
        if(!req.user) return res.send('Hello Universs!');
        next()
    }
}

module.exports = PagesController