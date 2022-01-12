/**
* loadJSON Ejecuta una llamada asíncrona dependiendo del entorno para obtener el cursoJSON
* @param  	function 	callback 	Función de callback del ajax.
* @return 	boolean		False en caso de que no haya callback.
*/
function loadJSON(callback) {
	if (editar || !callback && typeof callback === 'undefined') {
		return false;
	}

	blink.clearCourseJSONCached(window.idcurso);

	// Protection against a non defined promise.
	var coursePromise = blink.getCourse(window.idcurso);
	coursePromise && typeof coursePromise.done === 'function' && coursePromise.done(callback);
}


// ████░██▄░▄██░████░████░████▄░██▄░██░░▄███▄░░██░░
// ██▄░░░▀███▀░░░██░░██▄░░██░██░███▄██░██▀░▀██░██░░
// ██▀░░░▄███▄░░░██░░██▀░░████▀░██▀███░███████░██░░
// ████░██▀░▀██░░██░░████░██░██░██░░██░██░░░██░████


var gameApp = window.gameApp || {};

gameApp.config = {};
gameApp.config.isDEV = (ENTORNO === 'DEV');
gameApp.config.hasConnection = true;
gameApp.config.isStudent = false;
gameApp.config.isAnonymous = true;

gameApp.components = {};

gameApp.text = {
    gamification_go_to_scoreboard : "Go to Scoreboard",
    gamification_see_details : "See details",
    gamification_score_label : "Diamonds"
}

gameApp.courseData = '';


gameApp.config.tree = {
    0 : {
      'id' : 'scoreboard',
      'hash' : 'scoreboard',
      'class' : 'gam-body-scoreboard'
    }
}

// Start with polyfill
gameApp.startsWith = function(string1,string2) {

    if (!String.prototype.startsWith) {
      String.prototype.startsWith = function(string2, position) {
        position = position || 0;
        return string1.indexOf(searchString, position) === position;
      }
    } else {
      return string1.startsWith(string2)
    }
}

//----------------------------------//
//                                  //
//  Hash Navigation                 //
//                                  //
//----------------------------------//


var hashDistributorTimeout;
gameApp.hashDistributor = function(currentHash,updateHash) {

    clearTimeout(hashDistributorTimeout);

    var timeToWait = 200;

    if (currentHash.startsWith(gameApp.config.tree[0].hash)) { //Scoreboard

        var tab = currentHash.replace(gameApp.config.tree[0].hash, '');
        hashDistributorTimeout = setTimeout(function() {gameApp.loadScoreboard(tab,updateHash)}, timeToWait);

    }  
}

gameApp.updateHash = function(currentHash) {
  window.location.hash = currentHash;
}

gameApp.loadByHash = function(currentHash,data) {

  if ($('body').hasClass('edit')) return;

  var currentHash = currentHash.replace('#',''),
  updateHash = false;

  gameApp.hashDistributor(currentHash, data, updateHash);

}

gameApp.onChangeHash = function() {

  if ($('body').hasClass('edit')) return;

  var currentHash = window.location.hash.replace('#',''),
  data = gameApp.bookData,
  updateHash = false;

  gameApp.hashDistributor(currentHash, data, updateHash);

}

window.addEventListener("hashchange", gameApp.onChangeHash, false);



gameApp.getCourseData = function() {

    if ($('body').hasClass('edit')) return;
  
    // Detect connection in apps
    if (!blink.isApp || (blink.isApp && blink.appVersion >= 4.1)) {
      blink.rest.connection(function(connection) {
        gameApp.config.hasConnection = connection;
      });
    }
  
    loadJSON(function(json) {
        gameApp.courseData = json;

        gameApp.config.isStudent = !blink.user.esAdmin() && !blink.user.esEditor() && !blink.user.esEditorial() && !blink.user.esProfesor() && !blink.user.esSAdmin();
        gameApp.config.isAnonymous = !blink.user.esAdmin() && !blink.user.esEditor() && !blink.user.esEditorial() && !blink.user.esProfesor() && !blink.user.esSAdmin() && !blink.user.esAlumno() && !blink.user.esPadre();

        console.log(gameApp.courseData);
    });
}

// Components

gameApp.components.ButtonTooltipScoreboard = function() {
    var button = '<button class="gam-button gam-button--icon --icon--price"><span class="gam-button__text">'+gameApp.text.gamification_go_to_scoreboard+'</span></button>';
    
    var totalScore = 2000;
    var score = '<div class="gam-score"><span class="gam-score__label">'+gameApp.text.gamification_score_label+'</span><span class="gam-score__total">'+totalScore+'</span></div>';
    var buttonScoreboard = '<button class="gam-button gam-js-goToScoreboard"><span class="gam-button__text">'+gameApp.text.gamification_see_details+'</span></button>';
    var scoreboardSummary = '<div class="gam-scoreboard-summary">'+score+buttonScoreboard+'</div>';
    
    var tooltip = '<div class="gam-tooltip">'+scoreboardSummary+'</div>';

    var component = '<div class="gam-tooltip-wrapper">'+button+tooltip+'</div>';

    return component;
}


//Initializers

gameApp.initBook = function() {

    var buttonTooltip = gameApp.components.ButtonTooltipScoreboard();

    var navbar = $('.navbar');

    navbar.prepend(buttonTooltip);

}

gameApp.loadScoreboard = function() {

    var skeleton = '<div class="gam-page gam-page--scoreboard">SCOREBOARD</div>';

    $('body').append(skeleton);

}

  

jQuery(function() { 

    gameApp.getCourseData();

    console.log("Testing");


    var ishtmlBook = $('body').hasClass('body_htmlBook');

    if (ishtmlBook) {
        gameApp.initBook();
    }

    $('body').on('click', '.gam-js-goToScoreboard', function(e) {
        e.preventDefault();
        window.location.hash = gameApp.config.tree[0].hash;
    });

});
