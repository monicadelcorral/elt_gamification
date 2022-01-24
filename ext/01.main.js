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
gameApp.config.animationsDuration = 250;
gameApp.config.bodyClasses = ['gam-body-scoreboard'];

gameApp.config.tags = {
    gamification_unit: "gamification_unit",
    gamification_bonus : "gamification_bonus"
}

gameApp.text = {
    gamification_go_to_scoreboard : "Go to Scoreboard",
    gamification_see_details : "See details",
    gamification_score_label : "Diamonds",
    gamification_scoreboard_title: "My Scoreboard",
    gamification_active_learning_kit : "Active Learning Kit",
    gamification_units: "Units",
    gamification_activities: "Activities",
    gamification_completed: "completed",
    gamification_close: "Close",
    gamification_score_brilliant : "Brilliant!",
    gamification_score_brilliant_subtitle : "Top score!",
    gamification_score_great : "Great!",
    gamification_score_great_subtitle : "Try again for a higher score.",
    gamification_score_well_done : "Well done!",
    gamification_score_well_done_subtitle : "Try again for a higher score.",
    gamification_score_not_bad : "Not bad!",
    gamification_score_not_bad_subtitle : "Try again.",
    gamification_score_fail : "Oh no!",
    gamification_score_fail_subtitle : "Try again.",
    gamification_continue : "Continue",
    gamification_try_again : "Try again",
    gamification_ok: "Ok",
    gamification_start_activity : "Go to activity",
    gamification_bonus_locked : "<span>Bonus activity</span> locked!",
    gamification_bonus_unlocked : "<span>Bonus activity</span> unlocked!",
    gamification_bonus_locked_subtitle : "Oops! Complete all the activities on this page to unlock the Bonus activity.",
    gamification_bonus_unlocked_subtitle : "Win 25 bonus diamonds!",

}

gameApp.config.tokens = [
    {
        total: 5,
        intervals: [
            {
                minPercent: 0,
                maxPercent: 24,
                given: 1,
                title: gameApp.text.gamification_score_fail,
                subtitle: gameApp.text.gamification_score_fail_subtitle,
            },
            {
                minPercent: 25,
                maxPercent: 49,
                given: 2,
                title: gameApp.text.gamification_score_not_bad,
                subtitle: gameApp.text.gamification_score_not_bad_subtitle,
            },
            {
                minPercent: 50,
                maxPercent: 69,
                given: 3,
                title: gameApp.text.gamification_score_well_done,
                subtitle: gameApp.text.gamification_score_well_done_subtitle,
            },
            {
                minPercent: 70,
                maxPercent: 99,
                given: 4,
                title: gameApp.text.gamification_score_greate,
                subtitle: gameApp.text.gamification_score_great_subtitle,
            },
            {
                minPercent: 100,
                maxPercent: 100,
                given: 5,
                title: gameApp.text.gamification_score_brilliant,
                subtitle: gameApp.text.gamification_score_brilliant_subtitle,
            }
        ]
    },
    {
        total: 10,
        intervals: [
            {
                minPercent: 0,
                maxPercent: 24,
                given: 2,
                title: gameApp.text.gamification_score_fail,
                subtitle: gameApp.text.gamification_score_fail_subtitle,
            },
            {
                minPercent: 25,
                maxPercent: 49,
                given: 4,
                title: gameApp.text.gamification_score_not_bad,
                subtitle: gameApp.text.gamification_score_not_bad_subtitle,
            },
            {
                minPercent: 50,
                maxPercent: 69,
                given: 6,
                title: gameApp.text.gamification_score_well_done,
                subtitle: gameApp.text.gamification_score_well_done_subtitle,
            },
            {
                minPercent: 70,
                maxPercent: 99,
                given: 8,
                title: gameApp.text.gamification_score_greate,
                subtitle: gameApp.text.gamification_score_great_subtitle,
            },
            {
                minPercent: 100,
                maxPercent: 100,
                given: 10,
                title: gameApp.text.gamification_score_brilliant,
                subtitle: gameApp.text.gamification_score_brilliant_subtitle,
            }
        ]
    },
    {
        total: 15,
        intervals: [
            {
                minPercent: 0,
                maxPercent: 24,
                given: 3,
                title: gameApp.text.gamification_score_fail,
                subtitle: gameApp.text.gamification_score_fail_subtitle,
            },
            {
                minPercent: 25,
                maxPercent: 49,
                given: 6,
                title: gameApp.text.gamification_score_not_bad,
                subtitle: gameApp.text.gamification_score_not_bad_subtitle,
            },
            {
                minPercent: 50,
                maxPercent: 69,
                given: 9,
                title: gameApp.text.gamification_score_well_done,
                subtitle: gameApp.text.gamification_score_well_done_subtitle,
            },
            {
                minPercent: 70,
                maxPercent: 99,
                given: 12,
                title: gameApp.text.gamification_score_great,
                subtitle: gameApp.text.gamification_score_great_subtitle,
            },
            {
                minPercent: 100,
                maxPercent: 100,
                given: 15,
                title: gameApp.text.gamification_score_brilliant,
                subtitle: gameApp.text.gamification_score_brilliant_subtitle,
            }
        ]
    },
    {
        total: 25,
        intervals: [
            {
                minPercent: 0,
                maxPercent: 24,
                given: 5,
                title: gameApp.text.gamification_score_fail,
                subtitle: gameApp.text.gamification_score_fail_subtitle,
            },
            {
                minPercent: 25,
                maxPercent: 49,
                given: 10,
                title: gameApp.text.gamification_score_not_bad,
                subtitle: gameApp.text.gamification_score_not_bad_subtitle,
            },
            {
                minPercent: 50,
                maxPercent: 69,
                given: 15,
                title: gameApp.text.gamification_score_well_done,
                subtitle: gameApp.text.gamification_score_well_done_subtitle,
            },
            {
                minPercent: 70,
                maxPercent: 99,
                given: 20,
                title: gameApp.text.gamification_score_greate,
                subtitle: gameApp.text.gamification_score_great_subtitle,
            },
            {
                minPercent: 100,
                maxPercent: 100,
                given: 25,
                title: gameApp.text.gamification_score_brilliant,
                subtitle: gameApp.text.gamification_score_brilliant_subtitle,
            }
        ]
    }
]

gameApp.components = {};

gameApp.courseData = '';


gameApp.config.tree = {
    0 : {
      'id' : 'scoreboard',
      'hash' : 'scoreboard',
      'class' : gameApp.config.bodyClasses[0],
      'page' : 'gam-page--scoreboard'
    }
}

//----------------------------------//
//                                  //
//  UTILS                           //
//                                  //
//----------------------------------//

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



gameApp.getCourseData = function(initial) {

    if ($('body').hasClass('edit')) return;

    var initApp = typeof initial !== 'undefined' ? initial : false;

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
        
        gameApp.config.isStudent = !blink.user.esAdmin() && !blink.user.esEditor() && !blink.user.esEditorial() && !blink.user.esProfesor() && !blink.user.esSAdmin();
        gameApp.config.isAnonymous = !blink.user.esAdmin() && !blink.user.esEditor() && !blink.user.esEditorial() && !blink.user.esProfesor() && !blink.user.esSAdmin() && !blink.user.esAlumno() && !blink.user.esPadre();
    
        if (initApp) {
            gameApp.initApp();
        }
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

gameApp.openTooltip = function(event, tooltip) {
    event = event || window.event;
    var trigger = event.target || event.srcElement;
    var left = $(trigger).offset().left - 60;

    $(tooltip).css({'left': left}).addClass('--visible');
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

gameApp.detectGamificationActivities = function() {
    var data = gameApp.courseData;

    var gamificationActivities = data.units.filter(function(unit) {
      var tags = typeof unit.tags !== "undefined" ? unit.tags.split(" ") : [];
      return tags.indexOf(gameApp.config.tags.gamification_unit.toLowerCase()) > -1;
    });
  
    return gamificationActivities;
}

gameApp.detectGamificationActivity = function(id) {

    var data = gameApp.courseData;
    var units = data.units;

    var unit = units.filter(function(item) {
        return item.id == id;
    });

    if (!unit.length) return false;

    var tags = typeof unit[0].tags !== "undefined" ? unit[0].tags.split(" ") : [];
    var isGamificationActivity = tags.indexOf(gameApp.config.tags.gamification_unit) > -1;

    return isGamificationActivity;
}

gameApp.tokenActivity = function(id) {

    var data = gameApp.courseData;
    var unit = _.findWhere(data.units, {id: window.idtema.toString()});
    var subunitIx = _.findIndex(unit.subunits, {id: window.idclase.toString()});

    var subunit = unit.subunits[subunitIx];

    if (!subunit) return false;

    var token = typeof subunit.game_token !== "undefined" ? subunit.game_token : 0;

    return token;
}

gameApp.getGrade = function() {
    
    var grade = (typeof window.actividades[window.idclase] === 'undefined') ? 0 : window.actividades[window.idclase].clasificacion;
    return grade;
}

gameApp.detectBonusActivity = function() {

    var data = gameApp.courseData;
    var unit = _.findWhere(data.units, {id: window.idtema.toString()});
    var subunit = _.findWhere(unit.subunits, {id: window.idclase.toString()});
    
    if (!subunit) return false;

    var tags = typeof subunit.tags !== "undefined" ? subunit.tags.split(" ") : [];

    var isBonusGamificationActivity = tags.indexOf(gameApp.config.tags.gamification_bonus) > -1;

    return isBonusGamificationActivity;
}

gameApp.detectBonusLockStatus = function() { //TODO
    
    var data = gameApp.courseData;
    var unit = _.findWhere(data.units, {id: window.idtema.toString()});
    var subunit = _.findWhere(unit.subunits, {id: window.idclase.toString()});
    
    var regularActivities = unit.subunits.filter(function(subunit) {
        var tags = typeof subunit.tags !== "undefined" ? subunit.tags.split(" ") : [];
        var tokens = typeof subunit.game_token !== "undefined" ? subunit.game_token : false;
        return tags.indexOf(gameApp.config.tags.gamification_bonus) < 0 && tokens;
    });


    var unitActivitiesId = _.pluck(regularActivities, 'id');
    console.log(unitActivitiesId);
    var activitiesDone = typeof window.actividades !== "undefined" ? window.actividades : [];
    var activitiesDoneId = _.pluck(activitiesDone, 'id');

    var isUnlocked = _.isEqual(unitActivitiesId.sort(), activitiesDoneId.sort());
    console.log(isUnlocked);
    
    return !isUnlocked;

}


gameApp.getSeguimientoCurso = function() { //TODO: REVIEW
    var urlSeguimiento = '/include/javascript/seguimientoCurso.js.php?idcurso=' + idcurso;

    loadScript(urlSeguimiento, true, (function(data) {
    console.log(data);
    
    }).bind(this));
}

gameApp.openModal = function(modal, id, extraClassBody) {
   $('body').append(modal);
   $('body').addClass('gam-body--modal');
   $('body').addClass(extraClassBody);
    
   console.log(modal);

   setTimeout(function() {
       $('#'+id).addClass('--open');
   }, gameApp.config.animationsDuration);
}

gameApp.closeModal = function(idModal, extraClassBody) {
    $('#'+idModal).removeClass('--open');

    setTimeout(function() {
        $('#'+idModal).remove();
        $('body').removeClass('gam-body--modal');
        $('body').removeClass(extraClassBody);
    }, gameApp.config.animationsDuration);


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


//----------------------------------//
//                                  //
//  Components                      //
//                                  //
//----------------------------------//

gameApp.components.Button = function(icon, text, onclick, extraClasses) {
    var iconClass = (icon) ? 'gam-button--icon --icon--'+icon : '';
    var extraClasses = (extraClasses) ? extraClasses : '';

    var button = '<button class="gam-button '+iconClass+' '+extraClasses+'" onclick="'+onclick+'"><span class="gam-button__text">'+text+'</span></button>';
    
    var component = button;

    return component;
}

gameApp.components.ButtonScoreboard = function() {
    var button = '<button class="gam-button gam-button--icon --icon--price" onclick="gameApp.openTooltip(event, \'#gam-tooltip-scoreboard\');"><span class="gam-button__text">'+gameApp.text.gamification_go_to_scoreboard+'</span></button>';
    
    var component = button;

    return component;
}

gameApp.components.TooltipScoreboard = function() {
    
    var totalScore = 2000;
    var score = '<div class="gam-score"><span class="gam-score__label">'+gameApp.text.gamification_score_label+'</span><span class="gam-score__total">'+totalScore+'</span></div>';
    var buttonScoreboard = gameApp.components.Button(false, gameApp.text.gamification_see_details, false, 'gam-js-goToScoreboard');
    
    var scoreboardSummary = '<div class="gam-scoreboard-summary">'+score+buttonScoreboard+'</div>';
    
    var tooltip = '<div class="gam-tooltip" id="gam-tooltip-scoreboard"><div class="gam-tooltip__inner">'+scoreboardSummary+'</div></div>';

    var component = tooltip;

    return component;
}

gameApp.components.TokensBadge = function(tokens) {
    
    var badge = '<div class="gam-score-badge"><div class="gam-score-badge__inner">'+tokens+'</div></div>';
    var component = badge;
    
    return component;
}

gameApp.components.Modal = function(id, header, body, footer, extraClasses) {

    var component = '<div class="gam-modal '+extraClasses+'" id="'+id+'"><div class="gam-modal__inner"><div class="gam-modal__header">'+header+'</div><div class="gam-modal__body">'+body+'</div><div class="gam-modal__footer">'+footer+'</div></div></div>';
    return component;
}

//----------------------------------//
//                                  //
//  Gamification Modals             //
//                                  //
//----------------------------------//


gameApp.createModalScore = function(tokens, percent) {

    var tokenInfo = gameApp.config.tokens.filter(function(range) {
        return range.total === tokens;
    });

    var result = tokenInfo[0].intervals.filter(function(interval) {
        return interval.minPercent <= percent && interval.maxPercent >= percent;
    });

    var title = result[0].title;
    var subtitle = result[0].subtitle;
    var given = result[0].given;


    var suffix = window.idtema;
    var id = 'gam-modal-score-'+suffix;
    var header = '<h1 class="gam-title">'+title+'</h1>';
    var prize = '<div class="gam-prize">'+gameApp.text.gamification_score_label+'<span>'+given+'</span></div>';
    var message = '<div class="gam-subtitle">'+subtitle+'</div>';
    var body = prize+message;
    var detectIfBonusIsOpen = true; //TODO

    var buttonRepeat = gameApp.components.Button(false, gameApp.text.gamification_try_again, "gameApp.closeModal('"+id+"')", false);
    var buttonContinueNotBonus = gameApp.components.Button(false, gameApp.text.gamification_continue, 'cerrarIframe()', false);
    var buttonContinueBonus = gameApp.components.Button(false, gameApp.text.gamification_continue, "gameApp.closeModal('"+id+"'); gameApp.createModalBonus()", false);

    var buttonContinue = (detectIfBonusIsOpen) ? buttonContinueBonus : buttonContinueNotBonus ;
    
    var footer = (percent !== 100) ? buttonRepeat+buttonContinue : buttonContinue;

    var extraClasses = 'gam-modal-prize';

    var modal = gameApp.components.Modal(id, header, body, footer, extraClasses);


    gameApp.openModal(modal, id);

}

gameApp.createModalBonus = function() {

    var isLocked = gameApp.detectBonusLockStatus();
    var insideBonus = false; //TODO

    var title = (isLocked) ? gameApp.text.gamification_bonus_locked :  gameApp.text.gamification_bonus_unlocked;
    var subtitle = (isLocked) ? gameApp.text.gamification_bonus_locked_subtitle :  gameApp.text.gamification_bonus_unlocked_subtitle;

    var extraClassBody = 'gam--locked';

    var suffix = window.idtema;
    var id = 'gam-modal-bonus-'+suffix;
    var header = '<h1 class="gam-title">'+title+'</h1>';
    var lock = '<div class="gam-lock"><span class="gam-lock__top"></span></div>';
    var message = '<div class="gam-subtitle">'+subtitle+'</div>';
    var body = lock+message;

    var bonusId = 100323879; //TODO

    var buttonStartActivityInside = gameApp.components.Button(false, gameApp.text.gamification_ok, "gameApp.closeModal('"+id+"')", false, extraClassBody);
    var buttonStartACtivityOutside = gameApp.components.Button(false, gameApp.text.gamification_start_activity, "gameApp.goToActivity('"+bonusId+"')", false);
    var buttonStartActivity = (insideBonus) ?  buttonStartActivityInside : buttonStartACtivityOutside;

    var buttonContinue = gameApp.components.Button(false, gameApp.text.gamification_continue, 'cerrarIframe()', false);
    
    var footer = (isLocked) ? buttonContinue : buttonStartActivity+buttonContinue;

    var extraClasses = (isLocked) ? 'gam-modal-lock --locked' : 'gam-modal-lock --unlocked';

    var modal = gameApp.components.Modal(id, header, body, footer, extraClasses);
    
    gameApp.openModal(modal, id, extraClassBody);

}


//----------------------------------//
//                                  //
//  Initializers                    //
//                                  //
//----------------------------------//


gameApp.initBook = function() {

    var button = gameApp.components.ButtonScoreboard();
    var tooltip = gameApp.components.TooltipScoreboard();

    var navbar = $('.navbar');

    navbar.prepend(button).append(tooltip);

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

gameApp.initBonusActivity = function() {
    if (gameApp.config.isStudent || gameApp.config.isDEV) {
        gameApp.createModalBonus();
    }
}

gameApp.initActivity = function(id) {
    console.log("Gamification ACtivity loaded");

    var tokens = gameApp.tokenActivity(window.idcurso);
    var badge = gameApp.components.TokensBadge(tokens);
    var header = $('#actividad .item-container .header');

    var isBonus = gameApp.detectBonusActivity();

    if (isBonus) {
        gameApp.initBonusActivity();
    }

    blink.events.on('section:shown', function() {
        if (tokens > 0) {
            header.append(badge);
        }
    });

    blink.events.on('slide:update:after', function() {
        console.log("Slide:update:after");
        //var percent = gameApp.getGrade();
        //gameApp.createModalScore(tokens, percent);

    });

    blink.events.on('course:refresh', function(e) {
        console.log(e);
        console.log("course:refresh");
        //gameApp.createModalScore(tokens, 0);

    });


    blink.events.on('gamification:savedScore', function(e, data) {
        console.log(e, data);
        console.log("gamification:savedScore");
        //gameApp.createModalScore(tokens, 0);

    });

}

gameApp.initApp = function() {

    var ishtmlBook = $('body').hasClass('body_htmlBook');
    var isActivity = $('body').hasClass('body_clase');
    var isGamificationActivity = gameApp.detectGamificationActivity(window.idtema);
    
    console.log(isGamificationActivity, window.idtema);
    
    if (isActivity && isGamificationActivity) {
        gameApp.initActivity(window.idtema);   
    } else if (ishtmlBook) {
        gameApp.initBook();
    }

    gameApp.initScoreboard();

}

  

jQuery(function() { 

    var dataLoaded = gameApp.courseData !== '';
    console.log(dataLoaded);
    
    if (dataLoaded) {
        gameApp.initApp();
    } else {
        gameApp.getCourseData(true);
    }

    console.log("Testing2");

    $('body').on('click', '.gam-js-goToScoreboard', function(e) {
        e.preventDefault();
        window.location.hash = gameApp.config.tree[0].hash;
    });

    $('body').on('click', function(event) {
        $target = $(event.target);
        if(!$target.closest('.gam-tooltip').length && !$target.closest('.gam-button').length) {
            $('.gam-tooltip.--visible').removeClass('--visible');
        }
    });


    $('body').on('click', '.js-correct', function(e) {
        var tokens = gameApp.tokenActivity(window.idcurso);
        gameApp.createModalScore(tokens, 0);
    });


});
