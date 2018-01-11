var send = function () {

    axios.post('/',{iwant: text}).then(function(res){

        console.log(res.data);

    });

};