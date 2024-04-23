import { Container } from "../ui/container/Container";
import photographyImage from '../../assets/photography.png'
import searchIcon from '../../assets/search.png'
import editingImage from '../../assets/editing.png'
import compositionImage from '../../assets/composition.png'
import BlogCard from "../ui/card/BlogCard";

export default function PhotographySection() {
    return (
        <Container className="pb-5 w-[90%] lg:w-[80%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-3">
                <div className="h-full">
                    <img src={photographyImage} alt="photographyImage" className="h-full" />
                </div>

                <div>
                    <h1 className="text-2xl font-semibold mb-1">New to photography? Let us help!</h1>
                    <p className="text-[0.8rem] text-[#1A1A1B] mb-1">
                        We offer a variety of written & recorded guides for all aspects of photography, ranging from equipment handling to artistic theory.
                    </p>

                    <div className="flex items-center hover:bg-slate-100 py-1 px-4 w-full lg:w-1/3 mb-2">
                        <img src={searchIcon} alt="search" className="w-[15px] h-[15px] me-2" />
                        <input type="text" className="h-[30px] w-full lg:w-[200px] bg-transparent focus:shadow-none focus:border-0 text-[12px] focus:outline-none" placeholder="Search guides" />
                    </div>

                    <div className="blog grid grid-cols-1 gap-3 h-full">
                        <BlogCard
                            title="Image Editing"
                            description="Learn the basics of Adobe Lightroom and elevate your photos to a new standard."
                            imageSrc={editingImage}
                        />

                        <BlogCard
                            title="Image Editing"
                            description="Learn the basics of Adobe Lightroom and elevate your photos to a new standard."
                            imageSrc={compositionImage}
                        />
                    </div>
                </div>
            </div>
        </Container >
    )
}
