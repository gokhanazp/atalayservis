'use client';

import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  category: string;
  questions: FAQItem[];
}

interface FAQClientProps {
  faqs: FAQCategory[];
}

export default function FAQClient({ faqs }: FAQClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4">
      {faqs.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 pb-4 border-b-2 border-red-600">
            {category.category}
          </h2>

          <div className="space-y-4">
            {category.questions.map((faq, qIndex) => {
              const globalIndex = categoryIndex * 10 + qIndex;
              return (
                <details
                  key={qIndex}
                  className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                  open={openIndex === globalIndex}
                  onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg hover:text-red-600 transition">
                    <span>{faq.q}</span>
                    <span className="text-2xl group-open:rotate-180 transition-transform duration-300">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-200 whitespace-pre-line">
                    {faq.a}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

