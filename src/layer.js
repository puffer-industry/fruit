(function(window, document) {
    "use strict"

    /**
     * Create a canvas layer.
     * 
     * @param {string} width canvas width
     * @param {string} height canvas height
     * @property {HTMLCanvasElement} canvas
     */
    function layer(width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        this.canvas = canvas;
    }

    layer.prototype.get = function() {
        return this.canvas;
    };

    window.Layer = layer;

})(window, window.document);
