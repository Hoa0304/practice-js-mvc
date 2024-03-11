function Toast(type, msg) {
    const icons = {
      error: 'fa-solid fa-circle-exclamation',
      info: 'fa-solid fa-square-check',
      warning: 'fa-solid fa-triangle-exclamation',
    };
  
    const icon = icons[type];
  
    return `
        <div class="column">
          <i class="${icon}"></i>
          <span>${msg}</span>
        </div>
        <i class="ti-close"></i>
    `;
}
  
export default Toast;
