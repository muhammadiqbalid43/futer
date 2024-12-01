import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="w-full h-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 mb-24">
          <div>
            <h1 className="text-2xl mb-4">Location:</h1>
            <div className="text-colorgray text-sm space-y-1">
              <p>Prabot Furniture Store 123</p>
              <p>Amanah street, suite 567</p>
              <p>Bengkulu, Indonesia 12345</p>
            </div>
          </div>

          <div>
            <h1 className="text-2xl mb-4">Contact Us:</h1>
            <div className="text-colorgray text-sm space-y-1">
              <p>Phone: +62 21 555 1234</p>
              <p>Customer Service Hours</p>
            </div>
          </div>

          <div>
            <h1 className="text-2xl mb-4">Email:</h1>
            <div className="text-colorgray text-sm space-y-1">
              <p>For inquiries: info@futer.com</p>
              <p>For support: support@futer.com</p>
            </div>
          </div>

          <div>
            <h1 className="text-2xl mb-4">Sign up for our newsletter</h1>
            <div className="flex items-center justify-center h-auto">
              <div className="flex w-full max-w-md rounded ring-1 ring-gray-300 overflow-hidden">
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="pl-2"
                />
                <Button variant="defaultyellow">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t">
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-3">
            <div className="flex text-colorgray gap-2">
              <div>
                <Facebook size={20} />
              </div>
              <div>
                <Twitter size={20} />
              </div>
              <div>
                <Instagram size={20} />
              </div>
              <div></div>
            </div>
            <div className="text-center text-colorgray text-sm">
              <p>Copyright 2024, All right Reserved</p>
            </div>
            <div className="text-center text-colorgray text-sm">
              <p>Terms & conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
