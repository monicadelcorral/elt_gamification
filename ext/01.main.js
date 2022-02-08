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
    gamification_bonus : "gamification_bonus",
    gamification_medals_limit_diamonds : "gamification_medals_limit_diamonds_"
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
    gamification_medals : "Medals",
    gamification_no_medals : "No medals"

}

gameApp.themeName = "oxford-elt";

gameApp.sounds = {
	0: '../themes/responsive/assets/styles/'+gameApp.themeName+'/ext/sounds/mixkit-neutral-bot-pinbal-tone-3137.mp3',
	1: '../themes/responsive/assets/styles/'+gameApp.themeName+'/ext/sounds/mixkit-bubbly-achievement-tone-3193.mp3',
	2: '../themes/responsive/assets/styles/'+gameApp.themeName+'/ext/sounds/mixkit-unlock-new-item-game-notification-254.mp3',
	3: '../themes/responsive/assets/styles/'+gameApp.themeName+'/ext/sounds/mixkit-mechanical-crate-pick-up-3154.mp3',
}

gameApp.config.tokens = {
    intervals: [
        {
            minPercent: -1,
            maxPercent: 0,
            given: 0,
            title: gameApp.text.gamification_score_fail,
            subtitle: gameApp.text.gamification_score_fail_subtitle,
            sound: gameApp.sounds[0]
        },
        {
            minPercent: 1,
            maxPercent: 24,
            given: 20,
            title: gameApp.text.gamification_score_fail,
            subtitle: gameApp.text.gamification_score_fail_subtitle,
            sound: gameApp.sounds[0]
        },
        {
            minPercent: 25,
            maxPercent: 49,
            given: 40,
            title: gameApp.text.gamification_score_not_bad,
            subtitle: gameApp.text.gamification_score_not_bad_subtitle,
            sound: gameApp.sounds[1]
        },
        {
            minPercent: 50,
            maxPercent: 69,
            given: 60,
            title: gameApp.text.gamification_score_well_done,
            subtitle: gameApp.text.gamification_score_well_done_subtitle,
            sound: gameApp.sounds[1]
        },
        {
            minPercent: 70,
            maxPercent: 99,
            given: 80,
            title: gameApp.text.gamification_score_great,
            subtitle: gameApp.text.gamification_score_great_subtitle,
            sound: gameApp.sounds[1]
        },
        {
            minPercent: 100,
            maxPercent: 100,
            given: 100,
            title: gameApp.text.gamification_score_brilliant,
            subtitle: gameApp.text.gamification_score_brilliant_subtitle,
            sound: gameApp.sounds[1]
        }
    ]
}

gameApp.components = {};

gameApp.courseData = '';

gameApp.userBadges = [];

gameApp.config.tree = {
    0 : {
      'id' : 'scoreboard',
      'hash' : 'scoreboard',
      'class' : gameApp.config.bodyClasses[0],
      'page' : 'gam-page--scoreboard'
    }
}

gameApp.config.rangeMedalsDiamonds = 100;
gameApp.bonusActivities = [];

//----------------------------------//
//                                  //
//  BLINK OVERRIDES                 //
//                                  //
//----------------------------------//

gameApp.calculateMedalsDiamonds = function() {
    var tags = blink.gamification.cursoJson.courseTags;
    var tag = tags.find(tag => tag.startsWith(gameApp.config.tags.gamification_medals_limit_diamonds));
    var max = (typeof tag !== 'undefined') ? tag.replace(gameApp.config.tags.gamification_medals_limit_diamonds, '') : 10000;
    var range = gameApp.config.rangeMedalsDiamonds;
    let array = Array(max/range).fill().map((_,i) => i*range + range);

    return array;
}

gameApp.getAllBonusActivities = function() {

    var data = blink.gamification.cursoJson;

    $.each(data.units, function(i, unit) {
        var bonusActivities = unit.subunits.filter(function(subunit) {
            var tags = typeof subunit.tags !== "undefined" ? subunit.tags.split(" ") : [];
            var tokens = typeof subunit.game_token !== "undefined" ? subunit.game_token : false;
            return tags.indexOf(gameApp.config.tags.gamification_bonus) >= 0 && tokens;
        });
        var bonusActivitiesId = _.pluck(bonusActivities, 'id');

        if (bonusActivitiesId.length > 0) {
            var newArray = [...new Set([gameApp.bonusActivities,bonusActivitiesId].reduce( (a, e) => a.concat(e), []))].sort()
            gameApp.bonusActivities = newArray;
        };
        
    });    
    return gameApp.bonusActivities;
}


blink.gamification.getBadgesModel = function() {
    var arrayMedalsDiamonds = gameApp.calculateMedalsDiamonds();
    return [{
        name: "Activities",
        levels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        calc: function() { //TODO
            var activitiesCompleted = 0;
            var activitiesTotal = 100;
            return Math.ceil(activitiesCompleted * 100 / activitiesTotal)
        }
    }, {
        name: "Bonus activities",
        levels: [1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60],
        calc: function(e) {
            var activitiesCompleted = typeof window.actividades !== "undefined" ?  _.keys(window.actividades) : [];
            var bonusTotal = gameApp.getAllBonusActivities();
            var bonusCompleted = bonusTotal.length - _.intersection(activitiesCompleted.sort(),bonusTotal.sort()).length;
            return bonusCompleted;
        }
    }, {
        name: "Diamonds",
        levels: arrayMedalsDiamonds,
        calc: function(e) { //TODO
            var diamondsEarned = 0;
            return diamondsEarned;
        }
    }]
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

gameApp.goToActivity = function(id) {
    blink.domain.openActivity(id);
}

gameApp.closeActivity = function() {
    if (blink.isApp && !blink.isOfflinePCApp) {
        blink.rest.closeWindow();
        } else {
        if (window.esPopup) {
            window.top.cerrarIframe()
        } else {
            if (modoactual == 'standalone') {
                window.history.back();
            } else {
                closeActivity();
            }
        }
    }

}

gameApp.detectGamificationUnits = function() {
    var data = gameApp.courseData;

    var gamificationUnits = data.units.filter(function(unit) {
      var tags = typeof unit.tags !== "undefined" ? unit.tags.split(" ") : [];
      return tags.indexOf(gameApp.config.tags.gamification_unit.toLowerCase()) > -1;
    });
  
    return gamificationUnits;
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

    var token = typeof subunit.game_token !== 'undefined' ? subunit.game_token : 0;

    return token;
}

gameApp.getGrade = function(id) {
    var id = (typeof id !== 'undefined') ? id : window.idclase;
    var grade = (typeof window.actividades[id] === 'undefined') ? 0 : window.actividades[id].clasificacion;
    return grade;
}

gameApp.detectBonusActivity = function() {

    var data = blink.gamification.cursoJson;
    var unit = _.findWhere(data.units, {id: window.idtema.toString()});
    var subunit = _.findWhere(unit.subunits, {id: window.idclase.toString()});
    
    if (!subunit) return false;

    var tags = typeof subunit.tags !== "undefined" ? subunit.tags.split(" ") : [];

    var isBonusGamificationActivity = tags.indexOf(gameApp.config.tags.gamification_bonus) > -1;

    return isBonusGamificationActivity;
}

gameApp.getRegularActivitiesFromUnit = function(id) {
    var id = (typeof id !== 'undefined') ? id : window.idtema;

    var data = blink.gamification.cursoJson;
    var unit = _.findWhere(data.units, {id: id.toString()});
    
    var regularActivities = unit.subunits.filter(function(subunit) {
        var tags = typeof subunit.tags !== "undefined" ? subunit.tags.split(" ") : [];
        var tokens = typeof subunit.game_token !== "undefined" ? subunit.game_token : false;
        return tags.indexOf(gameApp.config.tags.gamification_bonus) < 0 && tokens;
    });

    var unitActivitiesId = _.pluck(regularActivities, 'id');
    return unitActivitiesId;

}

gameApp.getBonusActivitiesFromUnit = function(id) {
    var id = (typeof id !== 'undefined') ? id : window.idtema;

    var data = blink.gamification.cursoJson;
    var unit = _.findWhere(data.units, {id: id.toString()});
    
    var bonusActivities = unit.subunits.filter(function(subunit) {
        var tags = typeof subunit.tags !== "undefined" ? subunit.tags.split(" ") : [];
        var tokens = typeof subunit.game_token !== "undefined" ? subunit.game_token : false;
        return tags.indexOf(gameApp.config.tags.gamification_bonus) >= 0 && tokens;
    });

    var unitActivitiesId = _.pluck(bonusActivities, 'id');
    return unitActivitiesId;

}

gameApp.getAllRegularActivities = function() {
    
    var regularActivities = [];
    var data = blink.gamification.cursoJson;
    
    $.each(data.units, function(i, unit) {
        var regularActivitiesFromUnit = gameApp.getRegularActivitiesFromUnit(unit.id);
        if (regularActivitiesFromUnit.length) regularActivities = _.union(regularActivities, regularActivitiesFromUnit);
    });

    return regularActivities;

}

gameApp.getRegularActivitiesDone = function() {
    
    var regularActivitiesId = gameApp.getAllRegularActivities();

    var activitiesDoneId = [];
    var activitiesDone = typeof window.actividades !== "undefined" ? window.actividades : [];
    activitiesDone = activitiesDone.filter(function(activity, key) {
        if (activity.nota !== '') {
            activitiesDoneId.push(key.toString());
        }
        return activity.nota !== '';
    });

    var regularActivitiesDone = _.intersection(activitiesDoneId.sort(),regularActivitiesId.sort());

    return regularActivitiesDone;

}


gameApp.getAllBonusActivities = function() {
    
    var bonusActivities = [];
    var data = blink.gamification.cursoJson;
    
    $.each(data.units, function(i, unit) {
        var bonusActivitiesFromUnit = gameApp.getBonusActivitiesFromUnit(unit.id);
       
        if (bonusActivitiesFromUnit.length) bonusActivities = _.union(bonusActivities, bonusActivitiesFromUnit);
            
    });

    return bonusActivities;

}

gameApp.getBonusActivitiesDone = function() {

    
    var bonusActivities = gameApp.getAllBonusActivities();;

    var activitiesDone = typeof window.actividades !== "undefined" ? window.actividades : [];
    activitiesDone = activitiesDone.filter(function(activity) {
        return activity.nota !== '';
    })
    var activitiesDoneId = _.keys(activitiesDone);

    var bonusActivitiesDone = _.intersection(activitiesDoneId.sort(),bonusActivities.sort()).length;
    
    return bonusActivitiesDone;

}


gameApp.detectBonusIsLocked = function() {
    
    var unitActivitiesId = gameApp.getRegularActivitiesFromUnit();

    var activitiesDone = typeof window.actividades !== "undefined" ? window.actividades : [];
    activitiesDone = activitiesDone.filter(function(activity) {
        return activity.nota !== '';
    })
    var activitiesDoneId = _.keys(activitiesDone);

    var isUnlocked = _.intersection(activitiesDoneId.sort(),unitActivitiesId.sort()).length === unitActivitiesId.length;
    
    return !isUnlocked;

}

gameApp.getFirstBonusActivity = function(id) {

    var id = (typeof id !== 'undefined') ? id : window.idtema;

    var data = gameApp.courseData;
    var unit = _.findWhere(data.units, {id: id.toString()});
    
    var bonusActivities = unit.subunits.filter(function(subunit) {
        var tags = typeof subunit.tags !== "undefined" ? subunit.tags.split(" ") : [];
        var tokens = typeof subunit.game_token !== "undefined" ? subunit.game_token : false;
        return tags.indexOf(gameApp.config.tags.gamification_bonus) > -1 && tokens;
    });

    var firstBonusActivity = bonusActivities[0];
    return firstBonusActivity;

}

gameApp.getMedalsFromUser = function() {
    var data = blink.gamification.cursoJson;
    var totals = blink.gamification.getBadgesModel();

    var body = '';

    $.each(data.badges, function(i, badge) {
        var innerbody = '';
        var title = badge.name;
        var level = badge.level;

        var levelsEarned = totals[i].levels;
        levelsEarned.length = level;

        $.each(levelsEarned, function(x, level) {
            var prefix = i === 0 ? '%' : '';
            var medal = gameApp.components.Medal(i, level, prefix);
            innerbody += medal;
        });

        if (levelsEarned.length <= 0) {
            var medal = gameApp.components.Medal(i, level, '', true);
            innerbody += medal;
        }

        body += '<section class="gam-medals"><header class="gam-medals__header">'+title+'</header><div class="gam-medals__body">'+innerbody+'</div></section>';

    });

    return body;
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
    
   setTimeout(function() {
       $('#'+id).addClass('--open');

       gameApp.playAudio('gam-modal-audio');
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
//  Audios                          //
//                                  //
//----------------------------------//

gameApp.playAudio = function(audioID) {
    setTimeout(function(){
        var audio = document.getElementById(audioID)
        if(audio){
            audio.play();
        }
    }, 200);
}


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

gameApp.components.Medal = function(type, achievement, suffix, empty) {
    var emptyClass = (empty) ? '--empty' : '';
    var label = (empty) ? gameApp.text.gamification_no_medals : achievement+suffix;
    var component = '<div class="gam-medal --'+type+' '+emptyClass+'"><div class="gam-medal__icon"></div><div class="gam-medal__label">'+label+'</div></div>';
    return component;

}

//----------------------------------//
//                                  //
//  Gamification Modals             //
//                                  //
//----------------------------------//


gameApp.createModalScore = function(tokens, grade) {

    var result = gameApp.config.tokens.intervals.filter(function(interval) {
        return interval.minPercent <= grade && interval.maxPercent >= grade;
    });

    var title = result[0].title;
    var subtitle = result[0].subtitle;
    var given = tokens * result[0].given / 100;
    var soundFile = result[0].sound;

    var suffix = window.idtema;
    var id = 'gam-modal-score-'+suffix;
    var sound = '<div style="display: none"><audio id="gam-modal-audio"><source src="' + soundFile + '" type="audio/mpeg"></audio></div>';

    var header = '<h1 class="gam-title">'+title+'</h1>'+sound;
    var prize = '<div class="gam-prize">'+gameApp.text.gamification_score_label+'<span>'+given+'</span></div>';
    var message = '<div class="gam-subtitle">'+subtitle+'</div>';
    var body = prize+message;
    
    var detectIfBonusIsOpen = !gameApp.detectBonusIsLocked();
    var bonusId = gameApp.getFirstBonusActivity().id;

    var buttonRepeat = gameApp.components.Button(false, gameApp.text.gamification_try_again, "gameApp.closeModal('"+id+"')", false);
    var buttonContinueNotBonus = gameApp.components.Button(false, gameApp.text.gamification_continue, 'gameApp.closeActivity()', false);
    var buttonContinueBonus = gameApp.components.Button(false, gameApp.text.gamification_continue, "gameApp.closeModal('"+id+"'); gameApp.createModalBonus()", false);

    var buttonContinue = (detectIfBonusIsOpen) ? buttonContinueBonus : buttonContinueNotBonus ;
    
    var footer = (grade !== 100) ? buttonRepeat+buttonContinue : buttonContinue;

    var extraClasses = 'gam-modal-prize';

    var modal = gameApp.components.Modal(id, header, body, footer, extraClasses);


    gameApp.openModal(modal, id);

}

gameApp.createModalBonus = function() {

    var isLocked = gameApp.detectBonusIsLocked();

    var title = (isLocked) ? gameApp.text.gamification_bonus_locked :  gameApp.text.gamification_bonus_unlocked;
    var subtitle = (isLocked) ? gameApp.text.gamification_bonus_locked_subtitle :  gameApp.text.gamification_bonus_unlocked_subtitle;
    
    var extraClassBody = (isLocked) ? 'gam--locked' : '';
    
    var suffix = window.idtema;
    var id = 'gam-modal-bonus-'+suffix;
    var soundFile = (isLocked) ? gameApp.sounds[2] : gameApp.sounds[3];
    var sound = '<div style="display: none"><audio id="gam-modal-audio"><source src="' + soundFile + '" type="audio/mpeg"></audio></div>';
    var header = '<h1 class="gam-title">'+title+'</h1>'+sound;
    var lock = '<div class="gam-lock"><span class="gam-lock__top"></span></div>';
    var message = '<div class="gam-subtitle">'+subtitle+'</div>';
    var body = lock+message;

    var bonusId = gameApp.getFirstBonusActivity().id;
    var insideBonus = bonusId === window.idclase.toString();

    var buttonStartActivityInside = gameApp.components.Button(false, gameApp.text.gamification_ok, "gameApp.closeModal('"+id+"')", false, extraClassBody);
    var buttonStartACtivityOutside = gameApp.components.Button(false, gameApp.text.gamification_start_activity, "gameApp.closeModal('"+id+"'); gameApp.goToActivity('"+bonusId+"')", false);
    var buttonStartActivity = (insideBonus) ?  buttonStartActivityInside : buttonStartACtivityOutside;

    var buttonContinue = (!insideBonus || (insideBonus && isLocked)) ? gameApp.components.Button(false, gameApp.text.gamification_continue, "gameApp.closeModal('"+id+"'); gameApp.closeActivity()", false) : '';
    
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


gameApp.initShortcutScoreboard = function() {

    if ($('#gam-tooltip-scoreboard').length) return;
    //var button = gameApp.components.ButtonScoreboard();
    var tooltip = gameApp.components.TooltipScoreboard();

    var navbar = $('.navbar');

    //navbar.prepend(button).append(tooltip);
    navbar.append(tooltip);

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
    var totalScore = 2000; //TODO 
    var score = '<div class="gam-score"><span class="gam-score__label">'+gameApp.text.gamification_score_label+'</span><span class="gam-score__total">'+totalScore+'</span></div>';
    var unitsCompleted = 0; //TODO
    var unitsTotal = gameApp.detectGamificationUnits().length;
    var activitiesCompleted = gameApp.getRegularActivitiesDone().length;
    var activitiesTotal = gameApp.getAllRegularActivities().length;
    var learningKitUnits = '<div class="gam-learning-kit__section"><h3 class="gam-learning-kit__title">'+gameApp.text.gamification_units+'</h3><div class="gam-learning-kit__score">'+unitsCompleted+'/'+unitsTotal+'</div><div class="gam-learning-kit__label">'+gameApp.text.gamification_completed+'</div></div>';
    var learningKitActivities = '<div class="gam-learning-kit__section"><h3 class="gam-learning-kit__title">'+gameApp.text.gamification_activities+'</h3><div class="gam-learning-kit__score">'+activitiesCompleted+'/'+activitiesTotal+'</div><div class="gam-learning-kit__label">'+gameApp.text.gamification_completed+'</div></div>';

    var learningKit = '<div class="gam-learning-kit"><h2 class="gam-title--3">'+gameApp.text.gamification_active_learning_kit+'</h2><div class="gam-learning-kit__results">'+learningKitUnits+learningKitActivities+'</div></div>';

    var topheader = '<div class="gam-page__header__top --placeholder"></div><div class="gam-page__header__top"><h1 class="gam-title">'+gameApp.text.gamification_scoreboard_title+'</h1><button class="gam-button" onclick="gameApp.closePage(0);">'+gameApp.text.gamification_close+'</button></div>';
    var bottomheader = '<div class="gam-page__header__bottom">'+score+learningKit+'</div>';
    var header = '<header class="gam-page__header"><div class="gam-page__header__inner">'+topheader+bottomheader+'</div></header>';


    $('.gam-page--scoreboard').append(header);

    var bodyMedals = gameApp.getMedalsFromUser();
    var bodyUnits = '';
    var body = '<div class="gam-tabs"><div class="gam-tabs__list"><ul><li class="--current"><a href="#gam-medals">'+gameApp.text.gamification_medals+'</a></li><li><a href="#gam-units">'+gameApp.text.gamification_units+'</a></li></ul></div><div class="gam-tabs__content"><div class="gam-tabs__content__item --active" id="gam-medals">'+bodyMedals+'</div><div class="gam-tabs__content__item" id="gam-units">'+bodyUnits+'</div></div></div>';
    $('.gam-page--scoreboard').append(body);

    var bodyClass = gameApp.config.bodyClasses[0];
    $('body').addClass(bodyClass);
    gameApp.removeUnusedClass(bodyClass);


    console.log("Scoreboard loaded");


}

gameApp.initBonusActivity = function() {
    if (gameApp.config.isStudent) {
        gameApp.createModalBonus();
    }
}

gameApp.initActivity = function(id) {
    console.log("Gamification ACtivity loaded");

    var tokens = gameApp.tokenActivity(window.idcurso);

    var isBonus = gameApp.detectBonusActivity();

    if (isBonus) {
        gameApp.initBonusActivity();
    }

    if (tokens > 0) {
        var currentSection = blink.activity.currentSection;
        var header = $('#slider-item-'+currentSection+' .header');
        var badge = gameApp.components.TokensBadge(tokens);
        header.find('.gam-score-badge').remove();
        header.append(badge);
    }

    blink.events.on('slide:update:after section:shown', function() {
        if (tokens > 0) {
            var currentSection = blink.activity.currentSection;
            var header = $('#slider-item-'+currentSection+' .header');
            var badge = gameApp.components.TokensBadge(tokens);
            header.find('.gam-score-badge').remove();
            header.append(badge);
        }
    });

    blink.events.on('slide:update:correct', function() {
        console.log("Slide:update:correct");

        if (gameApp.config.isStudent) {
            var grade = gameApp.getGrade();
            gameApp.createModalScore(tokens, grade);    
        }

    });

    blink.events.on('gamification:badges:calculated', function() {
        console.log("gamification:badges:calculated");

        if (gameApp.config.isStudent) {
            //var grade = gameApp.getGrade();
            //gameApp.createModalScore(tokens, grade);    
        }

    });

}

gameApp.initApp = function() {
    gameApp.courseData = blink.gamification.cursoJson;
    gameApp.userBadges = blink.gamification.cursoJson.badges;


    gameApp.config.isStudent = !blink.user.esAdmin() && !blink.user.esEditor() && !blink.user.esEditorial() && !blink.user.esProfesor() && !blink.user.esSAdmin();
    gameApp.config.isAnonymous = !blink.user.esAdmin() && !blink.user.esEditor() && !blink.user.esEditorial() && !blink.user.esProfesor() && !blink.user.esSAdmin() && !blink.user.esAlumno() && !blink.user.esPadre();

    var ishtmlBook = $('body').hasClass('body_htmlBook');
    var isActivity = $('body').hasClass('body_clase');
    var isGamificationActivity = gameApp.detectGamificationActivity(window.idtema);
        
    if (isActivity && isGamificationActivity) {
        gameApp.initActivity(window.idtema);   
    }
    gameApp.initShortcutScoreboard();
    gameApp.initScoreboard();

}

  

jQuery(function() { 

    var dataLoaded = gameApp.courseData !== '';
    
    blink.events.on('gamification:init', function() {
        gameApp.initApp();
    });

    /*if (dataLoaded) {
        gameApp.initApp();
    } else {
        gameApp.getCourseData(true);
    }*/

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
