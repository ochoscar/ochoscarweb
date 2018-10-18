var relative = document.currentScript.getAttribute('relative');

$(function() {
    // Set containers
    $('#navigator-bar').load(relative + 'menu.html', function() {
        $('#a_index').attr("href", relative + 'index.html');
        $('#a_intro_programming').attr("href", relative + 'web/sistemas/intro_programacion.html');
        $('#a_java_language').attr("href", relative + 'web/sistemas/java/java_lenguaje.html');
        $('#a_java_basics1').attr("href", relative + 'web/sistemas/java/conceptos_basicos1.html');
        $('#a_java_basics2').attr("href", relative + 'web/sistemas/java/conceptos_basicos2.html');
				$('#a_java_basics3').attr("href", relative + 'web/sistemas/java/conceptos_basicos3.html');
        $('#a_structures_list').attr("href", relative + 'web/sistemas/java/listas.html');
        $('#a_structures_stack').attr("href", relative + 'web/sistemas/java/pilas.html');
        $('#a_structures_queue').attr("href", relative + 'web/sistemas/java/colas.html');
        $('#a_intro_math').attr("href", relative + 'web/matematicas/intro_matematicas.html');
    });
    $('#footer').load(relative + 'footer.html');
});
