import React from 'react';
import Button from '../Button';
import FAQ1 from '../FAQ1';

function PartnerWithUs() {
  return (
    <>
      <div className="relative bg-[url(/public/Partners.png)] bg-contain bg-no-repeat bg-bottom">
        <div className='grid md:grid-cols-2 items-center justify-between'>
          <div className='flex justify-center md:justify-end' data-aos="fade-right" data-aos-delay="100">
            <div className='w-full z-10 max-w-full px-4 md:max-w-[384px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] md:pl-4'>
              <p className='uppercase text-white text-[52px] xl:text-[64px] leading-[1.1] mb-10'>
                Partnering with Financial Leaders
              </p>
              <p className='text-white text-lg leading-[1.2] mb-[60px] opacity-80'>
                Collaborate with iQono to enhance your processing capabilities, access new markets, and grow your transaction volumes.
              </p>
              <div className='flex gap-[30px] flex-col items-start md:flex-row'>
                <Button variant="primary">Get Started</Button>
              </div>
            </div>
          </div>
          <div className='flex justify-center md:justify-end' data-aos="fade-left" data-aos-delay="200">
            <img className='object-cover' src="/Group1707480808.png" />
          </div>
        </div>
      </div>
      <div className='bg-[#F6F6F6]'>
        <div className='grid md:grid-cols-2 items-center justify-between'>
          <div className='absolute left-0 md:relative flex mt-[-15%]' data-aos="fade-right" data-aos-delay="100">
            <img className='object-cover w-1/3 md:w-2/3' src="/partners-bg.png" />
          </div>
          <div className='w-full z-10 max-w-full px-4 md:max-w-[384px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] md:pl-4' data-aos="fade-left" data-aos-delay="200">
            <p className='text-[#111021] text-5xl leading-[1.1] mb-10 mt-10 md:mt-0'>
              Expand Your Reach With iQono
            </p>
            <p className='text-[#111021] text-lg leading-[1.2] mb-[60px] opacity-80'>
            iQono teams up with payment service providers, acquirers and banks to power global payments for high-risk and emerging industries. Join our network, fuse your infrastructure with our high-performance platform, and unlock new markets, volumes and revenue streams.
            <br />
            <br />

            Together, we create payment pathways that connect businesses across borders. With iQono’s technology and your network strength, we enable faster settlements, wider coverage, and more efficient payment flows for merchants worldwide.
            </p>
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='max-w-[870px] w-full md:w-1/2' data-aos="fade-right" data-aos-delay="100">
              <p className='uppercase text-5xl leading-[1.1] text-[#111021]'>
                How Get started?
              </p>
              <p className='text-base leading-[1.1] text-[#111021] mt-10 opacity-80'>
                From Sign-Up to Scaling — Seamlessly.
              </p>
              <img src='/partner1.png' className='w-[80%]' />
            </div>
            <div className='max-w-[705px] w-full md:w-1/2' data-aos="fade-left" data-aos-delay="200">
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-5'>
                  <div className='h-[1px] bg-[#11102140]' />
                  <div className='flex gap-[30px] items-start'>
                    <img className='w-[30px] h-[25px]' src='/union4.png' />
                    <div className='flex flex-col gap-[30px]'>
                      <p className='text-[#111021] text-2xl leading-[1.1]'>
                        Connect With Us
                      </p>
                      <p className='text-[#111021] text-base leading-[1.1] opacity-60'>
                        Reach out to our partnerships team to explore collaboration opportunities and discuss mutual goals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='h-[1px] bg-[#11102140]' />
                  <div className='flex gap-[30px] items-start'>
                    <img className='w-[30px] h-[30px]' src='/union1.png' />
                    <div className='flex flex-col gap-[30px]'>
                      <p className='text-[#111021] text-2xl leading-[1.1]'>
                        Define the Partnership
                      </p>
                      <p className='text-[#111021] text-base leading-[1.1] opacity-60'>
                        Define the partnership and align on goals that drive mutual growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='h-[1px] bg-[#11102140]' />
                  <div className='flex gap-[30px] items-start'>
                    <img className='w-[30px] h-[25px]' src='/union5.png' />
                    <div className='flex flex-col gap-[30px]'>
                      <p className='text-[#111021] text-2xl leading-[1.1]'>
                        Grow
                      </p>
                      <p className='text-[#111021] text-base leading-[1.1] opacity-60'>
                        Launch the partnership and scale together through shared success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='h-[1px] bg-[#11102140]' />
              </div>
              <Button variant="primary" className='mt-[60px]'>Get Started</Button>
            </div>
          </div>
          <div className='bg-[url(/public/referral2.png)] bg-contain bg-no-repeat bg-right pt-10 pb-20'>
            <p className='uppercase text-5xl text-[#111021]' data-aos="fade-up" data-aos-delay="100">benefits of being our Partners</p>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-[60px] gap-5' data-aos="fade-up" data-aos-delay="200">
              <div className='flex flex-col bg-[rgba(255,255,255,0.8)] rounded-2xl p-6'>
                <div className='w-8 h-8 flex'>
                  <div className='w-4 h-8 flex flex-col'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                  <div className='w-4 h-8 flex flex-col justify-end'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                </div>
                <p className='text-[#111021] text-2xl mt-[60px]'>Expand Your Reach</p>
                <p className='text-[#111021] text-lg opacity-80 mt-5'>Access new merchants, markets, and payment verticals through iQono’s global network and multi-currency capabilities.</p>
              </div>
              <div className='flex flex-col bg-[rgba(255,255,255,0.8)] rounded-2xl p-6'>
                <div className='w-8 h-8 flex'>
                  <div className='w-4 h-8 flex flex-col'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                  <div className='w-4 h-8 flex flex-col justify-end'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                </div>
                <p className='text-[#111021] text-2xl mt-[60px]'>Grow Revenue</p>
                <p className='text-[#111021] text-lg opacity-80 mt-5'>Increase processing volumes and profitability through shared payment flows, optimized routing, and performance-driven collaboration..</p>
              </div>
              <div className='flex flex-col bg-[rgba(255,255,255,0.8)] rounded-2xl p-6'>
                <div className='w-8 h-8 flex'>
                  <div className='w-4 h-8 flex flex-col'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                  <div className='w-4 h-8 flex flex-col justify-end'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                </div>
                <p className='text-[#111021] text-2xl mt-[60px]'>Strengthen Your Offering</p>
                <p className='text-[#111021] text-lg opacity-80 mt-5'>Enhance your product portfolio with advanced acquiring, APMs, open banking, and global payout solutions — all powered by iQono’s reliable infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[url(/public/refer-bg.png)] bg-cover bg-no-repeat'>
        <div className='container mx-auto px-4 pb-20'>
          <div className='flex flex-col gap-10'>
            <p className='uppercase text-5xl text-white mt-20' data-aos="fade-up" data-aos-delay="100">Why Partner With iQono?</p>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5' data-aos="fade-up" data-aos-delay="200">
              <div className='h-[250px] rounded-2xl bg-[#423ADC0D] border border-[#423ADC0D] p-6 flex flex-col justify-between'>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
                  <img src='/refer1.png' className='w-6' />
                </div>
                <p className='text-white text-2xl'>Global Expansion</p>
              </div>
              <div className='h-[250px] rounded-2xl bg-[#423ADC0D] border border-[#423ADC0D] p-6 flex flex-col justify-between'>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
                  <img src='/refer2.png' className='w-6' />
                </div>
                <p className='text-white text-2xl'>Shared Growth</p>
              </div>
              <div className='h-[250px] rounded-2xl bg-[#423ADC0D] border border-[#423ADC0D] p-6 flex flex-col justify-between'>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
                  <img src='/refer3.png' className='w-6' />
                </div>
                <p className='text-white text-2xl'>Optimized Approval Rates</p>
              </div>
              <div className='h-[250px] rounded-2xl bg-[#423ADC0D] border border-[#423ADC0D] p-6 flex flex-col justify-between'>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
                  <img src='/refer4.png' className='w-6' />
                </div>
                <p className='text-white text-2xl'>True Multi-Currency Processing</p>
              </div>
              <div className='h-[250px] rounded-2xl bg-[#423ADC0D] border border-[#423ADC0D] p-6 flex flex-col justify-between'>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
                  <img src='/refer5.png' className='w-6' />
                </div>
                <p className='text-white text-2xl'>Strong Industry Network</p>
              </div>
              <div className='h-[250px] rounded-2xl bg-[#423ADC0D] border border-[#423ADC0D] p-6 flex flex-col justify-between'>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
                  <img src='/refer6.png' className='w-6' />
                </div>
                <p className='text-white text-2xl'>Data-Driven Insights</p>
              </div>
            </div>
          </div>
          <div className='mt-40' data-aos="fade-up" data-aos-delay="100">
            <FAQ1 />
          </div>
          <div className="bg-[#423ADC0D] border border-[#423ADC40] bg-cover bg-no-repeat rounded-3xl flex flex-col md:flex-row items-end" data-aos="fade-up" data-aos-delay="200">
            <div className='md:w-1/2 flex flex-col items-start gap-10 px-[30px] py-[50px]'>
              <p className='text-5xl leading-[1.1] text-white'>
                <span className='text-[#C6DC3A]'> Partner Up. </span>Grow Together.
              </p>
              <p className='text-lg leading-[1.1] text-white opacity-60'>Integrate quickly and scale across markets — no friction, just flow.</p>
              <Button variant="primary">get started</Button>
            </div>
            <div className='w-full md:w-1/2 mt-10 md:mt-0'>
              <img src='/Photoroom8.png' className='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerWithUs;
