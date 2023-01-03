if(process.env.NODE_ENV === 'production')
{
	module.exports = require('./prod');
}
else
{
	module.exports = require('./dev');module.exports ={
    mongoURI:'mongodb+srv://Jun:zxc123@junprojcet.kzx4jm1.mongodb.net/?retryWrites=true&w=majority'
    }
}