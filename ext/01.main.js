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
gameApp.config.bodyClasses = ['gam-body-scoreboard'];

gameApp.components = {};

gameApp.text = {
    gamification_go_to_scoreboard : "Go to Scoreboard",
    gamification_see_details : "See details",
    gamification_score_label : "Diamonds",
    gamification_scoreboard_title: "My Scoreboard",
    gamification_active_learning_kit : "Active Learning Kit",
    gamification_units: "Units",
    gamification_activities: "Activities",
    gamification_completed: "completed",
    gamification_close: "Close"
}

gameApp.courseData = '';


gameApp.config.tree = {
    0 : {
      'id' : 'scoreboard',
      'hash' : 'scoreboard',
      'class' : gameApp.config.bodyClasses[0],
      'page' : 'gam-page--scoreboard'
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


gameApp.removeUnusedClass = function(currentClass) {

    var possibleClasses = gameApp.config.bodyClasses.slice(0),
    index = possibleClasses.indexOf(currentClass);
  
    possibleClasses.splice(index, 1);
  
    var $body = $('body');
    $.each(possibleClasses, function(i, v){
      $body.removeClass(v);
    });
  
}

gameApp.closePage = function(treeIndex) {

    var bodyClass = gameApp.config.bodyClasses[treeIndex];
    $('body').removeClass(bodyClass);

    setTimeout(function() {
        var page = $(gameApp.config.tree[treeIndex].page);
        page.remove();
    }, 10)

    history.pushState("", document.title, window.location.pathname + window.location.search);
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

gameApp.loadByHash = function(currentHash) {

  if ($('body').hasClass('edit')) return;

  var currentHash = currentHash.replace('#',''),
  updateHash = false;

  gameApp.hashDistributor(currentHash, updateHash);

}

gameApp.onChangeHash = function() {

  if ($('body').hasClass('edit')) return;

  var currentHash = window.location.hash.replace('#',''),
  updateHash = false;

  gameApp.hashDistributor(currentHash, updateHash);

}

window.addEventListener("hashchange", gameApp.onChangeHash, false);



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

gameApp.initScoreboard = function() {

    if ($('body').hasClass('edit')) return;

    var hash = gameApp.config.tree[0].hash;
    var currentHash = window.location.hash;
    currentHash = currentHash.replace('#','');
    
    if (currentHash !== '' && currentHash === hash) {
        gameApp.loadByHash(currentHash);
        var bodyClass = gameApp.config.bodyClasses[0];
        $('body').addClass(bodyClass);
        gameApp.removeUnusedClass(bodyClass);
    }
}

gameApp.loadScoreboard = function() {

    if ($('.gam-page--scoreboard').length) {
        $('.gam-page--scoreboard').remove();
    }

    var skeleton = '<section class="gam-page gam-page--scoreboard"></section>';
    
    $('body').append(skeleton);


    // Header
    var totalScore = 2000;
    var score = '<div class="gam-score"><span class="gam-score__label">'+gameApp.text.gamification_score_label+'</span><span class="gam-score__total">'+totalScore+'</span></div>';
    var unitsCompleted = 8;
    var unitsTotal = 12;
    var activitiesCompleted = 170;
    var activitiesTotal = 200;
    var learningKitUnits = '<div class="gam-learning-kit__section"><h3 class="gam-learning-kit__title">'+gameApp.text.gamification_units+'</h3><div class="gam-learning-kit__score">'+unitsCompleted+'/'+unitsTotal+'</div><div class="gam-learning-kit__label">'+gameApp.text.gamification_completed+'</div></div>';
    var learningKitActivities = '<div class="gam-learning-kit__section"><h3 class="gam-learning-kit__title">'+gameApp.text.gamification_activities+'</h3><div class="gam-learning-kit__score">'+activitiesCompleted+'/'+activitiesTotal+'</div><div class="gam-learning-kit__label">'+gameApp.text.gamification_completed+'</div></div>';

    var learningKit = '<div class="gam-learning-kit"><h2 class="gam-title--3">'+gameApp.text.gamification_active_learning_kit+'</h2><div class="gam-learning-kit__results">'+learningKitUnits+learningKitActivities+'</div></div>';

    var topheader = '<div class="gam-page__header__top"><h1 class="gam-title">'+gameApp.text.gamification_scoreboard_title+'</h1><button class="gam-button" onclick="gameApp.closePage(0);">'+gameApp.text.gamification_close+'</button></div>';
    var bottomheader = '<div class="gam-page__header__bottom">'+score+learningKit+'</div>';
    var header = '<header class="gam-page__header"><div class="gam-page__header__inner">'+topheader+bottomheader+'</div></header>';

    $('.gam-page--scoreboard').append(header);


   
    var bodyClass = gameApp.config.bodyClasses[0];
    $('body').addClass(bodyClass);
    gameApp.removeUnusedClass(bodyClass);


    console.log("Scoreboard loaded");


}

  

jQuery(function() { 

    gameApp.getCourseData();

    console.log("Testing");


    var ishtmlBook = $('body').hasClass('body_htmlBook');

    if (ishtmlBook) {
        gameApp.initBook();
    }

    gameApp.initScoreboard();


    $('body').on('click', '.gam-js-goToScoreboard', function(e) {
        e.preventDefault();
        window.location.hash = gameApp.config.tree[0].hash;
    });

});
