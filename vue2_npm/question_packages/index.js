(function(w) {
    createjs();
    function createjs () {
        var script01 = document.createElement('script');
        script01.src = './src/vue.min.2.5.13.js';
        script01.type = 'text/javascript';
        document.body.appendChild(script01);
        script01.onload = function() {
            var script02 = document.createElement('script');
            script02.src = './src/index.js';
            script02.type = 'text/javascript';
            document.body.appendChild(script02);
            script02.onload = function() {
                initQuestionPage()
            }
        }
    }
})(window)

