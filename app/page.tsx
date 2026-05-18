import Sidebar from "@/src/components/Sidebar";
import TodaySection from "@/src/components/TodaySection";
import StatsSection from "@/src/components/StatsSection";

export default function Home() {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Top Bar */}
      <header className="flex items-center justify-between bg-white px-4 h-[72px] flex-shrink-0 border-b-4 border-black">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-neutral-200 flex items-center justify-center flex-shrink-0 text-neutral-700 text-sm font-semibold">
            r
          </div>
          <div className="flex flex-col">
            <span className="text-neutral-500 text-[12px] leading-4">Robson&apos;s Community</span>
            <span className="text-neutral-900 text-[14px] font-bold leading-5">Admin</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-md text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.09 8.26L19 6L15.45 11.27L21 13.27L15.27 14.54L17 20.46L12 17L7 20.46L8.73 14.54L3 13.27L8.55 11.27L5 6L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-white">
          <TodaySection />
          <StatsSection />
        </main>
      </div>
    </div>
  );
}
