const features = [
    {
        id: 1,
        name: "Ventas",
        details: {
            imageUrl: "images/dashboard-2.svg",
            title: "Seguimiento de ventas",
            description: "Destaca indicadores como: análisis de los productos más vendidos, comparación entre clientes",
            link: "https://app.powerbi.com/view?r=eyJrIjoiZWMwNTU2YmYtMmVmYi00MmI1LTkzNTQtNzk3ZDU2M2EwZmQ1IiwidCI6ImQwY2U5YWJmLTQ3MDMtNDc0Yi05M2JjLTI4NWIxNmM2NWFiMCIsImMiOjR9&pageName=ReportSection"
        },
        dashboards: [
            {
                id: 0,
                icon: "images/dashboards/Ventas/Screenshot_2.png",
                title: "Seguimiento de ventas  - Tienda de viajes",
                description: "Este panel dinámico ofrece gráficos específicos de productos y su distribución en brasil.", 
                link: "https://app.powerbi.com/view?r=eyJrIjoiYmY3ZmViOTMtZTcyMC00ZjJkLWFiNzQtYzYyNGNkZWYwMWE4IiwidCI6ImQwY2U5YWJmLTQ3MDMtNDc0Yi05M2JjLTI4NWIxNmM2NWFiMCIsImMiOjR9"       
            },
            {
                id: 1,
                icon: "images/dashboards/Ventas/xsales.png",
                title: "X-Sales Ventas",
                description: "Este panel conciso brinda una visión exhaustiva de la rentabilidad, con gráficos que desglosan los márgenes brutos, ventas por país y cliente, facturación neta, y la suma de costos y descuentos aplicados.",
                link: "https://app.powerbi.com/view?r=eyJrIjoiMTRjODMxMzQtZmIwOC00MjYwLTlmMDItZDIwOTZjMTNjZDdlIiwidCI6ImQwY2U5YWJmLTQ3MDMtNDc0Yi05M2JjLTI4NWIxNmM2NWFiMCIsImMiOjR9"
        
            },
            {
                id: 2,
                icon: "images/dashboards/Ventas/2.Ventas-1.EjercioDax.png",
                title: "Ingresos y ventas",
                description: " Este panel dinámico ofrece una visión clara del rendimiento de ventas, con gráficos específicos que muestran los ingresos generados por cada vendedor, el total de órdenes, los ingresos mensuales y la base de clientes", 
                link: "https://app.powerbi.com/view?r=eyJrIjoiYmZkNGUwZTItYzM3NS00MzgxLThkMTgtNDIyZjQzMDViODg2IiwidCI6ImQwY2U5YWJmLTQ3MDMtNDc0Yi05M2JjLTI4NWIxNmM2NWFiMCIsImMiOjR9"       
            },
            {
                id: 3,
                icon: "images/dashboards/Ventas/1.Ventas-3.Clientes.png",
                title: "Seguimiento de ventas - tienda",
                description: "Este dashboard proporciona una visión integral de la actividad de ventas, destacando canales de ventas, desempeño de productos, comportamiento de clientes y tendencias de ventas",
                link: "https://app.powerbi.com/view?r=eyJrIjoiZWMwNTU2YmYtMmVmYi00MmI1LTkzNTQtNzk3ZDU2M2EwZmQ1IiwidCI6ImQwY2U5YWJmLTQ3MDMtNDc0Yi05M2JjLTI4NWIxNmM2NWFiMCIsImMiOjR9&pageName=ReportSection"
            },            {
                id: 4,
                icon: "images/dashboards/Ventas/datacacao.png",
                title: "Dashboard Comercial - Brasil",
                description: "Este dashboard proporciona una visión integral de la actividad de ventas para la empresa DataCacao en Brasil. Destaca elementos geográficos y categoria de productos.",
                link: "https://app.powerbi.com/view?r=eyJrIjoiMTk4NGU5MjQtNDkwMi00MGRmLTkxMWMtOGI5MjdiZTA2MTgzIiwidCI6ImQwY2U5YWJmLTQ3MDMtNDc0Yi05M2JjLTI4NWIxNmM2NWFiMCIsImMiOjR9"
            }
        ]
    },
    {
        id: 2,
        name: "Proveedores",
        details: {
            imageUrl: "images/dashboard.svg",
            title: "Seguimiento de impacto de cursos ofrecidos",
            description: "Los dashboard educativos ofrecen una visión completa del progreso de los estudiantes en diferentes cursos. Monitorea la asistencia diaria, la adquisición de materiales de estudio, y el logro final del certificado. Diseñado para facilitar la gestión educativa, estos dashboard son una herramienta esencial para rastrear la participación y el éxito de los diferentes cursos ofrecidos.",
        },
        dashboards: [
            {
                id: 0,
                icon: "images/dashboards/Compras/Compras.png",
                title: "Seguimiento de compras",
                description: "Este panel ofrece un análisis detallado de las operaciones de compra, con gráficos interactivos que rastrean la actividad de proveedores, compradores y categorías de productos.",
                link: "https://app.powerbi.com/view?r=eyJrIjoiMGY2ZTE0N2QtZmE5Ni00ZDcxLTk5ZDYtZmE0MmExN2Y3NmYzIiwidCI6ImQwY2U5YWJmLTQ3MDMtNDc0Yi05M2JjLTI4NWIxNmM2NWFiMCIsImMiOjR9"
            },
        ]
    },
    {
        id: 3,
        name: "Servicio al cliente",
        details: {
            imageUrl: "images/dashboard-2.svg",
            title: "Seguimiento de servicio al cliente",
            description: "Los dashboard educativos ofrecen una visión completa del progreso de los estudiantes en diferentes cursos. Monitorea la asistencia diaria, la adquisición de materiales de estudio, y el logro final del certificado. Diseñado para facilitar la gestión educativa, estos dashboard son una herramienta esencial para rastrear la participación y el éxito de los diferentes cursos ofrecidos.",
            link: "https://app.powerbi.com/view?r=eyJrIjoiZWMwNTU2YmYtMmVmYi00MmI1LTkzNTQtNzk3ZDU2M2EwZmQ1IiwidCI6ImQwY2U5YWJmLTQ3MDMtNDc0Yi05M2JjLTI4NWIxNmM2NWFiMCIsImMiOjR9&pageName=ReportSection"
        },
        dashboards: [
            {
                id: 0,
                icon: "images/dashboards/Servicio al cliente/Screenshot_22.png",
                title: "Atención al cliente",
                description: "Con este dashboard, puedes monitorear métricas clave, como el tiempo de respuesta, la satisfacción del cliente y el volumen de consultas.",
                link: "https://app.powerbi.com/view?r=eyJrIjoiODE0ZDU0ZDYtNDhhNi00MGMyLWJkZjUtOTYyMzc1YzYwY2IwIiwidCI6ImQwY2U5YWJmLTQ3MDMtNDc0Yi05M2JjLTI4NWIxNmM2NWFiMCIsImMiOjR9"
            },
        ]
    },
    {
        id: 4,
        name: "Recursos Humanos",
        details: {
            imageUrl: "images/dashboard-2.svg",
            title: "Seguimiento de servicio al cliente",
            description: "Los dashboard educativos ofrecen una visión completa del progreso de los estudiantes en diferentes cursos. Monitorea la asistencia diaria, la adquisición de materiales de estudio, y el logro final del certificado. Diseñado para facilitar la gestión educativa, estos dashboard son una herramienta esencial para rastrear la participación y el éxito de los diferentes cursos ofrecidos.",
            link: "https://app.powerbi.com/view?r=eyJrIjoiZWMwNTU2YmYtMmVmYi00MmI1LTkzNTQtNzk3ZDU2M2EwZmQ1IiwidCI6ImQwY2U5YWJmLTQ3MDMtNDc0Yi05M2JjLTI4NWIxNmM2NWFiMCIsImMiOjR9&pageName=ReportSection"
        },
        dashboards: [
            {
                id: 0,
                icon: "images/dashboards/Recursos Humanos/Screenshot_1.png",
                title: "Análisis de personal",
                description: "Centraliza la gestión de recursos humanos con nuestro dashboard: visualiza datos de personal, seguimiento de desempeño, gestión de vacaciones y más, todo en una sola plataforma intuitiva.",
                link: "https://app.powerbi.com/view?r=eyJrIjoiMDJlYTcxNWUtNzdmYS00NjIwLTg0NTAtMjU0ZmY0NzdlYzFjIiwidCI6ImQwY2U5YWJmLTQ3MDMtNDc0Yi05M2JjLTI4NWIxNmM2NWFiMCIsImMiOjR9"
            },
            {
                id: 1,
                icon: "images/dashboards/Recursos Humanos/Servicios de internet.png",
                title: "Soporte y mesa de ayuda - En construcción",
                description: "Con este dashboard, puedes monitorear métricas clave, como el tiempo de respuesta, el volumen de casos por agente y su desempeño.",
                link: "https://app.powerbi.com/view?r=eyJrIjoiZjk3OTMxYzgtNjIwOC00NzJlLWJiMGYtYTJhMjlhZjhjMjVmIiwidCI6ImQwY2U5YWJmLTQ3MDMtNDc0Yi05M2JjLTI4NWIxNmM2NWFiMCIsImMiOjR9"
            },

        ]
    },

];

export default features;
