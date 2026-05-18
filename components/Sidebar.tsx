const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M15 18l-6-6 6-6" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function NavSection({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <button className="flex items-center justify-between px-4 py-1.5 hover:bg-neutral-50 transition-colors w-full text-left">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[13px] font-medium text-neutral-900">{label}</span>
        </div>
        <ChevronDown />
      </button>
      {children && (
        <div className="pl-[38px] flex flex-col">{children}</div>
      )}
    </div>
  );
}

function NavItem({
  label,
  active,
  dot,
}: {
  label: string;
  active?: boolean;
  dot?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between py-[5px] pr-4 rounded-md mr-2 ${
        active ? "bg-neutral-100" : ""
      }`}
    >
      <span
        className={`text-[13px] ${
          active ? "font-medium text-neutral-900" : "text-neutral-500"
        }`}
      >
        {label}
      </span>
      {dot && (
        <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
      )}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-[280px] flex-shrink-0 border-r border-neutral-200 flex flex-col py-3 overflow-y-auto">
      {/* Search */}
      <div className="px-3 pb-3">
        <div className="flex items-center gap-2 bg-neutral-100 rounded-lg px-3 py-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="#999" strokeWidth="1.5" />
            <path d="M21 21l-4.35-4.35" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[13px] text-neutral-400">Search</span>
        </div>
      </div>

      {/* Plans & Access */}
      <NavSection
        label="Plans & Access"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#555" strokeWidth="1.5" />
            <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#555" strokeWidth="1.5" />
            <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#555" strokeWidth="1.5" />
            <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#555" strokeWidth="1.5" />
          </svg>
        }
      >
        <NavItem label="Plans" />
        <NavItem label="Promo Codes" />
        <NavItem label="Currencies" />
        <NavItem label="Income Reports" />
        <NavItem label="Past Due Members" />
      </NavSection>

      {/* Finance */}
      <div className="mt-1">
        <NavSection
          label="Finance"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="3" width="20" height="18" rx="2" stroke="#555" strokeWidth="1.5" />
              <path d="M8 12h8M8 16h5M8 8h4" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          }
        >
          <NavItem label="Stats" active />
          <NavItem label="Promo Codes" />
          <NavItem label="Currencies" />
          <NavItem label="Income Reports" />
          <NavItem label="Past Due Members" />
        </NavSection>
      </div>

      {/* Marketing */}
      <div className="mt-1">
        <NavSection
          label="Marketing"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M22 12a10 10 0 11-20 0 10 10 0 0120 0z" stroke="#555" strokeWidth="1.5" />
              <path d="M8 12s1.5-4 4-4 4 4 4 4-1.5 4-4 4-4-4-4-4z" stroke="#555" strokeWidth="1.5" />
            </svg>
          }
        >
          <NavItem label="Audiences" dot />
          <NavItem label="Promotional Banners" dot />
          <NavItem label="Subscription Groups" />
          <NavItem label="Landing Pages" />
        </NavSection>
      </div>

      {/* Integrations (collapsed) */}
      <div className="mt-1">
        <button className="flex items-center justify-between px-4 py-1.5 hover:bg-neutral-50 transition-colors w-full text-left">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M16 18l6-6-6-6M8 6L2 12l6 6" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[13px] font-medium text-neutral-900">Integrations</span>
          </div>
          <ChevronLeft />
        </button>
      </div>

      {/* Mighty Billing Plan */}
      <div className="mt-1">
        <NavSection
          label="Mighty Billing Plan"
          icon={
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="5" width="20" height="14" rx="2" stroke="#555" strokeWidth="1.5" />
              <path d="M2 10h20" stroke="#555" strokeWidth="1.5" />
            </svg>
          }
        >
          <NavItem label="Upgrade Your Plan" />
        </NavSection>
      </div>
    </aside>
  );
}
