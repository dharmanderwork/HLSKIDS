import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-16 w-18 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg">
        <img src="/logo.jpeg" alt="HLS KIDS PLAY SCHOOL" className="h-full w-full rounded-full" />
      </div>

      <div className="leading-tight">
        <h2 className="font-heading text-xl font-bold text-slate-900">
          HLS KIDS
        </h2>

        <p className="text-xs text-slate-500">
          Learn • Play • Grow
        </p>
      </div>
    </Link>
  );
}