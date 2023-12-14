import React from 'react'
import "./CompanySection.css"
import { StaticImage } from "gatsby-plugin-image"


function CompanySection() {
    return (
    <div>
        <section class="splash">
        <StaticImage
                    src="../../images/hawkesmill-logo.png"
                    loading="eager"
                    width={750}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                />
        <p>Super Powers. Coming Soon.</p>
        </section>
        {/* <p class="footer">We are currently putting our site together but if you are  here and want to know more,  please contact us at  </p> */}
        
    </div>
    
    )
    }

export default CompanySection