"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Check, MapPin, X } from "lucide-react";
import translations from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";
import type { Region } from "./regions";

const WEB3FORMS_KEY = "3007b246-f376-47f6-85f7-ad7223ab31d8";
const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary";

export default function RegionInquiryDialog({
  region,
  onClose,
}: {
  region: Region;
  onClose: () => void;
}) {
  const { lang } = useLanguage();
  const t = translations[lang];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const regionName = region[lang];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const close = () => dialogRef.current?.close();

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-2xl border-0 bg-white p-0 shadow-2xl backdrop:bg-slate-900/50 backdrop:backdrop-blur-sm motion-safe:animate-[dialogIn_0.2s_ease-out]"
    >
      <div className="relative p-6 sm:p-8">
        <button
          type="button"
          onClick={close}
          aria-label={t.map.close}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted transition-colors hover:bg-slate-100 hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "success" ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <p className="mb-6 text-lg font-semibold text-foreground">{t.map.success}</p>
            <button
              type="button"
              onClick={close}
              className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              {t.map.close}
            </button>
          </div>
        ) : (
          <>
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
              <MapPin className="h-4 w-4" />
              {regionName}
            </div>
            <h3 className="mb-2 pr-8 text-xl font-bold text-foreground">
              {t.map.dialogTitle.replace("{region}", regionName)}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-muted sm:mb-6">{t.map.dialogText}</p>

            <form onSubmit={submit} className="space-y-3 sm:space-y-4">
              <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
              <input type="hidden" name="subject" value={`Regionale Anfrage: ${region.de} und Umgebung`} />
              <input type="hidden" name="Region" value={region.de} />
              <input type="hidden" name="Sprache" value={lang} />
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">{t.contact.firma}</label>
                <input type="text" name="Firma" required className={inputClass} placeholder="Muster AG" />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">{t.contact.vorname}</label>
                  <input type="text" name="Vorname" required className={inputClass} placeholder="Max" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">{t.contact.nachname}</label>
                  <input type="text" name="Nachname" required className={inputClass} placeholder="Muster" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">{t.contact.emailLabel}</label>
                <input type="email" name="email" required className={inputClass} placeholder="max@muster.ch" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">{t.contact.telefon}</label>
                <input type="tel" name="Telefon" className={inputClass} placeholder="+41 79 000 00 00" />
              </div>
              {status === "error" && (
                <p className="rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-700">{t.map.error}</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-primary py-3 font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
              >
                {status === "sending" ? t.map.sending : t.map.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
