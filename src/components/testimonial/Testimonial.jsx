import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/v2/C5603AQF8R4Xnbuxh6w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1638020488164?e=1741219200&v=beta&t=jnYbXCerPI22RAUP-fbfK_hJ8YAGpeVgNdcCjIFhim8" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Asief Mahir</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Software Developer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/440229083_7653538931407684_4683969547840808450_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE4FwXtnJzwkR-UuM7uSubD5ktVtSNamPXmS1W1I1qY9fkdpocHUb08V1a4R-Ogvq1oS2vXDAoho9oePHR0YHg8&_nc_ohc=GaiNK-rIyX0Q7kNvgE2rDeR&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=Aot77oTKG494OOVJvYAOevG&oh=00_AYDZ1yN4nHdJaFH5BXKh_Oivqw9q76h1m6QmVEVIPxKaHA&oe=677EB18E" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Saidur Rahman Setu</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Founder of JS Bangladesh</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/v2/D5603AQHxXChZHUo8XA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714897554186?e=1741219200&v=beta&t=uwlRcE4emPyoPSSWYnaBbNtFpa5T3_hvIdBqcXESAd0" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sumit Saha</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Founder - Learn with Sumit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial