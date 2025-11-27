export function FAQAccordion({ faqs }) {
  return (
    <div className="w-full flex flex-col gap-2">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="collapse collapse-plus text-black  relative  border-b-2 [border-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,#999999_100%)_1]"
        >
          <input
            type="radio"
            name="my-accordion-faq"
            defaultChecked={idx === 0}
            className="peer"
          />
          <div className="collapse-title font-medium text-18px peer-checked:text-primary flex justify-between">{faq.question}</div>
          <div className="collapse-content text-sm  relative pb-0">
            <div className="flex items-center gap-2 py-11 pt-2.5 ">
              <span className="font-medium text-22px text-dark-black">{faq.answer}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
