// accessible JavaScript tab switcher
// modified from https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.addEventListener("DOMContentLoaded", function(event) {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');

  // set currently active tab to 0
  tabList.setAttribute("data-current-tab", 0);

  // Add a click event handler to each tab
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", changeTabs);
    tab.setAttribute("data-tab-count", i);
  });

  // Enable arrow navigation between tabs in the tab list
  let tabFocus = 0;

  tabList.addEventListener("keydown", e => {
    // Move right
    if (e.keyCode === 39 || e.keyCode === 37) {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.keyCode === 39) {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Move left
      } else if (e.keyCode === 37) {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });

  ///////////////////////////////////////
  // rotate images in images-rotate directory:
  var ind = getRandomInt(images_rotate.length);
  var info = images_rotate[ind];
  var img_src = "_static/images-rotate/" + info.image;
  var caption = info.caption;
  var link = "https://matplotlib.org/stable/" + info.link;
  var html = '<a href="' + link + '">' +
    '<img class="imrot-img" src="' + img_src + '" aria-labelledby="sample-plot-caption"/>' +
    '<div class="imrot-cap" id="sample-plot-caption">' + caption + '</div>' +
    '</a>';
  document.getElementById('image-rotator').innerHTML = html;

});

function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;

  // set attribute for currently active tab for setting the location of the pointer triangle
  parent.setAttribute("data-current-tab", e.target.getAttribute("data-tab-count"));

  // Remove all current selected tabs
  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach(t => t.setAttribute("aria-selected", false));

  // Set this tab as selected
  target.setAttribute("aria-selected", true);

  // Hide all tab panels
  grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach(p => p.setAttribute("hidden", true));

  // Show the selected panel
  grandparent.parentNode
    .querySelector(`#${target.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}
