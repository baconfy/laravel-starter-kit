import React from 'react';

export default function AppSidebarLayout({ children }: { children: React.ReactNode }) {
    return <div className="flex min-h-screen flex-col">{children}</div>;
}
