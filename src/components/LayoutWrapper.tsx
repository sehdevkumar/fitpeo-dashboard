import React from "react";

export function LayoutWrapper({children}: {children: React.ReactNode}) {
  return (
    <main className="grid p-[20px]  overflow-auto">
    

       {children}

    </main>
  );
}
