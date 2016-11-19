
jQuery(function($){
    function loadQuote() {
        const quoteTarget = $(".quote-text");
        let quoteIndex = Math.floor((Math.random() * quoteList.length) + 1);
        let quote = quoteList[quoteIndex];
        quoteTarget.html(quote);
    }
    $(".quote-button").click(loadQuote);
    loadQuote();
})