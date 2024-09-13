import ProjectComponent from "./project-component";

const MyProjects = () => {
    return (
        <div className=" flex flex-col justify-start items-start mt-20 pb-[174px] box-border margin">
            <div className=" flex flex-col items-center w-[100%] h-[100%] box-border">
                <p className="  border-[#1e1e1eff]  text-[65px]  font-poppins  font-[600]  tracking-[1.95px]">
                    My Projects
                </p>
                <p className=" flex flex-col justify-center  border-[#000000ff]  text-[21px]  mt-5  font-poppins  font-[400] text-center  tracking-[0.63px]">
                    Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
                    mauris est risus lectus. Phasellus consequat urna tellus
                </p>
                <div className=" grid grid-cols-3 gap-4 mt-10 w-[100%] box-border">
                    {
                        [1, 2, 3, 4].map((item, index) => (<ProjectComponent key={index} />))
                    }

                </div>
            </div>
        </div>
    )
}
export default MyProjects;