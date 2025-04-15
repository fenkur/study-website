import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-lg font-semibold tracking-wide">
          Studious &copy; {new Date().getFullYear()}
        </div>
        <div className="flex gap-4 text-sm">
          <Link
            href="https://github.com/fenkur/study-website"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </Link>
        </div>
        <div className="text-xs text-gray-400 text-center md:text-right">
          Last Updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
