// ... (El código de la vista pedidosActivos "colecciones_basadas_en_consultas.js")

/**
 * Explicación sobre la materialización de clientesVIP:
 *
 * Para la colección clientesVIP, no es necesario materializarla. La consulta es
 * simple y el volumen de datos no es tan grande como para justificar una copia
 * persistente. Si esta vista se consultara miles de veces por segundo en un
 * sistema de producción, la materialización sería una opción para mejorar el
 * rendimiento, pero en este caso, la vista dinámica es suficiente y mantiene
 * los datos siempre en tiempo real.
 */