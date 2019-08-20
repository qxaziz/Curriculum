var alphaNumber = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

var idLength = 8;

exports.generate = function(x){
    var id = '';
    for (var i = 0; i < x; i++){
        id += alphaNumber.charAt(Math.floor(Math.random() * alphaNumber.length))
    }
    return id;
}