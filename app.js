
var mydata=document.getElementById('request');

var rapid = new RapidAPI("default-application_5bc84467e4b08725af2a7c1c", "231b3a75-7201-4e36-9ee0-e10afee202a5");

rapid.call('LastFm', 'getTopTracksChart', { 
	'apiKey': 'e83cd086e018ae0e1dc11c0651855d0e'

}).on('success', function (payload) {
	document.getElementById('rotating-icon').style.display="none";
  var mystring=" ";
   
//creating an array for my data.

              var myarray=[]
              for(var i=0;i < payload.tracks.track.length;i++){
                myarray.push(payload.tracks.track[i]);
               }
//looping through the array of data.
var first=1;
 myarray.forEach(element=>{
	mystring += `<p> ${first}. <img src="${element.image[1]['#text']}">
    ${element.name}.  
    <span class="glyphicon glyphicon-headphones"></span>${element.listeners} listeners.
    <a href="${element.url}"  class="btn btn-info btn-lg">  <span class="glyphicon glyphicon-play-circle"></span> Play
    </a></p><hr>`;
first++;
    
})
    mydata.insertAdjacentHTML('beforeend',mystring);

}).on('error', function (payload) {
	 console.log(`error occured`); 
});
