import {useState} from "react";
import {Menu, X} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-3 md:px-0 py-4 flex items-center justify-between">
        <div className="flex gap-2 text-primary">
          <span className="text-xl font-bold tracking-tight text-slate-900">Khu vực logo</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {['How it works', 'Benefits', 'Interviewers', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 text-sm font-bold text-slate-900 hover:text-primary transition-colors">
              Login
            </button>
            <button className="px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
          {['How it works', 'Benefits', 'Interviewers', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-lg font-semibold text-slate-600"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <hr className="border-slate-100" />
          <button className="w-full py-3 bg-primary text-white font-bold rounded-lg">Get Started</button>
          <button className="w-full py-3 text-slate-900 font-bold">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Header;