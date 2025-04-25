
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-4">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-medical-primary">
          FindMyDoc
        </Link>
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/doctors">Doctors</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
