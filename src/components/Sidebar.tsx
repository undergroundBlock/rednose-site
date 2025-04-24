// src/components/Sidebar.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false); // desktop collapse
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen] = useState(true); // mobile starts collapsed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  
  return (
    <aside
      className={`
        bg-white border-gray-200 p-4
        transition-all duration-300 ease-in-out
        ${isMobile ? 'w-full border-t md:border-t-0' : isCollapsed ? 'w-16' : 'w-64'}
        ${isMobile ? (mobileOpen ? 'h-auto' : 'h-14') : 'min-h-screen'}
        relative
        z-10
      `}
    >
      {/* Desktop Collapse Button */}
      {!isMobile && (
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-[-12px] bg-gray-200 border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-gray-300 z-20"
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      )}

      {/* Content */}
      {(mobileOpen || !isMobile) && (
        <div className={`mt-2 space-y-3 ${isMobile ? 'flex justify-around' : 'block'}`}>
          <SidebarLink icon="🎨" label="Mint" collapsed={isCollapsed || isMobile} href="/mint" />
          <SidebarLink icon="💰" label="Liquidity" collapsed={isCollapsed || isMobile} href="/liquidity" />
          <SidebarLink icon="🌍" label="Domains" collapsed={isCollapsed || isMobile} href="/domains" />
          <SidebarLink icon="📄" label="Contracts" collapsed={isCollapsed || isMobile} href="/contracts" />
          <SidebarLink icon="🧠" label="Learn" collapsed={isCollapsed || isMobile} href="/learn" />
        </div>
      )}
    </aside>
  );
}

function SidebarLink({
  icon,
  label,
  collapsed,
  href,
}: {
  icon: string;
  label: string;
  collapsed: boolean;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center text-sm hover:text-red-600 transition-colors duration-200 justify-center md:justify-start"
    >
      <span className="mr-2">{icon}</span>
      {/* Show label only if not collapsed */}
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
