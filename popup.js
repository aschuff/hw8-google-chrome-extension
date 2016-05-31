
function replaceImages(images) {
var images = document.querySelectorAll('img');
  images = Array.from(images)
  console.log(`It's a TEDDY!`);
  images.forEach(function(element,idx,arr) {
    element.src = "https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/12400764_10208618771693309_7781518688465488111_n.jpg?oh=14207a0767cf92033e9843d4d9260613&oe=57D32731"
  })
}
replaceImages();
