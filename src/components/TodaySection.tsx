export default function TodaySection() {
  return (
    <div className="flex border-b border-neutral-200">
      {/* Left: Today overview */}
      <div className="flex-1 flex flex-col gap-3 px-8 pt-6 pb-6">
        <h1 className="text-[32px] font-bold text-neutral-900 leading-tight tracking-tight">Today</h1>

        <div className="flex gap-16">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-neutral-400">Gross revenue</span>
            <span className="text-[18px] font-semibold text-neutral-900">--</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-neutral-400">Yesterday</span>
            <span className="text-[18px] font-semibold text-neutral-900">--</span>
          </div>
        </div>

        <span className="text-[12px] text-neutral-400">4:27 PM</span>

        {/* Chart placeholder */}
        <div className="bg-[#f0f0f0] rounded-xl h-[140px] flex items-center justify-center">
          <span className="text-[13px] text-neutral-400">No data available</span>
        </div>
      </div>

      {/* Right: Balance panel */}
      <div className="w-[260px] flex-shrink-0 flex flex-col gap-3 px-6 pt-6 pb-6 border-l border-neutral-100">
        <div className="flex justify-between items-start">
          <span className="text-[12px] text-neutral-400">Total balance</span>
          <button className="text-[13px] font-medium text-blue-600 hover:text-blue-700 transition-colors">
            View
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[28px] font-bold text-neutral-900 leading-tight">$0.00</span>
          <span className="text-[12px] text-neutral-400">$0.00 available</span>
        </div>

        {/* Warning banner */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 flex items-center gap-2">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 9v4M12 17h.01" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[12px] text-yellow-800">
            You&apos;re missing out on additional revenue →
          </span>
        </div>

        {/* Payouts */}
        <div className="flex justify-between items-center pt-2 border-t border-neutral-100">
          <span className="text-[13px] text-neutral-500">Payouts</span>
          <button className="text-[13px] font-medium text-blue-600 hover:text-blue-700 transition-colors">
            View
          </button>
        </div>
        <span className="text-[18px] font-semibold text-neutral-900">--</span>
      </div>
    </div>
  );
}
