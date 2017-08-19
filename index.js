function gmPatch() {
    if (typeof GM_addStyle == 'undefined') {
        GM_addStyle = function(css) {
            var style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        }
    }
}

module.exports = function(content) {
    this.cacheable && this.cacheable();
    return '(' + gmPatch.toString() + ')();\n' +
        'GM_addStyle(' + JSON.stringify(content) + ')';
}
module.exports.seperable = true;
