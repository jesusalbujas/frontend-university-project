const steps = [
  {
    element: '#hamburger-container',
    popover: {
      title: '"Hamburguesa o Desplegable"',
      description: 'Abrir y Cerrar Barra lateral',
      position: 'bottom'
    }
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: 'Ruta de navegación',
      description: 'Indica la ubicación actual de la página',
      position: 'bottom'
    }
  },
  {
    element: '#header-search',
    popover: {
      title: 'Búsqueda en la página',
      description: 'Búsqueda de páginas, navegación rápida',
      position: 'left'
    }
  },
  {
    element: '#screenfull',
    popover: {
      title: 'Pantalla Completa',
      description: 'Colocar pantalla completa',
      position: 'left'
    }
  },
  {
    element: '#size-select',
    popover: {
      title: 'Switch Size',
      description: 'Switch the system size',
      position: 'left'
    }
  },
  {
    element: '#tags-view-container',
    popover: {
      title: 'Vista de Etiquetas',
      description: 'El historial de ventanas visitadas',
      position: 'bottom'
    },
    padding: 0
  }
]

export default steps
