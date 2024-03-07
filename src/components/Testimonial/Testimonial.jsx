import { useState } from "react";
import TestimonialBox from "../TestimonialBox/TestimonialBox";
import profileImgOne from "../../Assets/profile-1.jpg"
import profileImgTwo from "../../Assets/profile-2.jpg"
import profileImgThree from "../../Assets/profile-3.jpg"
import Quate from "../../Assets/bg-quotes.png"

function Testimonials() {
    const [testData, setTestData] = useState([
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
            image: profileImgOne,
            position: "Founder & CEO, Huddle",
            name: "Ahmed",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
            image: profileImgTwo,
            position: "Founder & CEO, Huddle",
            name: "Mohamed",
        },
        {
            id: 3,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
            image: profileImgThree,
            position: "Founder & CEO, Huddle",
            name: "Eman",
        },
    ]);
    return (
        <section className="pb-[350px] ">
            <div className="container relative">
                <div className="absolute left-[20px] top-[-35px]">
                    <img src={Quate} alt="quote" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
                    {testData.map((item) => (
                        <TestimonialBox
                            key={item.id}
                            desc={item.desc}
                            image={item.image}
                            position={item.position}
                            name={item.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;