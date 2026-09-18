export default function LoadingMeetings() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Loading Meetings...</h1>
      <div className="space-y-4">
        {/* Skeleton placeholders */}
        <div className="border rounded-lg p-4 shadow-sm animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
        <div className="border rounded-lg p-4 shadow-sm animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </main>
  );
}
