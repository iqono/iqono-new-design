import React from 'react';
import Button from '../Button';
import PromoSection from '../PromoSection';
import FAQpayouts from '../FAQpayouts';
import { Link } from 'react-router-dom';

function PayoutSolutions() {
  return (
    <>
      <div className='bg-[url(/public/product-bg.png)] bg-cover bg-no-repeat py-10'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='flex flex-col items-start gap-10' data-aos="fade-right" data-aos-delay="100">
              <p className='uppercase text-xl leading-[1.1] text-[#423ADC]'>02</p>
              <p className='text-5xl leading-[1.1] text-white'>Global Payouts</p>
              <p className='text-lg leading-[1.1] text-white opacity-80'>Move money anywhere, faster than ever — simple, secure, borderless.</p>
              <div className="flex justify-center">
                <Link
                  to="/get-started"
                  className='w-full uppercase flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-normal text-sm leading-[1.1] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 border border-[#423ADC] hover:bg-[#423ADC44]'
                >
                  Get Started
                  <div className='flex w-4 h-4'>
                    <div className='flex flex-col w-2'>
                      <div className='w-2 h-2 bg-[#423ADC]' />
                    </div>
                    <div className='flex flex-col justify-end w-2'>
                      <div className='w-2 h-2 bg-[#423ADC]' />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='w-full md:w-1/2 mt-10 md:mt-0' data-aos="fade-left" data-aos-delay="200">
              <img src='/product-bg1.png' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#F5F4F9]'>
        <div className='grid md:grid-cols-2 items-center justify-between'>
          <div className='flex' data-aos="fade-right" data-aos-delay="100">
            <img className='object-cover md:w-2/3' src="/product1.png" />
          </div>
          <div className='w-full z-10 max-w-full px-4 md:max-w-[384px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] md:pl-4' data-aos="fade-left" data-aos-delay="200">
            <p className='text-[#111021] text-5xl leading-[1.1] mb-10'>
              Global Payouts. Simplified, Secured, Scalable.
            </p>
            <p className='text-[#111021] text-lg leading-[1.2] mb-[60px] opacity-80'>
            Empower your business with seamless cross-border payouts through iQono. Whether it’s OCT (Original Credit Transfer) for instant card withdrawals or SEPA for fast and reliable bank transfers across Europe — we make global disbursements effortless, secure, and scalable.

            <br />
            <br />

            Our platform unifies payout methods under one simple API, giving you full control, real-time visibility, and lightning-fast settlement times. From affiliate commissions to customer withdrawals, iQono ensures every payment arrives on time — no delays, no borders, no limits.
            </p>
          </div>
        </div>
        <div className='hidden md:block' data-aos="fade-up" data-aos-delay="300">
          <FAQpayouts pageType="product" />
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <PromoSection />
      </div>
    </>
  );
}

export default PayoutSolutions;
