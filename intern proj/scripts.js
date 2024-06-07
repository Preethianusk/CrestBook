function showFeature(feature) {
  var contents = document.getElementsByClassName('feature-content');
  for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
  }
  document.getElementById(feature).style.display = 'block';
}
