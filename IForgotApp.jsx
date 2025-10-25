import React from "react";
import { Plus, Search, Folder as FolderIcon, Pencil, Mic, X, ChevronDown } from "lucide-react";

// Tailwind utility: If you're pasting into a fresh project, make sure Tailwind is configured
// and your index.css includes @tailwind base; @tailwind components; @tailwind utilities;

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <div
    className={`group flex items-center gap-3 w-full rounded-xl px-3 py-2 text-sm cursor-pointer select-none
    ${active ? "bg-neutral-800/60 text-white" : "text-neutral-300 hover:bg-neutral-800/40 hover:text-white"}`}
  >
    <Icon size={18} className="shrink-0" />
    <span className="truncate">{label}</span>
  </div>
);

const NoteItem = ({ label, isFolder = false }) => (
  <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/40 cursor-pointer">
    {isFolder ? <FolderIcon size={18} className="shrink-0" /> : <div className="w-[18px]" />}
    <span className="truncate">{label}</span>
  </div>
);

const ActionButton = ({ icon: Icon, aria }) => (
  <button
    aria-label={aria}
    className="size-12 rounded-full bg-neutral-800/70 hover:bg-neutral-700 text-white flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/5"
  >
    <Icon size={22} />
  </button>
);

export default function IForgotApp() {
  const notes = [
    { label: "New Folder", folder: true },
    { label: "Folder", folder: true },
    { label: "Folder", folder: true },
    { label: "AIPTW MI review", folder: false },
    { label: "Folder", folder: true },
    { label: "Using Atlas.ti for projects", folder: false },
    { label: "Folder", folder: true },
    { label: "Quantitative analysis sug…", folder: false },
    { label: "Consulting training overvi…", folder: false },
    { label: "Folder", folder: true },
    { label: "Consulting appointment c…", folder: false },
    { label: "Folder", folder: true },
    { label: "Quantitative analysis sug…", folder: false },
    { label: "Folder", folder: true },
    { label: "Consulting appointment c…", folder: false },
  ];

  return (
    <div className="h-screen w-screen bg-neutral-950 text-neutral-100">
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-72 border-r border-white/10 h-full flex flex-col bg-neutral-950/90">
          {/* App title */}
          <div className="px-4 pt-4 pb-3 text-neutral-200 text-sm font-semibold tracking-wide">iForgot</div>

          {/* Primary actions */}
          <div className="px-2 space-y-1">
            <SidebarItem icon={Plus} label="New chat" />
            <SidebarItem icon={Search} label="Search chats" />
          </div>

          {/* Notes header */}
          <div className="px-4 pt-6 pb-2 text-xs uppercase tracking-wider text-neutral-400">Notes</div>

          {/* Notes list */}
          <div className="flex-1 overflow-y-auto px-1">
            <div className="space-y-1 pr-1">
              {notes.map((n, i) => (
                <NoteItem key={i} label={n.label} isFolder={n.folder} />
              ))}
            </div>
          </div>

          {/* Collapse chevron */}
          <div className="px-4 py-2 text-neutral-400">
            <div className="inline-flex items-center gap-2 text-xs hover:text-neutral-200 cursor-pointer">
              <ChevronDown size={16} />
              <span>More</span>
            </div>
          </div>

          {/* Profile footer */}
          <div className="mt-auto border-t border-white/10 px-4 py-3 flex items-center gap-3">
            <div className="size-7 rounded-full bg-gradient-to-br from-sky-400 to-blue-700" />
            <div className="min-w-0">
              <div className="text-sm truncate">First Last Name</div>
              <div className="text-[11px] text-neutral-400">Plus</div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-8">
              {/* Avatar circle */}
              <div className="size-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,#dff1ff_0%,#8ec5ff_45%,#0050ff_100%)] shadow-[0_0_40px_rgba(0,0,0,0.35)]" />

              {/* Action buttons */}
              <div className="flex items-center gap-6">
                <ActionButton icon={Pencil} aria="Edit" />
                <ActionButton icon={Mic} aria="Record" />
                <ActionButton icon={X} aria="Close" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

