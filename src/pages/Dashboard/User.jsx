import { Link } from "react-router-dom";
import dream from "../../assets/dream.svg";
import edu from "../../assets/edu.svg";
import occasion from "../../assets/occasion.svg";
import goal from "../../assets/goal.svg";
import milestone from "../../assets/milestone.svg";
import vacation from "../../assets/vacation.svg";
import school from "../../assets/school.svg";
import purchase from "../../assets/purchase.svg";
import { AiOutlineTeam } from "react-icons/ai";
import CreateSingleThrift from "../../components/CreateSingleThrift";
import CreateGroupThrift from "../../components/CreateGroupThrift";
import UseFetchRequests from "../../Hooks/UseFetchRequests";
// import RenderRequests from "../../components/RenderRequests";

const UserHome = () => {
    // const allRequests = UseFetchRequests()
    // console.log(allRequests)
  return (
    <div className="bg-[#070624] ">
      <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">
        <h1 className="text-[30px] md:text-[34px] font-bold capitalize  text-white mx-44 mt-4 ">
          Find a contribution module{" "}
        </h1>
        <h2 className="text-[20px] md:text-[20px] font-bold capitalize text-white  mx-44">
          Browse and find contribution modules to join
        </h2>

        <div className="mx-48 mt-4 mb-3 flex items-center">
            <CreateGroupThrift />
          <CreateSingleThrift />
        </div>

        <div className="bg-[#070624] grid-cols-4 gap-4 md:flex md:flex-row">
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
            <img
              src={dream}
              alt="dream"
              className="object-fit-object w-full rounded"
            />
            <div className="w-full h-1/2 shadow-md mx-2">
              <h3 className="font-bold text-white text-base">DreamSavers</h3>
              <p className="font-normal text-justify text-white text-xs">
                Save Together for Your Dream
                <br></br>Event
                <br></br> <AiOutlineTeam />
                500k
              </p>
            </div>
          </div>

          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
            <img
              src={edu}
              alt="edu"
              className="object-fit-object w-full object-center rounded"
            />
            <div className="w-full h-1/2  shadow-md mx-2">
              <h3 className="font-bold text-white text-base">EduFunders</h3>
              <p className="font-normal text-justify text-white text-xs">
                Group Savings for Education
                <br></br> related purposes
                <br></br>
                <AiOutlineTeam />
                1.2m
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
            <img
              src={occasion}
              alt="occasion"
              className="object-fit-object h-2/3 w-full object-center rounded"
            />
            <div className="w-full h-1/2 shadow-md mx-2 object-contain">
              <h3 className="font-bold text-white text-base">OccasionSquad</h3>
              <p className="font-normal text-justify text-white text-xs">
                Group saving for Funding Your
                <br></br>Special Occasion
                <br></br>
                <AiOutlineTeam />
                201k
              </p>
            </div>
          </div>
<UseFetchRequests />
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
            <img
              src={goal}
              alt="goal"
              className="object-fit-object h-2/3 w-full object-center rounded"
            />
            <div className="w-full h-1/2 shadow-md mx-2">
              <h3 className="font-bold text-white text-base">GoalAchievers</h3>
              <p className="font-normal text-justify text-white text-xs">
                Let’s Achieve Financial Goals as
                <br></br>a Team
                <br></br>
                <AiOutlineTeam />
                500k
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#070624] grid-cols-4 gap-4 md:flex md:flex-row">
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
            <img
              src={milestone}
              alt="milestone"
              className="object-fit-object h-2/3 w-full object-center rounded"
            />
            <div className="w-full h-1/2 shadow-md mx-2">
              <h3 className="font-bold text-white text-base">
                MilestoneCollectors
              </h3>
              <p className="font-normal text-justify text-white text-xs">
                Collective Savings for Your
                <br></br>Milestone
                <br></br>
                <AiOutlineTeam />
                120k
              </p>
            </div>
          </div>

          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
            <img
              src={vacation}
              alt="vacation"
              className="object-fit-object h-2/3 w-full object-center rounded"
            />
            <div className="w-full h-1/2 shadow-md mx-2">
              <h3 className="font-bold text-white text-base">VacationSavers</h3>
              <p className="font-normal text-justify text-white text-xs">
                Collective Savings for Memorable
                <br></br> Vacations
                <br></br>
                <AiOutlineTeam />
                31m
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
            <img
              src={school}
              alt="school"
              className="object-fit-object h-2/3 w-full object-center rounded"
            />
            <div className="w-full h-1/2 shadow-md mx-2">
              <h3 className="font-bold text-white text-base">SchoolSponsors</h3>
              <p className="font-normal text-justify text-white text-xs">
                Group Contributions for School
                <br></br>Funds
                <br></br>
                <AiOutlineTeam />
                921k
              </p>
            </div>
          </div>
          <div className="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
            <img
              src={purchase}
              alt="purchase"
              className="object-fit-object h-2/3 w-full object-center rounded"
            />
            <div className="w-full h-1/2 shadow-md mx-2">
              <h3 className="font-bold text-white text-base">
                PurchasePartners
              </h3>
              <p className="font-normal text-justify text-white text-xs">
                Save Together for that Special
                <br></br>Purchase
                <br></br>
                <AiOutlineTeam />
                30k
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
