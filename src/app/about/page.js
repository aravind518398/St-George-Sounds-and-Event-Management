import Link from "next/link";
import PhotoGallery from "../../../components/PhotoGallery";

export default function AboutPage() {
  return (
    <>
    <div>
      <PhotoGallery />
      
    </div>
   <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🚧 Page Under Maintenance 🚧</h1>
      <p className="text-gray-600 mb-6">
        This demo page is currently under maintenance. Please check back later.
      </p>
      
      <Link
        href="/"
        className="px-4 py-2 bg-purple-800 text-white rounded-lg shadow hover:bg-purple-900 transition"
      >
        Go Back
      </Link>
    </div>
    </>
    
  );
}