function initViz() {
  // JS object that points at empty div in the html
  var containerDiv = document.getElementById("tableauViz");
  // URL of the viz to be embedded
  url = "https://public.tableau.com/views/CustomerSegmentationAnalysis_16963810307130/CustomerSegmentationAnalysis?:language=en-US&:display_count=n&:origin=viz_share_link";
  // An object that contains options specifying how to embed the viz
  var options = {
    width: '600px',
    height: '600px',
    hideTabs: true,
    hideToolbar: true,
  };
  var viz = new tableau.Viz(containerDiv, url, options);
}
initViz();
