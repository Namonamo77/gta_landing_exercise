import React from 'react'

const CommingSoon = () => {
  return (
    <section className="entrance-message">
        <div className='h-full col-center gap-10'>
            <img src="/images/logo.webp" alt="logo" className='entrance-logo' />
            <div className="text-wrapper">
                <h3 className="gradient-title">
                    Coming <br /> May 26th <br /> 2026
                </h3>
            </div>
            <div className="flex-center gap-10">
                <img src="/images/ps-logo.svg" alt="ps logo" className='md:w-22 w-10' />
                <img src="/images/x-logo.svg" alt="xbox logo" className='md:w-42 w-30' />
            </div>
        </div>
    </section>
  )
}

export default CommingSoon