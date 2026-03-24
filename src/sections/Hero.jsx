import React from 'react'

const Hero = () => {
  return (
   <section className='relative min-h-screen flex items-center overflow-hidden'>
    <div className='absolute inset-0'>
        <img src="/hero-bg.jpg" alt="hero image " className='h-full w-full opacity-40 object-cover' />
    </div>
    <div className='absolute inset-0 bg-gradient-to-b from-background/20  via-background/80 to-background'/>
    
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {
            [...Array(25)].map((_, i) => (
                <div className='absolute w-1.5 h-1.5 rounded-full opacity-40'
                style={{
                    backgroundColor : "#20B2A6",
                    left :`${Math.random() *100}%`,
                    top: `${Math.random() *100}%`,
                    animation : `slow-drift ${15 + Math.random() *20 }s ease-in-out infinite`,
                    animationDelay: `${Math.random() *5}s`
                }}/>
            ))
        }

    </div>
    {/* content  */}
    <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* left column-text content  */}
            <div className='space-y-8'>
                <div className='animate-fade-in'>
                <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-primary'>
                  <span className='w-2 h-2 bg-primary rounded-b-full animate-pulse'/>
                  Software engineer working with DevOps.
                  </span>
                </div>
                {/* Headline */}
                <div className='space-y-4'>
                    <h1>
                        Building <span className='text-primary glow-text'>applications</span>
                        <br />
                         and scalable
                        <br />
                        <span className='font-serif italic text-white font-normal'>DevOps solutions</span>
                    </h1>
                    <p className='text-lg text-muted-foreground max-w-lg animated-fade-in'>
                      Hi, I'm Kiwoly, a software engineer working with DevOps.
                       I build applications and focus on deploying, automating, and managing them efficiently
                    </p>
                </div>
            </div>
            {/* right column -profile picture */}
        </div>
    </div>
    
   </section>
  )
}

export default Hero