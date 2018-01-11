
axios({

    method: 'post',
    url: '/',
    params: {

        sort: 'date'

    },
    data: {

        iwant: 'theanwser'

    }

}).then(function (res) {

    console.log(res);

}).catch (function (e) {

    console.log(e);

});

/*
var send = function () {

axios.post('/',{iwant: text}).then(function(res){

console.log(res.data);

});

};
*/
