export default function MapSkeleton() {
  return (
    <div className="relative">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="w-full h-[500px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative animate-pulse">
              <div className="w-8 h-10 bg-red-400 rounded-full rounded-b-none transform rotate-45 origin-bottom-left"></div>
              <div className="absolute top-2 left-2 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-400"></div>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-400"></div>
            <div className="absolute top-3/4 left-0 right-0 h-px bg-gray-400"></div>
            <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gray-400"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-400"></div>
            <div className="absolute top-0 bottom-0 left-3/4 w-px bg-gray-400"></div>
          </div>
          <div className="absolute top-16 left-8 w-32 h-2 bg-gray-300 rounded animate-pulse"></div>
          <div className="absolute top-20 left-12 w-24 h-2 bg-gray-300 rounded animate-pulse"></div>
          <div className="absolute bottom-16 right-8 w-28 h-2 bg-gray-300 rounded animate-pulse"></div>
          <div className="absolute bottom-20 right-12 w-20 h-2 bg-gray-300 rounded animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-16 h-6 bg-gray-300 rounded animate-pulse"></div>
          <div className="absolute top-4 right-4 space-y-1">
            <div className="w-8 h-8 bg-gray-300 rounded shadow animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-300 rounded shadow animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500/50 rounded-full opacity-20 animate-pulse"></div>
    </div>
  );
}