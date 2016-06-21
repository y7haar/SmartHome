var BASE_URL = window.location .protocol + "//" + window.location.host + "/" + window.location.pathname.split('/')[1];


Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
};

function resizeHeight() {
    var bar = $('#main-toolbar');
    var wrapper = document.getElementById("wrapper");

    var height = bar.height();

    if(height === null) {
        setInterval(resizeHeight, 300);
        return;
    }

    var expression = "calc(100% - " + bar.height() + "px)";
    wrapper.style.height = expression;
}

function getUrlParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

$(window).on("orientationchange",function(){
    resizeHeight();
});