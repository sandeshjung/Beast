import { motion } from "framer-motion";
import React, {useState} from "react";
import { styles } from "../styles";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const toastStyle = {
    background: '#ffffff', 
    color: '#373737', 
  };
  

  function copyToClipboard() {
    const textToCopy = '0x72d990C243BF3E2721CF6A760a0D8d2C1e7b8aBc'; 

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        // console.log('Text copied to clipboard');
        setCopied(true);

        toast.success('Copied to Clipboard!', {
          autoClose: 3000,
          style: toastStyle, 
        });
        
      })
      // .catch((error) => {
      //   // console.error('Error copying text to clipboard:', error);
      // });
  }
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#cba135]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-black-100`}>
            Welcome to <span className='text-[#000000]'>Beast Inu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            Beast, a fluffy Hungarian Sheepdog<br className='sm:block hidden' />
            owned by Mark Zuckerberg
          </p>
        </div>
      </div>

      <div
        className={`absolute inset-0 sm:top-[375px] top-[400px] max-w-4xl mx-auto justify-center flex items-start`}
      >
        <div className='flex justify-center items-center'>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            Beast Inu Contract
            
          </p>
          {/* <div className="character-box" onClick={copyToClipboard}>
          <p>0x72d990C243BF3E2721CF6A760a0D8d2C1e7b8aBc</p>
        </div> */}
        </div>
        
      </div>

      <div
        className={`absolute inset-0 sm:top-[450px] top-[450px] max-w-4xl mx-auto justify-center flex items-start`}  onClick={copyToClipboard}
      >
        <div className='flex justify-center items-center'>
          <div className={`${styles.contractText} character-box`}>
          <p>0x72d990C243BF3E2721CF6A760a0D8d2C1e7b8aBc</p>
        </div>
        {copied && (
          <ToastContainer />
        )}
        </div>
      </div>
      
      
      <div
        className={`absolute inset-0 sm:top-[550px] top-[520px] max-w-4xl mx-auto justify-center flex flex-row items-start gap-5`}
      >
        <div className='flex justify-center items-center'>
        <button className={`${styles.heroSubText} bg-jet hover:bg-onyx text-white-100 rounded-full xl:py-10 xl:px-40 py-6 px-20`} onClick={() =>
    window.open(
      'https://www.dextools.io/app/en/ether/pair-explorer/0x1d83435f1ddbb1afa4ebea9672e1d4dff69cf8b1',
      '_blank'
    )
  }>
          Buy Beast Inu
        </button>   
          </div>
        
      </div>
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-satin flex justify-center items-start p-2 hidden sm:block'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-satin mb-1'
            />
          </div>
        </a>
      </div>
      
    </section>
  );
};

export default Hero;