# MiniToast

MiniToast es una librería ligera de JavaScript para mostrar notificaciones tipo toast con estilos personalizables. Soporta variantes como success, error, warning e info, con opciones de configuración flexibles para posición, duración, íconos y más.

## Instalación

No requiere instalación adicional si usas el código fuente directamente. Para usar como módulo npm, instala desde el directorio:

```bash
npm install /path/to/minitoast
```

O incluye los archivos compilados en tu proyecto:

```html
<link rel="stylesheet" href="dist/css/app.css" />
<script src="dist/js/app.js"></script>
```

## Uso Básico

1. Crea un contenedor en tu HTML:
   ```html
   <div id="toast-container"></div>
   ```

2. Inicializa MiniToast:
   ```javascript
   const toast = new MiniToast({
     elementRoot: "#toast-container",
     horizontal: "right",
     vertical: "top"
   });
   ```

3. Muestra una notificación:
   ```javascript
   toast.success({
     title: "Éxito",
     message: "Operación completada"
   });
   ```

## Variantes

- **success**: Verde, para mensajes positivos.
- **error**: Rojo, para errores.
- **warning**: Amarillo, para advertencias.
- **info**: Azul, para información.

## Opciones de Configuración

| Opción | Tipo | Descripción | Default |
|--------|------|-------------|---------|
| `elementRoot` | string | Selector CSS del contenedor. | "#toast-container" |
| `horizontal` | string | Posición horizontal: "left", "center", "right". | "right" |
| `vertical` | string | Posición vertical: "top", "bottom". | "top" |
| `duration` | number | Duración en ms antes de ocultar. | 6000 |
| `width` | number | Ancho del toast en px. | 280 |
| `showIcon` | boolean | Mostrar íconos. | true |
| `border` | boolean | Agregar borde izquierdo. | false |
| `classes` | object | Clases CSS personalizadas. | Ver código fuente |

## Métodos

- `toast.add({ variant, title, message, ... })`: Agrega un toast personalizado.
- `toast.success({ title, message, ... })`: Toast de éxito.
- `toast.error({ title, message, ... })`: Toast de error.
- `toast.warning({ title, message, ... })`: Toast de advertencia.
- `toast.info({ title, message, ... })`: Toast de información.
- `toast.remove()`: Elimina todos los toasts.

## Ejemplos

Ve los ejemplos en el directorio `examples/` para usos avanzados como diferentes posiciones, tamaños y configuraciones.

## Desarrollo

Para construir:
```bash
npm run build
```

Para desarrollo:
```bash
npm run dev
```

## Licencia

ISC.
