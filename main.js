var images = ["https://postimg.cc/qNNx00QH","https://postimg.cc/0bQB6TZc", "https://postimg.cc/PCvVy1gD" , "https://postimg.cc/NKXbmBX7", "https://postimg.cc/JssvFfkG"];
var names = ["Family Book","Late Ramashish Sinha", "Ram Dulari devi", "Nayan Kumar", "Naitik Sinha", "Punam Kumari"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = i+1;
      }
    
    
    var updatedImage = [images[i]];
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
