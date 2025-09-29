// Get all stylesheets
const stylesheets = document.querySelectorAll('link[href][rel="stylesheet"]');

// Find the AUX stylesheet (the one with the version pattern)
let auxStylesheet = null;
let auxCSS = null;
let getVrsion = null;

for (const stylesheet of stylesheets) {
  const href = stylesheet.href;
  const versionMatch = href.match(/\.edu\/(v\d+(?:\.\d+){1,3})(?=\/styles)/i);

  if (versionMatch) {
    auxStylesheet = stylesheet;
    auxCSS = href;
    getVrsion = versionMatch[1];
    break; // Found the AUX stylesheet, stop searching
  }
}

const getAUXParams = window.location.href;
const paramValue = new URL(getAUXParams, window.location.origin);
const val = paramValue.searchParams.get('aux');

const isValidParam = val && (
  /^v.{5}$/.test(val) ||  // Gets the version number ONLY if it's 5 characters long after the `v`
  val === '@next' || // Gets the next version
  val === '@latest' // Gets the latest version
);

if (!auxStylesheet || !getVrsion) {
  console.warn('Could not detect AUX stylesheet with version pattern');
} else if (!val) {
  console.warn('No aux parameter found in URL');
} else if (!isValidParam) {
  console.warn('Invalid aux parameter format. Must be "v" followed by 5 characters, "@next", or "@latest"');
} else {
  const newHref = auxCSS.replace(getVrsion, val);
  auxStylesheet.href = newHref;
  document.getElementById('defaultVersion').innerHTML = auxCSS;
  document.getElementById('newVersion').innerHTML = newHref;
}