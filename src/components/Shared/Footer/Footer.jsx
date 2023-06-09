import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <div style={{ backgroundImage: "radial-gradient( circle 674px at 18.3% 77%,  rgba(139,186,244,1) 3.4%, rgba(15,51,92,1) 56.6% )" }} className='p-16 text-white mt-8'>
            <div className='lg:flex justify-between'>
                <div className=''>
                    <div className='flex items-center gap-1 mb-3'>
                        <img src="https://i.ibb.co/d6WTVFn/letter-k-1.png" alt="" className='h-16' />
                        <h3 className='text-2xl font-bold text-white '>itchen Wizards</h3>
                    </div>
                    <p>We provide new recipes with a twist on daily basis.
                        <br />
                        We also post blog posts about fun ideas to do in the kitchen.</p>
                </div>
                <div>
                    <h3 className='text-xl font-medium text-white mb-3'>Need help?</h3>
                    <p>Contact us via phone or email</p>
                    <div className='flex flex-col'>
                        <Link>
                            T: <span className='hover:text-blue-400 hover:underline'>1-555-555-5555</span>
                        </Link>
                        <Link>
                            E: <span className='hover:text-blue-400 hover:underline'>info@kitchenwizards.com</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-medium text-white mb-3'>Follow us</h3>
                    <div className='flex gap-3 cursor-pointer'>
                        <img className='h-10' src="https://i.ibb.co/R3yscFS/facebook.png" alt="" />
                        <img className='h-10' src="https://i.ibb.co/sPXpW2Q/twitter.png" alt="" />
                        <img className='h-10' src="https://i.ibb.co/r2K2Cxv/youtube.png" alt="" />
                    </div>
                    <a href="#header">
                        <BsFillArrowUpCircleFill className='text-3xl  mt-5' />
                    </a>
                </div>
            </div>
            <hr className='my-3' />
            <div className='lg:flex justify-between'>
                <p>© kitchenwizards.com 2023. All rights reserved.</p>
                <div className='flex gap-4'>
                    <Link className='hover:text-blue-400'>Contact</Link>
                    <Link to="/login" className='hover:text-blue-400'>Login</Link>
                    <Link to="/register" className='hover:text-blue-400'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;