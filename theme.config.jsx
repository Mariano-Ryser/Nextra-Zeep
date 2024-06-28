import Image from 'next/image'

export default {
  footer: <p>© NexZeep.</p>,
    logo: <img src="/alienverde.gif" alt="" /> ,
    project: {
      link: 'https://github.com/Mariano-Ryser/nextra-zeep',
      icon: (
        <svg width="34" height="34" viewBox="0 0 256 256">
          <path
            fill="currentColor"
            d="m239.9 189.4l-94.8 65.4a15.7 15.7 0 0 1-1.2 0l-84.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 92 0 0 1 22.9-1.1L88.5 104h79l20.6-25.1A12 12 0 0 1 211 50l27.3 201.3a16.1 69.1 0 0 1-6.4 17.3Z"
          ></path> 
        </svg>
      )
    }
    // ... other theme options
  }