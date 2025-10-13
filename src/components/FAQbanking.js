
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const FAQbanking = ({ questions, pageType }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Add your real questions and answers here
  const defaultQuestions = {
    product: [
      { 
        question: "What is Open Banking?", 
        answer: "Open Banking allows customers to pay directly from their bank accounts through secure, regulated connections." 
      },
      { 
        question: "Which countries and banks are supported?", 
        answer: "iQono connects to a wide network of banks across Europe and other key markets, expanding coverage as Open Banking adoption grows." 
      },
      { 
        question: "How is it different from card payments?", 
        answer: "It removes intermediaries, offering lower costs, faster transactions, and fewer chargebacks." 
      },
      { 
        question: "How is Open Banking different from instant bank transfers?", 
        answer: "Instant bank transfers rely on existing banking networks, while Open Banking uses regulated PSD2 APIs for secure, real-time payments and account verification." 
      },
      { 
        question: "Can Open Banking replace card payments completely?", 
        answer: "It can complement or, in some cases, replace cards — especially in regions where customers prefer direct bank payments for speed and cost efficiency." 
      },
    ],
    booster: [
      { 
        question: "How does this feature improve conversion rates?", 
        answer: "Our booster tools analyze transaction data to route payments intelligently, reducing declines and increasing approval rates." 
      },
      { 
        question: "Is this included in all plans?", 
        answer: "Yes, the booster feature is included in all enterprise and high-volume plans at no additional cost." 
      },
      { 
        question: "Can I use this feature with my existing setup?", 
        answer: "Yes, our API integrates seamlessly with your existing system without requiring major code changes." 
      },
      { 
        question: "How is performance measured?", 
        answer: "We track key metrics like approval ratio, latency, and conversion lift through your merchant dashboard." 
      },
      { 
        question: "What makes this better than competitors?", 
        answer: "Our system combines smart routing, AI-based risk analysis, and tailored acquirer pairing for high-risk merchants." 
      },
      { 
        question: "Do you provide implementation support?", 
        answer: "Yes, our integration team will assist you during setup and performance testing." 
      },
      { 
        question: "How quickly can I see results?", 
        answer: "Most merchants notice improved transaction performance within the first week of activation." 
      },
      { 
        question: "Is there any additional cost?", 
        answer: "No, this feature is part of our standard offering and does not require any hidden or ongoing fees." 
      },
    ]
  };

  // Use passed `questions` or fallback based on `pageType`
  const faqQuestions = questions || defaultQuestions[pageType] || defaultQuestions.product;

  return (
    <div className='flex flex-col gap-10 container mx-auto px-4 pb-20 mt-[-50px]'>
      <p className='text-5xl text-[#111021]'>FAQ</p>
      <div className='grid items-start grid-cols-1 md:grid-cols-2 gap-5'>
        {faqQuestions.map((item, index) => (
          <div
            key={index}
            className='bg-[#FCFCFC] rounded-2xl px-5 py-3 cursor-pointer h-auto'
            style={{
              minHeight: '64px',
            }}
            onClick={() => toggleQuestion(index)}
          >
            <div className='flex items-center justify-between gap-6'>
              <p className='text-2xl text-[#111021]'>{item.question}</p>
              {openIndex === index ? (
                <ChevronUpIcon className='size-4 text-[#1F1F1F] flex-shrink-0' />
              ) : (
                <ChevronDownIcon className='size-4 text-[#1F1F1F] flex-shrink-0' />
              )}
            </div>

            {item.answer && (
              <div
                className={`overflow-hidden transition-all duration-300`}
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className='mt-3 text-[#111021] opacity-80 pb-2'>
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQbanking;