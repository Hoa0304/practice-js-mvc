class Router {
  constructor() {
    this.routes = [];
    this.currentRoute = null;
  }

  // Define a new route with a regular expression pattern
  define(path, element, controller, view, service, params = []) {
    // Convert path to a regex pattern
    const pattern = new RegExp(
      '^' + path.replace(/:[^\s/]+/g, '([\\w-]+)') + '$',
    );

    // Store route with pattern and element
    this.routes.push({ pattern, element, params, controller, view, service });
  }

  // Listen for changes in the URL
  listen() {
    const path = window.location.pathname;

    // Find matching route
    const route = this.findRoute();

    if (route) {
      const params = this.extractParams(path, route.pattern, route.params);
      const element =
        typeof route.element === 'function'
          ? route.element(params)
          : route.element;

      const root = document.getElementById('root');

      if (typeof element === 'string') {
        root.innerHTML = element;
      } else {
        root.appendChild(element);
      }
    } else {
      console.error('No matching route found.');
      window.location.href = '/';
    }
  }

  findRoute() {
    const path = window.location.pathname;
    return this.routes.find((route) => route.pattern.test(path));
  }

  // Extract parameters from the path
  extractParams(path, pattern, paramNames) {
    const matches = path.match(pattern);
    const params = {};

    if (matches && paramNames.length === matches.length - 1) {
      paramNames.forEach((name, index) => {
        params[name] = matches[index + 1];
      });
    }

    return params;
  }
}

export default Router;
