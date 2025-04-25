
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  location: string;
  experience: number;
  consultationFee: number;
  availableDays: string[];
  rating: number;
  image: string;
  about: string;
}

// Sample data for our doctors
const doctorsData: Doctor[] = [
  {
    id: "dr-ram-kumar",
    name: "Dr. Ram Kumar",
    specialty: "Cardiologist",
    location: "Chennai",
    experience: 12,
    consultationFee: 800,
    availableDays: ["Monday", "Wednesday", "Friday"],
    rating: 4.8,
    image: "/placeholder.svg",
    about: "Dr. Ram Kumar is a highly skilled cardiologist with over 12 years of experience. He specializes in treating various heart conditions and has helped countless patients lead healthier lives."
  },
  {
    id: "dr-siddu-patel",
    name: "Dr. Siddu Patel",
    specialty: "Dermatologist",
    location: "Bangalore",
    experience: 8,
    consultationFee: 700,
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    rating: 4.6,
    image: "/placeholder.svg",
    about: "Dr. Siddu Patel is a renowned dermatologist with 8 years of experience. He specializes in treating various skin conditions and is known for his patient-friendly approach."
  },
  {
    id: "dr-anjali-singh",
    name: "Dr. Anjali Singh",
    specialty: "Pediatrician",
    location: "Chennai",
    experience: 10,
    consultationFee: 650,
    availableDays: ["Monday", "Tuesday", "Thursday"],
    rating: 4.9,
    image: "/placeholder.svg",
    about: "Dr. Anjali Singh is a compassionate pediatrician with 10 years of experience. She is loved by her little patients and their parents for her gentle approach to pediatric care."
  }
];

// List of specialties for filter options
export const specialties = [
  "Cardiologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Orthopedic",
  "Ophthalmologist"
];

// List of locations for filter options
export const locations = [
  "Chennai",
  "Bangalore",
  "Mumbai",
  "Delhi",
  "Hyderabad"
];

// Function to get all doctors
export function getAllDoctors(): Doctor[] {
  return doctorsData;
}

// Function to search doctors based on criteria
export function searchDoctors(query: string, specialty?: string, location?: string): Doctor[] {
  let results = [...doctorsData];
  
  if (query) {
    const lowercaseQuery = query.toLowerCase();
    results = results.filter(doctor => 
      doctor.name.toLowerCase().includes(lowercaseQuery)
    );
  }
  
  if (specialty) {
    results = results.filter(doctor => doctor.specialty === specialty);
  }
  
  if (location) {
    results = results.filter(doctor => doctor.location === location);
  }
  
  return results;
}

// Function to get doctor by ID
export function getDoctorById(id: string): Doctor | undefined {
  return doctorsData.find(doctor => doctor.id === id);
}
