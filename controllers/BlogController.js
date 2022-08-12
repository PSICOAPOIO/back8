
const { blog } = require('../routes/blogRoutes')

module.exports = class BlogController{
    static async showMeditacao(req,res){
        res.render('blog/meditacao')
    }

    static async meditacao(req,res){

        res.render('blog/meditacao',{ blog })

    }
}
