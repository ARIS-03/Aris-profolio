export default function Placeholder({ title }: { title: string }) {
  return (
    <section className="bg-[#121212] py-24 px-6 border-t border-white/5 flex items-center justify-center">
      <h2 className="text-3xl font-bold text-zinc-700 uppercase tracking-widest">{title}</h2>
    </section>
  );
}
