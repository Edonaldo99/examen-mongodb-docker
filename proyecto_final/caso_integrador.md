# Justificación del Caso Integrador

## Propuesta de Índice para Optimización

Para resolver el caso del análisis de pedidos de los últimos 30 días, se propone la creación de un **índice en el campo `fecha`** de la colección `pedidos`. El comando para crearlo sería:

`db.pedidos.createIndex({ fecha: 1 })`

Este índice optimiza las búsquedas por fecha porque crea una estructura de datos que permite a MongoDB encontrar los documentos por su fecha de manera eficiente, sin tener que escanear toda la colección. Esto es crucial para un sistema de e-commerce donde la velocidad de consulta es vital.

## Justificación sobre Consultas Ad-hoc

Si el problema se resolviera únicamente con consultas ad-hoc (por ejemplo, `db.pedidos.find({ fecha: { $gte: hace30dias } })`), cada vez que se ejecutara, el Query Planner de MongoDB tendría que escanear y analizar la colección completa de `pedidos`.

En una base de datos con miles o millones de pedidos, este proceso sería muy ineficiente y lento.

En contraste, una **colección dinámica (vista)** como `pedidos_ultimos_30_dias` se define una sola vez y se optimiza. Cada vez que se consulta, el sistema ya sabe qué hacer y puede usar el índice de manera eficiente. Esto asegura que la empresa siempre obtenga datos actualizados y de forma rápida, sin importar el tamaño de la base de datos.