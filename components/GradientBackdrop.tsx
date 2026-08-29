export function GradientBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-base-bg" />

      <div className="absolute -left-40 -top-40 h-[560px] w-[560px] animate-blob rounded-full bg-signal-indigo/25 blur-[130px]" />
      <div
        className="absolute -right-32 top-10 h-[520px] w-[520px] animate-blob rounded-full bg-signal-violet/25 blur-[130px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-10%] left-1/4 h-[480px] w-[480px] animate-blob rounded-full bg-signal-pink/[0.18] blur-[130px]"
        style={{ animationDelay: "-12s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 h-[360px] w-[360px] animate-blob rounded-full bg-signal-blue/[0.14] blur-[120px]"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="absolute right-10 top-1/2 h-[220px] w-[220px] animate-blob rounded-full bg-signal-cyan/[0.08] blur-[110px]"
        style={{ animationDelay: "-9s" }}
      />

      <div className="absolute inset-0 grid-overlay opacity-[0.35]" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(10,10,27,0) 0%, rgba(10,10,27,0.5) 60%, rgba(10,10,27,0.92) 100%)",
        }}
      />
    </div>
  );
}
