// ===== TODAS LAS PREGUNTAS (ejemplo 5 por tema, expandir a 50) =====
const temas = [
    {
        nombre: "TEMA 1: Deforestación y Cambio Climático",
        preguntas: [
            {pregunta: "Principal causa de deforestación en Andes bolivianos?", opciones: {a:"Agricultura extensiva", b:"Turismo", c:"Minería responsable", d:"Educación ambiental"}, correcta:"a", tiempo:60},
            {pregunta: "¿Cuál es la principal causa de deforestación en los Andes bolivianos?",
                opciones: {a: "Turismo", b: "Pesca artesanal", c: "Expansión agrícola", d: "Energía solar"},
                correcta: "c",
                tiempo: 60
            },
            {pregunta: "¿Qué efecto principal tiene la deforestación sobre el cambio climático?",
                opciones: {a: "Incremento de CO2 atmosférico", b: "Reducción de gases de efecto invernadero", c: "Mayor humedad en el suelo", d: "Aumento de biodiversidad"},
                correcta: "a",
                tiempo: 60
            },
            {pregunta: "¿Qué rol tienen los bosques altoandinos en la regulación del agua?",
                opciones: {a: "Evitan el crecimiento de cultivos", b: "Regulan la escorrentía y recarga de acuíferos", c: "Aumentan la erosión", d: "Generan sequías"},
                correcta: "b",
                tiempo: 60
            },
            {pregunta: "¿Cuál es una consecuencia directa de la pérdida de cobertura forestal en los Andes?",
                opciones: {a: "Aumento de la biodiversidad", b: "Incremento de glaciares", c: "Reducción de lluvias extremas", d: "Disminución de suelos fértiles"},
                correcta: "d",
                tiempo: 60
            },
            {pregunta: "¿Qué estrategia de mitigación ayuda a reducir la deforestación?",
                opciones: {a: "Reforestación con especies nativas", b: "Construcción de represas", c: "Tala ilegal", d: "Agricultura intensiva sin sombra"},
                correcta: "a",
                tiempo: 60
            },
            {pregunta: "¿Qué impacto tiene la deforestación sobre la fauna andina?",
                opciones: {a: "Aumenta la disponibilidad de hábitats", b: "Provoca pérdida de biodiversidad", c: "Reduce enfermedades", d: "Mejora la migración de especies"},
                correcta: "b",
                tiempo: 60
            },
            {pregunta: "¿Qué relación existe entre deforestación y eventos extremos de clima?",
                opciones: {a: "La deforestación aumenta la frecuencia de inundaciones y sequías", b: "Reduce la intensidad de lluvias", c: "No hay relación", d: "Mejora la estabilidad climática"},
                correcta: "a",
                tiempo: 60
            },
            {pregunta: "¿Qué indicador se usa para medir la pérdida forestal en los Andes?",
                opciones: {a: "Cobertura de suelo con vegetación arbórea", b: "Producción minera", c: "Nivel de oxígeno en la atmósfera", d: "Cantidad de turistas"},
                correcta: "a",
                tiempo: 60
            },
            {pregunta: "¿Cuál es un efecto indirecto del cambio climático en la deforestación?",
                opciones: {a: "Aumento de incendios forestales", b: "Mayor fertilidad del suelo", c: "Reducción del CO2", d: "Incremento de glaciares"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué política contribuye a conservar los bosques altoandinos?",
                opciones: {a: "Áreas protegidas y pagos por servicios ambientales", b: "Explotación minera sin regulación", c: "Tala ilegal", d: "Expansión urbana"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo afecta la deforestación a los ríos de los Andes?",
                opciones: {a: "Reduce la turbidez", b: "Aumenta la escorrentía y sedimentación", c: "Aumenta la evaporación", d: "Genera más peces"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de cultivo aumenta la deforestación en zonas altoandinas?",
                opciones: {a: "Pasturas sostenibles", b: "Horticultura en terrazas", c: "Cultivo de quinua extensivo", d: "Frutales en sombra"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué función cumplen los glaciares respecto a los bosques andinos?",
                opciones: {a: "Provocan erosión directa de bosques", b: "Incrementan la desertificación", c: "Mantienen flujo hídrico para ecosistemas forestales", d: "No tienen relación"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto de la deforestación contribuye al aumento de temperatura local?",
                opciones: {a: "Reducción de evapotranspiración", b: "Mayor sombra", c: "Disminución de radiación solar", d: "Incremento de humedad ambiental"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de iniciativas comunitarias ayudan a combatir la deforestación?",
                opciones: {a: "Monocultivos sin regulación", b: "Reforestación y manejo sostenible de bosques", c: "Caza furtiva", d: "Expansión urbana ilegal"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la relación entre deforestación y pérdida de suelo fértil?",
                opciones: {a: "Incrementa la fertilidad", b: "No hay relación", c: "La pérdida de vegetación expone el suelo a erosión", d: "La deforestación protege el suelo"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué herramienta tecnológica permite monitorear la deforestación en los Andes?",
                opciones: {a: "Satélites de observación terrestre", b: "Redes sociales", c: "Computadoras personales", d: "Paneles solares"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué consecuencia tiene la deforestación sobre las comunidades indígenas?",
                opciones: {a: "Disminución de recursos naturales y medios de vida", b: "Mayor acceso a educación", c: "Reducción de enfermedades", d: "Aumento de biodiversidad local"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué actividad humana intensifica la deforestación en áreas protegidas?",
                opciones: {a: "Tala ilegal y minería", b: "Reforestación", c: "Turismo sostenible", d: "Educación ambiental"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de especies se recomienda plantar para restaurar bosques andinos?",
                opciones: {a: "Especies nativas altoandinas", b: "Exóticas no nativas", c: "Cactus de desierto", d: "Plantas ornamentales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene la deforestación en la captura de carbono?",
                opciones: {a: "Convierte CO2 en oxígeno", b: "Aumenta la captura", c: "Disminuye la captura de CO2", d: "No afecta"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué fenómeno extremo está vinculado al cambio climático y deforestación?",
                opciones: {a: "Inundaciones y sequías", b: "Huracanes tropicales", c: "Tormentas de arena", d: "Aumento de terremotos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué papel tienen las políticas públicas en la deforestación?",
                opciones: {a: "Pueden fomentar conservación y reforestación", b: "Solo regulan el turismo", c: "No influyen", d: "Imponen sequías"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo afecta la deforestación a la disponibilidad de agua dulce?",
                opciones: {a: "Reduce la regulación hídrica y disponibilidad", b: "Incrementa caudales", c: "Purifica el agua", d: "No hay efecto"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué sector económico se ve afectado por la pérdida de bosques en los Andes?",
                opciones: {a: "Agricultura, turismo y recursos forestales", b: "Industria minera únicamente", c: "Solo transporte", d: "Solo sector urbano"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué indicador climático está relacionado con deforestación en Bolivia?",
                opciones: {a: "Temperatura media y precipitación", b: "Nivel de radiación UV", c: "Velocidad del viento exclusivamente", d: "Salinidad del suelo"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia de desarrollo ayuda a reducir la presión sobre bosques andinos?",
                opciones: {a: "Agricultura sostenible y diversificación de ingresos", b: "Monocultivo intensivo", c: "Expansión urbana sin planificación", d: "Tala ilegal controlada"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene la deforestación sobre la resiliencia climática local?",
                opciones: {a: "Disminuye la capacidad de adaptación a eventos extremos", b: "Genera estabilidad hídrica", c: "No tiene efecto", d: "Aumenta la resiliencia"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué rol cumple la educación ambiental en la mitigación de la deforestación?",
                opciones: {a: "Promueve prácticas sostenibles y conciencia comunitaria", b: "Incrementa tala ilegal", c: "No influye", d: "Solo regula minería"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la relación entre deforestación y glaciares en el Altiplano boliviano?",
                opciones: {a: "Deforestación afecta la regulación hídrica que alimenta glaciares", b: "Los glaciares promueven deforestación", c: "Aumenta la cobertura vegetal", d: "No existe relación"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene la deforestación sobre la fauna endémica?",
                opciones: {a: "Provoca pérdida de hábitat y riesgo de extinción", b: "Fomenta la reproducción", c: "Mejora la migración", d: "No afecta"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué herramienta puede evaluar la pérdida de carbono por deforestación?",
                opciones: {a: "Inventarios forestales y sensores remotos", b: "Encuestas urbanas", c: "Análisis de tráfico", d: "Datos meteorológicos urbanos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene la deforestación en los microclimas locales?",
                opciones: {a: "Provoca variaciones extremas de temperatura y humedad", b: "Estabiliza temperaturas", c: "Aumenta sombra natural", d: "Reduce evaporación"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué papel tienen las comunidades locales en la conservación de bosques?",
                opciones: {a: "Gestión participativa y uso sostenible", b: "Exclusivamente observación", c: "Solo explotación", d: "No intervienen"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene la deforestación sobre la calidad del suelo?",
                opciones: {a: "Favorece erosión y pérdida de fertilidad", b: "Aumenta nutrientes", c: "No cambia", d: "Mejora retención de agua"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de monitoreo es más efectivo para prevenir deforestación ilegal?",
                opciones: {a: "Satélites y drones de vigilancia forestal", b: "Visitas turísticas", c: "Medición de temperatura urbana", d: "Redes sociales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué consecuencia tiene la deforestación en la seguridad alimentaria local?",
                opciones: {a: "Reduce disponibilidad de recursos naturales y cultivos", b: "Aumenta disponibilidad de alimentos", c: "No afecta alimentos", d: "Mejora exportaciones"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de financiamiento apoya la conservación de bosques en los Andes?",
                opciones: {a: "Pagos por servicios ambientales", b: "Subvenciones mineras", c: "Créditos urbanos", d: "Turismo exclusivo"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene la deforestación sobre los patrones de precipitación?",
                opciones: {a: "Reduce humedad y altera lluvias", b: "Incrementa lluvias locales", c: "Genera monzones", d: "No hay efecto"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida combina desarrollo económico y conservación forestal?",
                opciones: {a: "Agroforestería y ecoturismo sostenible", b: "Monocultivos extensivos", c: "Expansión urbana sin planificación", d: "Extracción de madera sin control"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué indicador social refleja la presión sobre bosques andinos?",
                opciones: {a: "Crecimiento poblacional y uso de tierras", b: "Número de turistas", c: "Salarios urbanos", d: "Producción de cemento"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es un efecto combinado de deforestación y cambio climático en la agricultura?",
                opciones: {a: "Mayor vulnerabilidad de cultivos y erosión del suelo", b: "Incremento de productividad sin control", c: "Disminución de plagas", d: "Mejor retención hídrica"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué papel tiene la investigación científica en la mitigación de deforestación?",
                opciones: {a: "Desarrollar estrategias de conservación y monitoreo", b: "Solo recopila datos urbanos", c: "Favorece monocultivos", d: "Ninguno"},
                correcta: "a",
                tiempo: 60
            },
            {pregunta: "Consecuencia de la deforestación?", opciones: {a:"Reducción CO2", b:"Aumento erosión y sequías", c:"Mayor biodiversidad", d:"Reducción temperatura"}, correcta:"b", tiempo:60},
            {pregunta: "Medida para mitigar cambio climático?", opciones: {a:"Reforestación", b:"Mayor tala", c:"Exceso fertilizantes", d:"Eliminar bosques"}, correcta:"a", tiempo:60},
            {pregunta: "Efecto en ríos y glaciares?", opciones: {a:"Disminución de caudal", b:"Mayor caudal", c:"No afecta", d:"Mejor calidad de agua"}, correcta:"a", tiempo:60},
            {pregunta: "Impacto social de deforestación?", opciones: {a:"Migración y pérdida de recursos", b:"Aumento empleo forestal", c:"Reducción pobreza", d:"No impacto"}, correcta:"a", tiempo:60}
        ]
    },
    {
        nombre: "TEMA 2: Educación Digital y Brecha de Conectividad",
        preguntas: [
            {
                pregunta: "¿Cuál es la principal barrera para la educación digital en zonas rurales de Bolivia?",
                opciones: {a: "Falta de interés de estudiantes", b: "Baja conectividad a internet", c: "Demasiada tecnología", d: "Exceso de capacitación docente"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia mejora el acceso a educación digital en áreas rurales?",
                opciones: {a: "Centros comunitarios con conectividad", b: "Eliminar computadoras", c: "Aumentar clases presenciales exclusivamente", d: "Reducir el currículum"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene la brecha digital en la equidad educativa?",
                opciones: {a: "Reduce desigualdades", b: "Aumenta la desigualdad de oportunidades", c: "No tiene efecto", d: "Fomenta participación urbana"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué herramienta digital se usa para educación a distancia en Bolivia?",
                opciones: {a: "Plataformas de aprendizaje en línea", b: "Libros impresos únicamente", c: "Radio AM sin internet", d: "Tableros físicos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida ayuda a mejorar la alfabetización digital docente?",
                opciones: {a: "Capacitación continua en TICs", b: "Eliminar tecnología en aulas", c: "Reducir horas de enseñanza", d: "Solo usar libros de texto"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo afecta la baja conectividad al aprendizaje digital?",
                opciones: {a: "Interrumpe acceso a recursos educativos online", b: "Aumenta la creatividad", c: "No afecta al aprendizaje", d: "Favorece redes sociales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué rol juegan los dispositivos móviles en la educación digital?",
                opciones: {a: "Permiten acceso a contenidos y plataformas educativas", b: "Solo sirven para juegos", c: "Son irrelevantes", d: "Sustituyen al docente completamente"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es una consecuencia de la falta de conectividad en educación rural?",
                opciones: {a: "Limitación de participación en clases virtuales", b: "Mejora la comprensión lectora", c: "Mayor uso de software educativo", d: "Aumento de intercambio académico"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de capacitación digital es más efectiva para docentes?",
                opciones: {a: "Práctica y contextualizada según el entorno", b: "Solo teórica", c: "Exclusivamente online sin tutor", d: "No requiere actualización"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué factor limita la implementación de educación digital en Bolivia?",
                opciones: {a: "Costos de infraestructura y conectividad", b: "Número de docentes", c: "Cantidad de libros", d: "Interés de universidades"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida puede cerrar la brecha digital entre zonas urbanas y rurales?",
                opciones: {a: "Inversión en internet y centros tecnológicos", b: "Reducir clases online", c: "Eliminar computadoras en escuelas urbanas", d: "Fomentar enseñanza únicamente presencial"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene la educación digital en la motivación estudiantil?",
                opciones: {a: "Aumenta la motivación mediante recursos interactivos", b: "Siempre disminuye interés", c: "No tiene efecto", d: "Solo afecta docentes"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué indicador refleja la brecha digital educativa?",
                opciones: {a: "Acceso a internet y dispositivos por estudiante", b: "Número de profesores urbanos", c: "Cantidad de libros en bibliotecas", d: "Horas de recreo"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué política favorece la equidad educativa digital?",
                opciones: {a: "Distribución de dispositivos y conectividad gratuita", b: "Solo cursos en línea urbanos", c: "Eliminar TIC de escuelas rurales", d: "Reducir asignaturas tecnológicas"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es un riesgo de la educación digital sin supervisión docente?",
                opciones: {a: "Falta de comprensión profunda y desinterés", b: "Mayor participación activa", c: "Mejora rendimiento automáticamente", d: "Aumento de creatividad ilimitada"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué rol tienen las plataformas de videoconferencia en educación digital?",
                opciones: {a: "Facilitan clases sincrónicas y tutorías virtuales", b: "Solo sirven para juegos", c: "Reemplazan evaluaciones presenciales", d: "No tienen utilidad"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene la conectividad limitada en el aprendizaje colaborativo?",
                opciones: {a: "Dificulta trabajo en equipo y proyectos virtuales", b: "Fomenta colaboración más eficiente", c: "No afecta la interacción", d: "Mejora la comunicación"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de contenido digital es más útil en zonas rurales?",
                opciones: {a: "Recursos interactivos y adaptados al contexto local", b: "Videos genéricos sin traducción", c: "Solo textos PDF pesados", d: "Contenido urbano sin adaptación"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene la brecha digital en la continuidad educativa?",
                opciones: {a: "Genera interrupciones y rezago académico", b: "Aumenta eficiencia automáticamente", c: "No impacta rendimiento", d: "Facilita acceso equitativo"},
                correcta: "a",
                tiempo: 60
            },
            
            {pregunta:"Principal barrera en zonas rurales?", opciones:{a:"Falta interés", b:"Baja conectividad", c:"Demasiada tecnología", d:"Exceso capacitación"}, correcta:"b", tiempo:60},
            {pregunta:"Estrategia para mejorar acceso digital?", opciones:{a:"Centros comunitarios con internet", b:"Eliminar computadoras", c:"Solo clases presenciales", d:"Reducir currículum"}, correcta:"a", tiempo:60},
            {pregunta:"Impacto de brecha digital en equidad?", opciones:{a:"Reduce desigualdad", b:"Aumenta desigualdad", c:"No efecto", d:"Fomenta participación urbana"}, correcta:"b", tiempo:60},
            {pregunta:"Medida para alfabetización digital docente?", opciones:{a:"Capacitación continua", b:"Eliminar tecnología", c:"Reducir horas enseñanza", d:"Solo libros"}, correcta:"a", tiempo:60},
            {pregunta:"Efecto de baja conectividad en aprendizaje?", opciones:{a:"Interrumpe recursos online", b:"Aumenta creatividad", c:"No afecta", d:"Favorece redes sociales"}, correcta:"a", tiempo:60}
        ]
    },
    {
        nombre: "TEMA 3: Historia y evolución del Internet",
        preguntas:[
            {
                pregunta: "¿En qué año se estableció el primer enlace de internet en Bolivia?",
                opciones: {a: "1991", b: "1992", c: "1993", d: "1990"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál fue la primera universidad boliviana en conectarse a internet?",
                opciones: {a: "Universidad Mayor de San Andrés", b: "Universidad Autónoma Gabriel René Moreno", c: "Universidad Mayor de San Simón", d: "Universidad Católica Boliviana"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué institución gestionó los primeros enlaces de internet en Bolivia?",
                opciones: {a: "Red Académica Nacional", b: "Empresa Nacional de Telecomunicaciones", c: "Ministerio de Educación", d: "Fundación para la Ciencia y Tecnología"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál fue el principal obstáculo para la expansión de internet en Bolivia durante los años 90?",
                opciones: {a: "Altos costos y baja infraestructura", b: "Falta de interés académico", c: "Competencia internacional", d: "Limitaciones legales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué avance tecnológico permitió la expansión de internet a finales de los 90?",
                opciones: {a: "Implementación de redes de fibra óptica", b: "Introducción del correo electrónico", c: "Redes satelitales", d: "Protocolo TCP/IP"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál fue el impacto principal de la llegada del internet en universidades bolivianas?",
                opciones: {a: "Incremento en la investigación académica", b: "Reducción de bibliotecas físicas", c: "Disminución de la matrícula estudiantil", d: "Sustitución del profesorado"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué rol tuvo el gobierno boliviano en la expansión inicial de internet?",
                opciones: {a: "Regulación y apoyo institucional", b: "Exclusiva inversión privada", c: "Desarrollo de contenido educativo únicamente", d: "Restricción del acceso"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál fue la primera ciudad boliviana con conectividad comercial a internet?",
                opciones: {a: "Santa Cruz de la Sierra", b: "La Paz", c: "Cochabamba", d: "Sucre"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué factor impulsó la adopción del internet en Bolivia en los años 2000?",
                opciones: {a: "Mayor acceso a computadoras personales", b: "Desarrollo de inteligencia artificial", c: "Regulación estricta de telecomunicaciones", d: "Migración masiva rural-urbana"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué protocolo se consolidó como estándar para internet en Bolivia durante la década de 1990?",
                opciones: {a: "FTP", b: "HTTP", c: "TCP/IP", d: "SMTP"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál fue el primer proveedor comercial de internet en Bolivia?",
                opciones: {a: "ENTEL", b: "Cotas", c: "Tigo", d: "Telecel"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué característica definió la primera etapa de internet en Bolivia?",
                opciones: {a: "Red limitada a instituciones académicas", b: "Cobertura nacional masiva", c: "Aplicaciones de comercio electrónico", d: "Redes sociales locales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál fue un efecto social de la llegada del internet en los años 90?",
                opciones: {a: "Conectividad limitada a sectores urbanos", b: "Acceso universal inmediato", c: "Eliminación del correo postal", d: "Automatización industrial"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué herramienta fue popular entre estudiantes bolivianos al inicio del internet?",
                opciones: {a: "Correo electrónico", b: "Redes sociales", c: "Aplicaciones móviles", d: "Video llamadas"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué desafío tecnológico limitó el uso de internet en zonas rurales?",
                opciones: {a: "Baja velocidad y cobertura limitada", b: "Sobrecarga de datos", c: "Exceso de capacitación técnica", d: "Redes sociales invasivas"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué hito marcó la transición a internet de banda ancha en Bolivia?",
                opciones: {a: "Extensión de fibra óptica nacional", b: "Primer correo electrónico", c: "Primer chat en línea", d: "Introducción de teléfonos móviles"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tuvo la digitalización temprana en universidades?",
                opciones: {a: "Facilitó acceso a bibliografía internacional", b: "Eliminó clases presenciales", c: "Redujo la matrícula universitaria", d: "Aumentó la burocracia"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál fue el primer servicio de internet en Bolivia enfocado en la ciudadanía?",
                opciones: {a: "Correo electrónico público", b: "Red académica", c: "Televisión por cable", d: "Telefonía móvil"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto económico tuvo la llegada del internet en el sector privado?",
                opciones: {a: "Aceleró la creación de startups tecnológicas", b: "Disminuyó la productividad", c: "Causó pérdida de empleos masiva", d: "Limitó la inversión extranjera"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué hito marcó la integración de Bolivia a la red internacional?",
                opciones: {a: "Conexión a universidades extranjeras", b: "Primer correo electrónico enviado desde Bolivia", c: "Primer sitio web gubernamental", d: "Primer teléfono móvil con internet"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál fue el efecto de internet en el acceso a información en Bolivia?",
                opciones: {a: "Facilitó la investigación académica y profesional", b: "Disminuyó la lectura de libros", c: "Limitó las bibliotecas públicas", d: "Aumentó la desinformación masiva"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tuvo la conectividad limitada en zonas rurales?",
                opciones: {a: "Profundizó la brecha digital", b: "Generó inclusión inmediata", c: "No tuvo efecto", d: "Redujo la educación urbana"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué ciudad lideró la instalación de fibra óptica en Bolivia?",
                opciones: {a: "La Paz", b: "Santa Cruz de la Sierra", c: "Cochabamba", d: "Sucre"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué desafío político afectó la expansión del internet?",
                opciones: {a: "Falta de políticas de conectividad rural", b: "Saturación de redes sociales", c: "Competencia de radio tradicional", d: "Exceso de regulación académica"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué servicio digital marcó la transición de internet educativo a comercial?",
                opciones: {a: "Correo electrónico público", b: "Websites corporativos", c: "Chats académicos", d: "Listas de correo internas"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué sector fue el primero en adoptar internet de manera masiva?",
                opciones: {a: "Educativo", b: "Salud", c: "Industrial", d: "Agrícola"},
                correcta: "a",
                tiempo: 60
            },
            {pregunta:"Año de primera conexión a Internet en Bolivia?", opciones:{a:"1991", b:"1985", c:"2000", d:"1995"}, correcta:"a", tiempo:60},
            {pregunta:"Hito importante en expansión Internet?", opciones:{a:"Redes 5G", b:"Primer proveedor comercial", c:"Cierre universidades", d:"Eliminar radios"}, correcta:"b", tiempo:60},
            {pregunta:"Impacto de Internet en educación?", opciones:{a:"Acceso información rápida", b:"Mayor rezago", c:"No impacto", d:"Aumento desigualdad"}, correcta:"a", tiempo:60},
            {pregunta:"Desafío de conectividad rural?", opciones:{a:"Acceso limitado a contenido online", b:"Mayor participación digital", c:"Saturación de red", d:"No hay desafío"}, correcta:"a", tiempo:60},
            {pregunta:"Evolución reciente de Internet en Bolivia?", opciones:{a:"Infraestructura 5G y fibra", b:"Retroceso conectividad", c:"Cierre universidades", d:"Menor uso móvil"}, correcta:"a", tiempo:60}
        ]
    },
    {
        nombre:"TEMA 4: Impacto digitalización y redes sociales",
        preguntas:[
            {
                pregunta: "¿Qué efecto principal tuvo la digitalización en la participación política juvenil?",
                opciones: {a: "Aumento del activismo digital", b: "Reducción de debates presenciales", c: "Desinterés absoluto", d: "Exclusión de votantes adultos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es una herramienta digital que facilita la participación política?",
                opciones: {a: "Plataformas de debate online", b: "Periódicos impresos", c: "Reuniones únicamente presenciales", d: "Anuncios por radio"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué riesgo asociado a las redes sociales puede afectar la política juvenil?",
                opciones: {a: "Desinformación y noticias falsas", b: "Falta de interacción social", c: "Mejora de la transparencia", d: "Incremento de educación formal"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué beneficio trae el uso de redes sociales en la política para jóvenes?",
                opciones: {a: "Acceso a información y debate inmediato", b: "Exclusión de minorías", c: "Reducción de participación electoral", d: "Limitación de contenidos educativos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué factor limita la participación política digital de los jóvenes en zonas rurales?",
                opciones: {a: "Baja conectividad a internet", b: "Exceso de contenidos digitales", c: "Altos niveles de alfabetización", d: "Saturación de medios de comunicación"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es un efecto negativo de la viralización de noticias políticas?",
                opciones: {a: "Propagación de desinformación", b: "Mayor educación cívica", c: "Incremento de participación presencial", d: "Aumento de debates formales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué red social ha sido más influyente para jóvenes bolivianos en política?",
                opciones: {a: "Facebook", b: "Radio comunitaria", c: "Televisión nacional", d: "Periódicos impresos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia puede aumentar la participación política digital?",
                opciones: {a: "Capacitación en alfabetización digital y política", b: "Eliminación de redes sociales", c: "Restricción de contenidos", d: "Publicidad política tradicional"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene la interacción en redes sobre el debate político?",
                opciones: {a: "Promueve diálogo y difusión de ideas", b: "Reduce la información disponible", c: "Aumenta la censura de opiniones", d: "Limita la participación rural"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué riesgo electoral está asociado a la digitalización?",
                opciones: {a: "Manipulación de información y encuestas falsas", b: "Mejora del conocimiento cívico", c: "Incremento de votación responsable", d: "Educación política garantizada"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué característica de los jóvenes facilita el activismo digital?",
                opciones: {a: "Familiaridad con tecnologías y redes sociales", b: "Exclusiva participación presencial", c: "Bajo interés por noticias online", d: "Preferencia por medios impresos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo influye el contenido multimedia en la participación política juvenil?",
                opciones: {a: "Aumenta comprensión y motivación", b: "Reduce la atención en debates", c: "Genera confusión total", d: "Limita la educación formal"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué limitación tecnológica reduce la participación digital?",
                opciones: {a: "Baja velocidad de internet y falta de dispositivos", b: "Exceso de alfabetización digital", c: "Acceso masivo a plataformas", d: "Regulación adecuada"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué ventaja ofrece la digitalización frente a métodos tradicionales?",
                opciones: {a: "Mayor alcance y participación inclusiva", b: "Reducción del interés juvenil", c: "Fomento del aislamiento social", d: "Exclusión de opiniones diversas"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué papel tienen los influencers en la política juvenil?",
                opciones: {a: "Difunden información y generan movilización", b: "Solo entretenimiento sin efecto político", c: "Excluyen debates serios", d: "Aumentan la censura gubernamental"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tienen los grupos de discusión online?",
                opciones: {a: "Facilitan debate y formación de opinión", b: "Limitan acceso a información política", c: "Reducen la participación rural", d: "Generan desinformación automáticamente"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es un desafío ético en el uso de redes sociales para política?",
                opciones: {a: "Difusión de contenido manipulado o sesgado", b: "Aumento de participación educativa", c: "Mayor transparencia electoral", d: "Mejora del debate formal"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene la digitalización en campañas políticas?",
                opciones: {a: "Permite llegar a más jóvenes y zonas remotas", b: "Disminuye el alcance de información", c: "Excluye medios tradicionales", d: "Reduce debates presenciales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida fortalece la participación política digital?",
                opciones: {a: "Programas de educación digital y cívica", b: "Bloqueo de plataformas online", c: "Eliminación de información política", d: "Uso exclusivo de medios impresos"},
                correcta: "a",
                tiempo: 60
            },
            {pregunta:"Efecto redes sociales en jóvenes?", opciones:{a:"Mayor conciencia política", b:"Menor participación", c:"Sin efecto", d:"Solo adultos"}, correcta:"a", tiempo:60},
            {pregunta:"Riesgo de información digital?", opciones:{a:"Desinformación y polarización", b:"Mejor educación", c:"Aumento lectura crítica", d:"No afecta"}, correcta:"a", tiempo:60},
            {pregunta:"Uso de redes para activismo?", opciones:{a:"Mayor movilización", b:"Reducción activismo", c:"Sin efecto", d:"Solo campañas comerciales"}, correcta:"a", tiempo:60},
            {pregunta:"Desafío de privacidad digital?", opciones:{a:"Filtración de datos personales", b:"Mayor seguridad", c:"Sin riesgo", d:"Solo adultos afectados"}, correcta:"a", tiempo:60},
            {pregunta:"Impacto de desinformación?", opciones:{a:"Confusión y decisiones erróneas", b:"Aumento conocimiento", c:"Sin efecto", d:"Mayor participación"}, correcta:"a", tiempo:60}
        ]
    },
    {
        nombre:"TEMA 5: Inteligencia Artificial en educación",
        preguntas:[
            {
                pregunta: "¿Cuál es un beneficio principal de la IA en la educación?",
                opciones: {a: "Personalización del aprendizaje según el estudiante", b: "Eliminar completamente al docente", c: "Reducir el número de escuelas", d: "Aumentar tareas repetitivas"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué riesgo ético puede surgir con el uso de IA en educación?",
                opciones: {a: "Sesgos en la evaluación de los estudiantes", b: "Mejora del aprendizaje equitativo", c: "Reducción de la carga docente", d: "Incremento de creatividad"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo puede la IA apoyar la enseñanza de materias complejas?",
                opciones: {a: "Generando ejercicios adaptativos y explicaciones", b: "Reemplazando completamente a los maestros", c: "Eliminando la necesidad de libros", d: "Reduciendo el número de clases"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué desafío técnico limita la implementación de IA educativa en Bolivia?",
                opciones: {a: "Baja conectividad y falta de infraestructura", b: "Exceso de capacitación docente", c: "Demasiados dispositivos en escuelas rurales", d: "Saturación de plataformas de aprendizaje"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es un impacto positivo de la IA en evaluaciones?",
                opciones: {a: "Retroalimentación inmediata y personalizada", b: "Mayor confusión entre estudiantes", c: "Eliminación de calificaciones", d: "Reemplazo de exámenes tradicionales"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida puede mitigar riesgos de desinformación en IA educativa?",
                opciones: {a: "Supervisión docente y control de contenidos", b: "Eliminar IA de todas las aulas", c: "Solo usar IA en universidades privadas", d: "Ignorar resultados de algoritmos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué ventaja tiene la IA en la educación a distancia?",
                opciones: {a: "Monitoreo y seguimiento del progreso de estudiantes", b: "Elimina interacción con el docente", c: "Reemplaza todas las clases presenciales", d: "Reduce motivación del alumno"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué papel tienen los sistemas de IA en la adaptación curricular?",
                opciones: {a: "Ajustan el contenido al nivel de cada estudiante", b: "Obligan a todos a seguir el mismo ritmo", c: "Reducen la diversidad de materias", d: "Sustituyen la evaluación docente"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es un efecto positivo de la IA en la motivación estudiantil?",
                opciones: {a: "Contenidos interactivos y personalizados", b: "Menor interés por aprender", c: "Reducción de interacción social", d: "Aumento del estrés académico"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué limita la adopción de IA en zonas rurales?",
                opciones: {a: "Falta de conectividad y capacitación docente", b: "Exceso de cursos en línea", c: "Abundancia de recursos digitales", d: "Mayor acceso a bibliotecas"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida puede aumentar la inclusión tecnológica en educación?",
                opciones: {a: "Capacitación docente y acceso equitativo a dispositivos", b: "Uso exclusivo de libros impresos", c: "Reducir clases en línea", d: "Solo aulas urbanas con IA"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo puede la IA mejorar la eficiencia de la enseñanza?",
                opciones: {a: "Automatizando tareas repetitivas y análisis de resultados", b: "Eliminando interacción docente-alumno", c: "Reduciendo contenidos educativos", d: "Reemplazando clases presenciales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué beneficio tiene el análisis de datos de IA en educación?",
                opciones: {a: "Identificación de áreas de mejora por estudiante", b: "Exclusión de estudiantes rezagados", c: "Simplificación excesiva de contenidos", d: "Reducción de creatividad docente"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué riesgo social puede surgir del uso de IA sin regulación?",
                opciones: {a: "Desigualdad y sesgos en aprendizaje", b: "Participación igualitaria", c: "Mayor inclusión de minorías", d: "Incremento del pensamiento crítico"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo ayuda la IA en ejercicios educativos de química o matemáticas?",
                opciones: {a: "Genera problemas adaptados al nivel del estudiante", b: "Reemplaza el laboratorio físico completamente", c: "Limita la creatividad en soluciones", d: "Elimina la supervisión docente"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué importancia tiene la transparencia en el uso de IA educativa?",
                opciones: {a: "Garantiza confianza y ética en el aprendizaje", b: "Permite manipulación de resultados", c: "Reduce la participación estudiantil", d: "No tiene relevancia"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué beneficio ofrece la IA en la evaluación continua?",
                opciones: {a: "Retroalimentación inmediata y seguimiento constante", b: "Elimina la necesidad de evaluación", c: "Genera calificaciones aleatorias", d: "Reduce motivación del estudiante"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué limitación técnica debe considerarse en IA educativa?",
                opciones: {a: "Disponibilidad de internet y dispositivos adecuados", b: "Exceso de plataformas digitales", c: "Saturación de recursos humanos", d: "Abundancia de materiales impresos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida asegura la correcta integración de IA en educación?",
                opciones: {a: "Formación docente, regulación ética y soporte tecnológico", b: "Uso exclusivo de IA sin docente", c: "Reducción del currículum académico", d: "Exclusión de estudiantes rurales"},
                correcta: "a",
                tiempo: 60
            },
            {pregunta:"Beneficio de IA en educación?", opciones:{a:"Personalización aprendizaje", b:"Eliminar docentes", c:"Reducir infraestructuras", d:"Aumento desinterés"}, correcta:"a", tiempo:60},
            {pregunta:"Riesgo ético de IA?", opciones:{a:"Desinformación y sesgos", b:"Mayor creatividad", c:"Reducción costos", d:"Mayor inclusión"}, correcta:"a", tiempo:60},
            {pregunta:"Uso de IA en ejercicios?", opciones:{a:"Retroalimentación automática", b:"No aplica", c:"Solo libros", d:"Sustituye docente"}, correcta:"a", tiempo:60},
            {pregunta:"Impacto en rendimiento estudiantil?", opciones:{a:"Mejora seguimiento personalizado", b:"Disminuye", c:"Sin efecto", d:"Solo docentes afectados"}, correcta:"a", tiempo:60},
            {pregunta:"Condición para IA efectiva?", opciones:{a:"Supervisión docente y contexto", b:"Solo software", c:"Hardware caro", d:"Sin regulación"}, correcta:"a", tiempo:60}
        ]
    },
    {
        nombre:"TEMA 6: Salud y sostenibilidad",
        preguntas:[
            {
                pregunta: "¿Cómo afecta el cambio climático a la propagación de enfermedades transmitidas por vectores?",
                opciones: {a: "Disminuye la actividad de vectores", b: "Aumenta zonas de riesgo y periodos de transmisión", c: "No afecta la incidencia", d: "Elimina los vectores por completo"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué enfermedad transmitida por vectores ha mostrado mayor expansión en Bolivia?",
                opciones: {a: "Dengue", b: "Tuberculosis", c: "Influenza", d: "Varicela"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida contribuye a reducir la incidencia de enfermedades por vectores?",
                opciones: {a: "Eliminar hospitales rurales", b: "Control de criaderos y fumigación responsable", c: "Aumentar el uso de antibióticos indiscriminados", d: "Reducir educación sanitaria"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo impacta la deforestación en la salud vectorial?",
                opciones: {a: "Crea nuevos hábitats para vectores", b: "Elimina todos los mosquitos", c: "Reduce transmisión de enfermedades", d: "No tiene efecto"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué rol tiene la educación sanitaria en la prevención de enfermedades vectoriales?",
                opciones: {a: "No influye en la salud comunitaria", b: "Aumenta la exposición a vectores", c: "Promueve hábitos de higiene y prevención", d: "Disminuye la eficiencia de vacunas"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué factor ambiental incrementa el riesgo de dengue?",
                opciones: {a: "Altas temperaturas sin humedad", b: "Lluvias intensas y acumulación de agua estancada", c: "Disminución de la vegetación urbana", d: "Vientos fuertes constantes"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene el calentamiento global en mosquitos transmisores?",
                opciones: {a: "Los elimina completamente", b: "Mayor reproducción y expansión geográfica", c: "No altera su distribución", d: "Disminución de su ciclo vital"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia es clave para la vigilancia epidemiológica en zonas afectadas?",
                opciones: {a: "Monitoreo de vectores y notificación de casos", b: "Reducir personal sanitario", c: "Eliminar datos de incidencia histórica", d: "Solo intervención en ciudades grandes"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene la urbanización desordenada en enfermedades vectoriales?",
                opciones: {a: "Reduce población de vectores", b: "Aumenta criaderos de mosquitos y riesgo de epidemias", c: "Mejora la salud comunitaria", d: "No tiene efecto"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo ayuda la recolección adecuada de residuos a la prevención de vectores?",
                opciones: {a: "Solo reduce moscas, no mosquitos", b: "Elimina lugares de reproducción para mosquitos", c: "Incrementa vectores", d: "No tiene impacto significativo"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué rol juega la temperatura en la transmisión de malaria?",
                opciones: {a: "Disminuye la supervivencia del parásito", b: "Elimina la enfermedad", c: "Acelera el ciclo del parásito en mosquitos", d: "No tiene efecto"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia ambiental puede reducir vectores en zonas rurales?",
                opciones: {a: "Drenaje de charcos y control de agua estancada", b: "Aumentar la deforestación", c: "Eliminar pastos y cultivos", d: "Incrementar represas sin control"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene la variabilidad climática en enfermedades transmitidas por vectores?",
                opciones: {a: "Incrementa brotes y cambios de distribución", b: "Disminuye la incidencia de brotes", c: "Elimina vectores locales", d: "No tiene impacto"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida de salud pública es efectiva contra el dengue?",
                opciones: {a: "Educación comunitaria y fumigación selectiva", b: "Uso de antibióticos en toda la población", c: "Cierre de centros de salud rurales", d: "Vacunación exclusiva en hospitales urbanos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene el cambio climático en la temporada de transmisión de vectores?",
                opciones: {a: "Se prolonga y aumenta intensidad", b: "Se acorta significativamente", c: "Se detiene por completo", d: "No cambia"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué factor social influye en la propagación de enfermedades vectoriales?",
                opciones: {a: "Acceso universal a vacunas", b: "Falta de educación y saneamiento básico", c: "Alta capacitación sanitaria", d: "Monitoreo constante de vectores"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene el aumento de lluvias extremas en vectores?",
                opciones: {a: "Aumenta criaderos de mosquitos y riesgo de epidemias", b: "Disminuye reproducción", c: "Elimina vectores", d: "No tiene efecto"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué papel juega la comunidad en la prevención de enfermedades vectoriales?",
                opciones: {a: "Incrementar residuos sin control", b: "Eliminar criaderos y seguir prácticas de higiene", c: "Evitar vacunación", d: "Solo esperar intervención estatal"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene el aumento de temperatura en vectores urbanos?",
                opciones: {a: "Mayor actividad y reproducción de mosquitos", b: "Reducción de población", c: "Elimina enfermedades", d: "No afecta vectores"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo impacta la humedad en la proliferación de mosquitos?",
                opciones: {a: "Disminuye su reproducción", b: "Aumenta supervivencia y reproducción", c: "No tiene efecto", d: "Elimina enfermedades"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué consecuencia tiene la variabilidad de temperatura en vectores?",
                opciones: {a: "Reduce brotes", b: "Favorece ciclos rápidos de reproducción", c: "Elimina enfermedades", d: "No afecta población"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia comunitaria previene el dengue?",
                opciones: {a: "Uso de mosquiteros y eliminación de agua estancada", b: "Incrementar residuos plásticos", c: "Evitar higiene doméstica", d: "No hacer control ambiental"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tienen cambios extremos de precipitación en la incidencia de vectores?",
                opciones: {a: "Incrementa criaderos", b: "Reduce población", c: "Elimina mosquitos", d: "No tiene efecto"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo influye la altitud en la distribución de vectores?",
                opciones: {a: "Mayor altitud limita la presencia de vectores", b: "No afecta su distribución", c: "Los vectores proliferan más", d: "Solo afecta virus, no vectores"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene la sequía prolongada en enfermedades vectoriales?",
                opciones: {a: "Reduce criaderos y transmisión", b: "Aumenta brotes", c: "No afecta", d: "Elimina vectores"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida reduce el riesgo de fiebre chikungunya?",
                opciones: {a: "Eliminación de agua acumulada", b: "Uso de antibióticos", c: "Vacunación general", d: "Reducción de hospitales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo afecta la temperatura a la incubación de virus en mosquitos?",
                opciones: {a: "Acelera la incubación y aumenta transmisión", b: "Disminuye transmisión", c: "No tiene efecto", d: "Elimina virus"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene el cambio climático en la distribución geográfica del dengue?",
                opciones: {a: "Se amplía a zonas más altas y frías", b: "Se restringe a regiones tropicales", c: "Se elimina en ciudades", d: "No hay cambios"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué rol tiene el saneamiento básico en prevención de vectores?",
                opciones: {a: "Elimina criaderos y reduce brotes", b: "No influye en vectores", c: "Aumenta riesgo", d: "Solo previene bacterias"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene la deforestación en el aumento de malaria?",
                opciones: {a: "Incrementa exposición a vectores y brotes", b: "Disminuye casos", c: "No tiene efecto", d: "Elimina vectores"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia nacional ayuda a controlar enfermedades por vectores?",
                opciones: {a: "Campañas de fumigación y educación sanitaria", b: "Reducir hospitales rurales", c: "Eliminar vigilancia epidemiológica", d: "Solo atención hospitalaria"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo afecta el aumento de humedad en la incidencia de dengue?",
                opciones: {a: "Favorece la reproducción de mosquitos y aumenta casos", b: "Disminuye brotes", c: "No hay efecto", d: "Elimina enfermedades"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene el cambio climático en chikungunya?",
                opciones: {a: "Expansión geográfica y mayor incidencia", b: "Disminuye casos", c: "No cambia distribución", d: "Elimina virus"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida comunitaria reduce zika y dengue?",
                opciones: {a: "Eliminación de recipientes con agua estancada", b: "Uso de antibióticos", c: "Vacunación indiscriminada", d: "Ignorar criaderos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene la temperatura en mosquitos Aedes aegypti?",
                opciones: {a: "Mayor actividad y reproducción", b: "Reducción drástica de población", c: "No afecta", d: "Elimina virus"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué relación existe entre lluvias intensas y dengue?",
                opciones: {a: "Aumentan criaderos y riesgo de epidemias", b: "Disminuyen transmisión", c: "Eliminan mosquitos", d: "No tiene efecto"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene el cambio climático en la salud pública rural?",
                opciones: {a: "Mayor riesgo de brotes de enfermedades vectoriales", b: "Reducción de enfermedades", c: "No afecta salud rural", d: "Elimina vectores"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo contribuye la vigilancia epidemiológica al control de vectores?",
                opciones: {a: "Detecta brotes y permite respuesta temprana", b: "Ignora datos de incidencia", c: "Solo monitorea ciudades grandes", d: "No tiene impacto"},
                correcta: "a",
                tiempo: 60
            },
            {pregunta:"Impacto cambio climático en vectores?", opciones:{a:"Incrementa dengue y malaria", b:"Elimina vectores", c:"No afecta", d:"Reduce mortalidad"}, correcta:"a", tiempo:60},
            {pregunta:"Medida mitigación enfermedades?", opciones:{a:"Gestión sostenible del agua", b:"Reducir vacunas", c:"Incrementar deforestación", d:"Eliminar hospitales"}, correcta:"a", tiempo:60},
            {pregunta:"Efecto retroceso glaciares?", opciones:{a:"Menor disponibilidad agua", b:"Mayor agua", c:"Sin efecto", d:"Mejor calidad"}, correcta:"a", tiempo:60},
            {pregunta:"Enfermedades emergentes por clima?", opciones:{a:"Fiebre chikungunya", b:"Solo gripe común", c:"No hay efecto", d:"Reducción enfermedades"}, correcta:"a", tiempo:60},
            {pregunta:"Estrategia de prevención?", opciones:{a:"Monitoreo sanitario y educación", b:"Ignorar clima", c:"Eliminar centros de salud", d:"No aplica"}, correcta:"a", tiempo:60}
        ]
    },
    {
        nombre:"TEMA 7: Economía circular y gestión de residuos",
        preguntas:[
            {
                pregunta: "¿Cuál es un beneficio principal de la gestión de residuos sólidos?",
                opciones: {a: "Reducción de contaminación y ahorro de recursos", b: "Incremento de basura en vertederos", c: "Aumento de emisiones", d: "Destrucción de ecosistemas"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué práctica promueve la economía circular?",
                opciones: {a: "Reutilización de materiales y productos", b: "Desechar inmediatamente todo", c: "Quema de residuos sin control", d: "Extracción constante de recursos"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de residuo requiere tratamiento especial?",
                opciones: {a: "Residuos peligrosos como químicos y baterías", b: "Residuos orgánicos comunes", c: "Cartón limpio", d: "Papel reciclable"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es un desafío para implementar economía circular en Bolivia?",
                opciones: {a: "Falta de infraestructura de reciclaje", b: "Exceso de educación ambiental", c: "Sobrecapacidad de plantas de reciclaje", d: "Bajo consumo de productos"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia reduce residuos electrónicos?",
                opciones: {a: "Recolección y reciclaje especializado", b: "Desechar en vertederos comunes", c: "Quemar componentes", d: "Ignorar su reciclaje"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene la educación ambiental en la gestión de residuos?",
                opciones: {a: "Aumenta conciencia y participación ciudadana", b: "Genera más residuos", c: "No tiene efecto", d: "Incrementa contaminación"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué objetivo tiene la clasificación de residuos en origen?",
                opciones: {a: "Facilitar reciclaje y tratamiento adecuado", b: "Mezclar todos los residuos", c: "Incrementar vertederos", d: "Evitar reciclaje"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué es el compostaje?",
                opciones: {a: "Transformación de residuos orgánicos en abono", b: "Quema de residuos plásticos", c: "Vertido de químicos al río", d: "Acumulación de basura"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de economía busca minimizar residuos?",
                opciones: {a: "Economía circular", b: "Economía lineal", c: "Economía extractiva", d: "Economía especulativa"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene la economía circular en la industria?",
                opciones: {a: "Promueve eficiencia y reutilización de recursos", b: "Aumenta desperdicio", c: "Reduce productividad", d: "No tiene impacto"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida puede mejorar la gestión de residuos urbanos?",
                opciones: {a: "Separación en origen y reciclaje", b: "Vertido indiscriminado", c: "Quema sin control", d: "Ignorar residuos orgánicos"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué es un residuo reciclable?",
                opciones: {a: "Material que puede procesarse y reutilizarse", b: "Cualquier tipo de basura", c: "Desechos orgánicos únicamente", d: "Residuos peligrosos no tratados"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué ventaja tiene la reutilización de productos?",
                opciones: {a: "Reduce extracción de recursos y contaminación", b: "Aumenta residuos en vertederos", c: "Genera contaminación atmosférica", d: "No tiene impacto"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué política puede incentivar la economía circular?",
                opciones: {a: "Regulaciones de reciclaje y recompensas a empresas sostenibles", b: "Eliminar reciclaje", c: "Promover vertederos ilegales", d: "Ignorar producción sostenible"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene la reducción de plásticos de un solo uso?",
                opciones: {a: "Disminuye contaminación y preserva ecosistemas", b: "Aumenta residuos sólidos", c: "No tiene efecto", d: "Incrementa basura en ríos"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué acción mejora la economía circular en la industria textil?",
                opciones: {a: "Reciclaje de telas y producción sostenible", b: "Desechar excedentes en vertederos", c: "Ignorar residuos textiles", d: "Aumentar uso de químicos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de residuos se pueden compostar?",
                opciones: {a: "Orgánicos como restos de comida y poda", b: "Plásticos y metales", c: "Residuos electrónicos", d: "Baterías y químicos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene el reciclaje en la economía nacional?",
                opciones: {a: "Genera empleo y reduce costos de producción", b: "No tiene efecto", c: "Aumenta contaminación", d: "Reduce eficiencia industrial"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué papel tienen los consumidores en la economía circular?",
                opciones: {a: "Separar residuos y optar por productos sostenibles", b: "Ignorar reciclaje", c: "Generar más residuos", d: "Evitar educación ambiental"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia reduce el desperdicio de alimentos?",
                opciones: {a: "Donación, compostaje y planificación de compras", b: "Desechar todo lo sobrante", c: "Ignorar fechas de caducidad", d: "Acumular basura orgánica"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene la economía circular en la sostenibilidad?",
                opciones: {a: "Disminuye presión sobre recursos naturales y contaminación", b: "Aumenta consumo de recursos", c: "No tiene efecto", d: "Genera más residuos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué acción empresarial contribuye a la economía circular?",
                opciones: {a: "Diseño de productos reciclables y duraderos", b: "Desechar materiales sin control", c: "Incrementar desperdicios", d: "Ignorar sostenibilidad"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene la separación de residuos en el hogar?",
                opciones: {a: "Facilita reciclaje y reduce contaminación", b: "No tiene efecto", c: "Aumenta residuos en vertederos", d: "Genera más basura química"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de residuo es más crítico para la salud pública?",
                opciones: {a: "Residuos hospitalarios", b: "Cartón limpio", c: "Papel reciclable", d: "Residuos orgánicos caseros"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué beneficio tiene la reutilización de envases?",
                opciones: {a: "Disminuye la producción de plásticos nuevos", b: "Incrementa desechos", c: "No impacta al medio ambiente", d: "Aumenta consumo de recursos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué es la valorización de residuos?",
                opciones: {a: "Convertir residuos en nuevos productos o energía", b: "Desechar basura en ríos", c: "Acumular vertederos", d: "Ignorar residuos peligrosos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida fomenta el reciclaje urbano?",
                opciones: {a: "Puntos de acopio y campañas educativas", b: "Verter basura en calles", c: "Quema de residuos", d: "Ignorar separación en origen"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de residuo es ideal para reciclaje industrial?",
                opciones: {a: "Metales, papel, cartón y plásticos limpios", b: "Residuos orgánicos", c: "Baterías y químicos sin tratamiento", d: "Escombros sin procesar"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene la reutilización de agua industrial?",
                opciones: {a: "Reduce consumo y contaminación", b: "Incrementa vertidos", c: "No tiene efecto", d: "Aumenta desperdicio"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia contribuye al cierre de ciclo de materiales?",
                opciones: {a: "Reciclaje, reutilización y compostaje", b: "Desechar todos los residuos", c: "Ignorar separación de residuos", d: "Vertido en ríos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida empresarial apoya economía circular?",
                opciones: {a: "Uso de materiales reciclados y duraderos", b: "Desecho indiscriminado", c: "Aumento de residuos", d: "Ignorar impacto ambiental"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué rol tiene la innovación en economía circular?",
                opciones: {a: "Diseño de productos sostenibles y reciclables", b: "Aumenta contaminación", c: "Ignora reciclaje", d: "Genera más residuos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué acción reduce el impacto ambiental de residuos plásticos?",
                opciones: {a: "Reutilización y reciclaje adecuado", b: "Quema en espacios abiertos", c: "Desechar en vertederos ilegales", d: "Ignorar reciclaje"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué beneficio genera la economía circular en Bolivia?",
                opciones: {a: "Conserva recursos y genera empleo", b: "Aumenta vertederos", c: "Incrementa contaminación", d: "Reduce eficiencia"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué práctica industrial promueve economía circular?",
                opciones: {a: "Reciclaje y diseño ecoeficiente", b: "Desecho sin control", c: "Quema de residuos", d: "Ignorar sostenibilidad"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia educativa apoya gestión de residuos?",
                opciones: {a: "Campañas de sensibilización y talleres prácticos", b: "Ignorar educación ambiental", c: "Fomentar vertederos clandestinos", d: "Eliminar reciclaje escolar"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de residuo industrial requiere control estricto?",
                opciones: {a: "Químicos y tóxicos", b: "Cartón limpio", c: "Plásticos reciclables", d: "Residuos orgánicos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia reduce basura electrónica?",
                opciones: {a: "Reciclaje especializado y recolección segura", b: "Desechar en vertederos comunes", c: "Ignorar el reciclaje", d: "Quema indiscriminada"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué acción del consumidor favorece economía circular?",
                opciones: {a: "Compra responsable y reutilización de productos", b: "Desechar todo sin control", c: "Ignorar reciclaje", d: "Generar más residuos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué papel tiene el gobierno en gestión de residuos?",
                opciones: {a: "Regulación, infraestructura y campañas educativas", b: "Ignorar reciclaje", c: "Permitir vertederos ilegales", d: "No intervenir"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia reduce contaminación por residuos plásticos?",
                opciones: {a: "Reciclaje, reuso y prohibición de plásticos de un solo uso", b: "Quema en espacios abiertos", c: "Vertido en ríos", d: "Ignorar reciclaje"},
                correcta: "a",
                tiempo: 60
            },
            {pregunta:"Qué es economía circular?", opciones:{a:"Reutilización y reciclaje", b:"Producción desechable", c:"Eliminar reciclaje", d:"Incremento residuos"}, correcta:"a", tiempo:60},
            {pregunta:"Beneficio gestión residuos sostenible?", opciones:{a:"Menor contaminación", b:"Más residuos", c:"Aumento emisiones", d:"Reducción eficiencia"}, correcta:"a", tiempo:60},
            {pregunta:"Estrategia para residuos?", opciones:{a:"Separación y reciclaje", b:"Tirar todo en río", c:"Quema indiscriminada", d:"Ignorar residuos"}, correcta:"a", tiempo:60},
            {pregunta:"Impacto social economía circular?", opciones:{a:"Crea empleos verdes", b:"Desempleo", c:"No impacto", d:"Incrementa pobreza"}, correcta:"a", tiempo:60},
            {pregunta:"Tecnología aplicada a reciclaje?", opciones:{a:"Plantas de valorización", b:"Solo vertederos", c:"No tecnología", d:"Incrementa contaminación"}, correcta:"a", tiempo:60}
        ]
    },
    {
        nombre:"TEMA 8: Resistencia a antibióticos",
        preguntas:[
            {
                pregunta: "¿Qué es la resistencia a los antibióticos?",
                opciones: {a: "Uso correcto de antibióticos", b: "Vacunación masiva", c: "Cuando las bacterias no responden a medicamentos que antes eran efectivos", d: "Inmunidad humana a enfermedades"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es una causa común de resistencia bacteriana?",
                opciones: {a: "Uso excesivo de antibióticos", b: "Lavado de manos frecuente", c: "Alimentación balanceada", d: "Vacunación temprana"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene la automedicación con antibióticos?",
                opciones: {a: "Mejora inmediata de la salud", b: "Promueve resistencia bacteriana", c: "Previene todas las enfermedades", d: "No tiene efecto"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo pueden prevenirse las infecciones resistentes?",
                opciones: {a: "Evitar la higiene", b: "Abuso de antibióticos", c: "Uso racional de antibióticos", d: "Ignorar síntomas"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué es un antibiótico de última línea?",
                opciones: {a: "Medicamento usado solo cuando otros fallan", b: "Cualquier antibiótico barato", c: "Suplemento vitamínico", d: "Vacuna preventiva"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es un riesgo de la resistencia a antibióticos?",
                opciones: {a: "Mayor eficacia de medicamentos", b: "Enfermedades difíciles de tratar", c: "Prevención automática", d: "Menor mortalidad"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué papel juega el personal sanitario en la resistencia?",
                opciones: {a: "Evitar lavado de manos", b: "Ignorar pautas clínicas", c: "Prescribir antibióticos solo cuando es necesario", d: "Recetar por rutina"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué impacto tiene la resistencia en hospitales?",
                opciones: {a: "No afecta la atención", b: "Reducción de contagios", c: "Menor tiempo de recuperación", d: "Infecciones más graves y prolongadas"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué práctica agrícola contribuye a la resistencia?",
                opciones: {a: "Uso de antibióticos en animales de forma indiscriminada", b: "Rotación de cultivos", c: "Fertilización orgánica", d: "Riego controlado"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué es la multirresistencia?",
                opciones: {a: "Uso de varios medicamentos correctamente", b: "Vacunas combinadas", c: "Alergias múltiples", d: "Bacterias resistentes a varios antibióticos simultáneamente"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es una medida para controlar la resistencia?",
                opciones: {a: "Campañas de concientización sobre uso de antibióticos", b: "Incrementar automedicación", c: "Reducir lavado de manos", d: "Ignorar infecciones"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué organismo monitorea la resistencia a nivel global?",
                opciones: {a: "Cruz Roja", b: "Organización Mundial de la Salud (OMS)", c: "UNESCO", d: "Organización Meteorológica Mundial"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Por qué los antibióticos no funcionan contra virus?",
                opciones: {a: "Porque los antibióticos son vitaminas", b: "Porque se necesita más dosis", c: "Porque los virus mueren solos", d: "Porque los virus no son bacterias"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué papel tiene la educación en la resistencia?",
                opciones: {a: "Fomentar automedicación", b: "Concientizar sobre uso responsable de antibióticos", c: "Ignorar infecciones leves", d: "Reducir higiene personal"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué son las bacterias resistentes?",
                opciones: {a: "Microbios inofensivos", b: "Virus peligrosos", c: "Parásitos internos", d: "Microorganismos que sobreviven a antibióticos"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué práctica médica evita la resistencia?",
                opciones: {a: "Recetar por costumbre", b: "Interrumpir cuando mejora", c: "Completar tratamientos antibióticos", d: "Compartir medicamentos"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué significa 'uso racional' de antibióticos?",
                opciones: {a: "Tomar todos los días sin indicación", b: "Comprar sin receta", c: "Compartir medicinas", d: "Tomar solo cuando es necesario y bajo prescripción"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Qué es la resistencia adquirida?",
                opciones: {a: "Cuando personas se hacen resistentes", b: "Cuando bacterias desarrollan mecanismos para sobrevivir antibióticos", c: "Inmunidad de vacunación", d: "Anticuerpos naturales"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la consecuencia de no terminar un antibiótico?",
                opciones: {a: "Mejora salud automáticamente", b: "Incrementa vitaminas", c: "Favorece resistencia bacteriana", d: "No pasa nada"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué bacterias causan mayor preocupación por resistencia?",
                opciones: {a: "Bacterias del suelo", b: "Bacterias no patógenas", c: "MRSA y E. coli resistentes", d: "Lactobacillus benéfico"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo afecta la resistencia a la cirugía?",
                opciones: {a: "No afecta procedimientos", b: "Mayor riesgo de infecciones postoperatorias", c: "Reduce mortalidad", d: "Menor riesgo"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué implica la resistencia extendida?",
                opciones: {a: "Bacterias resistentes a múltiples clases de antibióticos", b: "Uso combinado de fármacos", c: "Eficacia garantizada", d: "Resistencia humana"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué es un antibiótico de amplio espectro?",
                opciones: {a: "Solo contra parásitos", b: "Solo contra virus", c: "Actúa contra varias bacterias diferentes", d: "Solo contra hongos"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué es la vigilancia de resistencia?",
                opciones: {a: "Monitorear patrones de resistencia en bacterias", b: "Rastrear virus", c: "Contar pacientes hospitalizados", d: "Medir vacunación"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene la contaminación con antibióticos?",
                opciones: {a: "Favorece selección de bacterias resistentes", b: "Reduce resistencia", c: "No tiene efecto", d: "Incrementa vitaminas"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué práctica doméstica ayuda a prevenir resistencia?",
                opciones: {a: "No usar antibióticos sin receta médica", b: "Automedicación", c: "Compartir medicinas", d: "Ignorar higiene"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué significa bacteria multirresistente?",
                opciones: {a: "Bacterias que resisten varios antibióticos", b: "Bacterias no patógenas", c: "Virus resistentes a vacunas", d: "Hongos comunes"},
                correcta: "a",
                tiempo: 60
            }
        ]
    },
    {    nombre: "TEMA 9: Retroceso de glaciares en el Altiplano boliviano",
        preguntas: [
            {
                pregunta: "¿Cuál es la principal causa física del retroceso glaciar en el Altiplano boliviano?",
                opciones: {a: "Mayor evaporación por disminución de humedad relativa", b: "Aumento de la temperatura y disminución de nevadas", c: "Actividad sísmica en la cordillera", d: "Extracción de hielo para consumo urbano"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la función principal de los glaciares en la región del Altiplano?",
                opciones: {a: "Regular la temperatura media anual", b: "Suministrar agua de forma gradual durante la estación seca", c: "Incrementar la precipitación invernal", d: "Servir como atractivo turístico exclusivo"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Entre 1970 y 2020, ¿qué porcentaje aproximado de la superficie glaciar boliviana se ha perdido?",
                opciones: {a: "25%", b: "40%", c: "15%", d: "50%"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué herramienta se considera esencial para la gestión sostenible del agua en la cuenca del Río Desaguadero?",
                opciones: {a: "Planificación Integrada de Cuencas (PIC)", b: "Construcción de represas privadas", c: "Uso exclusivo de agua subterránea", d: "Traslado de cultivos a zonas bajas"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la diferencia principal entre la intervención de riego tecnificado y la reforestación?",
                opciones: {a: "Una actúa sobre la demanda y la otra sobre la oferta de agua", b: "Ambas actúan sobre la demanda de agua", c: "Ambas actúan sobre la oferta de agua", d: "Una aumenta el caudal de los ríos y la otra reduce la evaporación"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuánto ha aumentado la temperatura media anual en la región de La Paz entre 1970 y 2020?",
                opciones: {a: "0,5 °C", b: "1,2 °C", c: "2,5 °C", d: "3 °C"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué cultivo del Altiplano tiene alta demanda hídrica según el texto?",
                opciones: {a: "Papa", b: "Quinua", c: "Maíz", d: "Trigo"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué porcentaje del caudal anual del Río Desaguadero proviene de los glaciares?",
                opciones: {a: "5-10%", b: "10-15%", c: "20-30%", d: "40-50%"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia permite capturar humedad atmosférica y aumentar la infiltración del suelo?",
                opciones: {a: "Instalación de embalses", b: "Riego por inundación", c: "Reforestación de zonas altoandinas", d: "Construcción de canales de drenaje"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "La disminución de glaciares ha provocado:",
                opciones: {a: "Mayor producción agrícola", b: "Escasez de agua y conflictos por su uso", c: "Incremento de nieve invernal", d: "Reducción de la migración urbana"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué acción reduce el consumo de agua agrícola en un 30%?",
                opciones: {a: "Reforestación de laderas altoandinas", b: "Riego por goteo", c: "Construcción de represas", d: "Extracción de agua subterránea"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "La reforestación de áreas altoandinas aumenta la recarga de acuíferos en:",
                opciones: {a: "5%", b: "12%", c: "20%", d: "25%"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "La planificación integrada de cuencas disminuye:",
                opciones: {a: "Conflictos por el agua", b: "Caudal de ríos", c: "Precipitación invernal", d: "Evaporación del suelo"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "Si no se refuerzan las medidas de PIC, ¿qué riesgo aumenta?",
                opciones: {a: "Aumento del caudal de ríos", b: "Disminución de disponibilidad de agua para riego", c: "Reducción de la temperatura promedio", d: "Mayor precipitación invernal"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué porcentaje de la superficie cultivable de quinua se ha reducido en la última década?",
                opciones: {a: "15%", b: "25%", c: "30%", d: "40%"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Diferencia porcentual entre reducción de consumo por riego tecnificado y aumento de recarga por reforestación:",
                opciones: {a: "10%", b: "18%", c: "30%", d: "12%"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Ética de combinar riego tecnificado y reforestación:",
                opciones: {a: "Priorizar solo agricultura", b: "Tomar medidas aisladas", c: "Integrar estrategias para resiliencia hídrica", d: "Aumentar consumo de agua"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "Rol de la educación en gestión hídrica del Altiplano:",
                opciones: {a: "No se menciona", b: "Fomenta cultura de conservación y conciencia climática", c: "Sustituye reforestación", d: "Reduce evaporación de ríos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Balance de masa glaciar que indica retroceso:",
                opciones: {a: "C + M", b: "C - M", c: "M - C", d: "C × M"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Si continúa el retroceso, el aporte glaciar podría caer a:",
                opciones: {a: "Menos del 10%", b: "15-20%", c: "25%", d: "30%"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "Compromiso de Bolivia bajo el Acuerdo de París:",
                opciones: {a: "Reducir 10% para 2030", b: "Reducir 20% para 2030", c: "Reducir 30% para 2030", d: "No hay compromiso"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "Crecimiento de generación hidroeléctrica entre 2015 y 2022:",
                opciones: {a: "30%", b: "35%", c: "45%", d: "50%"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "Indicador para medir impacto de escasez hídrica en agricultura:",
                opciones: {a: "Huella hídrica de los cultivos", b: "Temperatura promedio anual", c: "Cantidad de nieve invernal", d: "Altitud de los glaciares"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "Escasez hídrica en Sajama ha provocado:",
                opciones: {a: "Reducción de minería", b: "Migración de familias campesinas a ciudades", c: "Incremento de precipitación", d: "Mayor rendimiento de cultivos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Función principal del Programa de Gestión de Cuencas del Río Desaguadero:",
                opciones: {a: "Solo mide caudal de ríos", b: "Combina monitoreo de glaciares, mediciones de caudales y riego tecnificado", c: "Se enfoca solo en reforestación", d: "Aumenta extracción de agua subterránea"},
                correcta: "b",
                tiempo: 60
            },
            // --- Las siguientes 25 preguntas se generan variando la correcta aleatoriamente ---
            {
                pregunta: "¿Qué factor intensifica la pérdida de masa glaciar?",
                opciones: {a: "Mayor nubosidad", b: "Aumento de temperatura", c: "Reducción de viento", d: "Incremento de fauna"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Glaciares ayudan a la agricultura porque:",
                opciones: {a: "Disminuyen temperatura", b: "Proveen agua gradual en estación seca", c: "Aumentan precipitación", d: "Frenan erosión"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "La superficie glaciar actual de Bolivia es aproximadamente:",
                opciones: {a: "730 km²", b: "1 000 km²", c: "1 250 km²", d: "500 km²"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "Riego tecnificado busca:",
                opciones: {a: "Aumentar consumo de agua", b: "Reducir consumo de agua", c: "Frenar evaporación natural", d: "Cambiar cultivos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Reforestación en laderas altoandinas impacta:",
                opciones: {a: "Disminuye recarga", b: "Aumenta recarga de acuíferos", c: "Reduce nieve", d: "Disminuye evaporación"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Qué porcentaje del agua de Río Desaguadero depende de glaciares:",
                opciones: {a: "20-30%", b: "10%", c: "5%", d: "50%"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "Efecto de PIC en conflictos por agua:",
                opciones: {a: "Incrementa", b: "Disminuye", c: "No cambia", d: "Solo aumenta caudal"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Temperatura media en La Paz ha aumentado:",
                opciones: {a: "1,2 °C", b: "0,8 °C", c: "2 °C", d: "3 °C"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "Glaciares retroceden cuando:",
                opciones: {a: "C > M", b: "C < M", c: "C = M", d: "Solo nieve aumenta"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Escasez hídrica fuerza:",
                opciones: {a: "Más cultivos", b: "Migración urbana", c: "Menos población", d: "Más lluvias"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Huella hídrica permite:",
                opciones: {a: "Medir impacto de escasez en cultivos", b: "Medir temperatura", c: "Medir nieve", d: "Medir altitud"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "Qué porcentaje podría caer del aporte glaciar si no se actúa:",
                opciones: {a: "Menos de 10%", b: "20%", c: "30%", d: "50%"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "Compromiso climático Bolivia:",
                opciones: {a: "Reducir 10%", b: "Reducir 30%", c: "Reducir 20%", d: "No hay compromiso"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Crecimiento hidroeléctrico reciente:",
                opciones: {a: "30%", b: "45%", c: "50%", d: "35%"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Ética hídrica sugiere:",
                opciones: {a: "Medidas aisladas", b: "Integración de estrategias", c: "Solo agricultura", d: "Aumento de consumo"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Balance de masa negativo indica:",
                opciones: {a: "Avance glaciar", b: "Retroceso glaciar", c: "Equilibrio", d: "No aplica"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Programa Gestión de Cuencas integra:",
                opciones: {a: "Monitoreo de glaciares, caudales y riego tecnificado", b: "Solo riego tecnificado", c: "Solo represas", d: "Solo reforestación"},
                correcta: "a",
                tiempo: 60
            }
        ]    
        
    },
    {   nombre: "Tema 10: Inteligencia Artificial Generativa y su Impacto en la Sociedad Boliviana",
        preguntas: [
                { pregunta: "¿Qué beneficio principal ofrece el uso de servicios en la nube para estudiantes y pequeñas empresas en Bolivia?",
                opciones: {a: "Acceso a potencia computacional sin hardware especializado", b: "Mayor control sobre servidores locales", c: "Evitar la conexión a internet", d: "Generar electricidad a partir de la nube"},
                correcta: "a",
                tiempo: 60
                },
                { pregunta: "En educación secundaria, ¿cuál es el tercer paso en la generación y retroalimentación de ejercicios de química?",
                opciones: {a: "El estudiante entrega el ejercicio", b: "El algoritmo evalúa la respuesta, indica errores y sugiere conceptos revisados", c: "El profesor imprime los ejercicios", d: "Se realiza un examen final"},
                correcta: "b",
                tiempo: 60
                },
                { pregunta: "¿Qué arquitectura utilizan los modelos generativos más influyentes?",
                opciones: {a: "Redes convolucionales", b: "Transformer", c: "Máquinas de soporte vectorial", d: "Redes bayesianas"},
                correcta: "b",
                tiempo: 60
                },
                { pregunta: "¿Cuál es la consecuencia social de la brecha digital entre zonas urbanas y rurales en Bolivia?",
                opciones: {a: "Aumenta la participación en la economía digital", b: "Limita la participación en la economía digital emergente", c: "Disminuye la necesidad de conectividad", d: "Fomenta el uso de IA en todas las escuelas"},
                correcta: "b",
                tiempo: 60
                },
                { pregunta: "¿Qué medida se propone para mitigar los riesgos de la IAG en Bolivia?",
                opciones: {a: "Incrementar el número de laboratorios físicos", b: "Transparencia en contenido generado por IA", c: "Reducir la educación digital", d: "Eliminar los servicios en la nube"},
                correcta: "b",
                tiempo: 60
                },
                { pregunta: "¿Qué efecto ha tenido la IAG en la startup MinkaDesign de Santa Cruz?",
                opciones: {a: "Aumento del 27% en la velocidad de lanzamiento de nuevos diseños", b: "Reducción de la creatividad local", c: "Desaparición de artesanos tradicionales", d: "Incremento de errores en los diseños"},
                correcta: "a",
                tiempo: 60
                },
                { pregunta: "¿Cuál es el principio general para enfrentar los problemas éticos de la IAG en Bolivia?",
                opciones: {a: "Privacidad, autonomía y lucro", b: "Transparencia, responsabilidad y acceso equitativo", c: "Innovación, competencia y regulación mínima", d: "Producción, consumo y exportación"},
                correcta: "b",
                tiempo: 60
                },
                { pregunta: "Si los docentes adoptan generación estocástica de tokens en IA, ¿qué se espera?",
                opciones: {a: "Respuestas más creativas y variadas", b: "Menor variedad de ejercicios", c: "Reducción de la creatividad de los estudiantes", d: "Automatización de toda la enseñanza"},
                correcta: "a",
                tiempo: 60
                },
                { pregunta: "¿Cuál es la limitación principal del enfoque del autor respecto a los procesos técnicos de la IAG?",
                opciones: {a: "Ignora el uso en servicios en la nube", b: "No garantiza acceso universal en zonas rurales", c: "Describe en exceso la infraestructura rural", d: "Se centra en la industria minera"},
                correcta: "b",
                tiempo: 60
                },
                { pregunta: "¿Qué estrategia combina la mitigación de la brecha digital con el aprovechamiento de la IA generativa para agricultores?",
                opciones: {a: "Acceso equitativo y programas de capacitación en IA", b: "Solo mejorar el hardware en ciudades", c: "Prohibir la IA en zonas rurales", d: "Enviar datos manualmente desde ciudades"},
                correcta: "a",
                tiempo: 60
                },
                { pregunta: "Según el artículo, ¿qué beneficio tiene la IAG para la educación en laboratorios de química?",
                opciones: {a: "Suplir parcialmente la falta de laboratorios bien equipados", b: "Reemplazar completamente al docente", c: "Eliminar exámenes de laboratorio", d: "Generar reportes de laboratorio físicos"},
                correcta: "a",
                tiempo: 60
                },
                { pregunta: "¿Qué aplicación de la IAG se menciona en la industria creativa boliviana?",
                opciones: {a: "Diseño de patrones textiles inspirados en la estética aymara", b: "Extracción de minerales con IA", c: "Cultivo de quinoa automatizado", d: "Monitoreo climático de glaciares"},
                correcta: "a",
                tiempo: 60
                },
                { pregunta: "¿Qué ventaja tiene la IAG para programadores bolivianos?",
                opciones: {a: "Escribir funciones automáticamente y reducir tiempo de desarrollo", b: "Reemplazar completamente al equipo de desarrollo", c: "Evitar el uso de lenguajes de programación", d: "Eliminar errores automáticamente en código legado"},
                correcta: "a",
                tiempo: 60
                },
                { pregunta: "Según el texto, ¿qué riesgo ético genera la IAG?",
                opciones: {a: "Creación de deepfakes y reproducción de sesgos", b: "Aumento de alfabetización digital", c: "Mayor acceso a educación rural", d: "Disminución de creatividad artística"},
                correcta: "a",
                tiempo: 60
                },
                { pregunta: "¿Qué propuesta se sugiere para garantizar acceso equitativo a la IAG?",
                opciones: {a: "Invertir en infraestructura de internet de alta velocidad en zonas rurales", b: "Prohibir la IAG en zonas urbanas", c: "Reducir la conectividad en ciudades", d: "Eliminar servicios en la nube"},
                correcta: "a",
                tiempo: 60
                },
                { pregunta: "¿Qué resultado se observa al integrar asistentes de IA en programación en Cochabamba?",
                opciones: {a: "Incremento del 15% en la tasa de aprobación", b: "Disminución de creatividad de los estudiantes", c: "Reducción de asistencia a clases", d: "Aumento de problemas técnicos sin solución"},
                correcta: "a",
                tiempo: 60
                },
                { pregunta: "¿Cuál es la función principal del mecanismo de atención en los transformadores?",
                opciones: {a: "Ponderar la relevancia de cada elemento del input para generar contenido", b: "Reducir la cantidad de datos necesarios", c: "Incrementar la velocidad de internet", d: "Sustituir al docente"},
                correcta: "a",
                tiempo: 60
                },
                { pregunta: "¿Qué efecto tiene la IAG en la huella ambiental de la industria textil?",
                opciones: {a: "Disminuye la necesidad de prototipos físicos y residuos", b: "Aumenta el consumo de agua", c: "Incrementa el uso de tintes químicos", d: "Elimina por completo la producción manual"},
                correcta: "a",
                tiempo: 60
                },
                { pregunta: "¿Qué limitación enfrenta la IAG en zonas rurales de Bolivia?",
                opciones: {a: "Baja conectividad y escaso acceso a internet estable", b: "Exceso de hardware especializado", c: "Saturación de laboratorios de IA", d: "Falta de talento urbano"},
                correcta: "a",
                tiempo: 60
                },
                { pregunta: "¿Qué medida se recomienda para aplicar transparencia en evaluaciones académicas con IA?",
                opciones: {a: "Indicar claramente que la salida es generada por IA y capacitar docentes", b: "Ocultar que se utiliza IA para no confundir estudiantes", c: "Usar IA solo en exámenes finales", d: "Eliminar retroalimentación automática"},
                correcta: "a",
                tiempo: 60
                },
                // Preguntas 26-50
                { pregunta: "¿Cuál es un riesgo de depender demasiado de la IAG en la educación?", 
                opciones: {a: "Aumento de pensamiento crítico en estudiantes", b: "Disminución de habilidades analíticas", c: "Mayor creatividad individual", d: "Reducción de errores en tareas"}, 
                correcta: "b", tiempo: 60 },
                { pregunta: "En la industria creativa, la IAG permite:", 
                opciones: {a: "Reemplazar por completo al diseñador humano", b: "Inspirar y acelerar el proceso creativo", c: "Eliminar el trabajo manual tradicional", d: "Reducir costos sin supervisión"}, 
                correcta: "b", tiempo: 60 },
                { pregunta: "Un desafío técnico de la IAG es:", 
                opciones: {a: "Reducir la creatividad del modelo", b: "Evitar sesgos y generar respuestas precisas", c: "Incrementar el tiempo de entrenamiento humano", d: "Eliminar la necesidad de datos"}, 
                correcta: "b", tiempo: 60 },
                { pregunta: "La IA generativa puede impactar la economía mediante:", 
                opciones: {a: "Creación de nuevos productos y servicios", b: "Reducción de innovación", c: "Limitación de la conectividad urbana", d: "Eliminación de pequeños negocios"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "Para mitigar riesgos legales de la IAG se recomienda:", 
                opciones: {a: "Capacitación legal y ética", b: "Ignorar la propiedad intelectual", c: "Evitar su uso en industrias", d: "Generar contenido sin autorización"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "La arquitectura Transformer se caracteriza por:", 
                opciones: {a: "Procesar datos secuenciales con atención", b: "Usar únicamente redes convolucionales", c: "Requerir hardware mínimo", d: "No poder aprender lenguaje"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "Una aplicación práctica de la IAG en Bolivia es:", 
                opciones: {a: "Generación de textos educativos personalizados", b: "Automatizar el transporte público", c: "Control de la minería ilegal", d: "Monitoreo climático exclusivo"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "El acceso desigual a la IA genera:", 
                opciones: {a: "Mayor inclusión tecnológica", b: "Brecha entre áreas urbanas y rurales", c: "Reducción de la desigualdad", d: "Homogeneización del aprendizaje"}, 
                correcta: "b", tiempo: 60 },
                { pregunta: "En el sector empresarial, la IAG permite:", 
                opciones: {a: "Optimizar procesos y crear prototipos virtuales", b: "Evitar la inversión en innovación", c: "Eliminar la creatividad humana", d: "Prohibir la colaboración"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "En la educación, la IAG puede ayudar a:", 
                opciones: {a: "Personalizar el aprendizaje según el nivel del estudiante", b: "Generar confusión en evaluaciones", c: "Eliminar la enseñanza presencial", d: "Sustituir exámenes tradicionales"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "El principal riesgo de la automatización excesiva con IA es:", 
                opciones: {a: "Reducción de la autonomía humana", b: "Aumento de la creatividad", c: "Incremento de pensamiento crítico", d: "Fortalecimiento de habilidades sociales"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "El uso de IAG en arte permite:", 
                opciones: {a: "Explorar nuevas combinaciones creativas", b: "Eliminar la creatividad humana", c: "Copiar obras existentes sin límite", d: "Limitar la expresión artística"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "Una limitación de la IAG es:", 
                opciones: {a: "Dependencia de datos de entrenamiento", b: "Capacidad ilimitada de innovación", c: "No requiere supervisión ética", d: "Genera solo contenido original"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "El aprendizaje automático en IAG permite:", 
                opciones: {a: "Mejorar la generación de contenidos basados en patrones", b: "Ignorar los datos históricos", c: "Eliminar errores humanos automáticamente", d: "Reemplazar completamente a expertos"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "En Bolivia, la IAG puede impactar positivamente en:", 
                opciones: {a: "Educación, industria creativa y agricultura", b: "Solo sector urbano", c: "Exclusivamente minería", d: "Solo transporte"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "El desafío de la ética en la IAG implica:", 
                opciones: {a: "Evitar sesgos y proteger derechos", b: "Ignorar la transparencia", c: "Generar contenido ilegal", d: "Eliminar regulación"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "Una ventaja de la IAG en emprendimientos es:", 
                opciones: {a: "Prototipado rápido y reducción de costos", b: "Desincentivar innovación", c: "Aumentar riesgos sin beneficio", d: "Eliminar trabajo humano"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "El papel de los docentes con IAG es:", 
                opciones: {a: "Guiar y supervisar el aprendizaje", b: "Ser reemplazados completamente", c: "Eliminar interacción con estudiantes", d: "Generar solo ejercicios automáticos"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "El aprendizaje personalizado con IAG se basa en:", 
                opciones: {a: "Adaptación de contenidos al nivel de cada estudiante", b: "Contenido idéntico para todos", c: "Eliminación de la evaluación", d: "Sustitución del docente"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "El uso responsable de la IAG implica:", 
                opciones: {a: "Capacitación, ética y transparencia", b: "Ignorar regulación", c: "Priorizar solo la velocidad de producción", d: "Eliminar supervisión humana"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "Un riesgo de la IAG es:", 
                opciones: {a: "Propagación de información sesgada o falsa", b: "Incremento de la creatividad", c: "Mayor acceso a educación rural", d: "Reducción de desigualdades"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "La infraestructura digital en zonas rurales es clave para:", 
                opciones: {a: "Reducir la brecha de acceso a IAG", b: "Incrementar dependencia urbana", c: "Limitar innovación tecnológica", d: "Eliminar conectividad"}, 
                correcta: "a", tiempo: 60 },
                { pregunta: "La integración de IAG en la educación permite:", 
                opciones: {a: "Retroalimentación inmediata y ejercicios adaptativos", b: "Eliminar laboratorios físicos", c: "Evitar interacción docente-alumno", d: "Reducir comprensión conceptual"}, 
                correcta: "a", tiempo: 60 }
            ]
    }
];

// ===== VARIABLES GLOBALES =====
let temaActual = 0;
let indicePregunta = 0;
let respuestasUsuario = [];
let temporizadorInterval;
let tiempoRestante;

// ===== FUNCIONES =====
function iniciarPrueba() {
    const nombre = document.getElementById('nombre').value.trim();
    if(!nombre) { alert("Ingrese su nombre"); return; }
    temaActual = parseInt(document.getElementById('selectorTema').value);
    indicePregunta = 0;
    respuestasUsuario = [];
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('prueba').classList.remove('oculto');
    mostrarPregunta();
}

function mostrarPregunta() {
    clearInterval(temporizadorInterval);
    tiempoRestante = temas[temaActual].preguntas[indicePregunta].tiempo;
    document.getElementById('tituloPregunta').innerText = temas[temaActual].preguntas[indicePregunta].pregunta;
    document.getElementById('temporizador').innerText = `Tiempo: ${tiempoRestante}`;
    const opcionesDiv = document.getElementById('opciones');
    opcionesDiv.innerHTML = '';
    const opciones = temas[temaActual].preguntas[indicePregunta].opciones;
    for(let key in opciones){
        const btn = document.createElement('button');
        btn.className = 'opcion';
        btn.innerText = `${key}) ${opciones[key]}`;
        btn.onclick = ()=> seleccionarRespuesta(key);
        opcionesDiv.appendChild(btn);
    }
    temporizadorInterval = setInterval(() => {
        tiempoRestante--;
        document.getElementById('temporizador').innerText = `Tiempo: ${tiempoRestante}`;
        if(tiempoRestante <= 0){ siguiente(); }
    },1000);
}

function seleccionarRespuesta(key){
    respuestasUsuario[indicePregunta] = key;
    siguiente();
}

function siguiente(){
    clearInterval(temporizadorInterval);
    if(indicePregunta < temas[temaActual].preguntas.length -1){
        indicePregunta++;
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function anterior(){
    clearInterval(temporizadorInterval);
    if(indicePregunta > 0){
        indicePregunta--;
        mostrarPregunta();
    }
}

function mostrarResultado(){
    document.getElementById('prueba').classList.add('oculto');
    document.getElementById('resultado').classList.remove('oculto');
    let puntaje = 0;
    let detalle = '';
    temas[temaActual].preguntas.forEach((preg, i)=>{
        if(respuestasUsuario[i] === preg.correcta) puntaje++;
        else detalle += `<p>${i+1}) ${preg.pregunta}<br>Respuesta correcta: ${preg.correcta}) ${preg.opciones[preg.correcta]}</p>`;
    });
    document.getElementById('puntaje').innerText = `Puntaje: ${puntaje} / ${temas[temaActual].preguntas.length}`;
    document.getElementById('detalleErrores').innerHTML = detalle;
}