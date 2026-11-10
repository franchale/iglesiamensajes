// Leer el archivo JSON de forma asíncrona

fetch('./datos/mensajes-iglesia.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo JSON");
    }
    return response.json(); // Analizar el contenido como JSON
  })
  .then(data => {

    var conta = 1
    
    // **************
    // Sección Culto
    // **************
    document.getElementById('tblCulto_linea1').textContent = `${data.portada.linea1}`;
    document.getElementById('tblCulto_linea2').textContent = `${data.portada.linea2}`;
    document.getElementById('tblCulto_linea3').textContent = `${data.portada.linea3}`;
    document.getElementById('tblCulto_linea4').textContent = `${data.portada.linea4}`;
    document.getElementById('tblCulto_linea5').textContent = `${data.portada.linea5}`;
    document.getElementById('tblCulto_linea6').textContent = `${data.portada.linea6}`;
    document.getElementById('tblCulto_linea7').textContent = `${data.portada.linea7}`;
    document.getElementById('tblCulto_linea8').textContent = `${data.portada.linea8}`;
	
    // *******************
    // Sección Bienvenida
    // *******************
    document.getElementById('bienvenidaInvoca').innerHTML = `<b><i>${data.bienvenida_por}</i></b>`;
    
    document.getElementById('invocaPor').innerHTML = `<b>${data.invocacion_por}</b>`;
    
    document.getElementById('cantoBienvenida').innerHTML = `${data.canto_bienvenida.canto}`;
    document.getElementById('cantoBienvenidaDirigidoPor').innerHTML = `${data.canto_bienvenida.dirigido_por}`;
    
    document.getElementById('lecturaCongrega_es').innerHTML = `${data.lectura_biblica_congregacional.texto_es}`;
    document.getElementById('lecturaCongrega_esPor').innerHTML = `${data.lectura_biblica_congregacional.leido_por_es}`;
    document.getElementById('lecturaCongrega_en').innerHTML = `${data.lectura_biblica_congregacional.texto_en}`;
    document.getElementById('lecturaCongrega_enPor').innerHTML = `${data.lectura_biblica_congregacional.leido_por_en}`;

    document.getElementById('alavanza_adoracion_por').innerHTML = `<b><i>${data.alavanza_adoracion_por}</i></b>`;
    
    document.getElementById('cantoseHimnos_uno').innerHTML  = `${data.cantos_himnos.uno}`;
    document.getElementById('cantoseHimnos_dos').innerHTML  = `${data.cantos_himnos.dos}`;
    document.getElementById('cantoseHimnos_tres').innerHTML = `${data.cantos_himnos.tres}`;
    
    document.getElementById('videos_Uno').innerHTML  = `${data.videos.uno}`;
    document.getElementById('Videos_Dos').innerHTML  = `${data.videos.dos}`;
    
    document.getElementById('titulo').innerHTML  = `${data.sermon.titulo}`;
    document.getElementById('texto_biblico').innerHTML  = `${data.sermon.texto_biblico}`;
    document.getElementById('predicador').innerHTML = `${data.sermon.predicador}`;

    // *******************
    // Sección Anuncios
    // ******************* 
    document.getElementById('oracion_ofrendas_por').innerHTML  = `<b>${data.oracion_ofrendas_por}<b>`;

    document.getElementById('anuncios_texto_11').innerHTML  = `<span style="background-color: black; color: white;"><b>${data.anuncios.texto_11}</b></span> 
    <b>${data.anuncios.texto_12}</b>
    <b><u>${data.anuncios.texto_13}</u></b>
    ${data.anuncios.texto_14}  
    <b><u><i>${data.anuncios.texto_15}<i></u></b>`;

    document.getElementById('anuncios_texto_12').innerHTML  = `<span style="background-color: black; color: white;"><b><u>${data.anuncios.texto_21}</u></b></span> 
    <b>${data.anuncios.texto_22}</b> 
    <b><u>${data.anuncios.texto_23}</u></b> 
    ${data.anuncios.texto_24}
    <b><u><i>${data.anuncios.texto_25}<i></u></b>`;

    document.getElementById('anuncios_texto_13').innerHTML  = `<span style="background-color: black; color: white;"><b><u>${data.anuncios.texto_31}</u></b></span> 
    <b>${data.anuncios.texto_32}</b> 
    <b><u>${data.anuncios.texto_33}</u></b> 
    ${data.anuncios.texto_34}</span>
    <b><u><i>${data.anuncios.texto_35}<i></u></b>`;

    document.getElementById('anuncios_texto_14').innerHTML  = `<span style="background-color: black; color: white;"><b>${data.anuncios.texto_41}</b></span> 
    <b>${data.anuncios.texto_42}</b> 
    <b><u>${data.anuncios.texto_43}</u></b> 
    ${data.anuncios.texto_44}
    <b><u><i>${data.anuncios.texto_45}<i></u></b>`;

    // **************************
    // Sección Recuerde Orar Por
    // ************************** 
    document.getElementById('oremos_por_sanidad1').innerHTML = `<i>${data.oremos_por.sanidad1}</i>`;
    document.getElementById('oremos_por_sanidad2').innerHTML = `<i>${data.oremos_por.sanidad2}</i>`;
    document.getElementById('oremos_por_sanidad3').innerHTML = `<i>${data.oremos_por.sanidad3}</i>`;
    document.getElementById('oremos_por_sanidad4').innerHTML = `<i>${data.oremos_por.sanidad4}</i>`;
    document.getElementById('engeneral').innerHTML = `&#10148; <i>${data.oremos_por.engeneral}</i>`;


    document.getElementById('agradecimientos_y_peticiones').innerHTML = `<b><i>${data.agradecimientos_y_peticiones}</i></b>`;
    document.getElementById('oracion_pastoral_despedida').innerHTML = `<b><i>${data.oracion_pastoral_despedida}</i></b>`;

    document.getElementById('otros_mensajes_especiales_uno').innerHTML  = `<b>${data.otros_mensajes_especiales.uno}</b>`;
    document.getElementById('otros_mensajes_especiales_dos').innerHTML  = `<b>${data.otros_mensajes_especiales.dos}</b>`;
    document.getElementById('otros_mensajes_especiales_tres').innerHTML = `<b>${data.otros_mensajes_especiales.tres}</b>`;
	
    // **************************
    // Sección portada (horarios)
    // **************************    
    data.horario_dias.forEach(horarioDia => {
    
        /* Etiquetas para el Domingo */
        if (conta == 1) {
          document.getElementById('diaDom_etiqueta1').textContent = `${horarioDia.etiqueta1}`;
          document.getElementById('diaDom_etiqueta2').textContent = `${horarioDia.etiqueta2}`;
          document.getElementById('diaDom_etiqueta3').textContent = `${horarioDia.etiqueta3}`;
        }
        
        /* Etiquetas para el Sunday */
        if (conta == 2) {
          document.getElementById('diaSun_etiqueta1').textContent = `${horarioDia.etiqueta1}`;
          document.getElementById('diaSun_etiqueta2').textContent = `${horarioDia.etiqueta2}`;
          document.getElementById('diaSun_etiqueta3').textContent = `${horarioDia.etiqueta3}`;
        }
        
        /* Etiquetas para el Miercoles */
        if (conta == 3) {
          document.getElementById('diaMie_etiqueta1').textContent = `${horarioDia.etiqueta1}`;
        }
        
        /* Etiquetas para el Wednesday */
        if (conta == 4) {
          document.getElementById('diaWed_etiqueta1').textContent = `${horarioDia.etiqueta1}`;
        }
        
        /* Etiquetas para el Jueves */
        if (conta == 5) {
          document.getElementById('diaJue_etiqueta1').textContent = `${horarioDia.etiqueta1}`;
        }
        
        /* Etiquetas para el Thursday */
        if (conta == 6) {
          document.getElementById('diaThu_etiqueta1').textContent = `${horarioDia.etiqueta1}`;
        }      

        conta = conta + 1;
              
    });
  })

  .catch(error => {
    console.error("Error al procesar los datos:", "error");
  });
