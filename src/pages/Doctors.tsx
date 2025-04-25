
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Doctor, searchDoctors, specialties, locations } from "@/lib/doctor-service";

const Doctors = () => {
  const location = useLocation();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query") || "";
    const specialty = params.get("specialty") || "";
    const loc = params.get("location") || "";
    
    setSearchQuery(query);
    setSelectedSpecialty(specialty);
    setSelectedLocation(loc);
    
    const results = searchDoctors(query, specialty || undefined, loc || undefined);
    setDoctors(results);
  }, [location.search]);

  const handleSearch = () => {
    const results = searchDoctors(
      searchQuery,
      selectedSpecialty || undefined,
      selectedLocation || undefined
    );
    setDoctors(results);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Find Doctors</h1>
        
        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Input
                type="text"
                placeholder="Search by doctor name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            
            <Select
              value={selectedSpecialty}
              onValueChange={setSelectedSpecialty}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="mt-4">
            <Button 
              onClick={handleSearch} 
              className="bg-medical-primary hover:bg-medical-secondary"
            >
              Search
            </Button>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {doctors.length} {doctors.length === 1 ? 'Doctor' : 'Doctors'} found
          </h2>
          
          {doctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">
                No doctors found. Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Doctors;
