Preguntas Teóricas:

a) ¿Qué es una colección basada en consultas y cómo se diferencia de una colección estática?

Colección estática: Una colección regular donde los documentos se insertan y eliminan directamente.

Colección basada en consultas: Una vista dinámica o una "colección virtual" que se genera en base a una consulta (query). Sus documentos no se almacenan físicamente, sino que son el resultado en tiempo real de una operación sobre una colección estática.

b) Diferencias entre consulta ad-hoc, vista materializada y colección dinámica.

Consulta ad-hoc: Es una consulta única que se ejecuta una sola vez para una necesidad específica.

Colección dinámica: Una vista que se recalcula cada vez que se consulta. Sus datos están siempre actualizados pero pueden ser lentos si la consulta es compleja.

Vista materializada: Una copia persistente y física del resultado de una consulta. Es rápida para leer, pero los datos no están en tiempo real; se actualizan periódicamente.

c) Ventajas y desventajas de las colecciones basadas en consultas.

Ventajas: Datos siempre actualizados, sin necesidad de mantenimiento manual, y facilitan la creación de vistas personalizadas de los datos.

Desventajas: Pueden ser lentas para consultar si no se materializan, y las vistas materializadas consumen espacio de almacenamiento.