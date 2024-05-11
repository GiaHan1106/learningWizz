import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import dataNationality from "../Data/Nationality";
const Home = () => {
    return (
        <div>
            <div className="rounded-sm w-[98%] m-auto">
                <div className="flex bg-[#E77813] h-[65vh] ">
                    <div className="text-3xl font-semibold text-white px-32">
                        <h1 className="mt-28">
                            Confidently Speaking and <span className="block">Listening a new Language</span>
                        </h1>
                        <input
                            className="placeholder:text-black placeholder:text-xs placeholder:font-normal text-black text-sm w-full rounded-lg mt-10 mb-7 px-4 py-2 outline-none"
                            type="text"
                            placeholder="Language Search"
                        />
                        <button className="block m-auto  bg-white text-black  text-sm px-6 py-2 rounded-lg transition-all duration-500  hover:bg-[#F6C100]">Get Started</button>
                    </div>
                    <img className="m-auto w-[500px] h-[350px]" src="/img/banner.png" alt="Logo" />
                </div>
                <div className=" mt-2">
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="languages" title="Languages">
                            <div className="flex gap-10 px-24 items-center text-center py-4">
                                <div className="w-[25%] flex items-center">
                                    <img className="w-1/3" src="/img/icon1.png" alt="" />
                                    <div>
                                        <h5 className="text-base font-semibold">Flexible Schedule</h5>
                                        <p>Book and attend class on your own time.</p>
                                    </div>
                                </div>
                                <div className="w-[25%] flex items-center">
                                    <img className="w-1/3" src="/img/icon2.png" alt="" />
                                    <div>
                                        <h5 className="text-base font-semibold">Learn Anywhere</h5>
                                        <p>Starti learning anywhere in the world.</p>
                                    </div>
                                </div>
                                <div className="w-[25%] flex items-center">
                                    <img className="w-1/3" src="/img/icon3.png" alt="" />
                                    <div>
                                        <h5 className="text-base font-semibold">Tailor Made Course</h5>
                                        <p>Customized lesson to your needs.</p>
                                    </div>
                                </div>
                                <div className="w-[25%] flex items-center">
                                    <img className="w-1/3" src="/img/icon4.png" alt="" />
                                    <div>
                                        <h5 className="text-base font-semibold">Pay As You Go</h5>
                                        <p>Only buy lessons as you need them.</p>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="courses" title="Courses">
                            <h2>course</h2>
                        </Tab>
                        <Tab eventKey="connect" title="Connect with Tutors">
                            <h2>connect</h2>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <div className="mt-20">
                <div>
                    <div className="text-center">
                        <h1 className="text-6xl font-semibold">Learning can be Fun</h1>
                        <h3 className="text-base mt-3">We'll match a perfect tutor for you</h3>
                    </div>
                    <div className="flex mt-10 text-sm justify-between bg-[#E77813] text-white font-bold py-3 px-36">
                        <h3>TELL US YOUR NEEDS</h3>
                        <h3>MATCH WITH TUTORS</h3>
                        <h3>START LEARNING</h3>
                    </div>
                </div>
                <div className="flex gap-10 flex-wrap mt-10 px-28">
                    {dataNationality.map((item) => (
                        <div className="flex w-[30%] items-center justify-between border-[1px] border-black rounded-base px-4 py-4 ">
                            <div className="flex items-center">
                                <img className="w-[20%]" src={item.image} alt="" />
                                <h5 className="ml-4">{item.nationality}</h5>
                            </div>
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </div>
                    ))}
                </div>
                <div className="mt-16">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-[#E77813]">Excellent learning experience with quality lessons</h1>
                        <p className="text-lg">Our experienced tutor will help you reach your learning goal today!</p>
                        <button className="border-[#E77813] border-2 bg-white text-[#E77813] rounded-sm py-2 px-5 text-base mt-4 font-semibold">WHY CHOOSE US</button>
                    </div>
                    <div className="flex w-[90%] m-auto gap-20">
                        <div className="w-[33%] border-[#E77813] border-2 text-[#E77813] p-4">
                            <h4 className="text-xl font-bold">Tell us your learning goal</h4>
                            <p className="text-black text-sm mt-2">
                                Lorem ipsum dolor sit amet. Et earum inventore eum dicta officiis qui corrupti blanditiis aut dignissimos consequatur vel fuga suscipit et sapiente iure et eius
                                laudantium.
                            </p>
                        </div>
                        <div className="w-[33%] border-[#E77813] border-2 text-[#E77813] p-4">
                            <h4 className="text-xl font-bold">Match with the perfect Tutors</h4>
                            <p className="text-black text-sm mt-2">
                                Lorem ipsum dolor sit amet. Et earum inventore eum dicta officiis qui corrupti blanditiis aut dignissimos consequatur vel fuga suscipit et sapiente iure et eius
                                laudantium.
                            </p>
                        </div>
                        <div className="w-[33%] border-[#E77813] border-2 text-[#E77813] p-4">
                            <h4 className="text-xl font-bold">Start Learning</h4>
                            <p className="text-black text-sm mt-2">
                                Lorem ipsum dolor sit amet. Et earum inventore eum dicta officiis qui corrupti blanditiis aut dignissimos consequatur vel fuga suscipit et sapiente iure et eius
                                laudantium.
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-20">
                        <h1 className="text-3xl font-bold text-[#E77813]">Find your private tutor effortless with 3 simple steps</h1>
                        <button className="bg-[#E77813]  text-white rounded-sm py-2 px-14 text-lg mt-8 font-semibold">FREE TRIAL LESSON</button>
                    </div>
                    <div className="bg-[#E77813]  text-white mt-10 py-20">
                        <h2 className="text-center text-6xl font-bold">
                            Unlock Your Potential <span className="block">and</span> Achieve Your Goal!
                        </h2>
                    </div>
                    <p className="mt-4 text-center">Try us today - NO CONTRACT, risk free.</p>
                </div>
            </div>
            <div className="flex mt-20">
                <div className="w-[40%]">
                    <img className="w" src="https://i.pinimg.com/736x/56/f0/ee/56f0ee3dbe4a42fd13e9dd04ef1badfe.jpg" alt="" />
                </div>
                <div className="w-[60%] bg-[#F6C100] my-20 h-[80vh] px-20 py-16">
                    <h2 className="text-7xl font-bold">Teach from Anywhere</h2>
                    <p className="mt-4 text-xl text-center">
                        Earn money from home. Share your knowledge with students around <span className="block">the world. Sign Up to start teaching today!</span>
                    </p>
                    <ul className="mt-16 list-disc	text-lg font-bold">
                        <li>Match new students</li>
                        <li className="my-4">Grow your business</li>
                        <li>Get paid directly</li>
                    </ul>
                    <div className="m-auto mt-6 w-[50%] text-center">
                        <button className=" border-black border-[1px] bg-white text-black rounded-sm py-2 px-6 text-lg mt-8 font-bold mb-4">Register to start Teaching!</button>
                        <p>Learn More About Us</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10">
                <button className="border-[#E77813] border-2 bg-white text-[#E77813] rounded-sm py-1 px-4 text-base mt-4 font-semibold">Join Us</button>
                <h2 className="text-[#E77813] text-5xl font-bold mt-6">
                    Join <span className="text-black">Learning Wizz</span> as a Tutor
                </h2>
                <div className="mt-14">
                    <div>
                        <img className="w-[6%] m-auto" src="/img/icon3.png" alt="" />
                        <h5 className="text-[#E77813] text-3xl font-bold my-2">Register and complete your profile</h5>
                        <p>
                            Lorem ipsum dolor sit amet. Et earum inventore eum dicta officiis qui corrupti blanditiis aut dignissimos
                            <span className="block">consequatur vel fuga suscipit et apiente iure et eius laudantium.</span>
                        </p>
                    </div>
                    <div className="my-14">
                        <img className="w-[6%] m-auto" src="/img/icon1.png" alt="" />
                        <h5 className="text-[#E77813] text-3xl font-bold my-2">Register and complete your profile</h5>
                        <p>
                            Lorem ipsum dolor sit amet. Et earum inventore eum dicta officiis qui corrupti blanditiis aut dignissimos
                            <span className="block">consequatur vel fuga suscipit et apiente iure et eius laudantium.</span>
                        </p>
                    </div>
                    <div>
                        <img className="w-[6%] m-auto" src="/img/icon5.png" alt="" />
                        <h5 className="text-[#E77813] text-3xl font-bold my-2">Register and complete your profile</h5>
                        <p>
                            Lorem ipsum dolor sit amet. Et earum inventore eum dicta officiis qui corrupti blanditiis aut dignissimos
                            <span className="block">consequatur vel fuga suscipit et apiente iure et eius laudantium.</span>
                        </p>
                    </div>
                    <button className="bg-[#E77813]  text-white rounded-sm py-2 px-14 text-lg mt-8 font-semibold">Join US Today!</button>
                </div>
            </div>
            <div className="bg-[#E77813]  text-white mt-16 py-14">
                <h2 className="text-6xl font-bold px-20">
                    Build Your Business! <span className="block text-right mt-4">Share Your Knowledge.</span>
                </h2>
            </div>
            <div className="bg-[#1F1A17] text-white px-20 pt-16">
                <div className="flex justify-between border-b-[0.5px] border-white pb-6">
                    <ul>
                        <li>English Tutor</li>
                        <li>French Tutor</li>
                        <li>Arabic Tutor</li>
                        <li>Spanish Tutor</li>
                        <li>Mandarin Tutor</li>
                        <li>Vietnamese Tutor</li>
                    </ul>
                    <ul>
                        <li>Become a Tutor</li>
                        <li>FAQ for Tutors</li>
                        <li>FAQ for Students</li>
                    </ul>
                    <ul>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <h5 className="py-8">2024 Learning Wizz All Rights Reserved.</h5>
            </div>
        </div>
    );
};

export default Home;
