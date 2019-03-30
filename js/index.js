var flickr = {
  render:function(){
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c6d969c8010a6ad38eef8fbb05107098&text=business&format=json&nojsoncallback=1&api_sig=7abb1810a840c9614cb21fefea26276b";
    var galeriaItem = document.querySelector('.galeria-item');
    $.ajax({
      url: url,
      type: "GET",
     success: function(data){
      var string = "";

      for(var i = 0; i<6;i++){
      var album = data.photos.photo[i];
      var urlPhotos = 'https://farm'+album.farm+'.staticflickr.com/'+album.server+'/'+album.id+'_'+album.secret+'.jpg';
      
      string += "<img src='"+urlPhotos+"'/>";
      }
      
      galeriaItem.innerHTML = string;
     },
     error: function(){
      console.log("So sorry!");
     }
    });
  }
};
flickr.render();
 