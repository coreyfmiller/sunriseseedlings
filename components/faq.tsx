"use client"

import { useState } from "react"
import { HelpCircle, ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "Where is Sunrise Seedlings located?",
        answer:
            "Sunrise Seedlings is located at 18 Sunrise Drive in Quispamsis, NB. We are a pickup-only nursery — no delivery at this time. Just stop by on the weekend and grab your plants fresh from the garden!",
    },
    {
        question: "When can I buy plants from Sunrise Seedlings?",
        answer:
            "We are open every Saturday and Sunday from 9:00 AM to 2:00 PM, or until we sell out! We run from spring through fall. Follow along to know when we're open each weekend.",
    },
    {
        question: "What plants does Sunrise Seedlings sell?",
        answer:
            "We sell heirloom cherry tomatoes (Sun Gold), rainbow sweet bell peppers, Genovese basil, Giant Mammoth sunflowers, spearmint, and jalapeños. All plants are $5.00 CAD each and are grown by kids using organic soil and natural methods.",
    },
    {
        question: "Who runs Sunrise Seedlings?",
        answer:
            "Sunrise Seedlings is run by three siblings — Kaelan (age 12), Micah (age 10), and Madelyn (age 8) — from their backyard in Quispamsis, New Brunswick. They started the nursery in spring 2025 with one sunflower seed and a big dream.",
    },
    {
        question: "How much do the seedlings cost?",
        answer:
            "All plants are $5.00 CAD each. We accept cash. Every dollar goes right back into seeds, soil, and the kids' gardening fund!",
    },
    {
        question: "Are the plants organically grown?",
        answer:
            "Yes! Our plants are grown using natural methods, quality soil, and a lot of kid-powered love. No shortcuts, no chemicals — just good old-fashioned gardening by three enthusiastic siblings in Quispamsis, NB.",
    },
]

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section
            id="faq"
            className="bg-muted/40 py-16 md:py-24"
            aria-label="Frequently Asked Questions"
        >
            <div className="mx-auto max-w-3xl px-4 md:px-8">
                {/* Heading */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-garden-green/10 px-4 py-2 text-sm font-bold text-garden-green">
                        <HelpCircle className="h-4 w-4" aria-hidden="true" />
                        Got questions?
                    </span>
                    <h2 className="font-serif text-4xl text-foreground md:text-5xl text-balance">
                        Things People Ask Us
                    </h2>
                    <p className="mt-3 max-w-lg text-base text-muted-foreground md:text-lg">
                        Everything you need to know about buying plants from a kid-run nursery
                        in Quispamsis, NB.
                    </p>
                </div>

                {/* Accordion */}
                <dl className="flex flex-col gap-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i
                        return (
                            <div
                                key={i}
                                className={`overflow-hidden rounded-2xl border-2 bg-card transition-all duration-200 ${isOpen ? "border-garden-green shadow-md" : "border-border"
                                    }`}
                            >
                                <dt>
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-bold text-foreground"
                                        aria-expanded={isOpen}
                                        id={`faq-q-${i}`}
                                        aria-controls={`faq-a-${i}`}
                                    >
                                        <span className="text-base md:text-lg">{faq.question}</span>
                                        <ChevronDown
                                            className={`h-5 w-5 flex-shrink-0 text-garden-green transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                                                }`}
                                            aria-hidden="true"
                                        />
                                    </button>
                                </dt>
                                <dd
                                    id={`faq-a-${i}`}
                                    role="region"
                                    aria-labelledby={`faq-q-${i}`}
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="px-6 pb-5 text-base leading-relaxed text-muted-foreground">
                                        {faq.answer}
                                    </p>
                                </dd>
                            </div>
                        )
                    })}
                </dl>
            </div>
        </section>
    )
}
