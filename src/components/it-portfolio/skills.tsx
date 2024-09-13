import SkillComponent from "./skill-component";

const Skills = () => {
  return (
    <div className=" flex flex-col justify-start items-start ">
      <div className=" flex flex-col justify-between items-center w-[100%] h-[100%] box-border">
        <div className=" flex flex-col items-center w-[undefinedundefined] px-8 pb-[38px] box-border">
          <p className=" flex flex-col justify-center  border-[#000000ff]  text-[65px]   font-poppins  font-[600] text-center  tracking-[1.95px]">
            Skills
          </p>
          <p className=" flex flex-col justify-center  border-[#000000ff]  text-[21px]   font-poppins  font-[400] text-center  tracking-[0.63px]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>
        <div className=" grid grid-cols-4 w-[100%] box-border">
          {
            [1, 2, 3, 4].map((item, index) =>  (
              <SkillComponent key={index} />
            ))
          }


        </div>
      </div>
    </div>
  )
}
export default Skills;