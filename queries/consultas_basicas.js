// **Parte II - Consultas Básicas**

// 1. Obtener todos los clientes de México con edad mayor a 25.
db.clientes.find({ "pais": "México", "edad": { $gt: 25 } });

// 2. Obtener el nombre y el promedio de compras de todos los clientes.
db.clientes.aggregate([
  {
    $project: {
      _id: 0,
      nombre: 1,
      promedio_compras: { $avg: "$compras" }
    }
  }
]);