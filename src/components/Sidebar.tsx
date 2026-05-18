const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M15 18l-6-6 6-6" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function SectionHeader({ icon, label, collapsed }: { icon: React.ReactNode; label: string; collapsed?: boolean }) {
  return (
    <button className="flex items-center justify-between w-full px-4 py-2 hover:bg-white/5 transition-colors">
      <div className="flex items-center gap-2.5">
        <span className="text-neutral-400 flex-shrink-0">{icon}</span>
        <span className="text-[13px] font-medium text-neutral-300">{label}</span>
      </div>
      {collapsed ? <ChevronLeft /> : <ChevronDown />}
    </button>
  );
}

function NavItem({ label, active, dot }: { label: string; active?: boolean; dot?: boolean }) {
  return (
    <div className="flex items-center ml-[22px] border-l border-neutral-700 pl-4 pr-3 py-[5px]">
      <div className={`flex-1 flex items-center justify-between rounded-md px-2 py-0.5 ${active ? "bg-white" : ""}`}>
        <span className={`text-[13px] ${active ? "text-neutral-900 font-medium" : "text-neutral-500"}`}>{label}</span>
        {dot && (
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M12 19V5M5 12l7-7 7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-[280px] flex-shrink-0 bg-[#111111] flex flex-col overflow-y-auto">
      {/* Search */}
      <div className="px-3 pt-3 pb-2">
        <div className="flex items-center gap-2 bg-neutral-800 rounded-lg px-3 py-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="#6b7280" strokeWidth="1.5" />
            <path d="M21 21l-4.35-4.35" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[13px] text-neutral-500">Search</span>
        </div>
      </div>

      {/* Plans & Access */}
      <div className="mt-1">
        <SectionHeader
          label="Plans & Access"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          }
        />
        <NavItem label="Plans" />
        <NavItem label="Promo Codes" />
        <NavItem label="Currencies" />
        <NavItem label="Income Reports" />
        <NavItem label="Past Due Members" />
      </div>

      {/* Finance */}
      <div className="mt-3">
        <SectionHeader
          label="Finance"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7 12h10M7 16h6M7 8h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          }
        />
        <NavItem label="Stats" active />
        <NavItem label="Promo Codes" />
        <NavItem label="Currencies" />
        <NavItem label="Income Reports" />
        <NavItem label="Past Due Members" />
      </div>

      {/* Marketing */}
      <div className="mt-3">
        <SectionHeader
          label="Marketing"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />
        <NavItem label="Audiences" dot />
        <NavItem label="Promotional Banners" dot />
        <NavItem label="Subscription Groups" />
        <NavItem label="Landing Pages" />
      </div>

      {/* Integrations */}
      <div className="mt-3">
        <SectionHeader
          collapsed
          label="Integrations"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M16 18l6-6-6-6M8 6L2 12l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />
      </div>

      {/* Mighty Billing Plan */}
      <div className="mt-3">
        <SectionHeader
          label="Mighty Billing Plan"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          }
        />
        <NavItem label="Upgrade Your Plan" />
      </div>
    </aside>
  );
}
