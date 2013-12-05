<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>dshbrd</title>
        <meta name="description" content="dshbrd - a simple location based webapp">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        
        <link rel="stylesheet" type="text/css" href="css/tooltipster.css" />
        <link href='http://fonts.googleapis.com/css?family=Arvo:400,700' rel='stylesheet' type='text/css'>
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        
        <div id="wrapper">
        		<header>
                	<div class = "logo">
                    <h1>dshbrd</h1>
                    </div>
                    <div class = "welcomecontent">
                    <p>dshbrd is a simple location based PHP web app. dshbrd will help you find local hotspots, nearby movie times, and the local weather. Get started below!</p>
                    </div>
                    <div class = "dshbrd">
                    <form method="POST">
                    <label>Please enter a zip code or <a href="javascript:;" class="current" title="Finding Zip...">let me do that for you.</a></label>
                    <input type="text" name="zip_code" placeholder = "00000" class="zip" title="Zip code here!"/>
                    <span class="warning">5 Digits only please!</span>
                    <input type="submit" value="Let's go!" class="submit" onsubmit="getContent();" title="Enter Zip!"/>
                    </form>
                    </div>
                    <div class ="lost">
                    <a href="javascript:;" class="find">
                    Not sure of your zip code or just looking for a strange town's code?
                    </a>
                    <div class = "findme">
                    <form method="POST">
                    <label>Enter a city or town</label>
                    <input type="text" name="city" placeholder = "Townseville" class="city" title="Enter a City"/>
                    <label>Enter a state</label>
    				<input type="text" name="state" placeholder = "NY" class="state" title="Enter a State"/>
                    <input type="submit" value="Find me!" class="submit"/>
                    </form>
                    <a href="javascript:;" class="hide">Hide this section.</a>
                    <div class = "results">
                    <p>Your requested zip code is</p>
                    <p class="resultszip"></p>
                    <a href="javascript:;" class="requested">Shall we continue?</a>
                    <a href="javascript:;" class="clear">Clear fields</a>
                    </div>
                    </div>
                </header>
            <div id="content">
            	<div class="navigation">
                	<a href="javascript:;" class="showWeather"><img src="img/Cloud sun.png"/></a>
                	<a href="javascript:;" class="showMovies"><img src="img/Clapperboard.png"/></a>
                	<a href="javascript:;" class="showPlaces"><img src="img/Bowl.png"/></a>
                	<a href="javascript:;" class="showBars"><img src="img/Bar.png"/></a>                    
                </div>
            <div id="movies">
            </div>
            <div id="weather">
            </div>
            <div id="bars">
            </div>
            <div id="places">
            </div>
            <div class="help">
         		<a href="javascript:;" class="helpme">Need to search for a new zip code or find your current one?</a>
                    <div class = "findme">
                    <a href="javascript:;" class="current" title="Finding Zipcode...">Find current zip code.</a>
                    <form method="POST">
                    <label>Enter a city or town</label>
                    <input type="text" name="city" placeholder = "Townseville" class="city" title="Enter a City"/>
                    <label>Enter a state</label>
    				<input type="text" name="state" placeholder = "NY" class="state" title="Enter a Town"/>
                    <input type="submit" value="Find me!" class="submit"/>
                    </form>
                    <a href="javascript:;" class="hide">Hide this section.</a>
                    <div class = "results">
                    <p>Your requested zipcode is</p>
                    <p class="resultszip"></p>
                    <a href="javascript:;" class="requested">Shall we continue?</a>
                    <a href="javascript:;" class="clear">Clear fields</a>
                    </div>
                    </div>
             </div>
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.0.min.js"><\/script>')</script>
        <script type="text/javascript" src="js/jquery.tooltipster.min.js"></script>
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>

        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
 
        
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
