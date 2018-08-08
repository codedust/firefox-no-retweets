if (document.querySelector('.global-nav-home-no-rt') == null) {
  // create alternative home button ("no RT")
  var li = document.createElement('li');
  li.classList = 'global-nav-home-no-rt';
  var a = document.createElement('a');
  a.role = "botton";
  a.href = "#";
  a.setAttribute('data-placement', 'bottom');
  var span1 = document.createElement('span');
  span1.classList = "Icon Icon--home Icon--large";
  var span2 = document.createElement('span');
  span2.classList = "text";
  span2.innerText = "no RTs";
  a.append(span1);
  a.append(span2);
  li.append(a);

  // add click event listener to alternative home button
  a.addEventListener('click', function() {
    document.querySelector('#global-nav-home a').click();
    var styleElem = document.createElement('style');
    styleElem.classList = "style-no-rt";
    styleElem.innerHTML='#timeline .tweet[data-you-follow=false]:not(.my-tweet) { display: none; }';
    document.body.appendChild(styleElem);
  });

  // add click event listener to original home button to remove no-rt css again
  document.querySelector('#global-nav-home a').addEventListener('click', function() {
    document.querySelectorAll('.style-no-rt').forEach(style => style.remove());
  });

  // add alternative home button to navigation
  document.getElementById('global-nav-home').parentNode.insertBefore(li, document.getElementById('global-nav-home').nextSibling);
}
