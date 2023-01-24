# URL PRINCIPALES 

### CLIENTES: /api/clients

 - Devuelve un listado de todos los clientes: 
    GET /api/clients

 - Devuelve un listado de todos los clientes con información de sus viajes: 
    GET /api/clients/viajes

 - Devuelve un listado de los clientes de un hotel: 
    GET /api/clients//hotels/:hotelId

 - Crea un nuevo cliente (email y dni son campos únicos) devuelve los datos del nuevo cliente:
    POST /api/clients 
    Content-Type: application/json

    {
         "nombre": ,
         "apellidos": ,
         "direccion": ,
         "email": ,
         "telefono": ,
         "fecha_nacimiento": ,
         "dni": 
    }

 - Modifica los datos de un cliente y devuelve los datos del cliente modificados: 
    PUT /api/clients//:clientId
    Content-Type: application/json

    {
         "nombre": ,
         "apellidos": ,
         "direccion": ,
         "email": ,
         "telefono": ,
         "fecha_nacimiento": ,
         "dni": 
    }

 - Elimina un cliente y devuelve el número de registros que se han eliminado: 
    DELETE /api/clients//:clientId

### HOTELES: /api/hotels

 - Devuelve un listado de todos los hoteles: 
    GET /api/hotels

 - Crea un nuevo hotel y devuelve los datos del nuevo hotel: 
    POST /api/hotels
    Content-Type: application/json

    {
        "nombre": , 
        "direccion":, 
        "ciudad":, 
        "estrellas":, 
        "descripcion": , 
        "tarifa": 
    }

 - Modifica los datos de un hotel y devuelve los datos del hotel modificados: 
    PUT /api/hotels/:hotelId
    Content-Type: application/json

     {
        "nombre": , 
        "direccion":, 
        "ciudad":, 
        "estrellas":, 
        "descripcion": , 
        "tarifa": 
    }
   
 - Elimina un hotel y devuelve el número de registros eliminados: 
    DELETE /api/hotels/:hotelId

### VIAJES: /api/trips

 - Devuelve un listado de todos los viajes con el hotel asociado (si está indicado):
    GET /api/trips

 - Devuelve un listado de los viajes asignados a un cliente: 
    GET /api/trips/viajes-clientes/:clientId
    
 - Asigna un viaje a un cliente y devuelve el viaje con los datos completos (un mismo viaje puede ser asignado a varios clientes, por ejemplo en un viaje en grupo): 
   GET /api/trips/viaje/:tripId/cliente/:clienteId

 - Asigna un hotel a un viaje y devuelve el viaje con los datos completos actualizados: 
   GET /api/trips/viaje/:tripId/hotel/:hotelId

 - Actualiza un viaje asignado a un cliente y devuelve los datos del nuevo viaje: 
   GET /api/trips/viaje/:tripId/:newTripId/cliente/:clientId

 - Crea un nuevo viaje simple - sin asociar hotel - sin asociar cliente, devuelve los datos del nuevo viaje: 
    POST /api/trips/
    Content-Type: application/json

      {
      "fecha_salida": , 
      "fecha_vuelta": , 
      "idvuelo_ida": , 
      "idvuelo_vuelta": 
      }

 - Crea un nuevo viaje asociando el hotel al viaje - sin asociar al cliente, devuelve los datos del nuevo viaje: 
    POST /api/trips/:hotelId
     Content-Type: application/json

      {
      "fecha_salida": , 
      "fecha_vuelta": , 
      "idvuelo_ida": , 
      "idvuelo_vuelta": 
      }
    
 - Crea un nuevo viaje asociando tanto el hotel como el cliente, devuelve los datos del nuevo viaje: 
    POST /api/trips/hotel/:hotelId/cliente/:clienteId
     Content-Type: application/json

      {
      "fecha_salida": , 
      "fecha_vuelta": , 
      "idvuelo_ida": , 
      "idvuelo_vuelta": 
      }

 - Actualiza un viaje y devuelve los datos del viaje actualizados: 
    PUT /api/trips/:tripId
     Content-Type: application/json

      {
      "fecha_salida": , 
      "fecha_vuelta": , 
      "idvuelo_ida": , 
      "idvuelo_vuelta": 
      }

 - Borra un viaje y devuelve el número de registros eliminados: 
    DELETE /api/trips/:tripId