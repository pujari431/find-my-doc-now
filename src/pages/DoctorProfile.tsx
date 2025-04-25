
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Doctor, getDoctorById } from "@/lib/doctor-service";
import { useToast } from "@/components/ui/use-toast";

const DoctorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const doctorData = getDoctorById(id);
      if (doctorData) {
        setDoctor(doctorData);
      } else {
        navigate("/doctors");
      }
    }
    setIsLoading(false);
  }, [id, navigate]);

  const handleBookAppointment = () => {
    toast({
      title: "Appointment booking",
      description: "This feature will be available in the next version!",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-12 text-center">
          Loading...
        </div>
        <Footer />
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container py-12 text-center">
          Doctor not found
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate("/doctors")}
          className="mb-6"
        >
          Back to Doctors
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Doctor Info Card */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <h1 className="text-2xl font-bold mb-1">{doctor.name}</h1>
                  <p className="text-gray-500 mb-4">{doctor.specialty}</p>
                  
                  <div className="w-full border-t border-gray-200 my-4 pt-4">
                    <div className="grid grid-cols-2 gap-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">{doctor.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Experience</p>
                        <p className="font-medium">{doctor.experience} years</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Fee</p>
                        <p className="font-medium">₹{doctor.consultationFee}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Rating</p>
                        <p className="font-medium">{doctor.rating}/5</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-medical-primary hover:bg-medical-secondary"
                    onClick={handleBookAppointment}
                  >
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Doctor Details */}
          <div className="md:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">About</h2>
                    <p className="text-gray-700">{doctor.about}</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">Specializations</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>General {doctor.specialty}</li>
                      <li>Advanced {doctor.specialty} procedures</li>
                      <li>Emergency {doctor.specialty} care</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">Education</h3>
                    <ul className="space-y-3">
                      <li>
                        <p className="font-medium">MBBS</p>
                        <p className="text-gray-600">All India Institute of Medical Sciences</p>
                        <p className="text-gray-500 text-sm">2005 - 2011</p>
                      </li>
                      <li>
                        <p className="font-medium">MD in {doctor.specialty}</p>
                        <p className="text-gray-600">Christian Medical College</p>
                        <p className="text-gray-500 text-sm">2011 - 2014</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="schedule" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Schedule</h2>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Available Days</h3>
                      <div className="grid grid-cols-7 gap-2 text-center">
                        {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => (
                          <div 
                            key={day} 
                            className={`py-2 rounded ${
                              doctor.availableDays.includes(day)
                                ? "bg-medical-light text-medical-primary font-medium"
                                : "bg-gray-100 text-gray-400"
                            }`}
                          >
                            {day.slice(0, 3)}
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="text-lg font-medium mt-6">Consultation Hours</h3>
                      <div className="space-y-2">
                        {doctor.availableDays.map(day => (
                          <div key={day} className="flex justify-between items-center">
                            <span className="font-medium">{day}</span>
                            <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Reviews</h2>
                    
                    <div className="space-y-6">
                      {[
                        { name: "Priya M", rating: 5, comment: "Excellent doctor! Very knowledgeable and compassionate." },
                        { name: "Ravi K", rating: 4, comment: "Good consultation experience. Would recommend." },
                        { name: "Sneha T", rating: 5, comment: "Very professional and explains everything clearly." }
                      ].map((review, index) => (
                        <div key={index} className="border-b pb-4 last:border-0">
                          <div className="flex justify-between mb-1">
                            <h4 className="font-medium">{review.name}</h4>
                            <div className="flex">
                              {Array(5).fill(0).map((_, i) => (
                                <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DoctorProfile;
