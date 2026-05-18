const DropdownChevron = () => (
  <div className="w-6 h-6 rounded-md bg-neutral-900 flex items-center justify-center flex-shrink-0">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

function FilterPill({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <button className="flex items-center gap-1.5 px-2.5 py-1.5 border border-neutral-200 rounded-lg bg-white hover:bg-neutral-50 transition-colors text-[12px] text-neutral-700">
      {icon && <span className="text-neutral-500">{icon}</span>}
      {children}
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 border border-neutral-200 rounded-2xl p-5 flex flex-col gap-3 min-w-0">
      <div className="flex items-center justify-between">
        <span className="text-[13px] text-neutral-500">{label}</span>
        <DropdownChevron />
      </div>
      <span className="text-[26px] font-bold text-neutral-900 leading-tight">{value}</span>
      <div className="flex-1 flex items-center justify-center">
        <span className="text-[12px] text-neutral-400 bg-neutral-100 rounded-full px-3 py-1">No data available</span>
      </div>
      <div className="h-16 bg-neutral-50 rounded-lg" />
      <div className="flex justify-between">
        <span className="text-[11px] text-neutral-300">May 12</span>
        <span className="text-[11px] text-neutral-300">Today</span>
      </div>
    </div>
  );
}

function PaymentsBreakdownCard() {
  const items = [
    { label: "Failed", color: "bg-neutral-300" },
    { label: "Past due", color: "bg-neutral-300" },
    { label: "Paid", color: "bg-neutral-300" },
    { label: "Cancelled", color: "bg-neutral-300" },
  ];
  return (
    <div className="flex-1 border border-neutral-200 rounded-2xl p-5 flex flex-col gap-3 min-w-0">
      <span className="text-[13px] text-neutral-500">Payments breakdown</span>
      {/* Bar */}
      <div className="h-2 bg-neutral-100 rounded-full" />
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-sm ${item.color} flex-shrink-0`} />
            <span className="text-[12px] text-neutral-400">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-auto">
        <span className="text-[12px] text-neutral-400 bg-neutral-100 rounded-full px-3 py-1">No data available</span>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <div className="px-8 py-6 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-bold text-neutral-900">Stats</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-200 rounded-lg bg-white hover:bg-neutral-50 transition-colors text-[13px] text-neutral-700">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Add
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-200 rounded-lg bg-white hover:bg-neutral-50 transition-colors text-[13px] text-neutral-700">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Edit
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 flex-wrap">
        <FilterPill>Last 7 days</FilterPill>
        <FilterPill
          icon={
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          }
        >
          May 12 - 18, 2026
        </FilterPill>
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
