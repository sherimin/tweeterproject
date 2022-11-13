//Character counter
const $ = require('jQuery');

//if user input exceeds 140 characters, the counter should appear red.
$(document).ready(function() {
    // --- our code goes here ---
    $("tweet-text").on("input", function (){
        const max = 140;
        const inputLength = $(this).val().length;
        const remainingCharacters = max - inputLength;
        const $counterElement = $(this).parent().find('.counter');

        $counterElement.text(remainingCharacters);
        remainingCharacters < 0 ? $counterElement.addClass("invalid") : $counterElement.removeClass("invalid");
    })
});