import Image from 'next/image'

const About = () => {
  return (
    <div className="relative min-w-full h-auto">
    <Image
      src="/header/07.jpg"
      width={1920}
      height={500}
      alt="About"
      className="h-[80vh]"
    />
    <div className="absolute inset-0 bg-black opacity-30"></div>
  </div>
  )
}

export default About