import ActionButton from "../ui/ActionButton";
import { useEffect, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { getCategoriesByGroup } from "../../data/products";
import CatalogSelect from "../ui/CatalogSelect";

const messageFor = (product) => product ? `I would like a quote for ${product}.\n\nQuantity / configuration:\nDeployment location:\n` : "";
const interestOptions = [
  { value: "", label: "Select a product or service area" },
  ...getCategoriesByGroup().map((category) => ({ value: category.slug, label: category.name })),
  { value: "services", label: "Professional services" },
];
const fieldClass = "block min-h-[52px] w-full border border-border bg-white px-4 py-3 text-sm leading-normal text-primary outline-none transition-colors placeholder:text-muted/75 focus:border-secondary aria-invalid:border-secondary";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [params] = useSearchParams();
  const interest = params.get("interest") || "";
  const product = params.get("product") || "";
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { interest, message: messageFor(product) } });

  useEffect(() => {
    reset({ interest, message: messageFor(product) });
    setSubmitted(false);
    setSubmissionError("");
  }, [interest, product, reset]);

  const onSubmit = async (data) => {
    setSubmissionError("");
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    if (!endpoint) {
      setSubmissionError("Online enquiries are temporarily unavailable.");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(`Enquiry request failed: ${response.status}`);
      setSubmitted(true);
      reset();
    } catch {
      setSubmissionError("We couldn't send your enquiry. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-[500px] flex-col items-start justify-center border border-border bg-[color-mix(in_srgb,var(--primary)_4%,white)] p-[clamp(28px,4vw,58px)]" role="status">
        <Check className="mb-9 text-secondary" size={32} aria-hidden="true" />
        <p className="text-[11px] font-bold tracking-[.18em] uppercase text-secondary">Enquiry sent</p>
        <h2 className="my-4 max-w-[580px] text-[clamp(37px,3.8vw,60px)] leading-[1.08] font-semibold tracking-[-.065em]">Thank you for reaching out.</h2>
        <p className="mb-8 text-[15px] text-muted">Your enquiry was sent to Coreflowtech.</p>
        <ActionButton variant="outline" onClick={() => setSubmitted(false)} icon={<ArrowUpRight size={20} aria-hidden="true" />}>Send another enquiry</ActionButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 border border-border bg-[color-mix(in_srgb,var(--primary)_4%,white)] p-[clamp(28px,4vw,58px)] max-[480px]:px-[17px] max-[480px]:py-[25px]" noValidate>
      <div className="mb-1"><p className="text-[11px] font-bold tracking-[.18em] uppercase text-secondary">Enquiry form</p><h2 className="mt-3 text-[clamp(35px,3.2vw,52px)] leading-[1.05] font-semibold tracking-[-.06em]">Send your brief.</h2><p className="mt-3 text-xs text-muted">All fields are required.</p></div>
      <div className="grid grid-cols-2 gap-[17px] max-[480px]:grid-cols-1 max-[480px]:gap-6">
        <Field id="contact-name" label="Full name" error={errors.name}>
          <input className={fieldClass} id="contact-name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} {...register("name", { required: "Enter your name" })} />
        </Field>
        <Field id="contact-company" label="Company" error={errors.company}>
          <input className={fieldClass} id="contact-company" autoComplete="organization" aria-invalid={!!errors.company} aria-describedby={errors.company ? "contact-company-error" : undefined} {...register("company", { required: "Enter your company" })} />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-[17px] max-[480px]:grid-cols-1 max-[480px]:gap-6">
        <Field id="contact-email" label="Work email" error={errors.email}>
          <input className={fieldClass} id="contact-email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} {...register("email", { required: "Enter your email", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" } })} />
        </Field>
        <Field id="contact-phone" label="Phone" error={errors.phone}>
          <input className={fieldClass} id="contact-phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "contact-phone-error" : undefined} {...register("phone", { required: "Enter your phone number" })} />
        </Field>
      </div>
      <Field id="contact-interest" label="What can we help with?" error={errors.interest}>
        <Controller name="interest" control={control} rules={{ required: "Select an area" }} render={({ field }) => <CatalogSelect id="contact-interest" label="What can we help with?" value={field.value} options={interestOptions} onChange={field.onChange} onBlur={field.onBlur} controlRef={field.ref} invalid={!!errors.interest} describedBy={errors.interest ? "contact-interest-error" : undefined} fullWidth />} />
      </Field>
      <Field id="contact-message" label="Tell us about your requirement" error={errors.message}>
        <textarea className={`${fieldClass} min-h-[155px] resize-y`} id="contact-message" rows={6} placeholder="Site, workload, equipment list, timeline or deployment location" aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} {...register("message", { required: "Tell us about the requirement", minLength: { value: 8, message: "Please add a bit more detail" } })} />
      </Field>
      {submissionError && <p className="border-l-2 border-secondary bg-white px-4 py-3 text-xs font-bold leading-normal text-secondary" role="alert">{submissionError}</p>}
      <ActionButton type="submit" disabled={isSubmitting} className="min-w-[220px] justify-self-start disabled:cursor-wait disabled:opacity-65 max-[480px]:w-full" icon={<ArrowUpRight size={20} aria-hidden="true" />}>{isSubmitting ? "Sending…" : "Send enquiry"}</ActionButton>
    </form>
  );
}

function Field({ id, label, error, children }) {
  return <div className="min-w-0"><label className="mb-2 block text-xs font-bold" htmlFor={id}>{label}</label>{children}{error && <span id={`${id}-error`} className="mt-2 block text-xs font-bold leading-normal text-secondary" role="alert">{error.message}</span>}</div>;
}
