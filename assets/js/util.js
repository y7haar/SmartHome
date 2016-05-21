var BASE_URL = window.location .protocol + "//" + window.location.host + "/" + window.location.pathname.split('/')[1];


Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}