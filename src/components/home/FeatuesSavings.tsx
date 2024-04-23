import { Container } from "../ui/container/Container";
import featuresSavings from '../../assets/features-savings.png'
import tomImage from '../../assets/tom.png'
import emileImage from '../../assets/emile.png'
import georgeImage from '../../assets/gourge.png'
import SellerCard from "../ui/card/SellerCard";

export default function FeatuesSavings() {
    return (
        <Container className="w-[90%] lg:w-[80%] py-5 lg:mb-10">
            <h2 className="text-3xl font-bold mb-2">Features Savings</h2>

            <div className="lg:flex lg:gap-8">
                <div className="grid lg:w-2/5 mb-5 lg:mb-0">
                    <img src={featuresSavings} alt="photographyImage" className="h-full" />
                </div>

                <div className="lg:w-3/5">
                    <h1 className="text-2xl font-semibold mb-2">Turn used gear into new possibilities</h1>
                    <p className="text-[0.8rem] text-[#1A1A1B] mb-5">
                        We offer a reliable platform for buying and selling used photography gear. Whether you're a beginner looking for affordable equipment or a professional photographer in search of high-end gear at a discounted price, we've got you covered.
                    </p>

                    <h3 className="text-lg font-semibold pt-5 mb-2">Top sellers this month</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-5">
                        <SellerCard
                            sellerName="Tom Smith"
                            designation="Accessories"
                            sellerImage={tomImage}
                            description="
                                Camera Bags,
                                Grips & Rigs,
                                Professional Straps
                            "
                        />
                        <SellerCard
                            sellerName="Emily Wong"
                            designation="Optics Enthusiast"
                            sellerImage={emileImage}
                            description="
                                Unique Lenses,
                                ND & UV Filters,
                                Special Effect Filters,
                                Lens Accessories
                            "
                        />
                        <SellerCard
                            sellerName="George Duke"
                            designation="Vintage Collector"
                            sellerImage={georgeImage}
                            description="
                                60s & 70s Film Cameras,
                                Old Prints,
                                Disposables
                            "
                        />
                    </div>

                    <div className="flex items-center justify-center lg:justify-start">
                        <button className="w-[120px] h-[35px] bg-red-500 text-white text-sm me-3 focus:outline-none hover:bg-[#AE3131]">BUY</button>

                        <button className="w-[120px] h-[35px] border-2 border-[#737373] text-[#737373] text-sm focus:outline-none hover:bg-[#AE3131] hover:border-0 hover:text-white">SELL</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
