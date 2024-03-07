import React from 'react'
import landingImage from '../../Assets/illustration-intro.png'
import waveImg from '../../Assets/bg-curvy-desktop.svg'

function Landing() {
    return <section className="bg-[#1c2230]">
        <div className='container'>
            <div className='element-center flex-col'>
                <div className='w-[750px] max-w-full pt-[180px]'>
                    <img src={landingImage} alt="landing-image" className='w-full h-fit' />
                </div>
                <div className='text-white text-center'>
                    <h1 className='text-[30px] md:text-[40px] font-semibold mb-[15px]'>
                        All your files in one secure location,
                        <br />
                        accessible anywhere.
                    </h1>
                    <p className='md:max-w-[600px]  font-normal text-md mb-[30px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                        iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
                        nulla impedit commodi.
                    </p>
                    <a
                        href="/register"
                        className="btn w-[280px] h-[60px] rounded-[30px] element-center mx-auto text-white font-medium"
                    >
                        Get Started
                    </a>
                </div>
            </div>

        </div>

        <div className="w-full h-[200px]">
            <img
                src={waveImg}
                className="w-full h-full"
            />
        </div>

    </section>
}

export default Landing