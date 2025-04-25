
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Doctor } from "@/lib/doctor-service";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex gap-4 items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{doctor.name}</h3>
            <p className="text-sm text-gray-500">{doctor.specialty}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 mb-4">
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
        <Button asChild className="w-full">
          <Link to={`/doctor/${doctor.id}`}>View Profile</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
