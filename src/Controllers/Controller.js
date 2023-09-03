module.exports={
    async bandao(req,res){
        const response = await console.log('BANDAO')

        const obj = {
            'nome': 'edson',
            'message': 'BANDAO'
        }
        
        return res.send(obj).catch(err => {console.log(err)});
    }
}