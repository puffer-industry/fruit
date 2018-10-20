(function(window, document) {
    "use strict"

    function getRequestAnimationFrame() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame;
    }

    function getCancelRequestAnimFrame() {
        return window.cancelAnimationFrame ||
            window.webkitCancelRequestAnimationFrame ||
            window.mozCancelRequestAnimationFrame ||
            window.oCancelRequestAnimationFrame ||
            window.msCancelRequestAnimationFrame;
    }

    /**
     * Enture of the game
     * 
     * @param {HTMLElement} element 
     */
    function app(element) {
        this.element = element;
        this.data = new Object();
        this.requestAnimationFrame = getRequestAnimationFrame();
        this.cancelAnimationFrame = getCancelRequestAnimFrame();
    }

    app.prototype.set = function(key, value) {
        this.data[key] = value;
    };

    app.prototype.get = function(key) {
        return this.data[key];
    };

    window.App = app;
})(window, window.document);
