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
        $('#a_math_operativas').attr("href", relative + 'web/matematicas/basica/operativas.html');
        $('#a_math_derivadas').attr("href", relative + 'web/matematicas/calculo/derivadas.html');
        $('#a_math_integral').attr("href", relative + 'web/matematicas/calculo/integral.html');
        $('#a_math_limites').attr("href", relative + 'web/matematicas/calculo/limites.html');
        $('#a_math_series').attr("href", relative + 'web/matematicas/calculo/series.html');
        $('#a_math_vectorial').attr("href", relative + 'web/matematicas/geometria/vectorial.html');
        $('#a_math_matrices').attr("href", relative + 'web/matematicas/lineal/matrices.html');
    });
    $('#footer').load(relative + 'footer.html');
});
