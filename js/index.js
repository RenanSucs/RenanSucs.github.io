var flickr = {
    render:function(){
      var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c6d969c8010a6ad38eef8fbb05107098&text=business&format=json&nojsoncallback=1&api_sig=7abb1810a840c9614cb21fefea26276b";
      var galeriaItem = document.querySelector('.galeria-item');
      $.ajax({
        url: url,
        type: "GET",
       success: function(data){
        var string = "";
        
        console.log(data.photos.id);
          
    
       },
       error: function(){
        console.log("So sorry!");
       }
      });
    }
  };
  flickr.render();

  for(var i = 0; i<data.data.results.length;i++){
    var element = data.data.results[i];
    string += "<a href='"+element.urls[0].url+"'target='_blank'>";
    string += "<div class='card-thumb-caracters'>";
    string += "<figure class='img-wrapper'>";
    string += "<img src='"+element.thumbnail.path+"/portrait_uncanny."+element.thumbnail.extension+"'/>";
    string += "</figure>";
    string += "</div>";
    string += "<div class='is-sliding-caracters'>";
    string += "<p class='card-headline'>"+element.name+"</p>";
    string += "</div>";
  }
  marvelCharacter.innerHTML = string;