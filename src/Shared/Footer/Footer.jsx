import { BiLogoFacebook,BiLogoInstagram,BiLogoTwitter,BiLogoLinkedin } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className='lg:px-20 md:px-12 px-12 mt-8 py-6 bg-[#262626]'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-0'>

                 <div className='bg-[#1B1B1B] text-white py-8 px-8'>
                    <h2>MamonDots</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At Nulla id tincidunt ut sed semper vel Lorem rnare. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                    <div className='flex items-center'>
                         <p><BiLogoFacebook></BiLogoFacebook></p>
                         <p><BiLogoInstagram></BiLogoInstagram></p>
                         <p><BiLogoTwitter></BiLogoTwitter></p>
                         <p><BiLogoLinkedin></BiLogoLinkedin></p>
                         
                    </div>
                 </div>

                 <div className='bg-[#2B2B2B] p-10'></div>

                 <div className='bg-[#1A1A1A] p-10'></div>

            </div>
        </div>
    );
};

export default Footer;