module.exports={
    async bandao(req,res){
        const response = await console.log('BANDAO')

        const obj = {
            'nome': 'Jorge',
            'message': 'BANDAO'
        }
        
        return res.send(obj).catch(err => {console.log(err)});
    }
}
