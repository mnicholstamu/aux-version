# Aggie UX Firefox and Chrome version add-on

This add-on will allow you to add in an AUX version number, @latest, or @next to any site using Aggie UX to see any new or previous Aggie UX changes. All sites using this add-on should be hosted on a `tamu.edu` domain.  

---

## Adding to Chrome
1. Clone the repository
2. Navigate to `chrome://extensions/`
3. Click `Load unpacked` and navigate to the aux-version directory and click open.
4. Check to see if the add-on is working. Navigate to `https://tamu.edu/?aux=v1.2.0`. You should see blue cta buttons if installed correctly.

## Adding to Firefox
1. Clone the repository
2. Navigate to `about:debugging#/runtime/this-firefox`
3. Click `Load Temporary Add-on…` and navigate to the aux-version directory, select the `manifest.json` flie and click open.
4. Check to see if the add-on is working. Navigate to `https://tamu.edu/?aux=v1.2.0`. You should see blue cta buttons if installed correctly.
