<script>
	  
$(document).ready(function() {
  function getQuote() {
  
    var quotes = ["No act of kindness, no matter how small, is ever wasted."
, "Whether one believes in a religion or not, and whether one believes in rebirth or not, there isn't anyone who doesn't appreciate kindness and compassion", "Love yourself. It is important to stay positive because beauty comes from the inside out.", "Learn to enjoy every minute of your life. Be happy now. Don't wait for something outside of yourself to make you happy in the future. Think how really precious is the time you have to spend, whether it's at work or with your family. Every minute should be enjoyed and savored.", "Peace is the beauty of life. It is sunshine. It is the smile of a child, the love of a mother, the joy of a father, the togetherness of a family. It is the advancement of man, the victory of a just cause, the triumph of truth.", "Slow down and enjoy life. It's not only the scenery you miss by going to fast - you also miss the sense of where you are going and why.", "If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them."];
    var author = [" ~Amelia Barr", " ~Anonymous", " ~Vincent Van Gogh", " ~Earl Nightingale", " ~Menachem Begin", " ~Eddie Cantor", " ~Bruce Lee",];
    
    var randomNum = Math.floor((Math.random()*quotes.length));
  
  var randomQuote = quotes[randomNum];
  var randomAuthor = author[randomNum];

    
    $(".quote").text(randomQuote);
    $(".authur").text(randomAuthor);
  }
    
    $(".btn").on("click", function(){
      
      getQuote();
    });
    
    
  });
</script>