/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
// Fake data taken from initial-tweets.json
  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]

  //Create an Ajax POST request
  $('#new-tweet-form').submit(function( event ) {
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
    $.get("/tweets/", function(newTweets) {
      renderTweets(newTweets.reverse());
    })
  };

  loadTweets();





  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let tweet of tweets) {
        let $tweet = createTweetElement(tweet);
        $('#tweet-container').append($tweet);
    }
  }
  


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
          ${tweetInput.content.text}
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



  renderTweets(data);

});




