"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  // ensure client is created only once
  const [client] = useState(() => new QueryClient());

  // ✅ No type issue here, QueryClientProvider is used as a component
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
