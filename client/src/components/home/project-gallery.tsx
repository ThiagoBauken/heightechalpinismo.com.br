import BeforeAfterSlider from "@/components/shared/before-after-slider";

export default function ProjectGallery() {
  const beforeAfterProjects = [
    {
      title: "Limpeza de Fachada Comercial",
      description: "Revitalização completa de edifício comercial em Balneário Camboriú",
      beforeImage: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      afterImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Pintura Predial Residencial",
      description: "Transformação de fachada de condomínio em Itapema",
      beforeImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      afterImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const regularProjects = [
    {
      title: "Complexo Industrial - MG",
      description: "Manutenção de silos e estruturas",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Shopping Center - PR",
      description: "Limpeza e manutenção geral",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Complexo Hospitalar - RS",
      description: "Manutenção preventiva",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Hotel de Luxo - BA",
      description: "Restauração de fachada",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galeria de Projetos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos realizados em diferentes tipos de edificações
          </p>
        </div>

        {/* Before/After Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Transformações Realizadas</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {beforeAfterProjects.map((project, index) => (
              <BeforeAfterSlider
                key={index}
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>

        {/* Regular Project Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Outros Projetos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularProjects.map((project, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl group cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
