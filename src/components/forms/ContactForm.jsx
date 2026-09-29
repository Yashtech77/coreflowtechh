import { useState } from "react";
import { useForm } from "react-hook-form";
import { getCategoriesByGroup } from "../../data/products";
import Button from "../ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("Coreflowtech enquiry", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <p className="text-lg font-semibold text-foreground">Enquiry received</p>
        <p className="mt-2 text-sm text-muted">
          A Coreflowtech specialist will respond within one business day.
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass grid gap-4 rounded-2xl p-6 sm:p-8">
      <Field label="Full name" error={errors.name}>
        <input
          className={inputClass}
          {...register("name", { required: "Name is required" })}
        />
      </Field>
      <Field label="Company" error={errors.company}>
        <input className={inputClass} {...register("company", { required: "Company is required" })} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Work email" error={errors.email}>
          <input
            type="email"
            className={inputClass}
            {...register("email", { required: "Email is required" })}
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input className={inputClass} {...register("phone", { required: "Phone is required" })} />
        </Field>
      </div>
      <Field label="Interest" error={errors.interest}>
        <select className={inputClass} {...register("interest", { required: "Select an interest" })}>
          <option value="">Select a solution</option>
          {getCategoriesByGroup().map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
          <option value="services">Professional services</option>
        </select>
      </Field>
      <Field label="Message" error={errors.message}>
        <textarea
          rows={5}
          className={inputClass}
          placeholder="Data centre scope, IT infrastructure list, or authorized KAYTUS requirement"
          {...register("message", {
            required: "Tell us about the requirement",
            minLength: { value: 8, message: "Please add a bit more detail" },
          })}
        />
      </Field>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Submit enquiry"}
      </Button>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-accent/40 placeholder:text-muted focus:ring-2";

function Field({ label, error, children }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error.message}</span>}
    </label>
  );
}
