import { Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-base-faint py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary  rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-on-background" />
              </div>
              <span className="font-bold text-on-background">Schedulo</span>
            </div>
            <p className="text-sm">Automating interview scheduling for modern HR teams.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-on-background mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-on-background transition" href="#">Features</a></li>
              <li><a className="hover:text-on-background transition" href="#">Pricing</a></li>
              <li><a className="hover:text-on-background transition" href="#">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-on-background mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-on-background transition" href="#">About</a></li>
              <li><a className="hover:text-on-background transition" href="#">Blog</a></li>
              <li><a className="hover:text-on-background transition" href="#">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-on-background mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-on-background transition" href="#">Privacy</a></li>
              <li><a className="hover:text-on-background transition" href="#">Terms</a></li>
              <li><a className="hover:text-on-background transition" href="#">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-surface-dark pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 Schedulo. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="text-base-light hover:text-on-background transition" href="#">Twitter</a>
            <a className="text-base-light hover:text-on-background transition" href="#">LinkedIn</a>
            <a className="text-base-light hover:text-on-background transition" href="#">GitHub</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
