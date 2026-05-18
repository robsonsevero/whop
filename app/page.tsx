import Sidebar from "@/components/Sidebar";
import TodaySection from "@/components/TodaySection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-white" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      {/* Top Bar */}
      <header className="flex items-center justify-between bg-black px-5 h-14 flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-neutral-700 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-semibold">r</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[13px] font-semibold leading-[18px]">Robson&apos;s Community</span>
            <span className="text-neutral-500 text-[12px] leading-4">Admin</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-neutral-800 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.09 8.26L19 6L15.45 11.27L21 13.27L15.27 14.54L17 20.46L12 17L7 20.46L8.73 14.54L3 13.27L8.55 11.27L5 6L10.91 8.26L12 2Z" stroke="#777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-neutral-800 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="#777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <TodaySection />
          <StatsSection />
        </main>
      </div>
    </div>
  );
}
