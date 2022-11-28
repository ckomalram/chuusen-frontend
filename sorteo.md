# Sorteo App
> Aplicación para jugar sorteos que impliquen la selección de números del 0-99. 
## MVP 
* Que este publicada en la PlayStore
* Que sea Free
* Que necesite un usuario para login
* Que permite crear usuario.
* Que permita crear un sorteo.
* Que permita compartir codigo de sorteo o link.
* Que permita administrar el sorteo desde sus cuota hasta personas en el.
* Que permita reservar un sorteo.
* Que permita ingresar #s ganadores del sorteo manual o automatico.
* Que haga filtro automatico de los ganadores y cuotas.
## Flujo 
1. Descargar aplicación.
2. Crear cuenta o registrarse en la aplicacion.
3. Logearse
4. Agregar nuevo sorteo.
5. Seleccionar nombre del sorteo.
6. Seleccionar cantidad de #s del sorteo. (default 00-99).
7. Seleccionar cuotas por #. (1-5-10-15-20)
8. Seleccionar codigo de sorteo.  (autogenerar por defecto).
9. Seleccionar fecha de apertura de sorteo.
10. Seleccionar fecha de cierre del sorteo.
11. Crear Sorteo.
12. Compartir sorteo con contactos.
13. Etapa de reserva de #s.
    * Entrar al sorteo con codigo o link.
    * Seleccionar #s que se quieren.(maximo 2)
    * Seleccionar cuotas de esos #s.(maximo definido en punto 7).
    * Reservar.
14. Etapa de pago de reserva.(fuera de la app)
    * Hacer pago a dueño de sorteo.
    * Agregar en descripción el usuario de la app.
    * Enviar comprobante.
    * Esperar confirmación de dueño de sorteo. 
15. Etapa de confirmación.
    * Buscar usuario que envio la confirmación.
    * Click en Confirmado.
16. Actualizar números ganadores.(dueño de sorteo)
    * En sección de ganadores colocar #s.
    * Verificar (Botón que al hacerle click debe mostrar los ganadores y los montos a pagar de cada uno). En caso que haya colocado los # mal, se puede volver a modificar y verificar de nuevo.
    * Enviar pagos. (Fuera de la app).
    * Confirmar y cerrar sorteo. 
> Cada interacción de las etapadas que tienen tareas fuera de la app, será a sla del dueño del sorteo.

# Flujos alternos
 ## Eliminar un sorteo
 > No te permitirá hacerlo hasta que hayas confirmado que se ha devuelto el dinero a todos los participantes que habían validado su reserva. De igual forma es responsabilidad de los aprticipantes saber con quien chief están mentiendose a jugar. Solo se permitirá realizar esta acción cuando menos del 20% de los #s hayan sido reservados.
 De igual forma quedará en un historial donde podrás buscarlo cuando sea necesario.
 maximo 2 eliminaciones de sorteo al mes.De presentarse será puesto como un usuario no acto para crear sorteos.
 ## Modificar un sorteo
> Solo a campos que no afecten a los participantes en sus premiaciones. Es decir, bajar el premio, cambiar fecha de cierre, cambiar cuotas del sorteo no se podrá. Por eso se da la potestad de compartir un sorteo cuando estás totalmente seguro que el sorteo tiene la información correcta. 

## Usuario no acto para crear sorteos.
> Sucederá cuando tenga más de 10 reportes acumulados en sus sorteos, lo cual es un poco raro porque la app se hizo para que jugará con sus amigos y no levante fraude con una aplicación free. Tambien, cuando se cumpla por más de 2 veces la eliminación de un sorteo al mes.


# ionic info
- Go to your new project: cd .\chuusen-front
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features:
https://ion.link/enterprise-edition

# Pantallas

