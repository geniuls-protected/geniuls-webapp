import Image from 'next/image'
import brake from '../../images/catalog.png'

export default function Companies() {
    return (
        <div class="OurMInd">
        <h2 style={{paddingBottom:'40px'}}>Dream companies that our students cracked</h2>
        <div class="HiringPartners">
            <div class="CompanyLogoUp">
                <div class="CompanyLogoUP_part1">
                    <div class="CompanyLogoContainer"><Image src={brake} width={96} height={200}/></div>
                    <div class="CompanyLogoContainer"><Image src={brake} width={96} height={200}/></div>
                    <div class="CompanyLogoContainer"><Image src={brake} width={96} height={200}/></div>
                    <div class="CompanyLogoContainer"><Image src={brake} width={96} height={200}/></div>
                    <div class="CompanyLogoContainer"><Image src={brake} width={96} height={200}/></div>
                    <div class="CompanyLogoContainer"><Image src={brake} width={96} height={200}/></div>
                    <div class="CompanyLogoContainer"><Image src={brake} width={96} height={200}/></div>
                    <div class="CompanyLogoContainer"><Image src={brake} width={96} height={200}/></div>
                    <div class="CompanyLogoContainer"><Image src={brake} width={96} height={200}/></div>
                    <div class="CompanyLogoContainer"><Image src={brake} width={96} height={200}/></div>
                    <div class="CompanyLogoContainer"><Image src={brake} width={96} height={200}/></div>
                    <div class="CompanyLogoContainer"><Image src={brake} width={96} height={200}/></div>
                </div>
            </div>
        </div>
    </div>

    )
}