import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const FAQpartners = ({ questions, pageType = 'product' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Real default questions & answers (Referral Programme)
  const defaultQuestions = {
    product: [
      { 
        question: "Who can partner with iQono?", 
        answer: "We collaborate with PSPs, acquirers, banks, fintech platforms, and technology providers seeking to expand their global payment capabilities." 
      },
      { 
        question: "How does the partnership process work?", 
        answer: "It starts with an introduction and discussion with our partnership team. Once goals are aligned, we define the collaboration structure, integrate where needed, and activate the partnership." 
      },
      { 
        question: "What are the benefits of partnering with iQono?", 
        answer: "Partners gain access to global payment coverage, high-risk industry expertise, advanced technology, and shared revenue growth opportunities." 
      },
      { 
        question: "What makes iQono different from other providers?", 
        answer: "We combine high-risk industry expertise, true multi-currency processing, intelligent routing, and strong partnerships — all within a single, scalable ecosystem." 
      },
      { 
        question: "How long does it take to establish a partnership?", 
        answer: "Once the initial discussion and compliance review are completed, partnerships can be activated quickly depending on the integration model." 
      },
      { 
        question: "How can I get started?", 
        answer: "Simply reach out to our partnership team via the contact form. We’ll review your proposal and get in touch to discuss collaboration opportunities." 
      },
    ],
  };

  const faqQuestions = questions?.length
    ? questions
    : defaultQuestions[pageType] || defaultQuestions.product;

  return (
    <div className="flex flex-col gap-10 container mx-auto px-4 pb-20 mt-[-50px]">
      <p className="text-5xl text-white">FAQ</p>

      <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-5">
        {faqQuestions.map((item, index) => {
          const isOpen = openIndex === index;
          const hasAnswer = Boolean(item.answer);

          return (
            <div
              key={`${item.question}-${index}`}
              className="bg-[#423ADC0D] border border-[#FFFFFF0D] rounded-2xl px-5 py-3 cursor-pointer h-auto"
              style={{ minHeight: '64px' }}
              onClick={() => toggleQuestion(index)}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleQuestion(index);
                }
              }}
            >
              <div className="flex items-center justify-between gap-6">
                <p className="text-2xl text-white">{item.question}</p>
                {isOpen ? (
                  <ChevronUpIcon className="size-4 text-white flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="size-4 text-white flex-shrink-0" />
                )}
              </div>

              {hasAnswer && (
                <div
                  id={`faq-panel-${index}`}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '500px' : '0',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="mt-3 text-white opacity-80 pb-2">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQpartners;
