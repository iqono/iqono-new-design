import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const FAQrev = ({ questions, pageType = 'product' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Real default questions & answers (Referral Programme)
  const defaultQuestions = {
    product: [
      { 
        question: "What is the iQono Revenue Share Program?", 
        answer: "It’s a partnership model that lets you earn ongoing commissions by introducing merchants to iQono’s global payment solutions. You earn a percentage of every transaction your referred merchants process." 
      },
      { 
        question: "Who can join the program?", 
        answer: "The program is open to introducers, affiliates, consultants, agencies, and business professionals with access to merchants or networks that can benefit from iQono’s payment services." 
      },
      { 
        question: "How do I introduce merchants?", 
        answer: "Simply connect our team with businesses that need smarter, high-performance payment solutions. Once the merchant starts processing, your commission begins." 
      },
      { 
        question: "How are commissions paid?", 
        answer: "Commissions are paid weekly, based on the total volume processed by your introduced merchants. Full transparency and detailed reports are available through your partner manager." 
      },
      { 
        question: "Is there a limit to how much I can earn?", 
        answer: "No — your earnings grow with your network. The more your merchants process, the more you earn. There are no caps or restrictions." 
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

export default FAQ1;
