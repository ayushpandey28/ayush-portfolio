import { useState } from "react";
import {
  Send,
  Phone,
  MapPin,
  Check,
  Copy,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./BrandIcons";
import profile from "../data/profile";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const socialLinks = [
    {
      icon: GithubIcon,
      label: "GitHub",
      handle: "ayushpandey28",
      href: profile.github,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      handle: "ayushpandey028",
      href: profile.linkedin,
    },
    {
      icon: LeetCodeIcon,
      label: "LeetCode",
      handle: "ayush_pandey__28",
      href: profile.leetcode,
    },
  ];

  const update = (e) => {
    if (status !== "idle" && status !== "submitting") {
      setStatus("idle");
      setErrorMessage("");
    }

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const validate = () => {
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName) {
      return "Please enter your name.";
    }

    if (!trimmedEmail) {
      return "Please enter your email address.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      return "Please enter a valid email address.";
    }

    if (!trimmedMessage) {
      return "Please enter your message.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();

    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${profile.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
            _subject: `New Portfolio Message from ${form.name.trim()}`,
            _captcha: "false",
            _template: "table",
            _replyto: form.email.trim(),
          }),
        }
      );

      const data = await response.json();

      if (
        response.ok &&
        (data.success === "true" ||
          data.success === true ||
          data.message)
      ) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage(
        `Unable to dispatch message directly. Please email me directly at ${profile.email}`
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 border-t border-[#292E38]"
    >
      <div className="mx-auto max-w-6xl section-padding">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#F59E0B]">
            // 08
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-[#E8EAF0] sm:text-3xl">
            Let's build something useful.
          </h2>

          <div className="h-[1px] flex-1 bg-[#292E38] ml-3" />
        </div>

        <p className="mt-4 max-w-2xl text-sm text-[#A7ACB8]">
          Have an internship opening, software project, or engineering
          discussion? Feel free to reach out directly via email or drop a
          message below.
        </p>

        {/* 2-Column Content Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="rounded-lg border border-[#292E38] bg-[#151922] p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[#737A89]">
                  Direct Email
                </span>

                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available
                </span>
              </div>

              <div className="mt-3">
                <p className="font-mono text-sm font-medium text-[#E8EAF0] break-all select-all">
                  {profile.email}
                </p>
              </div>

              {/* Only Copy Email Button */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#292E38] bg-[#0F1115] px-3 py-1.5 font-mono text-xs text-[#A7ACB8] transition-colors hover:border-[#F59E0B] hover:text-[#F59E0B]"
                >
                  {copied ? (
                    <>
                      <Check
                        size={13}
                        className="text-emerald-400"
                      />
                      <span className="text-emerald-400">
                        Copied to Clipboard
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Availability & Location metadata */}
            <div className="rounded-lg border border-[#292E38] bg-[#151922] p-5 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#A7ACB8]">
                <Clock
                  size={14}
                  className="text-[#F59E0B] shrink-0"
                />
                <span>
                  Response time: Usually within 24 hours
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#A7ACB8]">
                <MapPin
                  size={14}
                  className="text-[#F59E0B] shrink-0"
                />
                <span>
                  Location: {profile.location} (Open to Relocate)
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#A7ACB8]">
                <Phone
                  size={14}
                  className="text-[#F59E0B] shrink-0"
                />

                <a
                  href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-[#E8EAF0] transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
            </div>

            {/* Developer Profiles */}
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#737A89] mb-3">
                Profiles &amp; Code
              </p>

              <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {socialLinks.map(
                  ({ icon: Icon, label, handle, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-lg border border-[#292E38] bg-[#151922] p-3 text-xs transition-colors hover:border-[#3E4656] hover:bg-[#1B2028]"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon
                          size={16}
                          className="text-[#A7ACB8] shrink-0"
                        />

                        <div className="min-w-0">
                          <p className="font-semibold text-[#E8EAF0]">
                            {label}
                          </p>

                          <p className="font-mono text-[11px] text-[#737A89] truncate">
                            @{handle}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={13}
                        className="text-[#737A89] shrink-0 ml-2"
                      />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-[#292E38] bg-[#151922] p-6 sm:p-7 space-y-5"
            >
              <div className="border-b border-[#292E38] pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-[#E8EAF0]">
                    Send a Message
                  </h3>

                  <p className="text-xs text-[#737A89] mt-0.5">
                    Messages go straight to my primary inbox.
                  </p>
                </div>

                <span className="font-mono text-[11px] text-[#737A89]">
                  form.submit
                </span>
              </div>

              {/* Status Banner */}
              {status === "success" && (
                <div className="flex items-start gap-3 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-300">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <div>
                    <p className="font-semibold">
                      Message delivered successfully.
                    </p>

                    <p className="mt-0.5 text-emerald-400/80">
                      Thanks for getting in touch. I will review and
                      respond promptly.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-3 rounded-md border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300">
                  <AlertCircle
                    size={16}
                    className="mt-0.5 shrink-0 text-red-400"
                  />

                  <div>
                    <p className="font-semibold">
                      Failed to send message
                    </p>

                    <p className="mt-0.5 text-red-300/80">
                      {errorMessage}
                    </p>
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-[#A7ACB8]"
                >
                  Your Name{" "}
                  <span className="text-[#F59E0B]">*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={status === "submitting"}
                  value={form.name}
                  onChange={update}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full rounded-md border border-[#292E38] bg-[#0F1115] px-3.5 py-2.5 text-sm text-[#E8EAF0] placeholder:text-[#737A89] transition-colors focus:border-[#F59E0B] focus:outline-none disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-[#A7ACB8]"
                >
                  Your Email Address{" "}
                  <span className="text-[#F59E0B]">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={status === "submitting"}
                  value={form.email}
                  onChange={update}
                  placeholder="e.g. sarah@company.com"
                  className="w-full rounded-md border border-[#292E38] bg-[#0F1115] px-3.5 py-2.5 text-sm text-[#E8EAF0] placeholder:text-[#737A89] transition-colors focus:border-[#F59E0B] focus:outline-none disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-[#A7ACB8]"
                >
                  Message{" "}
                  <span className="text-[#F59E0B]">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={status === "submitting"}
                  value={form.message}
                  onChange={update}
                  placeholder="Hi Ayush, I came across your portfolio and wanted to discuss an internship opportunity / software project..."
                  className="w-full resize-none rounded-md border border-[#292E38] bg-[#0F1115] px-3.5 py-2.5 text-sm text-[#E8EAF0] placeholder:text-[#737A89] transition-colors focus:border-[#F59E0B] focus:outline-none disabled:opacity-50"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F59E0B] px-6 py-2.5 font-mono text-xs font-semibold text-[#0F1115] transition-colors hover:bg-[#D97706] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2
                        size={14}
                        className="animate-spin"
                      />
                      <span>Sending Message...</span>
                    </>
                  ) : status === "success" ? (
                    <>
                      <Check size={14} />
                      <span>Message Sent</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="font-mono text-[11px] text-[#737A89]">
                  Protected by FormSubmit · No spam
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}