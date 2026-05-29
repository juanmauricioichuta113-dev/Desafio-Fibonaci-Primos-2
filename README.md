# Desafío Web: Modelos Matemáticos Interactivos (Fibonacci y Números Primos)

Este proyecto consiste en una aplicación web interactiva de una sola página (Single Page Application - SPA) que aplica la **Sucesión de Fibonacci** y los **Números Primos** a escenarios y problemas del mundo real. La navegación se realiza de manera fluida mediante enlaces internos en el menú superior, transformando la identidad visual y el estilo de la interfaz para adaptarse a cada temática con colores de tipo LED pastel y configuraciones independientes.

---

## 📋 Información del Estudiante
* **Nombre del Estudiante:** LIZBETH COCHI MAMANI
* **Carrera:** Ingeniería de Sistemas
* **Materia / Curso:** Programación 1
* **Título del Proyecto:** Matemáticas que resuelven problemas: Fibonacci y Números Primos en la vida real
* **Enlace del Repositorio Git:** https://github.com/liz1020bth/desafio-web-unico
* **Enlace de la página publicada:** https://liz1020bth.github.io/desafio-web-unico/

---

## 🛠️ Estructura del Repositorio
El proyecto sigue una organización limpia y modular, separando la estructura, el diseño y la lógica algorítmica de los componentes:

```text
desafio-web-unico/
├── index.html          # Estructura HTML5 unificada (Secciones dinámicas)
├── README.md           # Documentación oficial del proyecto (Este archivo)
├── css/
│   └── estilos.css     # Estilos responsivos e independientes con temática LED Pastel
└── js/
    └── script.js       # Motor lógico en JavaScript (Vectores, Captura DOM y Navegación)
🌿 Ejercicio 1: Sucesión de Fibonacci en la Naturaleza (Conejos y Fibonacci)
1. ¿Qué problema real va a resolver?
Modela dinámicas de crecimiento biológico y distribución espacial óptima de recursos (filotaxis). Permite simular y predecir de forma interactiva el incremento controlado de poblaciones (como el modelo clásico de reproducción de parejas de conejos) y la disposición de las hojas en un tallo para maximizar la captura de luz solar.

2. Explicación del Algoritmo
El algoritmo solicita al usuario un número entero positivo N mediante un formulario estructurado. Internamente, inicializa un vector dinámico de control con los valores base de la serie: [0, 1].

A través de un bucle iterativo (ciclo for), el programa calcula cada nuevo término sumando los valores guardados en las dos posiciones inmediatamente anteriores del array (vectorFibo[i - 1] + vectorFibo[i - 2]) y añade este nuevo resultado al final del vector utilizando el método .push(). Al concluir las iteraciones, recorre el array completo para renderizar y construir el ecosistema de bloques numéricos inyectándolos dinámicamente en el DOM de la página.

3. Identidad Visual e Interfaz
Temática: Orgánica, Botánica y Biológica.

Estilo Visual: Bordes orgánicos muy redondeados y suavizados, adornos con componentes limpios y cajas dinámicas.

Colores LED Pastel: Fondo verde bosque oscuro con luces resplandecientes menta y verde esmeralda. Las tarjetas de resultados simulan formas secuenciales del entorno natural.

🔒 Ejercicio 2: Seguridad Informática y Criptografía (Números Primos)
1. ¿Qué problema real va a resolver?
Resuelve la necesidad de validación estructural de tokens y componentes clave en sistemas de encriptación asimétrica (como el protocolo RSA). Permite evaluar si un código numérico introducido posee la propiedad de indivisibilidad matemática necesaria para actuar como una llave de seguridad digital robusta contra accesos no autorizados en redes informáticas.

2. Explicación del Algoritmo
El software captura el token numérico enviado desde el formulario y lo procesa mediante una función específica de primalidad. El algoritmo inicializa un acumulador numérico de divisores en cero.

Ejecuta un ciclo de control iterativo exacto que divide el número evaluado de forma consecutiva entre cada uno de los valores comprendidos entre 1 y el propio número. En cada vuelta, evalúa el residuo de la división mediante el operador módulo (%). Si el residuo es exactamente cero (num % i === 0), incrementa el contador de divisores en una unidad. Al salir del bucle, si el contador reporta estrictamente 2 divisores (el 1 y el propio número), el sistema valida la credencial como número primo; de lo contrario, emite una alerta de vulnerabilidad.

3. Identidad Visual e Interfaz
Temática: Criptografía y Consola de Seguridad.

Estilo Visual: Esquinas rectas, tipografías monoespaciadas (Courier New) tipo terminal de comandos y adornos de texto encriptado ([ENCRYPTED]). El fondo cuenta con un patrón sutil de cuadrícula de datos.

Colores LED Pastel: Luces y contornos morados, púrpuras y neón atenuados sobre un fondo de terminal negro digital.

⚡ Ejercicio 3: Sistema Combinado de Seguridad Secuencial
1. ¿Qué problema real va a resolver?
Diseña un esquema avanzado de autenticación de múltiples factores y claves dinámicas secuenciales. Para que un componente sea aceptado y validado de manera exitosa por el servidor, debe cumplir sincrónicamente dos condiciones restrictivas: pertenecer a la cadena de evolución de Fibonacci y, a su vez, aprobar el filtro de aislamiento criptográfico de primalidad.

2. Explicación del Algoritmo
Este script unifica las dos lógicas computacionales previas en un flujo continuo. Primero, lee la cantidad de muestras y genera el vector ordenado con la serie de Fibonacci aplicando sumas iterativas de las posiciones anteriores del array.

Posteriormente, implementa un segundo ciclo estructurado para recorrer el vector desde el índice inicial hasta el final. Cada valor extraído del array se envía como parámetro al módulo evaluador de primalidad (conteo de divisores exactos). El algoritmo construye dinámicamente un árbol de elementos HTML y aplica inyecciones visuales de iluminación LED fluorescente y badges de estado (Match Perfecto) únicamente a aquellos índices de la secuencia que aprueban ambas propiedades matemáticas de forma simultánea.

3. Identidad Visual e Interfaz
Temática: Panel Científico de Laboratorio Avanzado del Futuro.

Estilo Visual: Bordes estilizados de tecnología avanzada, tarjetas de datos alineadas y efectos de iluminación resplandeciente (glow effects).

Colores LED Pastel: Fusión de colores cian, azul eléctrico suave y esmeralda brillante de alta luminosidad sutil sobre un fondo tecnológico oscuro.
