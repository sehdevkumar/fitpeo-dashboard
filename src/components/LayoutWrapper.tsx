import React from "react";

export function LayoutWrapper({children}: {children: React.ReactNode}) {
  return (
    <main className="grid  overflow-auto">
    

       {children}

    </main>
  );
}
