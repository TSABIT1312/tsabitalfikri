import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle2 } from "lucide-react";

const EMAIL = "sabitalfikri@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/TSABIT1312", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/tsabitalfikri/", icon: Instagram },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Hi Tsabit,\n\n${form.message}\n\n- ${form.name} (${form.email})`,
    );
    const subject = encodeURIComponent(`New message from ${form.name || "your portfolio"}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Have a project in mind? I'd like to hear about it.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Email is the fastest way to reach me, and I usually reply within a day.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-foreground transition hover:border-primary/50"
            >
              <Mail className="h-4 w-4 text-primary" />
              {EMAIL}
            </a>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/40 transition hover:border-primary/50 hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 grid gap-4 rounded-3xl border border-border bg-secondary/20 p-6 sm:grid-cols-2 sm:p-8"
        >
          <Field label="Name">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary"
              placeholder="Your name"
            />
          </Field>
          <Field label="Email">
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary"
              placeholder="you@company.com"
            />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Message">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary"
                placeholder="Tell me about the project."
              />
            </Field>
          </div>

          <button
            type="submit"
            className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110 sm:col-span-2 sm:w-fit"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Opened in your mail app
              </>
            ) : (
              <>
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
