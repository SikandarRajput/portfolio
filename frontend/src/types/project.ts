export interface Project {
    id: number;
    title: string;
    summary: string;
    description: string;
    impact: string; // Quantifiable business result
    features: string[];
    tech_stack: string[];
    github_url: string;
    live_url: string;
    image: string;
    screenshots: string[];
}

export const mockProjects: Project[] = [
    {
        id: 1,
        title: "BizKnot Logistics Platform",
        summary: "Multi-carrier shipment booking platform solving logistics bottlenecks for enterprise clients.",
        description: "BizKnot is a comprehensive logistics solution that streamlines shipment booking and tracking across multiple carriers. It leverages real-time tracking and dispatch automation via API integrations to enhance operational efficiency.",
        impact: "Reduced manual shipment processing time by 60% and eliminated 99% of tracking errors.",
        features: [
            "Multi-carrier shipment booking and tracking",
            "Real-time tracking and dispatch automation",
            "Order lifecycle management and workflows",
            "Operational dashboards and reporting"
        ],
        tech_stack: ["Python", "Django", "Django REST Framework", "Courier APIs", "PostgreSQL"],
        github_url: "",
        live_url: "https://partners.bizknot.pk/",
        image: "/bizknot.jpg",
        screenshots: [
            "/bizknot2.png",
            "/bizknot3.png"
        ]
    },
    {
        id: 2,
        title: "Franchise Management System",
        summary: "Centralized operational hub for multi-branch retail, ensuring data-driven inventory control.",
        description: "This system provides a centralized hub for managing multiple business branches. It features RBAC, performance analytics and real-time visibility into stock levels across all locations.",
        impact: "Increased inventory turnover by 25% and reduced stock-outs across 10+ branches by 40%.",
        features: [
            "Multi-branch sales and inventory tracking",
            "Automated performance analytics and reporting",
            "Role-based user hierarchy (Owners, Managers)",
            "Real-time stock level visibility"
        ],
        tech_stack: ["Python", "Django", "Performance Analytics", "MariaDB", "Celery"],
        github_url: "",
        live_url: "https://gofranchi.jtstorm.org/",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        screenshots: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
        ]
    },
    {
        id: 3,
        title: "Restaurant Management System",
        summary: "Operational OS for high-volume restaurants, streamlining kitchen-to-billing workflows.",
        description: "A robust management system tailored for the restaurant industry. It handles complex billing workflows, kitchen management through real-time WebSockets communication.",
        impact: "Boosted table turnover speed by 20% and reduced kitchen communication lag by 80%.",
        features: [
            "Real-time kitchen order tracking via WebSockets",
            "Billing and inventory management workflows",
            "Custom operational dashboards with RBAC",
            "Comprehensive sales and inventory reporting"
        ],
        tech_stack: ["Python", "Django", "WebSockets", "RBAC", "MariaDB"],
        github_url: "",
        live_url: "",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000",
        screenshots: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1000"
        ]
    },
    {
        id: 4,
        title: "Grocer E-Commerce WebApp",
        summary: "Local grocery automation platform bridging digital sales with physical inventory.",
        description: "A full-featured grocery e-commerce platform that connects customers with local inventories. It includes a complete product catalog, cart system, and secure checkout.",
        impact: "Generated 15% increase in monthly revenue for local vendors through digital channel expansion.",
        features: [
            "Full e-commerce: Catalog, Cart, and Checkout",
            "Order management and pricing control",
            "Secure authentication and user profiles",
            "Admin inventory management dashboards"
        ],
        tech_stack: ["Python", "Django", "JavaScript/jQuery", "AJAX", "PostgreSQL"],
        github_url: "",
        live_url: "",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000",
        screenshots: [
            "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1506485338023-6ce5f36692df?auto=format&fit=crop&q=80&w=1000"
        ]
    }
];
