"use client"
 
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { SidebarProvider } from "./sidebar-context"
 
export function ClientProviders({ children, ...props }: ThemeProviderProps) {
  return (
  <NextThemesProvider {...props}>
  <SidebarProvider>
    {children}
    </SidebarProvider>
    </NextThemesProvider>
    )
}