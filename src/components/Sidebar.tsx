'use client';

import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GitBranch, 
  Calendar, 
  BarChart3, 
  UserPlus, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Leads', href: '/leads' },
  { icon: GitBranch, label: 'Pipeline', href: '/pipeline' },
  { icon: Calendar, label: 'Visits', href: '/visits' },
  { icon: BarChart3, label: 'Analytics', href: '/analytics' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      className="h-screen glass-nav text-white flex flex-col sticky top-0 left-0 transition-all duration-300 z-50 overflow-hidden"
    >
      {/* Brand Header */}
      <div className="p-8 pb-12 flex items-center gap-4">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20 shrink-0">
          G
        </div>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col"
          >
            <span className="font-black text-xl tracking-tighter leading-none">GHARPAYY</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Lead CRM</span>
          </motion.div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href}>
              <div className={`
                relative flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 cursor-pointer group
                ${isActive ? 'bg-primary/10 text-primary' : 'text-slate-400 hover:text-white hover:bg-white/5'}
              `}>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute left-0 w-1 h-6 bg-primary rounded-r-full"
                  />
                )}
                <Icon size={20} className={isActive ? 'text-primary' : 'group-hover:scale-110 transition-transform'} />
                {!isCollapsed && (
                  <span className="font-bold text-sm tracking-tight">{item.label}</span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute bottom-32 -right-0 p-2 bg-primary text-white rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity hover:bg-amber-600 shadow-xl"
        style={{ opacity: 0.8 }}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Add Lead Button */}
      <div className="p-4 mt-auto">
        <Link href="/leads/new" className="block">
          <button className={`
            w-full flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all
            ${isCollapsed ? 'px-0' : 'px-4'}
          `}>
            <UserPlus size={18} />
            {!isCollapsed && <span>Add Lead</span>}
          </button>
        </Link>
      </div>
    </motion.aside>
  );
}
