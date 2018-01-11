axios.get('/lib/axios.js').then(function (res) {

    document.getElementById('text').innerHTML = res.data

});
