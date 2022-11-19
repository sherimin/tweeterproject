/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  //Add escape function to prevent using untrusted text
  const escape = str => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let tweet of tweets) {
      let $tweet = createTweetElement(tweet);
        $('#tweet-container').prepend($tweet);
      }
    }

  //Create an Ajax POST request
  $('#new-tweet-form').submit(function(event) {
    //prevent the default submission behaviour
    event.preventDefault();

    const maxCharacters = 140;
    const inputLength = $(this).find("#tweet-text").val().length;

    if (!inputLength) {
      return alert("No tweet content.")
    }

    if (inputLength > maxCharacters) {
      return alert("Your tweet is too long.")
    }
    const tweet = $(this).serialize();
    $.post("/tweets/", tweet);
  })

  //Receive array of tweets (JSON)
  const loadTweets = () => {
    $.ajax({
      url:"/tweets",
      method:"GET",
    })
    .then((newTweets) => {
      renderTweets(newTweets);
    })
  };


  


  const createTweetElement = tweetInput => {
    //return a tweet <article> element with entire HTML
    let $tweet = $(`<article class="tweet">

    <header class="tweet-header">
        <div class="user-profile">
          <img class="user-avatar" src="${tweetInput.user.avatars}"></img>
          <h4 class="user-name">${tweetInput.user.name}</h4>
        </div>
        <div class="user-id">
          ${tweetInput.user.handle}
        </div>
      </header>
        <div class="tweet-text">
          ${escape(tweetInput.content.text)}
        </div>
        
        <footer class="tweeter-footer">
          <span class="date"> ${timeago.format(tweetInput.created_at)} </span>
          <div class="icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>

    </article>`);

    return $tweet;
  };
  //renderTweets(data);
  loadTweets();
});




