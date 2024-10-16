import { LiaArrowAltCircleRight } from "react-icons/lia";

export default function Page() {
  return (
    <section className="flex items-center justify-center h-screen bg-[#464bd8] text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          aria-label="Go to Home Page"
          className="inline-flex items-center bg-[#464bd8] text-white rounded py-2 px-6 hover:bg-white hover:text-[#464bd8] transition-all duration-300"
        >
          <span className="mr-2">Go to Home Page</span>
          <LiaArrowAltCircleRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
