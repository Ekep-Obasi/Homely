import * as React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ChatLayout({ children }: Props) {
  return (
    <div className="w-full min-h-screen">{children}</div>
  )
}
