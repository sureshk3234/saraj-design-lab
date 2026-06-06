import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Reveal } from "@/components/effects/Reveal";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { Mail, MapPin, Phone, Copy, Check } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  projectType: z.string().min(1, "Pick a project type"),
  budget: z.string().min(1, "Pick a budget"),
  message: z.string().trim().min(10, "Tell me a bit more").max(2000),
});
type FormData = z.infer<typeof schema>;

const PROJECT_TYPES = ["Web Design", "UI / UX", "Branding", "Video Editing", "Manuscript / Writing", "Amazon Listing", "Other"];
const BUDGETS = ["< $1k", "$1k – $3k", "$3k – $8k", "$8k+"];

function CopyField({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      aria-label="Copy"
      className="opacity-60 hover:opacity-100"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-[color:var(--blush)]" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const subject = encodeURIComponent(`New enquiry from ${data.name} — ${data.projectType}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nProject type: ${data.projectType}\nBudget: ${data.budget}\n\n${data.message}`,
    );
    try {
      window.location.href = `mailto:saraahjohnson0345@gmail.com?subject=${subject}&body=${body}`;
      toast.success("Opening your email app to send the message.");
      reset();
    } catch {
      toast.error("Could not open your email app. Please email saraahjohnson0345@gmail.com directly.");
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">06 — Contact</p>
              <h2 className="mt-4 font-display text-5xl leading-[1] sm:text-6xl">
                Let's build something <span className="text-gradient">amazing together.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm text-muted-foreground">
                Have a brief, a half-formed idea, or just want a second pair of eyes? Send a note — I read every one and reply within a day.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-4">
                {[
                  { icon: MapPin, label: "Karachi, Pakistan", copy: "Karachi, Pakistan" },
                  { icon: Mail, label: "saraahjohnson0345@gmail.com", copy: "saraahjohnson0345@gmail.com", href: "mailto:saraahjohnson0345@gmail.com" },
                  { icon: Phone, label: "+92 318 8272667", copy: "+923188272667", href: "tel:+923188272667" },
                ].map((item) => (
                  <li key={item.label} className="flex items-center justify-between rounded-2xl glass px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--accent)]">
                        <item.icon className="h-4 w-4 text-[color:var(--blush)]" />
                      </span>
                      {item.href ? (
                        <a href={item.href} className="text-sm hover:text-foreground">{item.label}</a>
                      ) : (
                        <span className="text-sm">{item.label}</span>
                      )}
                    </div>
                    <CopyField value={item.copy} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="glass-strong rounded-3xl p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}>
                    <input {...register("name")} placeholder="Your name" className={inputCls} />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input type="email" {...register("email")} placeholder="you@studio.com" className={inputCls} />
                  </Field>
                  <Field label="Project type" error={errors.projectType?.message}>
                    <select {...register("projectType")} className={inputCls} defaultValue="">
                      <option value="" disabled>Select…</option>
                      {PROJECT_TYPES.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </Field>
                  <Field label="Budget" error={errors.budget?.message}>
                    <select {...register("budget")} className={inputCls} defaultValue="">
                      <option value="" disabled>Select…</option>
                      {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Message" error={errors.message?.message}>
                      <textarea {...register("message")} rows={5} placeholder="What are you building? When do you want to ship?" className={inputCls} />
                    </Field>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">No newsletters. No follow-ups. Just a reply.</p>
                  <MagneticButton variant="primary" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Send message →"}
                  </MagneticButton>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--background)]/40 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-[color:var(--blush)] focus:outline-none focus:ring-2 focus:ring-[color:var(--blush)]/20";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-[color:var(--destructive)]">{error}</span>}
    </label>
  );
}
