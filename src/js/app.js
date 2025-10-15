/**
 * Este es un toast personalizado para mostrar mensajes en la pantalla
 */

/**
 * Clase principal del toast
 * @param {Object} param0 {
 *
 * }
 */
class MiniToast {
  constructor(configParams = {}) {
    this.border = false;
    this.elementRoot = "#toast-container";
    this.classes = {
      root: "toast--root",
      container: "toast__container",
      itemContainer: "toast__item--container",
      icon: "toast__item--icon",
      title: "toast__item--title",
      message: "toast__item--message",
      textContainer: "toast__item--text-container",
      border: "toast__item--border",
      show: "show",
    };
    this.duration = 6000;
    this.container = false;
    this.horizontal = "right";
    this.vertical = "top";
    this.width = "280";
    this.timeToastsShow = 500;

    this.showIcon = true;
    this.icon_success =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-8.69"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';
    this.icon_error =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
    this.icon_warning =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
    this.icon_info =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';

    this.config(configParams);
  }
}

MiniToast.prototype.config = function ({
  border = null,
  classes = null,
  duration = null,
  elementRoot = null,
  horizontal = null,
  icon_error = null,
  icon_info = null,
  icon_success = null,
  icon_warning = null,
  showIcon = null,
  timeToastsShow = null,
  vertical = null,
  width = null,
}) {
  if (typeof border === "boolean") {
    this.border = border;
  }

  if (classes && typeof classes === "object") {
    this.classes = { ...this.classes, ...classes };
  }

  if (duration && typeof duration === "number") {
    this.duration = duration;
  }

  if (elementRoot && typeof elementRoot === "string") {
    this.elementRoot = elementRoot;
  }

  if (icon_error && typeof icon_error === "string") {
    this.icon_error = icon_error;
  }

  if (icon_info && typeof icon_info === "string") {
    this.icon_info = icon_info;
  }

  if (icon_success && typeof icon_success === "string") {
    this.icon_success = icon_success;
  }

  if (icon_warning && typeof icon_warning === "string") {
    this.icon_warning = icon_warning;
  }

  if (typeof showIcon === "boolean") {
    this.showIcon = showIcon;
  }

  if (vertical && typeof vertical === "string") {
    this.vertical = vertical;
  }

  if (timeToastsShow && typeof timeToastsShow === "number") {
    this.timeToastsShow = timeToastsShow;
  }

  if (horizontal && typeof horizontal === "string") {
    this.horizontal = horizontal;
  }

  if (width && typeof width === "number") {
    this.width = width;
  }

  this.toast_create();
};

MiniToast.prototype.toast_create = function () {
  const elementRoot = document.querySelector(this.elementRoot);

  if (!elementRoot) {
    console.error("Toast: elementRoot is required");
    return;
  }

  // se agregan clases a elemento root
  elementRoot.classList.add(this.classes.root);
  elementRoot.classList.add(this.vertical);
  elementRoot.classList.add(this.horizontal);

  this.container = document.createElement("div");
  this.container.classList.add(this.classes.container);
  this.container.classList.add(this.horizontal);
  elementRoot.appendChild(this.container);
};

MiniToast.prototype.toast_item_container = function (variant, width = null, border) {
  if (!variant) {
    console.error("Toast: variant is required");
    return;
  }
  const containerToast = document.createElement("div");
  containerToast.className = this.classes.itemContainer;
  containerToast.className += " " + variant;

  if (width) {
    containerToast.style.width = width + "px";
  } else {
    containerToast.style.width = this.width + "px";
  }

  if (border) {
    containerToast.className += " " + this.classes.border;
  }

  return containerToast;
};

MiniToast.prototype.toast_item_icon = function (variant) {
  const containerToastIcon = document.createElement("div");
  containerToastIcon.className = this.classes.icon + " " + variant;
  switch (variant) {
    case "success":
      containerToastIcon.innerHTML = this.icon_success;
      break;
    case "error":
      containerToastIcon.innerHTML = this.icon_error;
      break;
    case "warning":
      containerToastIcon.innerHTML = this.icon_warning;
      break;
    case "info":
      containerToastIcon.innerHTML = this.icon_info;
      break;
    default:
      return false;
  }
  return containerToastIcon;
};

MiniToast.prototype.toast_item_title = function (text, variant) {
  const containerToastItemTitle = document.createElement("div");
  containerToastItemTitle.className = this.classes.title + " " + variant;
  containerToastItemTitle.textContent = text;
  return containerToastItemTitle;
};

MiniToast.prototype.toast_item_message = function (text, variant) {
  const containerToastItemMessage = document.createElement("div");
  containerToastItemMessage.className = this.classes.message + " " + variant;
  containerToastItemMessage.textContent = text;
  return containerToastItemMessage;
};

MiniToast.prototype.toast_item_text = function (title, message, variant) {
  const containerToastItemText = document.createElement("div");
  containerToastItemText.className = this.classes.textContainer;

  if (title) {
    const titleToast = this.toast_item_title(title, variant);
    containerToastItemText.appendChild(titleToast);
  }

  if (message) {
    const messageToast = this.toast_item_message(message, variant);
    containerToastItemText.appendChild(messageToast);
  }

  return containerToastItemText;
};

MiniToast.prototype.add = function ({
  variant = "success",
  title = "",
  message = "",
  duration = this.duration,
  onClose = () => {},
  onOpen = () => {},
  width = null,
  showIcon = this.showIcon,
  border = this.border,
}) {
  if (this.container === false) {
    console.error("Toast: container is required");
    return;
  }

  if (!variant) {
    console.error("Toast: variant is required");
  }

  if (!title || !message) {
    console.error("Toast: title and message are required");
    return;
  }

  const totalToast = this.container.childNodes.length;
  const containerItemToast = this.toast_item_container(variant, width, border);
  const text = this.toast_item_text(title, message, variant);

  if (showIcon) {
    const icon = this.toast_item_icon(variant);
    containerItemToast.appendChild(icon);
  }

  if (text) {
    containerItemToast.appendChild(text);
  }

  this.container.appendChild(containerItemToast);
  onOpen();
  setTimeout(() => {
    containerItemToast.classList.add(this.classes.show);
  }, 10);

  const closeToast = duration + totalToast * 500;

  setTimeout(() => {
    containerItemToast.classList.remove(this.classes.show);
    setTimeout(() => {
      this.container.removeChild(containerItemToast);
      onClose();
    }, 500);
  }, closeToast);
};

MiniToast.prototype.success = function ({
  title = "",
  message = "",
  duration = this.duration,
  onClose = () => {},
  onOpen = () => {},
  width = null,
  showIcon = this.showIcon,
  border = this.border,
}) {
  this.add({
    variant: "success",
    title: title,
    message: message,
    duration: duration,
    onClose: onClose,
    onOpen: onOpen,
    width: width,
    showIcon: showIcon,
    border: border,
  });
};

MiniToast.prototype.info = function ({
  title = "",
  message = "",
  duration = this.duration,
  onClose = () => {},
  onOpen = () => {},
  width = null,
  showIcon = this.showIcon,
  border = this.border,
}) {
  this.add({
    variant: "info",
    title: title,
    message: message,
    duration: duration,
    onClose: onClose,
    onOpen: onOpen,
    width: width,
    showIcon: showIcon,
    border: border,
  });
};

MiniToast.prototype.warning = function ({
  title = "",
  message = "",
  duration = this.duration,
  onClose = () => {},
  onOpen = () => {},
  width = null,
  showIcon = this.showIcon,
  border = this.border,
}) {
  this.add({
    variant: "warning",
    title: title,
    message: message,
    duration: duration,
    onClose: onClose,
    onOpen: onOpen,
    width: width,
    showIcon: showIcon,
    border: border,
  });
};

MiniToast.prototype.error = function ({
  title = "",
  message = "",
  duration = this.duration,
  onClose = () => {},
  onOpen = () => {},
  width = null,
  showIcon = this.showIcon,
  border = this.border,
}) {
  this.add({
    variant: "error",
    title: title,
    message: message,
    duration: duration,
    onClose: onClose,
    onOpen: onOpen,
    width: width,
    showIcon: showIcon,
    border: border,
  });
};

MiniToast.prototype.remove = function () {
  this.elementRoot.innerHTML = "";
  this.elementRoot.className = "";
};

(function (window) {
  "use strict";
  window.MiniToast = MiniToast;
})(window);
