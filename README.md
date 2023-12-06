# Advent of Code challenge 2023

### ¿Qué es Advent of Code?

¡25 días y 50 desafíos de lógica de programación!

El mayor reto Anglo-parlante de lógica de programación celebrado entre el 01 y el 25 de diciembre de la edición 2023.

**¿Abre superado todos los días de retos?**  Conoce mis mejores test y soluciones, con los que participe en este Advent of Code - challenge 2023. 🚀

### Sobre el reto, su creador y sus patrocinadores

- El reto: https://adventofcode.com/2023/about
- Creador: Eric Wastl - http://was.tl/
- Patrocinadores: https://adventofcode.com/2023/sponsors

## Empezando

### Arquitectura del proyecto

Todos los desafíos cuentan con la siguiente arquitectura:
1. `README.md`, Documento donde se detallan ambas partes del desafío.
2. `input.ts` Documento donde se encuentra el input para las funcionalidades del desafío.
3. `solution-1.ts` Documento donde se encuentran las funciones que solucionan la primera parte del desafío.
4. `solution-2.ts` Documento donde se encuentran las funciones que solucionan la segunda parte del desafío.
5. `challenge.test.js` Test unitarios que demuestran el resultado correcto de cada uno de los desafíos.

### Arrancando el proyecto

##### Para arrancar todos los tests al mismo tiempo: 
1. Instala vitest en tu entorno de desarrollo: `npm -i`
2. Ejecutar en la terminal de comandos: `npm run test`

##### Para arrancar los test de un único desafío y ver los detalles de los mismos:
1. Instala vitest en tu entorno de desarrollo: `npm -i`
2. Ejecutar en la terminal de comandos: `npm run test .\Challenge-[number]\`

##### Para ver los resultados finales de los desafíos
1. Asegurate de tener instalado de manera global el paquete TS-NODE: `npm install -g ts-node`
2. Instala el tipado de Typescript: `npm -i`
3. Ejecutar en la terminal de comandos: `ts-node .\solutions.ts`
