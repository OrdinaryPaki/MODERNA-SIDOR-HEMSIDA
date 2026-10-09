"use client";
import { useState } from "react";
import { services, processSteps, plans, testimonials } from "@/data/home";
import { Button } from "@/components/shared/button";
import { ReferenceParallax } from "./reference-parallax";
import s from "./home.module.css";
export function ServicesList() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className={s.servicesList}>
      {services.map((service, i) => (
        <button
          key={service.title}
          className={`${s.service} ${active === i ? s.serviceActive : ""}`}
          onClick={() => setActive(active === i ? null : i)}
          aria-expanded={active === i}
        >
          <span className={s.serviceNumber}>0{i + 1}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <span className={s.servicePlus} aria-hidden>
            +
          </span>
        </button>
      ))}
    </div>
  );
}
export function ProcessCards() {
  const [active, setActive] = useState(0);
  return (
    <div
      className={s.processCards}
      style={{
        gridTemplateColumns: processSteps
          .map((_, i) => `minmax(0, ${active === i ? 2.1 : 1}fr)`)
          .join(" "),
      }}
    >
      {processSteps.map((step, i) => (
        <button
          key={step.title}
          onClick={() => setActive(i)}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") setActive(i);
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") setActive(0);
          }}
          onFocus={() => setActive(i)}
          aria-expanded={active === i}
          className={`${s.processCard} ${active === i ? s.processActive : ""}`}
        >
          <span>0{i + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          <span className={s.processDot} aria-hidden />
        </button>
      ))}
    </div>
  );
}
export function PricingCards() {
  const [yearly, setYearly] = useState(false);
  return (
    <div className={s.pricingContent}>
      <div className={s.billing}>
        <button onClick={() => setYearly(false)} aria-pressed={!yearly}>
          Monthly
        </button>
        <button
          className={`${s.billingSwitch} ${yearly ? s.billingYearly : ""}`}
          onClick={() => setYearly(!yearly)}
          role="switch"
          aria-checked={yearly}
          aria-label="Yearly billing"
        >
          <span />
        </button>
        <button onClick={() => setYearly(true)} aria-pressed={yearly}>
          Yearly
        </button>
        <span className={`${s.save} ${yearly ? s.saveActive : ""}`}>
          Save 20%
        </span>
      </div>
      <div className={s.pricingCards}>
        {plans.map((plan, i) => (
          <div
            className={`${s.plan} ${i === 1 ? s.growth : ""}`}
            key={plan.name}
          >
            {i === 1 && <span className={s.bestValue}>Best Value!</span>}
            <h3>{plan.name}</h3>
            <div className={s.price}>
              <strong>${yearly ? plan.yearly : plan.monthly}</strong>
              <span>/month</span>
            </div>
            <p className={s.planDescription}>{plan.description}</p>
            <Button href="/contact" variant={i === 1 ? "solid" : "white"}>
              Get Started Today
            </Button>
            <div className={s.communication}>
              <span>
                <img src="/assets/home/pricing-icon-0.svg" alt="" />
                Slack Communication
              </span>
              <span>
                <img src="/assets/home/pricing-icon-1.svg" alt="" />
                {plan.team}
              </span>
            </div>
            <p className={s.includes}>Includes:</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <img src="/assets/home/feature-arrow.svg" alt="" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  return (
    <div className={s.slider}>
      <div className={s.testimonialBackdrop}>
        <ReferenceParallax
          src="/assets/home/testimonial.jpg"
          kind="testimonial"
          className={s.testimonialImage}
        />
        <div className={s.testimonialOverlay} />
        <div className={s.quoteCard}>
          <img className={s.quoteIcon} src="/assets/home/quote.svg" alt="" />
          {testimonials.map((item, i) => (
            <div
              key={item.name}
              className={`${s.quoteSlide} ${i === index ? s.quoteActive : ""}`}
              aria-hidden={i !== index}
            >
              <h3>{item.quote}</h3>
              <div className={s.quotePerson}>
                <div>
                  <p>{item.name}</p>
                  <span>{item.role}</span>
                </div>
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={s.sliderControls}>
        <div className={s.sliderProgress}>
          <span style={{ width: `${((index + 1) / 3) * 100}%` }} />
        </div>
        <div>
          <button
            aria-label="Previous testimonial"
            onClick={() => setIndex((index + 2) % 3)}
          >
            ←
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => setIndex((index + 1) % 3)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
