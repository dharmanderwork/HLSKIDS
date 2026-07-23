"use client";

import Link from "next/link";
import Logo from "./Logo";
import { navigation } from "@/data/navigation";
import Container from "../common/container";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-5 flex h-20 items-center justify-between rounded-full border border-slate-200/70 bg-white/30 px-2 sm:px-4 shadow-lg backdrop-blur-xl">
          
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-medium text-slate-700 transition hover:text-orange-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button className="hidden rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 lg:block">
            Admissions Open
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-26 left-4 right-4 bg-white rounded-xl shadow-2xl border border-slate-100 p-6">
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block font-medium text-slate-700 transition border-b border-orange-100 active:text-orange-500 py-2 select-none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <button className="w-full rounded-full bg-orange-500 px-6 py-3 font-semibold text-white">
                Admissions Open
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}