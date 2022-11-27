# MISW-grupo13-poc-seguridad
## Experimento de seguridad - Proyecto final 1
  ​​
### Propósito del experimento
El objetivo es validar y prevenir ataques de tipo suplantación de usuario con la implementación y uso de tokens de seguridad. La aplicación de las tácticas de prevención de ataques es importante para la HU23 en donde se indica que se debe validar correctamente la información de usuario el 100% de las veces.​​

### Propósito del experimento
Se espera que el uso de tokens de seguridad valide el 100% de las veces cuando un usuario o actor del sistema quiera consumir un servicio o consultar información.​​
​​
### Elementos de arquitectura involucrados​​
 - Recurso de autenticación que genere el token de seguridad: Microservicio de autenticación​
 - Recurso que valide el token de seguridad: Componente autorizador.​​
 - Punto de sensibilidad: Token de seguridad y componente autorizador.​
​​

### Instalación
Se requiere [Node.js](https://nodejs.org/) v14.
Instale las dependencias e inicie el servidor.

 - Componente autenticador
```sh
cd authentication
npm i
npm run start
```

 - Componente autorizador

```sh
cd diagnostic
npm i
npm run start
```
  
  
### Pruebas
En la carpeta collections se encuentran las colecciones postman para consumir los servicios del componente autenticador y el componente diagnosticos.

## License

MIT

