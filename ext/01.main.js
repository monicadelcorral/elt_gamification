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

gameApp.courseData = '';



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
  

jQuery(function() { 

    gameApp.getCourseData();

    console.log("Testing");

});
