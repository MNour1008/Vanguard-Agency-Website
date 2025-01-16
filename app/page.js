import Image from 'next/image';

    export default function Home() {
      return (
        <div className="font-sans">
          <header className="container mx-auto py-8 px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Vanguard Creations</h1>
            <nav className="flex space-x-6">
              <a href="#" className="hover:text-gray-600">About us</a>
              <a href="#" className="hover:text-gray-600">Our work</a>
              <a href="#" className="hover:text-gray-600">Our services</a>
            </nav>
            <div className="flex space-x-4">
              <button className="bg-transparent hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 border border-gray-500 hover:border-transparent rounded">Book a call</button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">Work with us</button>
            </div>
          </header>

          <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10">
              <h2 className="text-5xl font-bold mb-6">We don't just build websites, we build experiences</h2>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded mb-6">Request an appointment</button>
              <p className="text-gray-700">We create connection that drive real-world results. Turning bold ideas into interactive digital solutions</p>
            </div>
            <div className="md:w-1/2 relative">
              <Image src="/images/hero-image.jpg" alt="Hero Image" width={500} height={400} className="rounded-lg" />
              <div className="absolute bottom-4 left-4 bg-vanguard-yellow p-4 rounded-lg">
                <Image src="/images/james-olive.jpg" alt="James Olive" width={50} height={50} className="rounded-full mb-2" />
                <p className="text-sm">We create connection that drive real-world results.</p>
                <p className="text-xs font-bold">James Olive</p>
              </div>
            </div>
          </section>

          <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-start">
            <div className="md:w-1/3 md:pr-10">
              <Image src="/images/profile-image.jpg" alt="Profile Image" width={300} height={300} className="rounded-lg mb-6" />
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Explore our tailored solutions for your success</h3>
                <button className="bg-vanguard-yellow hover:bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded">View all services</button>
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0 md:w-1/3">
                <h4 className="text-4xl font-bold mb-2">10+</h4>
                <p className="text-gray-700 mb-4">Years of experience</p>
                <p className="text-gray-700">With over 10 years of experience, we've honed our expertise in delivering innovative digital solutions</p>
              </div>
              <div className="mb-6 md:mb-0 md:w-1/3">
                <h4 className="text-4xl font-bold mb-2">6.8</h4>
                <p className="text-gray-700 mb-4">Consistent ROAS</p>
                <p className="text-gray-700">Achieving a consistent 6.8x Return on Ad Spend (ROAS) is a testament to our data-driven approach</p>
              </div>
              <div className="md:w-1/3">
                <h4 className="text-4xl font-bold mb-2">98%</h4>
                <p className="text-gray-700 mb-4">Client retention</p>
                <p className="text-gray-700">With a 98% client retention rate, we pride ourselves on building long-term partnerships based on trust</p>
              </div>
            </div>
          </section>

          <section className="container mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-vanguard-yellow p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042v2.166m-7.5 0v2.166m7.5-2.166v4.872m-7.5 0v4.872m0-9.744c0 1.79 1.701 3.258 3.781 3.258m-3.781-3.258c0-1.79 1.701-3.258 3.781-3.258m3.781 3.258v-.867m-3.781 0v-.867m3.781 0c2.08 0 3.781 1.468 3.781 3.258m-3.781-3.258c0-1.79 1.701-3.258 3.781-3.258" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">Ideate</h3>
                </div>
                <p className="text-gray-700">Verify the product-market fit, capture new business opportunities, and make your bold visions take shape with innovative strategies and cutting-edge solutions.</p>
              </div>
              <div className="bg-vanguard-gray p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v-.06a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5v.06a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">UI/UX design</h3>
                </div>
                <p className="text-gray-700">Crafting intuitive and engaging digital experiences, our UI/UX design services focus on seamless user journeys and visually stunning interfaces.</p>
              </div>
              <div className="bg-vanguard-gray p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </span>
                  <h3 className="text-xl font-bold">Development</h3>
                </div>
                <p className="text-gray-700">Our development services bring your ideas to life with robust, scalable, and high-performance solutions, ensuring a smooth and secure experience.</p>
              </div>
            </div>
          </section>

          <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10">
              <h2 className="text-3xl font-bold mb-6">A decade of experience turning brands into digital leaders</h2>
              <p className="text-gray-700 mb-6">With over a decade of expertise, we transform brands into digital leaders through innovative strategies, cutting-edge technology, and a results-driven approach.</p>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded">Learn more</button>
            </div>
            <div className="md:w-1/2 relative">
              <Image src="/images/made-by-moreden.jpg" alt="Made by Moreden" width={500} height={400} className="rounded-lg" />
              <div className="absolute top-4 right-4 bg-white p-4 rounded-lg">
                <p className="text-xl font-bold">Made</p>
                <p className="text-xl font-bold">By</p>
                <p className="text-xl font-bold">Moreden</p>
              </div>
            </div>
          </section>

          <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 md:pr-10">
              <h2 className="text-3xl font-bold mb-6">Why we're the right choice for your digital success</h2>
              <p className="text-gray-700 mb-6">Behind every project is a team committed to your growth and success in the digital world</p>
              <ul className="list-none space-y-2">
                <li className="flex items-center"><span className="mr-2">✔</span> Over a decade of experience driving digital success.</li>
                <li className="flex items-center"><span className="mr-2">✔</span> Focus on outcomes that fuel growth.</li>
                <li className="flex items-center"><span className="mr-2">✔</span> Transparent communication every step of the way.</li>
                <li className="flex items-center"><span className="mr-2">✔</span> A proven track record of success.</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">A glimpse at our success stories</h2>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0 md:w-1/3">
                  <Image src="/images/plant-planet.jpg" alt="PlantPlanet" width={200} height={200} className="rounded-lg mb-2" />
                  <p className="text-gray-700">PlantPlanet- Plant free care application design</p>
                </div>
                <div className="mb-6 md:mb-0 md:w-1/3">
                  <Image src="/images/edubridge.jpg" alt="EduBridge" width={200} height={200} className="rounded-lg mb-2" />
                  <p className="text-gray-700">EduBridge - Online learning platform design</p>
                </div>
                <div className="md:w-1/3">
                  <Image src="/images/healthsync.jpg" alt="HealthSync" width={200} height={200} className="rounded-lg mb-2" />
                  <p className="text-gray-700">HealthSync - Patient management system</p>
                </div>
              </div>
              <button className="bg-vanguard-yellow hover:bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded mt-4">View all services</button>
            </div>
          </section>

          <section className="container mx-auto py-16 px-4 bg-vanguard-orange text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Collaborative, strategic, and results-driven</h2>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded">Book a Call</button>
          </section>
        </div>
      );
    }
