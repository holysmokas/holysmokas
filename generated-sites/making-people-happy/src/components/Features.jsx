function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Personalized Service",
      description: "We tailor our approach to meet your unique needs and preferences, ensuring every experience is perfectly suited to you."
    },
    {
      icon: "⭐",
      title: "Quality Excellence",
      description: "Our commitment to excellence means you receive only the highest quality service and attention to detail in everything we do."
    },
    {
      icon: "🚀",
      title: "Fast Results",
      description: "We understand your time is valuable. Our efficient processes deliver outstanding results quickly without compromising quality."
    },
    {
      icon: "💝",
      title: "Memorable Experiences",
      description: "We create lasting memories and positive experiences that bring genuine happiness and satisfaction to your life."
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to bringing joy and satisfaction to every interaction. Here's what makes us different.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who trust us to make them happy.
          </p>
          <a href="#contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 inline-block">
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  )
}
export default Features