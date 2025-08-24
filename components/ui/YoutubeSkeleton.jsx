

export default function YoutubeSkeleton() {

  return (
    <div className="w-full flex justify-center ">
      <div className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[800px] aspect-video relative">
        <div className="w-full h-full rounded-2xl shadow bg-gray-200 overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-300 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-300/50 backdrop-blur-sm flex items-center px-4 space-x-3">
            <div className="w-8 h-8 bg-gray-400 rounded animate-pulse"></div>
            <div className="flex-1 h-2 bg-red-300 rounded animate-pulse"></div>
            <div className="w-12 h-4 bg-gray-400 rounded animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-400 rounded animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-400 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-gray-400/50 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gray-400/50 rounded-full opacity-20 animate-pulse"></div>
      </div>
    </div>
  );




}



