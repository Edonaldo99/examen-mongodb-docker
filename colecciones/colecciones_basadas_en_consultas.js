// **Parte III: Vistas de Clientes y Pedidos Activos**
// Vista para filtrar clientes con un promedio de compras superior a 500.
db.createCollection("clientesVIP", {
  viewOn: "clientes",
  pipeline: [
    {
      $project: {
        _id: 0,
        nombre: 1,
        promedio_compras: { $avg: "$compras" }
      }
    },
    {
      $match: {
        promedio_compras: { $gt: 500 }
      }
    }
  ]
});

// Vista para filtrar pedidos con estado "pendiente" o "enviado".
db.createCollection("pedidosActivos", {
  viewOn: "pedidos",
  pipeline: [
    {
      $match: {
        $or: [
          { estado: "pendiente" },
          { estado: "enviado" }
        ]
      }
    }
  ]
});

// **Parte IV: Caso Integrador - Pedidos de los últimos 30 días**
// Esta vista filtra los pedidos cuya fecha es de hace 30 días o menos.

const hace30dias = new Date();
hace30dias.setDate(hace30dias.getDate() - 30);

db.createCollection("pedidos_ultimos_30_dias", {
  viewOn: "pedidos",
  pipeline: [
    {
      $match: {
        fecha: { $gte: hace30dias }
      }
    }
  ]
});