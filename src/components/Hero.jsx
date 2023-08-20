import { styles } from '../styles';
import { cityskyline } from "../assets";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto bg-black pt-5' style={{ backgroundImage: `url(${cityskyline})` }}>
      <div className={`${styles.paddingX} relative flex flex-col items-center text-black`}>
        <img src='City Skyline.png' className='w-full max-w-full transform scale-95' alt='City Skyline' />
        <div className='flex items-center'>
          <div className='absolute bottom-10 left-1/4 right-0 flex justify-between items-center w-1/2'>
            <h1 className='text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-black'>
              SINGAPORE
            </h1>
            <h1 className='text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-white'>
              JAKARTA
            </h1>
          </div>
        </div>
        {/* <div className='absolute inset-0 flex flex-col items-center justify-center text-black text-center'>
          <h1 className='text-xl font-bold text-black sm:text-2xl lg:text-3xl xl:text-4xl'>
            Your Text Goes Here
          </h1>
          <p className='text-lg text-black sm:text-xl lg:text-xl xl:text-3xl'>
            Additional description or subtitle
          </p>
        </div> */}
        <div className='absolute inset-0 flex top-10 left-3 justify-center'>
          {/* <div className='hexagon'></div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
