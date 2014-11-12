PhoneGap-Build
==============

This repository is a modified copy of the www folder from incompass/MobileApp for Phonegap Build.

## Deploying an updates to Phonegap Build:
- Setup grsync
- Run the grsync task
- Update /index.html
- Commit changes and update Phonegap Build

### Setup grsync (or rsync)
Add a new session, calll it Incompasss Phonegap Build

Set the source to /path/to/incompass-angular/repository/www/

Set the destination to /path/to/incompass-phonegap/repository/

In the Advanced tab -> additional options:
--exclude-from="~/.grsync/exclude-incompass.txt"

Add these lines to the exclude-incompass.txt file
config.xml
karma-unit.js
vendor/cordova/cordova.android.js

### Run the grsync task
Make sure you have run ```grunt build``` or have been running ```grunt watch``` before you run grsync. Then open
grsync, select the Incompass Phonegap Build session then click the "make a full run (go!)" icon

### Update /index.html
Phonegap Build requires a placeholder &lt;script&gt; to be added to index.html so it knows to load in phonegap.js. The
AngularJs application does nothave this file, so grsync will update the index file without the &lt;script&gt; tag. Find
these 2 &lt;script&gt;'s

```
<script type="text/javascript" src="vendor/aws-sdk-js/dist/aws-sdk.min.js"></script>
<script type="text/javascript" src="vendor/ngCordova/dist/ng-cordova.min.js"></script>
```

And add phonegap.js between them

```
<script type="text/javascript" src="vendor/aws-sdk-js/dist/aws-sdk.min.js"></script>
<script type="text/javascript" src="phonegap.js"></script>
<script type="text/javascript" src="vendor/ngCordova/dist/ng-cordova.min.js"></script>
```

### Commit changes and update Phonegap Build
Commit the changes to the incompass-phonegap repository and push them to origin. Then open 
https://build.phonegap.com/apps and click on update code -> pull latest. This will initiate a rebuild and all 
the devices that have installed from Phonegap will be hydrated when the users next start the app.
