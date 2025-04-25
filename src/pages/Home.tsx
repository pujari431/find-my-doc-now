
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose FindMyDoc?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-4 h-16 flex items-center justify-center">
                  <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center text-2xl">
                    🔍
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Find Top Doctors</h3>
                <p className="text-gray-600">
                  Search and find the best doctors in your area based on specialty and location.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-4 h-16 flex items-center justify-center">
                  <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center text-2xl">
                    📅
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Book Appointments</h3>
                <p className="text-gray-600">
                  Book appointments online, anytime, anywhere with just a few clicks.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-4 h-16 flex items-center justify-center">
                  <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center text-2xl">
                    💬
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Online Consultations</h3>
                <p className="text-gray-600">
                  Consult with doctors online from the comfort of your home.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Specialties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Specialties</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Cardiologist", "Dermatologist", "Pediatrician", "Orthopedic", "Neurologist", "Ophthalmologist"].map((specialty) => (
              <Card key={specialty} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">{specialty}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
