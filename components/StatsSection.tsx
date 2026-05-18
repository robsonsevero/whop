const ChevronDown = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function FilterPill({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex items-center gap-1.5 px-2.5 py-1.5 border border-neutral-200 rounded-md bg-white hover:bg-neutral-50 transition-colors text-[12px] text-neutral-700">
      {children}
      <ChevronDown size={12} />
    </button>
  );
}

function StatCard({
  label,
  value,
  showDateRange = true,
}: {
  label: string;
  value: string;
  showDateRange?: boolean;
}) {
  return (
    <div className="flex-1 border border-neutral-200 rounded-xl p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[13px] text-neutral-500">{label}</span>
        <ChevronDown />
      </div>
      <span className="text-2xl font-bold text-neutral-900">{value}</span>
      <div className="bg-neutral-100 rounded-md h-20 flex items-center justify-center mt-1">
        <span className="text-[12px] text-neutral-400">No data available</span>
      </div>
      {showDateRange && (
        <div className="flex justify-between">
          <span className="text-[11px] text-neutral-300">May 12</span>
          <span className="text-[11px] text-neutral-300">Today</span>
        </div>
      )}
    </div>
  );
}

function PaymentsBreakdownCard() {
  const items = ["Refund", "Past due", "Paid", "Cancelled"];
  return (
    <div className="flex-1 border border-neutral-200 rounded-xl p-5 flex flex-col gap-3">
      <span className="text-[13px] text-neutral-500">Payments breakdown</span>
      <div className="flex flex-col gap-1.5">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-sm bg-neutral-300 flex-shrink-0" />
            <span className="text-[11px] text-neutral-500">{item}</span>
          </div>
        ))}
      </div>
      <div className="bg-neutral-100 rounded-md h-16 flex items-center justify-center mt-auto">
        <span className="text-[12px] text-neutral-400">No data available</span>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <div className="px-8 py-6 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-neutral-900">Stats</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-200 rounded-md bg-white hover:bg-neutral-50 transition-colors text-[13px] text-neutral-800">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Add
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-200 rounded-md bg-white hover:bg-neutral-50 transition-colors text-[13px] text-neutral-800">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Edit
          </button>
        </div>
      </div>

      {/* Filter row */}
      <div className="flex items-center gap-2 flex-wrap">
        <FilterPill>Last 7 days</FilterPill>
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 border border-neutral-200 rounded-md bg-white hover:bg-neutral-50 transition-colors text-[12px] text-neutral-700">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="#555" strokeWidth="1.5" />
            <path d="M16 2v4M8 2v4M3 10h18" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          May 12 - 18, 2026
        </button>
        <span className="text-[12px] text-neutral-400">compared to</span>
        <FilterPill>Previous period</FilterPill>
        <FilterPill>Daily</FilterPill>
        <span className="text-[12px] text-neutral-400">on</span>
        <FilterPill>All products</FilterPill>
      </div>

      {/* Row 1 */}
      <div className="flex gap-4">
        <StatCard label="Gross revenue" value="$0.00" />
        <StatCard label="Net revenue" value="$0.00" />
        <StatCard label="New users" value="0" />
      </div>

      {/* Row 2 */}
      <div className="flex gap-4">
        <StatCard label="MRR" value="$0.00" />
        <StatCard label="ARR" value="$0.00" />
        <PaymentsBreakdownCard />
      </div>
    </div>
  );
}
